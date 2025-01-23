'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Histoire et Culture', href: '/burkina/histoire-culture' },
  { label: 'Sites Historiques', href: '/burkina/histoire-culture/sites' }
];

export default function SitesHistoriquesPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Sites Historiques et Culturels du Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Découvrir Notre Histoire</h2>
            <p className="mb-4">
              Le Burkina Faso regorge de sites historiques et culturels témoignant 
              de son riche passé. Des vestiges précoloniaux aux monuments de 
              l'indépendance, ces lieux racontent l'histoire du pays et de ses peuples.
            </p>
          </div>

          {/* Sites UNESCO */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sites du Patrimoine Mondial UNESCO</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Ruines de Loropéni</h3>
              <div className="pl-6">
                <p className="mb-2">
                  Inscrites au patrimoine mondial de l'UNESCO en 2009, les ruines de 
                  Loropéni sont les vestiges d'une forteresse datant du Xe siècle.
                </p>
                <ul className="list-disc space-y-2">
                  <li>Architecture unique en pierre</li>
                  <li>Témoignage du commerce transsaharien</li>
                  <li>Site archéologique majeur</li>
                  <li>Visites guidées disponibles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sites Royaux */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sites Royaux et Traditionnels</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Palais Royaux</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Palais Royal de Ouagadougou</li>
                <li>Palais de Kokologo</li>
                <li>Résidence royale de Tiébélé</li>
                <li>Cour royale de Tenkodogo</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Sites Sacrés</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Grottes sacrées de Douroula</li>
                <li>Mare aux crocodiles sacrés de Sabou</li>
                <li>Forêt sacrée de Koro</li>
                <li>Site sacré de Dafra</li>
              </ul>
            </div>
          </div>

          {/* Architecture Religieuse */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Architecture Religieuse</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Mosquées Historiques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Grande Mosquée de Bobo-Dioulasso</li>
                <li>Mosquée de Dioulassoba</li>
                <li>Mosquée de Bani</li>
                <li>Mosquée de Ramatoulaye</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Édifices Religieux</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cathédrale de Ouagadougou</li>
                <li>Sanctuaire marial de Yagma</li>
                <li>Temple des ancêtres de Gaoua</li>
              </ul>
            </div>
          </div>

          {/* Sites Coloniaux */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Héritage Colonial</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Bâtiments Administratifs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ancien palais du gouverneur</li>
                <li>Gare de Bobo-Dioulasso</li>
                <li>Bâtiments administratifs coloniaux</li>
                <li>Postes coloniales</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Sites Militaires</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Camp militaire de Ouagadougou</li>
                <li>Fortifications coloniales</li>
                <li>Postes de commandement</li>
              </ul>
            </div>
          </div>

          {/* Sites de l'Indépendance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Monuments de l'Indépendance</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Monuments Commémoratifs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Place de la Nation</li>
                <li>Monument des Héros Nationaux</li>
                <li>Place de la Révolution</li>
                <li>Mémorial Thomas Sankara</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Lieux de Mémoire</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maison du Peuple</li>
                <li>Premier siège de l'Assemblée</li>
                <li>Sites historiques de la révolution</li>
              </ul>
            </div>
          </div>

          {/* Musées */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Musées et Centres Culturels</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Musées Nationaux</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Musée National</li>
                <li>Musée de la Musique</li>
                <li>Musée de Manega</li>
                <li>Musée de Gaoua</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Centres Culturels</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Centre National des Arts</li>
                <li>Village Artisanal de Ouagadougou</li>
                <li>Centre culturel Georges Méliès</li>
              </ul>
            </div>
          </div>

          {/* Informations Pratiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Informations Pratiques</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Visites</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Guides touristiques disponibles</li>
                <li>Horaires d'ouverture variables</li>
                <li>Réservations recommandées pour certains sites</li>
                <li>Respect des lieux et coutumes locales</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Accessibilité</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transport public ou privé</li>
                <li>Hébergement à proximité</li>
                <li>Services touristiques</li>
                <li>Restauration locale</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/burkina/histoire-culture/patrimoine" className="text-blue-600 hover:underline">
                Patrimoine culturel
              </Link>
            </li>
            <li>
              <Link href="/burkina/decouvrir/tourisme" className="text-blue-600 hover:underline">
                Tourisme
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