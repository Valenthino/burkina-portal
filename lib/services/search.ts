import { createClient } from '@/lib/supabase/client'

export type SearchResult = {
  id: string
  title: string
  description: string
  url: string
  type: 'service' | 'actualite' | 'document' | 'page'
  date_creation?: string
  ministere?: string
  categorie?: string
  section?: string
  sous_section?: string
}

export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query || query.length < 2) {
    return []
  }

  const supabase = createClient()
  const results: SearchResult[] = []

  try {
    // Search in services with expanded criteria
    const { data: services, error: servicesError } = await supabase
      .from('services')
      .select(`
        id,
        titre,
        description,
        slug,
        ministere,
        categorie,
        section,
        sous_section,
        date_creation,
        url_existante
      `)
      .or(
        `titre.ilike.%${query}%,` +
        `description.ilike.%${query}%,` +
        `ministere.ilike.%${query}%,` +
        `categorie.ilike.%${query}%,` +
        `section.ilike.%${query}%,` +
        `sous_section.ilike.%${query}%`
      )
      .eq('est_actif', true)
      .order('ordre', { ascending: true })
      .limit(10)

    if (servicesError) {
      console.error('Erreur de recherche dans les services:', servicesError.message)
      return []
    }

    if (services && services.length > 0) {
      results.push(...services.map(service => ({
        id: service.id,
        title: service.titre,
        description: service.description || '',
        url: service.url_existante || `/${service.slug}`,
        type: 'service' as const,
        date_creation: service.date_creation,
        ministere: service.ministere,
        categorie: service.categorie,
        section: service.section,
        sous_section: service.sous_section
      })))
    }

    return results

  } catch (error) {
    console.error('Erreur inattendue lors de la recherche:', error)
    return []
  }
} 