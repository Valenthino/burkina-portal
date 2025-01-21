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
}

export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query || query.length < 2) {
    return []
  }

  const supabase = createClient()
  const results: SearchResult[] = []

  try {
    // Simplified search query
    const { data: services, error: servicesError } = await supabase
      .from('services')
      .select(`
        id,
        titre,
        description,
        slug,
        ministere,
        categorie,
        date_creation
      `)
      .ilike('titre', `%${query}%`)
      .eq('est_actif', true)
      .limit(5)

    if (servicesError) {
      console.error('Erreur de recherche dans les services:', servicesError.message)
      return []
    }

    if (services && services.length > 0) {
      results.push(...services.map(service => ({
        id: service.id,
        title: service.titre,
        description: service.description || '',
        url: `/services/${service.slug}`,
        type: 'service' as const,
        date_creation: service.date_creation,
        ministere: service.ministere,
        categorie: service.categorie
      })))
    }

    // If no results found in titre, try searching in description
    if (results.length === 0) {
      const { data: servicesDesc, error: servicesDescError } = await supabase
        .from('services')
        .select(`
          id,
          titre,
          description,
          slug,
          ministere,
          categorie,
          date_creation
        `)
        .ilike('description', `%${query}%`)
        .eq('est_actif', true)
        .limit(5)

      if (!servicesDescError && servicesDesc) {
        results.push(...servicesDesc.map(service => ({
          id: service.id,
          title: service.titre,
          description: service.description || '',
          url: `/services/${service.slug}`,
          type: 'service' as const,
          date_creation: service.date_creation,
          ministere: service.ministere,
          categorie: service.categorie
        })))
      }
    }

    return results

  } catch (error) {
    console.error('Erreur inattendue lors de la recherche:', error)
    return []
  }
} 