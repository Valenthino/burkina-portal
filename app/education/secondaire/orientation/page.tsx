'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Secondaire', href: '/education/secondaire' },
  { label: 'Orientation', href: '/education/secondaire/orientation' }
];

export default function OrientationSecondairePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Orientation Scolaire et Professionnelle
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              L'orientation scolaire et professionnelle est un service essentiel qui aide les 
              élèves à faire des choix éclairés concernant leur parcours académique et leur 
              future carrière. Au Burkina Faso, ce service est coordonné par la Direction de 
              l'Orientation Scolaire et Professionnelle (DOSP).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Les services d'orientation sont disponibles dans 
                tous les établissements secondaires publics et conventionnés.
              </p>
            </div>
          </div>

          {/* Orientation en fin de 3ème */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Orientation en Fin de 3ème</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Options disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Second Cycle Général</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Série A : Littéraire</li>
                    <li>Série C : Mathématiques et Sciences Physiques</li>
                    <li>Série D : Sciences de la Vie et de la Terre</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Second Cycle Technique</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Série E : Mathématiques et Technique</li>
                    <li>Série F : Technique Industrielle</li>
                    <li>Série G : Technique de Gestion</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Critères d'orientation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Résultats scolaires en 3ème</li>
                <li>Notes obtenues au BEPC</li>
                <li>Aptitudes et centres d'intérêt</li>
                <li>Avis du conseil de classe</li>
                <li>Vœux de l'élève et de la famille</li>
              </ul>
            </div>
          </div>

          {/* Orientation post-bac */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Orientation Post-Bac</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Filières universitaires</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left">Domaine</th>
                      <th className="px-6 py-3 text-left">Filières principales</th>
                      <th className="px-6 py-3 text-left">Bac recommandé</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Sciences et Technologies</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-4">
                          <li>Mathématiques</li>
                          <li>Physique</li>
                          <li>Informatique</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4">C, D, E</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Sciences de la Santé</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-4">
                          <li>Médecine</li>
                          <li>Pharmacie</li>
                          <li>Sciences infirmières</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4">D</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Sciences Humaines</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-4">
                          <li>Lettres</li>
                          <li>Histoire</li>
                          <li>Géographie</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4">A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Services d'orientation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services d'Orientation</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Services disponibles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Entretiens individuels d'orientation</li>
                <li>Tests d'aptitude et d'intérêt</li>
                <li>Séances d'information collectives</li>
                <li>Documentation sur les métiers</li>
                <li>Conseil en projet professionnel</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Centres d'orientation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Centre National (Ouagadougou)</h4>
                  <ul className="space-y-1">
                    <li>Tél : +226 25 30 XX XX</li>
                    <li>Email : orientation@education.gov.bf</li>
                    <li>Adresse : [Adresse complète]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Centre Régional (Bobo-Dioulasso)</h4>
                  <ul className="space-y-1">
                    <li>Tél : +226 20 97 XX XX</li>
                    <li>Email : orientation.bobo@education.gov.bf</li>
                    <li>Adresse : [Adresse complète]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources et outils */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ressources et Outils</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Guide des métiers</li>
                <li>Fiches formations</li>
                <li>Tests d'orientation en ligne</li>
                <li>Vidéos métiers</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Événements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Forum des métiers (février 2024)</li>
                <li>Journées portes ouvertes des universités</li>
                <li>Salons de l'étudiant</li>
                <li>Rencontres professionnelles</li>
              </ul>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respecter les délais d'inscription post-bac</li>
              <li>Se renseigner sur les débouchés professionnels</li>
              <li>Tenir compte des capacités d'accueil des filières</li>
              <li>Préparer un projet alternatif</li>
              <li>Consulter régulièrement les conseillers d'orientation</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/secondaire/examens" className="text-blue-600 hover:underline">
                Examens et concours
              </Link>
            </li>
            <li>
              <Link href="/education/superieur/filieres" className="text-blue-600 hover:underline">
                Filières de l'enseignement supérieur
              </Link>
            </li>
            <li>
              <Link href="/education/secondaire/bourses" className="text-blue-600 hover:underline">
                Bourses d'études
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