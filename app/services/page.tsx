import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import Link from 'next/link'

interface Service {
  id: string
  titre: string
  description: string
  slug: string
  ministere: string
  categorie: string
}

export default async function ServicesPage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  
  const { data: services } = await supabase
    .from('services')
    .select('*')
    .eq('est_actif', true)
    .order('titre')

  // Group services by category
  const servicesParCategorie = (services as Service[] || []).reduce((acc, service) => {
    const categorie = service.categorie || 'Autres'
    if (!acc[categorie]) {
      acc[categorie] = []
    }
    acc[categorie].push(service)
    return acc
  }, {} as Record<string, Service[]>)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Services Gouvernementaux</h1>

      {Object.entries(servicesParCategorie).map(([categorie, services]) => (
        <div key={categorie} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{categorie}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.titre}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="text-sm text-gray-500">
                  {service.ministere}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 