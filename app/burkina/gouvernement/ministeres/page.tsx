import { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { Ministere, MinistereService } from '@/lib/types'

// Métadonnées de la page
export const metadata: Metadata = {
  title: 'Ministères du Burkina Faso',
  description: 'Liste des ministères du gouvernement du Burkina Faso'
}

// Enable Incremental Static Regeneration with a revalidation period of 1 hour
export const revalidate = 3600

// Composant de chargement
const ChargementMinisteres = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vert-bf"></div>
    </div>
  )
}

// Composant d'erreur
const ErreurMinisteres = ({ error }: { error: Error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-red-50 rounded-lg">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Une erreur est survenue</h2>
      <p className="text-red-500 mb-4">{error.message}</p>
      <Link 
        href="/burkina/gouvernement"
        className="text-blue-600 hover:underline"
      >
        Retourner à la page du gouvernement
      </Link>
    </div>
  )
}

const ServiceLink = ({ service, ministereSlug }: { service: MinistereService, ministereSlug: string }) => {
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
async function PageMinisteres() {
  try {
    const supabase = await createClient()
    
    // First, test the connection
    const { error: testError } = await supabase
      .from('ministeres')
      .select('id')
      .limit(1)

    if (testError) {
      console.error('Erreur de connexion à la base de données:', testError)
      throw new Error('Impossible de se connecter à la base de données. Veuillez réessayer plus tard.')
    }
    
    // Get ministères with their missions and services
    const { data: ministeres, error } = await supabase
      .from('ministeres')
      .select(`
        id,
        nom,
        nom_court,
        ministre,
        description,
        slug,
        missions:missions_ministere(
          id,
          description
        ),
        services:services_ministere(
          id,
          nom,
          description,
          type,
          route_type,
          external_url,
          slug
        )
      `)
      .eq('est_actif', true)
      .order('nom')

    if (error) {
      console.error('Erreur lors de la récupération des ministères:', error)
      throw new Error(
        error.message === 'Failed to fetch'
          ? 'Impossible de se connecter à la base de données. Veuillez réessayer plus tard.'
          : `Erreur lors de la récupération des ministères: ${error.message}`
      )
    }

    if (!ministeres || ministeres.length === 0) {
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
          <div className="bg-yellow-50 p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Aucun ministère trouvé</h1>
            <p className="text-gray-600">La liste des ministères n'est pas encore disponible.</p>
          </div>
        </main>
      )
    }

    console.log('Ministères récupérés:', ministeres)

    const typedMinisteres = ministeres as Ministere[]

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
          {typedMinisteres.map((ministere) => (
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

              {ministere.ministre && (
                <p className="text-gray-600 mb-6">
                  Ministre: {ministere.ministre}
                </p>
              )}

              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Missions et attributions</h3>
                  <ul className="space-y-2">
                    {ministere.missions?.map((mission) => (
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
                    {ministere.services?.map((service) => (
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
  } catch (error) {
    console.error('Erreur dans PageMinisteres:', error)
    return <ErreurMinisteres error={error instanceof Error ? error : new Error('Une erreur inattendue est survenue')} />
  }
}

export default async function MinisteresPage() {
  return (
    <Suspense fallback={<ChargementMinisteres />}>
      <PageMinisteres />
    </Suspense>
  )
} 