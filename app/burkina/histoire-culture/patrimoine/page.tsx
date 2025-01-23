'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Histoire et Culture', href: '/burkina/histoire-culture' },
  { label: 'Patrimoine Culturel', href: '/burkina/histoire-culture/patrimoine' }
];

export default function PatrimoinePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Patrimoine Culturel du Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Un Héritage Culturel Riche</h2>
            <p className="mb-4">
              Le patrimoine culturel du Burkina Faso est d'une richesse exceptionnelle, 
              reflétant la diversité de ses peuples et de son histoire. Il comprend 
              aussi bien des éléments matériels qu'immatériels, témoignant de la 
              vitalité des traditions et de la créativité contemporaine.
            </p>
          </div>

          {/* Patrimoine Matériel */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Patrimoine Matériel</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Sites Classés UNESCO</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ruines de Loropéni (inscrites en 2009)</li>
                <li>Sites d'architecture vernaculaire</li>
                <li>Vestiges archéologiques</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Architecture Traditionnelle</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cases traditionnelles</li>
                <li>Palais royaux</li>
                <li>Mosquées anciennes</li>
                <li>Habitations troglodytes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Objets d'Art</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Masques cérémoniels</li>
                <li>Sculptures traditionnelles</li>
                <li>Objets rituels</li>
                <li>Collections muséales</li>
              </ul>
            </div>
          </div>

          {/* Patrimoine Immatériel */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Patrimoine Immatériel</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Traditions Orales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contes et légendes</li>
                <li>Chants traditionnels</li>
                <li>Épopées historiques</li>
                <li>Proverbes et devinettes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Pratiques Sociales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rites et cérémonies</li>
                <li>Fêtes traditionnelles</li>
                <li>Systèmes de parenté</li>
                <li>Organisation sociale</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Savoir-faire Traditionnels</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Techniques artisanales</li>
                <li>Médecine traditionnelle</li>
                <li>Agriculture ancestrale</li>
                <li>Métallurgie traditionnelle</li>
              </ul>
            </div>
          </div>

          {/* Conservation et Valorisation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conservation et Valorisation</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Institutions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Musée National</li>
                <li>Direction du Patrimoine Culturel</li>
                <li>Centres culturels régionaux</li>
                <li>Instituts de recherche</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Actions de Préservation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Inventaire du patrimoine</li>
                <li>Restauration des sites</li>
                <li>Documentation des traditions</li>
                <li>Formation des artisans</li>
              </ul>
            </div>
          </div>

          {/* Transmission et Education */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Transmission et Éducation</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Programmes Éducatifs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sensibilisation scolaire</li>
                <li>Ateliers culturels</li>
                <li>Formations artisanales</li>
                <li>Stages d'initiation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Événements Culturels</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Festivals traditionnels</li>
                <li>Expositions temporaires</li>
                <li>Journées du patrimoine</li>
                <li>Rencontres culturelles</li>
              </ul>
            </div>
          </div>

          {/* Défis et Perspectives */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Défis et Perspectives</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Enjeux Actuels</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Préservation face à la modernisation</li>
                <li>Transmission intergénérationnelle</li>
                <li>Valorisation économique</li>
                <li>Protection juridique</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Projets Futurs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Numérisation du patrimoine</li>
                <li>Développement touristique</li>
                <li>Coopération internationale</li>
                <li>Recherche et documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/burkina/histoire-culture/arts" className="text-blue-600 hover:underline">
                Arts et traditions
              </Link>
            </li>
            <li>
              <Link href="/burkina/histoire-culture/sites" className="text-blue-600 hover:underline">
                Sites historiques
              </Link>
            </li>
            <li>
              <Link href="/burkina/decouvrir/tourisme" className="text-blue-600 hover:underline">
                Tourisme culturel
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