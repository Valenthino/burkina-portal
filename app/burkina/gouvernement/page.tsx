import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gouvernement du Burkina Faso',
  description: 'Présentation du gouvernement du Burkina Faso, des ministères et de la présidence'
}

export default function GouvernementPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link href="/" className="text-blue-600 hover:underline">Accueil</Link></li>
          <li>/</li>
          <li><Link href="/burkina" className="text-blue-600 hover:underline">Le Burkina</Link></li>
          <li>/</li>
          <li className="text-gray-600">Gouvernement</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-8">
        Gouvernement du Burkina Faso
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">
            <Link 
              href="/burkina/gouvernement/presidence"
              className="text-blue-700 hover:underline"
            >
              Présidence
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Découvrez la présidence du Burkina Faso, son organisation et ses services.
          </p>
          <Link 
            href="/burkina/gouvernement/presidence"
            className="text-blue-600 hover:underline inline-flex items-center"
          >
            <span>En savoir plus</span>
            <span className="ml-2">→</span>
          </Link>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">
            <Link 
              href="/burkina/gouvernement/ministeres"
              className="text-blue-700 hover:underline"
            >
              Ministères
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Consultez la liste des ministères, leurs missions et leurs services.
          </p>
          <Link 
            href="/burkina/gouvernement/ministeres"
            className="text-blue-600 hover:underline inline-flex items-center"
          >
            <span>Voir les ministères</span>
            <span className="ml-2">→</span>
          </Link>
        </section>
      </div>
    </main>
  )
} 