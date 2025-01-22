'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Primaire', href: '/education/primaire' },
  { label: 'Programme scolaire', href: '/education/primaire/programme' }
];

export default function ProgrammePrimairePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Programme Scolaire de l'Enseignement Primaire au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Le programme scolaire de l'enseignement primaire au Burkina Faso s'étend sur six années, 
              divisées en trois cycles de deux ans chacun. Il vise à fournir aux élèves les 
              connaissances fondamentales nécessaires à leur développement et à la poursuite de 
              leurs études.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Note :</strong> Le programme est aligné sur les standards internationaux 
                tout en étant adapté au contexte local burkinabè.
              </p>
            </div>
          </div>

          {/* Organisation des cycles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Organisation des Cycles</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Cycle Préparatoire (CP)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CP1 : Première année</li>
                  <li>CP2 : Deuxième année</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Cycle Élémentaire (CE)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CE1 : Troisième année</li>
                  <li>CE2 : Quatrième année</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Cycle Moyen (CM)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CM1 : Cinquième année</li>
                  <li>CM2 : Sixième année</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Matières enseignées */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Matières Enseignées</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domaine</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matières</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume Horaire Hebdo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Langues et Communication</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Français</li>
                        <li>Expression orale</li>
                        <li>Lecture</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">10h</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Mathématiques</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Calcul</li>
                        <li>Géométrie</li>
                        <li>Résolution de problèmes</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">6h</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Sciences et Technologie</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Sciences d'observation</li>
                        <li>Agriculture</li>
                        <li>Hygiène</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">4h</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Sciences Humaines et Sociales</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Histoire</li>
                        <li>Géographie</li>
                        <li>Éducation civique</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">3h</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Activités Pratiques et Artistiques</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Dessin</li>
                        <li>Chant</li>
                        <li>Activités manuelles</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">2h</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Éducation Physique et Sportive</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Sport collectif</li>
                        <li>Athlétisme</li>
                        <li>Gymnastique</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">2h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Évaluation et suivi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Évaluation et Suivi</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Types d'évaluation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Évaluations continues (devoirs de classe)</li>
                <li>Compositions mensuelles</li>
                <li>Examens trimestriels</li>
                <li>Certificat d'Études Primaires (CEP) en fin de CM2</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Notation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Notes sur 10 pour les petites classes (CP)</li>
                <li>Notes sur 20 pour les classes supérieures (CE, CM)</li>
                <li>Moyenne de passage : 5/10 ou 10/20</li>
                <li>Livret scolaire trimestriel</li>
              </ul>
            </div>
          </div>

          {/* Soutien scolaire */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Soutien Scolaire</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Dispositifs d'aide</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Études surveillées après la classe</li>
                <li>Cours de rattrapage le mercredi</li>
                <li>Soutien individualisé pour les élèves en difficulté</li>
                <li>Activités périscolaires de renforcement</li>
              </ul>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Assiduité obligatoire aux cours</li>
              <li>Participation active en classe encouragée</li>
              <li>Suivi régulier des devoirs à la maison</li>
              <li>Communication régulière avec les enseignants</li>
              <li>Importance de la lecture quotidienne</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/primaire/inscription" className="text-blue-600 hover:underline">
                Inscription à l'école primaire
              </Link>
            </li>
            <li>
              <Link href="/education/primaire/fournitures" className="text-blue-600 hover:underline">
                Liste des fournitures scolaires
              </Link>
            </li>
            <li>
              <Link href="/education/primaire/cantines" className="text-blue-600 hover:underline">
                Services de restauration scolaire
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