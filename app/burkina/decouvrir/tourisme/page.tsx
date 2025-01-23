'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Découvrir le Burkina', href: '/burkina/decouvrir' },
  { label: 'Tourisme', href: '/burkina/decouvrir/tourisme' }
];

export default function TourismePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Tourisme au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Découvrir le Pays des Hommes Intègres</h2>
            <p className="mb-4">
              Le Burkina Faso offre une expérience touristique unique, mêlant richesse 
              culturelle, sites naturels exceptionnels et hospitalité légendaire. Des 
              ruines mystérieuses de Loropéni aux pics granitiques de Sindou, en passant 
              par les marchés animés de Ouagadougou, le pays propose une diversité 
              d'attractions pour tous les voyageurs.
            </p>
          </div>

          {/* Sites Naturels */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sites Naturels</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Parcs Nationaux</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Parc National du W</li>
                <li>Parc National de Pô</li>
                <li>Réserve de Nazinga</li>
                <li>Ranch de Gibier de Nazinga</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Formations Géologiques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pics de Sindou</li>
                <li>Dômes de Fabedougou</li>
                <li>Cascades de Karfiguéla</li>
                <li>Mare aux hippopotames de Bala</li>
              </ul>
            </div>
          </div>

          {/* Sites Culturels */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sites Culturels</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Sites UNESCO</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ruines de Loropéni</li>
                <li>Mosquée de Dioulassoba</li>
                <li>Grande Mosquée de Bobo-Dioulasso</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Sites Historiques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Palais Royal de Ouagadougou</li>
                <li>Mausolée de Thomas Sankara</li>
                <li>Place de la Nation</li>
                <li>Musée National</li>
              </ul>
            </div>
          </div>

          {/* Hébergement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Hôtels</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hôtels de luxe à Ouagadougou</li>
                <li>Hôtels de charme à Bobo-Dioulasso</li>
                <li>Auberges touristiques</li>
                <li>Campements ruraux</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Hébergements Alternatifs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maisons d'hôtes</li>
                <li>Gîtes ruraux</li>
                <li>Camping</li>
                <li>Séjours chez l'habitant</li>
              </ul>
            </div>
          </div>

          {/* Activités Touristiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Activités Touristiques</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Activités Culturelles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Festivals traditionnels</li>
                <li>Artisanat local</li>
                <li>Spectacles de danse</li>
                <li>Visites de villages traditionnels</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Activités Nature</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Safari photo</li>
                <li>Randonnées pédestres</li>
                <li>Observation des oiseaux</li>
                <li>Excursions à cheval</li>
              </ul>
            </div>
          </div>

          {/* Informations Pratiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Informations Pratiques</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Meilleure Période</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Novembre à février : Saison sèche et fraîche</li>
                <li>Mars à mai : Saison chaude</li>
                <li>Juin à octobre : Saison des pluies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Transport</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vols internationaux vers Ouagadougou</li>
                <li>Location de véhicules</li>
                <li>Transport en commun</li>
                <li>Guides touristiques</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Formalités</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visa obligatoire</li>
                <li>Vaccinations recommandées</li>
                <li>Assurance voyage</li>
                <li>Précautions sanitaires</li>
              </ul>
            </div>
          </div>

          {/* Circuits Touristiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Circuits Touristiques</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Circuit des arts et de l'artisanat</li>
                <li>Circuit nature et aventure</li>
                <li>Circuit historique et culturel</li>
                <li>Circuit des parcs nationaux</li>
                <li>Circuit des villages traditionnels</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/burkina/decouvrir/circuits" 
                  className="text-blue-600 hover:underline"
                >
                  Découvrir tous les circuits touristiques →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/burkina/decouvrir/regions" className="text-blue-600 hover:underline">
                Les régions du Burkina Faso
              </Link>
            </li>
            <li>
              <Link href="/burkina/decouvrir/evenements" className="text-blue-600 hover:underline">
                Agenda des événements
              </Link>
            </li>
            <li>
              <Link href="/burkina/histoire-culture/arts" className="text-blue-600 hover:underline">
                Arts et traditions
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