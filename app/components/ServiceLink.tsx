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
      <div className="py-1">
        <span className="text-gray-600 flex items-center group">
          <span className="text-gray-400 mr-2 text-base sm:text-lg">•</span>
          <span className="text-sm sm:text-base">{service.nom}</span>
        </span>
        {showDescription && service.description && (
          <p className="text-gray-500 text-xs sm:text-sm mt-1 ml-4 leading-relaxed">{service.description}</p>
        )}
      </div>
    )
  }

  // For external services, link to external URL
  if (service.route_type === 'external' && service.external_url) {
    return (
      <div className="py-1">
        <a 
          href={service.external_url}
          className="text-blue-600 hover:text-blue-700 flex items-center group transition-colors py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-blue-400 group-hover:text-blue-500 mr-2 text-base sm:text-lg transition-colors">→</span>
          <span className="text-sm sm:text-base group-hover:underline">{service.nom}</span>
        </a>
        {showDescription && service.description && (
          <p className="text-gray-500 text-xs sm:text-sm mt-1 ml-4 leading-relaxed">{service.description}</p>
        )}
      </div>
    )
  }

  // For local services, use the URL formatter
  const href = formatServiceUrl(service)

  return (
    <div className="py-1">
      <Link 
        href={href}
        className="text-blue-600 hover:text-blue-700 flex items-center group transition-colors py-1"
      >
        <span className="text-blue-400 group-hover:text-blue-500 mr-2 text-base sm:text-lg transition-colors">→</span>
        <span className="text-sm sm:text-base group-hover:underline">{service.nom}</span>
      </Link>
      {showDescription && service.description && (
        <p className="text-gray-500 text-xs sm:text-sm mt-1 ml-4 leading-relaxed">{service.description}</p>
      )}
    </div>
  )
} 