import { Suspense } from 'react'
import { getMinisteres } from '@/lib/db'
import type { Metadata } from 'next'
import Link from 'next/link'

// Métadonnées de la page
export const metadata: Metadata = {
  title: 'Ministères du Burkina Faso',
  description: 'Liste des ministères du gouvernement du Burkina Faso'
}

// Composant de chargement
const ChargementMinisteres = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vert-bf"></div>
    </div>
  )
}

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

// Composant principal
const PageMinisteres = async () => {
  const ministeres = await getMinisteres()

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
          <li className="text-gray-600">Ministères</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-8">
        Ministères du Burkina Faso
      </h1>

      <div className="space-y-12">
        {ministeres.map((ministere) => (
          <section 
            key={ministere.id}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold mb-4">
              <Link 
                href={`/burkina/gouvernement/ministeres/${ministere.slug}`}
                className="text-blue-700 hover:underline"
              >
                {ministere.nom}
              </Link>
            </h2>
            {ministere.categorie && (
              <p className="text-gray-600 mb-2">{ministere.categorie}</p>
            )}

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Missions et attributions</h3>
                <ul className="space-y-2">
                  {ministere.missions.map((mission) => (
                    <li key={mission.id} className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>{mission.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Services principaux</h3>
                <ul className="space-y-2">
                  {ministere.services.map((service) => (
                    <li key={service.id}>
                      <ServiceLink service={service} ministereSlug={ministere.slug} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default async function MinisteresPage() {
  return (
    <Suspense fallback={<ChargementMinisteres />}>
      <PageMinisteres />
    </Suspense>
  )
} 