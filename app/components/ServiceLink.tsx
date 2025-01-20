import Link from 'next/link'
import { formatServiceUrl } from '@/lib/utils'

interface Service {
  id: number
  nom: string
  slug: string
  description?: string
  category: string
  parent_slug: string | null
  route_type: 'local' | 'external' | 'info'
  external_url?: string
  canonical_url?: string
}

interface ServiceLinkProps {
  service: Service
  showDescription?: boolean
}

export default function ServiceLink({ service, showDescription = false }: ServiceLinkProps) {
  // For informational services, just render text
  if (service.route_type === 'info') {
    return (
      <div>
        <span className="text-gray-600 flex items-center">
          <span className="text-gray-400 mr-2">•</span>
          {service.nom}
        </span>
        {showDescription && service.description && (
          <p className="text-gray-500 text-sm mt-1 ml-4">{service.description}</p>
        )}
      </div>
    )
  }

  // For external services, link to external URL
  if (service.route_type === 'external' && service.external_url) {
    return (
      <div>
        <a 
          href={service.external_url}
          className="text-blue-600 hover:underline flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-blue-400 mr-2">→</span>
          {service.nom}
        </a>
        {showDescription && service.description && (
          <p className="text-gray-500 text-sm mt-1 ml-4">{service.description}</p>
        )}
      </div>
    )
  }

  // For local services, use the URL formatter
  const href = formatServiceUrl(service)

  return (
    <div>
      <Link 
        href={href}
        className="text-blue-600 hover:underline flex items-center"
      >
        <span className="text-blue-400 mr-2">→</span>
        {service.nom}
      </Link>
      {showDescription && service.description && (
        <p className="text-gray-500 text-sm mt-1 ml-4">{service.description}</p>
      )}
    </div>
  )
} 