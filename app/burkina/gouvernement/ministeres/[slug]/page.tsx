import { getMinistereBySlug } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const ServiceLink = ({ service, ministereSlug }: { service: any, ministereSlug: string }) => {
  // For informational services, just render text
  if (service.route_type === 'info') {
    return (
      <span className="text-gray-600 flex items-center">
        <span className="text-gray-400 mr-2">•</span>
        {service.nom}
      </span>
    )
  }

  // For external services, link to external URL
  if (service.route_type === 'external' && service.external_url) {
    return (
      <a 
        href={service.external_url}
        className="text-blue-600 hover:underline flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-blue-400 mr-2">→</span>
        {service.nom}
      </a>
    )
  }

  // Make sure we have a slug before creating the URL
  if (!service.slug) {
    console.error('Service is missing slug:', service)
    return (
      <span className="text-gray-600 flex items-center">
        <span className="text-gray-400 mr-2">•</span>
        {service.nom}
      </span>
    )
  }

  // For local services, use simplified routing
  const href = service.type === 'direct'
    ? `/services/${service.slug}`
    : `/ministeres/${ministereSlug}/${service.slug}`

  return (
    <Link 
      href={href}
      className="text-blue-600 hover:underline flex items-center"
    >
      <span className="text-blue-400 mr-2">→</span>
      {service.nom}
    </Link>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const ministere = await getMinistereBySlug(params.slug)
  if (!ministere) return { title: 'Ministère non trouvé' }
  
  return {
    title: ministere.nom,
    description: `Page officielle du ${ministere.nom} du Burkina Faso`
  }
}

export default async function MinisterePage({ params }: { params: { slug: string } }) {
  const ministere = await getMinistereBySlug(params.slug)
  
  if (!ministere) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link href="/" className="text-blue-600 hover:underline">Accueil</Link></li>
          <li>/</li>
          <li><Link href="/burkina" className="text-blue-600 hover:underline">Le Burkina</Link></li>
          <li>/</li>
          <li><Link href="/burkina/gouvernement" className="text-blue-600 hover:underline">Gouvernement</Link></li>
          <li>/</li>
          <li><Link href="/burkina/gouvernement/ministeres" className="text-blue-600 hover:underline">Ministères</Link></li>
          <li>/</li>
          <li className="text-gray-600">{ministere.nom}</li>
        </ol>
      </nav>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">{ministere.nom}</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Missions</h2>
              <ul className="space-y-3">
                {ministere.missions.map((mission) => (
                  <li key={mission.id} className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{mission.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Services clés</h2>
              <ul className="space-y-3">
                {ministere.services.map((service) => (
                  <li key={service.id}>
                    <ServiceLink service={service} ministereSlug={ministere.slug} />
                    {service.description && (
                      <p className="text-gray-600 text-sm mt-1 ml-6">
                        {service.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium mb-2">Adresse</p>
                  <p className="text-gray-600">Ouagadougou, Burkina Faso</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Horaires</p>
                  <p className="text-gray-600">Lundi - Vendredi: 07:30 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 