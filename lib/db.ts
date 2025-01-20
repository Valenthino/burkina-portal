import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

console.log('Connection string available:', !!connectionString);

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const pool = new Pool({
  connectionString,
});

export default pool;

export interface Service {
  id: number
  nom: string
  slug: string
  description?: string
  ministereId: number
  ministereName?: string
  ministereSlug?: string
  category: string
  parent_slug: string | null
  route_type: 'local' | 'external' | 'info'
  external_url?: string
  canonical_url?: string
}

export interface Mission {
  id: number
  description: string
  ministereId: number
}

export interface Ministere {
  id: number
  nom: string
  description: string
  categorie?: string
  slug: string
  dateCreation: Date
  dateModification: Date
  missions: Mission[]
  services: Service[]
}

export interface ServiceCategory {
  slug: string
  name: string
  subcategories: {
    slug: string
    name: string
    services: Service[]
  }[]
}

const CATEGORY_NAMES: { [key: string]: string } = {
  'citoyens': 'Services aux citoyens',
  'entreprises': 'Services aux entreprises',
  'international': 'Services internationaux',
  'securite': 'Sécurité',
  'ministeres': 'Services ministériels'
}

export async function getMinisteres(): Promise<Ministere[]> {
  try {
    const client = await pool.connect()
    
    // Get ministères
    const ministeresResult = await client.query(`
      SELECT 
        id,
        nom,
        description,
        categorie,
        slug,
        date_creation as "dateCreation",
        date_modification as "dateModification"
      FROM ministeres 
      ORDER BY nom ASC
    `)

    // Get missions for all ministères
    const missionsResult = await client.query(`
      SELECT id, description, ministere_id as "ministereId"
      FROM missions_ministere
    `)

    // Get services for all ministères
    const servicesResult = await client.query(`
      SELECT 
        id, 
        nom, 
        description, 
        ministere_id as "ministereId",
        type,
        route_type,
        external_url,
        slug
      FROM services_ministere
    `)

    client.release()

    // Combine the data
    const ministeres = ministeresResult.rows.map(ministere => ({
      ...ministere,
      missions: missionsResult.rows.filter(mission => mission.ministereId === ministere.id),
      services: servicesResult.rows.filter(service => service.ministereId === ministere.id)
    }))

    return ministeres
  } catch (error) {
    console.error('Erreur lors de la récupération des ministères:', error)
    throw new Error('Impossible de récupérer la liste des ministères')
  }
}

export async function getMinistereBySlug(slug: string): Promise<Ministere | null> {
  try {
    const client = await pool.connect()
    
    // Get ministère
    const ministereResult = await client.query(`
      SELECT 
        id,
        nom,
        description,
        categorie,
        slug,
        date_creation as "dateCreation",
        date_modification as "dateModification"
      FROM ministeres 
      WHERE slug = $1
    `, [slug])

    if (ministereResult.rows.length === 0) {
      return null
    }

    const ministere = ministereResult.rows[0]

    // Get missions
    const missionsResult = await client.query(`
      SELECT id, description, ministere_id as "ministereId"
      FROM missions_ministere
      WHERE ministere_id = $1
    `, [ministere.id])

    // Get services
    const servicesResult = await client.query(`
      SELECT 
        id, 
        nom, 
        description, 
        ministere_id as "ministereId",
        type,
        route_type,
        external_url,
        slug
      FROM services_ministere
      WHERE ministere_id = $1
    `, [ministere.id])

    client.release()

    return {
      ...ministere,
      missions: missionsResult.rows,
      services: servicesResult.rows
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du ministère:', error)
    throw new Error('Impossible de récupérer le ministère')
  }
}

export async function getServicesByCategory(category: string): Promise<ServiceCategory> {
  try {
    const client = await pool.connect()
    
    // Get all services for this category
    const servicesResult = await client.query(`
      SELECT 
        id, 
        nom, 
        description, 
        ministere_id as "ministereId",
        category,
        parent_slug,
        route_type,
        external_url,
        canonical_url,
        slug
      FROM services_ministere
      WHERE category = $1
      ORDER BY parent_slug, nom
    `, [category])

    client.release()

    // Group services by parent_slug
    const subcategories = new Map<string, {
      slug: string
      name: string
      services: Service[]
    }>()

    servicesResult.rows.forEach(service => {
      const parentSlug = service.parent_slug || 'autres'
      if (!subcategories.has(parentSlug)) {
        subcategories.set(parentSlug, {
          slug: parentSlug,
          name: getSubcategoryName(parentSlug),
          services: []
        })
      }
      subcategories.get(parentSlug)?.services.push(service)
    })

    return {
      slug: category,
      name: CATEGORY_NAMES[category] || category,
      subcategories: Array.from(subcategories.values())
    }
  } catch (error) {
    console.error(`Erreur lors de la récupération des services pour la catégorie ${category}:`, error)
    throw new Error(`Impossible de récupérer les services pour la catégorie ${category}`)
  }
}

export async function getServiceBySlug(category: string, parentSlug: string | null, slug: string): Promise<Service | null> {
  try {
    const client = await pool.connect()
    
    // Get service
    const serviceResult = await client.query(`
      SELECT 
        s.id, 
        s.nom, 
        s.description, 
        s.ministere_id as "ministereId",
        s.category,
        s.parent_slug,
        s.route_type,
        s.external_url,
        s.canonical_url,
        s.slug,
        m.nom as "ministereName",
        m.slug as "ministereSlug"
      FROM services_ministere s
      LEFT JOIN ministeres m ON s.ministere_id = m.id
      WHERE s.category = $1
      AND (s.parent_slug = $2 OR ($2 IS NULL AND s.parent_slug IS NULL))
      AND s.slug = $3
    `, [category, parentSlug, slug])

    client.release()

    if (serviceResult.rows.length === 0) {
      return null
    }

    return serviceResult.rows[0]
  } catch (error) {
    console.error('Erreur lors de la récupération du service:', error)
    throw new Error('Impossible de récupérer le service')
  }
}

// Helper function to get subcategory display names
function getSubcategoryName(slug: string): string {
  const names: { [key: string]: string } = {
    'administration': 'Administration',
    'sante': 'Santé',
    'justice': 'Justice',
    'finances': 'Finances',
    'fiscalite': 'Fiscalité',
    'agriculture': 'Agriculture',
    'services': 'Services',
    'cooperation': 'Coopération',
    'defense': 'Défense',
    'protection': 'Protection',
    'autres': 'Autres services'
  }
  return names[slug] || slug
}

