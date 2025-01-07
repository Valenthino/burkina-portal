import Image from 'next/image';
import Link from 'next/link';

export default function DefenseMinistry() {
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
            <span className="text-gray-500">Ministère de la Défense</span>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Minister Info */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/IMG_5191.JPG"
              alt="Ministre de la Défense"
              width={400}
              height={500}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Colonel-Major Kassoum COULIBALY</h2>
              <p className="text-gray-600">Ministre de la Défense et des Anciens Combattants</p>
            </div>
          </div>
        </div>

        {/* Ministry Info */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Ministère de la Défense et des Anciens Combattants</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Missions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Assurer la défense de l'intégrité territoriale</li>
              <li>Coordonner les forces armées nationales</li>
              <li>Gérer les questions relatives aux anciens combattants</li>
              <li>Maintenir la sécurité nationale</li>
              <li>Développer la coopération militaire internationale</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Services */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Services clés</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/securite/defense/forces-armees" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">→</span>
                    Forces Armées Nationales
                  </Link>
                </li>
                <li>
                  <Link href="/securite/defense/gendarmerie" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">→</span>
                    Gendarmerie Nationale
                  </Link>
                </li>
                <li>
                  <Link href="/securite/defense-nationale/formation" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">→</span>
                    Formation militaire
                  </Link>
                </li>
                <li>
                  <Link href="/securite/defense-nationale/equipements" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <span className="mr-2">→</span>
                    Équipements militaires
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
                <p><strong>Email :</strong> contact@defense.gov.bf</p>
                <p><strong>Horaires :</strong> Lundi - Vendredi: 07:30 - 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Ressources et actualités</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold mb-3">Recrutement</h3>
            <p className="text-gray-600 mb-4">Informations sur les carrières militaires et les processus de recrutement.</p>
            <Link href="/securite/defense/recrutement" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold mb-3">Anciens Combattants</h3>
            <p className="text-gray-600 mb-4">Services et soutien pour les anciens combattants et leurs familles.</p>
            <Link href="/securite/defense/anciens-combattants" className="text-blue-600 hover:text-blue-800">
              En savoir plus →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold mb-3">Coopération Internationale</h3>
            <p className="text-gray-600 mb-4">Partenariats et collaborations militaires internationales.</p>
            <Link href="/securite/defense-nationale/cooperation" className="text-blue-600 hover:text-blue-800">
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