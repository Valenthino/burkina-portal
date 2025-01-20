export const CATEGORY_NAMES: { [key: string]: string } = {
  'citoyens': 'Services aux citoyens',
  'entreprises': 'Services aux entreprises',
  'international': 'Services internationaux',
  'securite': 'Sécurité',
  'ministeres': 'Services ministériels'
}

export const SUBCATEGORY_NAMES: { [key: string]: string } = {
  // Citoyens
  'administration': 'Administration',
  'sante': 'Santé',
  'justice': 'Justice',
  'education': 'Éducation',
  'social': 'Social',
  'information': 'Information et médias',
  'urbanisme': 'Urbanisme et habitat',
  'transport': 'Transport',
  'energie-public': 'Énergie',
  
  // Entreprises
  'finances': 'Finances',
  'fiscalite': 'Fiscalité',
  'agriculture': 'Agriculture',
  'commerce': 'Commerce',
  'industrie': 'Industrie',
  'medias': 'Médias et communication',
  'construction': 'Construction et BTP',
  'mines': 'Mines et carrières',
  'energie-entreprises': 'Énergie et ressources',
  
  // International
  'services': 'Services consulaires',
  'cooperation': 'Coopération',
  'commerce-international': 'Commerce international',
  'diplomatie': 'Diplomatie',
  
  // Securite
  'defense': 'Défense',
  'protection': 'Protection civile',
  'police': 'Police',
  'urgences': 'Services d\'urgence',
  
  'autres': 'Autres services'
}

export function getCategoryName(slug: string): string {
  return CATEGORY_NAMES[slug] || slug
}

export function getSubcategoryName(slug: string): string {
  return SUBCATEGORY_NAMES[slug] || slug
}

export function formatServiceUrl(service: {
  category: string
  parent_slug: string | null
  slug: string
  canonical_url?: string
}): string {
  if (service.canonical_url) {
    return service.canonical_url
  }

  if (service.parent_slug) {
    return `/${service.category}/${service.parent_slug}/${service.slug}`
  }

  return `/${service.category}/${service.slug}`
} 