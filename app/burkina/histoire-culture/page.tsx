'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Histoire et Culture', href: '/burkina/histoire-culture' }
];

export default function HistoireCulturePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Histoire et Culture du Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Découvrir le Burkina Faso</h2>
            <p className="mb-4">
              Le Burkina Faso, "Pays des Hommes Intègres", possède une histoire riche 
              et une culture vibrante. Des royaumes mossi à nos jours, en passant par 
              la période coloniale et la révolution, découvrez l'héritage fascinant 
              de ce pays d'Afrique de l'Ouest.
            </p>
          </div>

          {/* Sections Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Histoire */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Histoire</h2>
              <p className="mb-4">
                De la formation des premiers royaumes à l'époque contemporaine, 
                découvrez les moments clés qui ont façonné le Burkina Faso.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Période précoloniale</li>
                <li>Colonisation française</li>
                <li>Indépendance et révolution</li>
                <li>Burkina Faso moderne</li>
              </ul>
              <Link 
                href="/burkina/histoire-culture/histoire" 
                className="text-blue-600 hover:underline"
              >
                En savoir plus sur l'histoire →
              </Link>
            </div>

            {/* Patrimoine Culturel */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Patrimoine Culturel</h2>
              <p className="mb-4">
                Explorez la richesse du patrimoine culturel burkinabè, entre 
                traditions ancestrales et expressions contemporaines.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Sites classés UNESCO</li>
                <li>Architecture traditionnelle</li>
                <li>Patrimoine immatériel</li>
                <li>Conservation et valorisation</li>
              </ul>
              <Link 
                href="/burkina/histoire-culture/patrimoine" 
                className="text-blue-600 hover:underline"
              >
                Découvrir le patrimoine culturel →
              </Link>
            </div>

            {/* Arts et Traditions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Arts et Traditions</h2>
              <p className="mb-4">
                Des masques aux danses traditionnelles, en passant par la musique 
                et l'artisanat, découvrez les expressions artistiques du Burkina Faso.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Arts traditionnels</li>
                <li>Musique et danse</li>
                <li>Artisanat</li>
                <li>Festivals culturels</li>
              </ul>
              <Link 
                href="/burkina/histoire-culture/arts" 
                className="text-blue-600 hover:underline"
              >
                Explorer les arts et traditions →
              </Link>
            </div>

            {/* Langues Nationales */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Langues Nationales</h2>
              <p className="mb-4">
                Plongez dans la diversité linguistique du Burkina Faso, avec ses 
                nombreuses langues nationales qui enrichissent sa culture.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Principales langues</li>
                <li>Politique linguistique</li>
                <li>Préservation et développement</li>
                <li>Éducation et médias</li>
              </ul>
              <Link 
                href="/burkina/histoire-culture/langues" 
                className="text-blue-600 hover:underline"
              >
                Découvrir les langues nationales →
              </Link>
            </div>
          </div>

          {/* Sites Historiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Sites Historiques et Culturels</h2>
            <p className="mb-4">
              Visitez les lieux emblématiques qui témoignent de l'histoire et de la 
              culture du Burkina Faso, des ruines anciennes aux monuments modernes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Ruines de Loropéni</li>
                <li>Palais royaux</li>
                <li>Mosquées historiques</li>
                <li>Sites sacrés</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monuments de l'indépendance</li>
                <li>Musées nationaux</li>
                <li>Centres culturels</li>
                <li>Lieux de mémoire</li>
              </ul>
            </div>
            <Link 
              href="/burkina/histoire-culture/sites" 
              className="text-blue-600 hover:underline"
            >
              Explorer les sites historiques →
            </Link>
          </div>

          {/* Actualités et Événements */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Actualités et Événements</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">FESPACO 2024</h3>
                <p className="text-sm text-gray-600">
                  Festival panafricain du cinéma et de la télévision de Ouagadougou
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Semaine Nationale de la Culture</h3>
                <p className="text-sm text-gray-600">
                  Célébration annuelle des arts et de la culture burkinabè
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">SIAO 2024</h3>
                <p className="text-sm text-gray-600">
                  Salon International de l'Artisanat de Ouagadougou
                </p>
              </div>
            </div>
            <Link 
              href="/burkina/actualites/culture" 
              className="text-blue-600 hover:underline block mt-4"
            >
              Voir tous les événements →
            </Link>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/burkina/decouvrir/tourisme" className="text-blue-600 hover:underline">
                Tourisme au Burkina Faso
              </Link>
            </li>
            <li>
              <Link href="/burkina/decouvrir/regions" className="text-blue-600 hover:underline">
                Les régions du Burkina Faso
              </Link>
            </li>
            <li>
              <Link href="/education/culture" className="text-blue-600 hover:underline">
                Éducation culturelle
              </Link>
            </li>
          </ul>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Cette page vous a-t-elle été utile ?</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">
              Oui
            </button>
            <button className="bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700">
              Non
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </main>
  );
} 