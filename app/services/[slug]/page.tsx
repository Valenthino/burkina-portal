import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Service {
  id: string
  titre: string
  description: string
  contenu: string
  ministere: string
  categorie: string
  date_creation: string
  date_modification: string
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string }
}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: service } = await supabase
    .from('services')
    .select('*')
    .eq('slug', params.slug)
    .eq('est_actif', true)
    .single()

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Fil d'Ariane */}
        <nav className="flex mb-8 text-sm text-gray-600">
          <Link href="/services" className="hover:text-primary-600">
            Services
          </Link>
          <span className="mx-2">›</span>
          <span>{service.categorie}</span>
        </nav>

        {/* En-tête du Service */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {service.titre}
          </h1>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <span>Ministère: {service.ministere}</span>
            <span>•</span>
            <span>
              Mis à jour le{' '}
              {new Date(service.date_modification).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>

        {/* Description du Service */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Description
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>

          {/* Contenu du Service */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: service.contenu }}
            />
          </div>
        </div>

        {/* Section Contact */}
        <div className="bg-primary-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-primary-900 mb-4">
            Besoin d'assistance ?
          </h2>
          <p className="text-primary-700 mb-4">
            Notre équipe est disponible pour vous aider dans vos démarches.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  )
} 