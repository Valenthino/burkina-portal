import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Ministere, MinistereService } from '@/lib/types'

// Enable Incremental Static Regeneration with a revalidation period of 1 hour
export const revalidate = 3600

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  
  const { data: ministere } = await supabase
    .from('ministeres')
    .select('nom')
    .eq('slug', params.slug)
    .eq('est_actif', true)
    .single()

  if (!ministere) return { title: 'Ministère non trouvé' }
  
  return {
    title: ministere.nom,
    description: `Page officielle du ${ministere.nom} du Burkina Faso`
  }
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

export default async function MinisterePage({ params }: { params: { slug: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  
  const { data: ministere, error } = await supabase
    .from('ministeres')
    .select(`
      id,
      nom,
      description,
      est_actif,
      created_at,
      updated_at,
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
    .eq('slug', params.slug)
    .eq('est_actif', true)
    .single()
  
  if (error || !ministere) {
    notFound()
  }

  const typedMinistere = ministere as Ministere

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
          <li className="text-gray-600">{typedMinistere.nom}</li>
        </ol>
      </nav>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">{typedMinistere.nom}</h1>
          
          {typedMinistere.description && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600">{typedMinistere.description}</p>
              </div>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Missions</h2>
              <ul className="space-y-3">
                {typedMinistere.missions?.map((mission) => (
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
                {typedMinistere.services?.map((service) => (
                  <li key={service.id}>
                    <ServiceLink service={service} ministereSlug={typedMinistere.slug} />
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
        </div>
      </div>
    </main>
  )
} 