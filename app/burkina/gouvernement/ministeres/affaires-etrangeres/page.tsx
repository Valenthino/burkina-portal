import Image from 'next/image';
import Link from 'next/link';

export default function ForeignAffairsMinistry() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Accueil</Link>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li className="flex items-center">
            <Link href="/burkina" className="text-blue-600 hover:text-blue-800">Le Burkina</Link>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li className="flex items-center">
            <Link href="/burkina/gouvernement" className="text-blue-600 hover:text-blue-800">Gouvernement</Link>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li>
            <span className="text-gray-500">Ministère des Affaires Étrangères</span>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Minister Info */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/IMG_5192.JPG"
              alt="Ministre des Affaires Étrangères"
              width={400}
              height={500}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Mme Olivia ROUAMBA</h2>
              <p className="text-gray-600">Ministre des Affaires Étrangères, de la Coopération Régionale et des Burkinabè de l'Extérieur</p>
            </div>
          </div>
        </div>

        {/* Ministry Info */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Ministère des Affaires Étrangères</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Missions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conduire la politique étrangère du Burkina Faso</li>
              <li>Gérer les relations diplomatiques et consulaires</li>
              <li>Promouvoir la coopération internationale</li>
              <li>Protéger les intérêts des Burkinabè à l'étranger</li>
              <li>Coordonner l'action internationale du gouvernement</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Services */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Services clés</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/international/services-consulaires" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">→</span>
                    Services Consulaires
                  </Link>
                </li>
                <li>
                  <Link href="/international/visas" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">→</span>
                    Visas et Immigration
                  </Link>
                </li>
                <li>
                  <Link href="/international/cooperation" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">→</span>
                    Coopération Internationale
                  </Link>
                </li>
                <li>
                  <Link href="/international/diaspora" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">→</span>
                    Services à la Diaspora
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <div className="space-y-2">
                <p><strong>Adresse :</strong> Ouagadougou, Burkina Faso</p>
                <p><strong>Téléphone :</strong> +226 XX XX XX XX</p>
                <p><strong>Email :</strong> contact@diplomatie.gov.bf</p>
                <p><strong>Horaires :</strong> Lundi - Vendredi: 07:30 - 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Services et Ressources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold mb-3">Ambassades et Consulats</h3>
            <p className="text-gray-600 mb-4">Trouvez les représentations diplomatiques du Burkina Faso à l'étranger.</p>
            <Link href="/international/ambassades" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold mb-3">Assistance aux Burkinabè</h3>
            <p className="text-gray-600 mb-4">Services et assistance pour les Burkinabè résidant à l'étranger.</p>
            <Link href="/international/assistance" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold mb-3">Relations Internationales</h3>
            <p className="text-gray-600 mb-4">Accords et partenariats internationaux du Burkina Faso.</p>
            <Link href="/international/relations" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </Link>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Votre avis nous intéresse</h2>
        <p className="mb-4">Cette page vous a-t-elle été utile ?</p>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
            Oui
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Non
          </button>
        </div>
      </div>
    </div>
  );
} 