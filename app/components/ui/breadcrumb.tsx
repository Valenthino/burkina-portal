import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export type BreadcrumbItem = {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary"
          >
            Accueil
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="ml-1 text-sm font-medium text-primary md:ml-2">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="ml-1 text-sm text-gray-500 hover:text-primary md:ml-2"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
} 