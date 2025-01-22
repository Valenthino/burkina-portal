'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { searchContent, type SearchResult } from '@/lib/services/search'
import Link from 'next/link'
import { RiSearchLine } from '@remixicon/react'
import { useDebounce } from '@/lib/hooks/useDebounce'
import { IconWrapper } from './IconWrapper'
import { useTransition } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const debouncedQuery = useDebounce(query, 300)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const performSearch = async () => {
      if (debouncedQuery.length < 2) {
        setResults([])
        return
      }

      setIsLoading(true)
      try {
        const searchResults = await searchContent(debouncedQuery)
        setResults(searchResults)
        setIsOpen(true)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    performSearch()
  }, [debouncedQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query) {
      startTransition(() => {
        router.push(`/recherche?q=${encodeURIComponent(query)}`)
      })
      setIsOpen(false)
    }
  }

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative w-full">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un service..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={isPending}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IconWrapper
              icon={<RiSearchLine className="h-5 w-5 text-gray-400" />}
            />
          </div>
        </div>
      </form>

      {isOpen && (results.length > 0 || isLoading) && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Chargement...</div>
          ) : (
            <>
              <div className="max-h-96 overflow-y-auto">
                {results.map((result) => (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.url}
                    onClick={() => setIsOpen(false)}
                    className="block p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {result.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                      <span className="ml-2 text-xs text-gray-400 capitalize">
                        {result.type}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-2 text-center border-t border-gray-100">
                <button
                  onClick={handleSubmit}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Voir tous les résultats
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
} 