'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { searchContent, type SearchResult } from '@/lib/services/search'
import Link from 'next/link'
import { RiSearchLine } from '@remixicon/react'
import { IconWrapper } from '../components/IconWrapper'
import SearchBar from '../components/SearchBar'

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const searchQuery = typeof searchParams.q === 'string' ? searchParams.q : undefined;
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const performSearch = async () => {
      if (!searchQuery) return

      setIsLoading(true)
      try {
        const searchResults = await searchContent(searchQuery)
        setResults(searchResults)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    performSearch()
  }, [searchQuery])

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <IconWrapper
              icon={<RiSearchLine className="h-6 w-6 mr-2 text-primary-600" />}
            />
            Recherche
          </h1>
          <SearchBar />
        </div>

        {searchQuery && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              Résultats pour "{searchQuery}"
            </h2>
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                <p className="mt-4 text-gray-500">Recherche en cours...</p>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-12">
                <RiSearchLine className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun résultat</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Nous n'avons trouvé aucun résultat pour votre recherche.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {results.map((result) => (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.url}
                    className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-900">
                          {result.title}
                        </h2>
                        <p className="mt-2 text-gray-600">{result.description}</p>
                        {result.date_creation && (
                          <p className="mt-2 text-sm text-gray-500">
                            {new Date(result.date_creation).toLocaleDateString('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        )}
                      </div>
                      <span className="ml-4 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                        {result.type}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
} 