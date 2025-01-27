import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import type { Service, Category } from './types'

type DatabaseService = {
  id: string
  nom: string
  description: string | null
  slug: string
  categorie: string
  sous_categorie: string
  type: string
  route_type: 'info' | 'external' | 'direct'
  external_url: string | null
  ministere: {
    id: string
    nom: string
    slug: string
  } | null
}

export async function getServicesByCategory(category: string): Promise<Category> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: services, error } = await supabase
    .from('services')
    .select(`
      id,
      nom,
      description,
      slug,
      categorie,
      sous_categorie,
      type,
      route_type,
      external_url,
      ministere:ministeres(
        id,
        nom,
        slug
      )
    `)
    .eq('categorie', category)
    .eq('est_actif', true)
    .order('nom')

  if (error) {
    console.error('Error fetching services:', error)
    throw new Error('Failed to fetch services')
  }

  // Group services by subcategory
  const subcategories = (services as unknown as DatabaseService[]).reduce((acc: { [key: string]: { name: string; slug: string; services: Service[] } }, service) => {
    const subcategory = service.sous_categorie
    if (!acc[subcategory]) {
      acc[subcategory] = {
        name: subcategory,
        slug: subcategory.toLowerCase().replace(/\s+/g, '-'),
        services: []
      }
    }
    acc[subcategory].services.push({
      ...service,
      ministere: service.ministere || undefined
    })
    return acc
  }, {})

  const categoryNames: { [key: string]: string } = {
    'citoyens': 'Services aux citoyens',
    'entreprises': 'Services aux entreprises',
    'international': 'Services internationaux',
    'securite': 'Sécurité'
  }

  return {
    name: categoryNames[category],
    slug: category,
    subcategories: Object.values(subcategories)
  }
}

export interface ServiceWithParent extends Service {
  category: string
  parent_slug: string
  ministereName?: string
  ministereSlug?: string
}

export async function getServiceBySlug(category: string, subcategory: string, slug: string): Promise<ServiceWithParent | null> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: service, error } = await supabase
    .from('services')
    .select(`
      id,
      nom,
      description,
      slug,
      categorie,
      sous_categorie,
      type,
      route_type,
      external_url,
      ministere:ministeres(
        id,
        nom,
        slug
      )
    `)
    .eq('categorie', category)
    .eq('sous_categorie', subcategory)
    .eq('slug', slug)
    .eq('est_actif', true)
    .single()

  if (error || !service) {
    console.error('Error fetching service:', error)
    return null
  }

  const dbService = service as unknown as DatabaseService

  return {
    ...dbService,
    ministere: dbService.ministere || undefined,
    category,
    parent_slug: subcategory,
    ministereName: dbService.ministere?.nom,
    ministereSlug: dbService.ministere?.slug
  }
} 