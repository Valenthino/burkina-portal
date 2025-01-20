import { getServicesByCategory } from '@/lib/db'
import { notFound } from 'next/navigation'
import ServiceLink from '@/components/ServiceLink'
import Link from 'next/link'

// Validate category parameter
const validCategories = ['citoyens', 'entreprises', 'international', 'securite']

export async function generateMetadata({ params }: { params: { category: string, subcategory: string } }) {
  if (!validCategories.includes(params.category)) {
    return { title: 'Page non trouvée' }
  }

  const category = await getServicesByCategory(params.category)
  const subcategory = category.subcategories.find(sub => sub.slug === params.subcategory)
  
  if (!subcategory) {
    return { title: 'Page non trouvée' }
  }

  return {
    title: `${subcategory.name} - ${category.name}`,
    description: `Services et démarches ${subcategory.name.toLowerCase()} pour ${category.name.toLowerCase()} au Burkina Faso`
  }
}

export default async function SubcategoryPage({ params }: { params: { category: string, subcategory: string } }) {
  // Validate category
  if (!validCategories.includes(params.category)) {
    notFound()
  }

  const category = await getServicesByCategory(params.category)
  const subcategory = category.subcategories.find(sub => sub.slug === params.subcategory)

  if (!subcategory) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link href="/" className="text-blue-600 hover:underline">Accueil</Link></li>
          <li>/</li>
          <li>
            <Link href={`/${category.slug}`} className="text-blue-600 hover:underline">
              {category.name}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">{subcategory.name}</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-8">
        {subcategory.name}
      </h1>

      <div className="bg-white rounded-lg shadow-md p-8">
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
      </div>
    </main>
  )
} 