'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Histoire et Culture', href: '/burkina/histoire-culture' },
  { label: 'Histoire', href: '/burkina/histoire-culture/histoire' }
];

export default function HistoirePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Histoire du Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Période précoloniale */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Période Précoloniale</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Les Royaumes Mossi</h3>
              <p>
                Les Mossi ont établi plusieurs royaumes puissants dès le XIe siècle, 
                dont les plus importants étaient Ouagadougou, Yatenga, Tenkodogo et 
                Fada N'Gourma. Ces royaumes ont maintenu leur indépendance jusqu'à 
                la colonisation française.
              </p>
              <h3 className="text-xl font-semibold mb-3">Autres Peuples</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les Gourmantché à l'est</li>
                <li>Les Peulh au nord</li>
                <li>Les Bobo à l'ouest</li>
                <li>Les Lobi au sud-ouest</li>
              </ul>
            </div>
          </div>

          {/* Période coloniale */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Période Coloniale (1896-1960)</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">La Haute-Volta</h3>
              <p>
                En 1896, les royaumes mossi sont conquis par la France. Le territoire 
                devient la Haute-Volta en 1919, puis est divisé entre les colonies 
                voisines en 1932, avant d'être reconstitué en 1947.
              </p>
              <h3 className="text-xl font-semibold mb-3">Résistance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Résistance du Mogho Naba Wobgo</li>
                <li>Lutte contre le travail forcé</li>
                <li>Mouvements syndicaux et politiques</li>
              </ul>
            </div>
          </div>

          {/* Indépendance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">De l'Indépendance à Nos Jours</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Première République</h3>
              <p>
                Le 5 août 1960, la Haute-Volta accède à l'indépendance sous la 
                présidence de Maurice Yaméogo.
              </p>

              <h3 className="text-xl font-semibold mb-3">Révolution</h3>
              <p>
                Le 4 août 1983, Thomas Sankara prend le pouvoir et engage une 
                révolution sociale et économique. Le pays est rebaptisé Burkina Faso 
                le 4 août 1984.
              </p>

              <h3 className="text-xl font-semibold mb-3">Période Contemporaine</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>1987 : Arrivée au pouvoir de Blaise Compaoré</li>
                <li>2014 : Insurrection populaire</li>
                <li>2015 : Élection de Roch Marc Christian Kaboré</li>
                <li>2022 : Transition militaire</li>
              </ul>
            </div>
          </div>

          {/* Personnages historiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Figures Historiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Période Précoloniale</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Naaba Oubri (fondateur du royaume de Ouagadougou)</li>
                  <li>Naaba Kango (roi du Yatenga)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Période Moderne</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Joseph Ki-Zerbo (historien et homme politique)</li>
                  <li>Thomas Sankara (président révolutionnaire)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sites historiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sites Historiques Majeurs</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Palais royal de Ouagadougou</li>
                <li>Ruines de Loropéni</li>
                <li>Place de la Révolution</li>
                <li>Mémorial Thomas Sankara</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/burkina/histoire-culture/sites" 
                  className="text-blue-600 hover:underline"
                >
                  Découvrir tous les sites historiques →
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
              <Link href="/burkina/histoire-culture/patrimoine" className="text-blue-600 hover:underline">
                Patrimoine culturel
              </Link>
            </li>
            <li>
              <Link href="/burkina/histoire-culture/arts" className="text-blue-600 hover:underline">
                Arts et traditions
              </Link>
            </li>
            <li>
              <Link href="/burkina/histoire-culture/langues" className="text-blue-600 hover:underline">
                Langues nationales
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