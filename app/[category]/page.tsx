import { getServicesByCategory } from '@/lib/db'
import { notFound } from 'next/navigation'
import ServiceLink from '../components/ServiceLink'
import Link from 'next/link'

// Validate category parameter
const validCategories = ['citoyens', 'entreprises', 'international', 'securite']

export async function generateMetadata({ params }: { params: { category: string } }) {
  if (!validCategories.includes(params.category)) {
    return { title: 'Page non trouvée' }
  }

  const categoryNames: { [key: string]: string } = {
    'citoyens': 'Services aux citoyens',
    'entreprises': 'Services aux entreprises',
    'international': 'Services internationaux',
    'securite': 'Sécurité'
  }
  
  return {
    title: categoryNames[params.category],
    description: `Services et démarches pour ${categoryNames[params.category].toLowerCase()} au Burkina Faso`
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  // Validate category
  if (!validCategories.includes(params.category)) {
    notFound()
  }

  const category = await getServicesByCategory(params.category)

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link href="/" className="text-blue-600 hover:underline">Accueil</Link></li>
          <li>/</li>
          <li className="text-gray-600">{category.name}</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-8">
        {category.name}
      </h1>

      <div className="space-y-12">
        {category.subcategories.map((subcategory) => (
          <section 
            key={subcategory.slug}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">
              {subcategory.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {subcategory.services.map((service) => (
                <div key={service.id} className="space-y-2">
                  <ServiceLink 
                    service={service}
                    showDescription={true}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
} 