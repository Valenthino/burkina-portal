import { getServiceBySlug } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Validate category parameter
const validCategories = ['citoyens', 'entreprises', 'international', 'securite']

export async function generateMetadata({ params }: { 
  params: { category: string, subcategory: string, slug: string } 
}) {
  if (!validCategories.includes(params.category)) {
    return { title: 'Page non trouvée' }
  }

  const service = await getServiceBySlug(params.category, params.subcategory, params.slug)
  
  if (!service) {
    return { title: 'Service non trouvé' }
  }

  return {
    title: service.nom,
    description: service.description || `Informations sur ${service.nom.toLowerCase()} au Burkina Faso`
  }
}

export default async function ServicePage({ params }: { 
  params: { category: string, subcategory: string, slug: string } 
}) {
  // Validate category
  if (!validCategories.includes(params.category)) {
    notFound()
  }

  const service = await getServiceBySlug(params.category, params.subcategory, params.slug)

  if (!service) {
    notFound()
  }

  const categoryNames: { [key: string]: string } = {
    'citoyens': 'Services aux citoyens',
    'entreprises': 'Services aux entreprises',
    'international': 'Services internationaux',
    'securite': 'Sécurité'
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link href="/" className="text-blue-600 hover:underline">Accueil</Link></li>
          <li>/</li>
          <li>
            <Link href={`/${service.category}`} className="text-blue-600 hover:underline">
              {categoryNames[service.category]}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link 
              href={`/${service.category}/${service.parent_slug}`} 
              className="text-blue-600 hover:underline"
            >
              {service.parent_slug}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">{service.nom}</li>
        </ol>
      </nav>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">{service.nom}</h1>
          
          {service.description && (
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600">{service.description}</p>
            </div>
          )}

          {service.ministereName && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-2">Ministère responsable</h2>
              <Link 
                href={`/ministeres/${service.ministereSlug}`}
                className="text-blue-600 hover:underline"
              >
                {service.ministereName}
              </Link>
            </div>
          )}

          {/* Add more service details here */}
        </div>
      </div>
    </main>
  )
} 