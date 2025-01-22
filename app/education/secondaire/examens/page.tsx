'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Secondaire', href: '/education/secondaire' },
  { label: 'Examens', href: '/education/secondaire/examens' }
];

export default function ExamensSecondairePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Examens et Concours de l'Enseignement Secondaire
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Les examens de l'enseignement secondaire au Burkina Faso comprennent le BEPC 
              (Brevet d'Études du Premier Cycle) et le Baccalauréat. Ces examens nationaux 
              sont organisés par l'Office Central des Examens et Concours du Secondaire (OCECOS).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Les dates des examens pour la session 2024 
                seront publiées prochainement sur cette page.
              </p>
            </div>
          </div>

          {/* BEPC */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">BEPC (Brevet d'Études du Premier Cycle)</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Informations Générales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Examen de fin du premier cycle du secondaire</li>
                <li>Obligatoire pour l'accès au second cycle</li>
                <li>Se déroule en juin de chaque année</li>
                <li>Durée des épreuves : 4-5 jours</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Matières Évaluées</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left">Matière</th>
                      <th className="px-6 py-3 text-left">Coefficient</th>
                      <th className="px-6 py-3 text-left">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Français</td>
                      <td className="px-6 py-4">4</td>
                      <td className="px-6 py-4">3h</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Mathématiques</td>
                      <td className="px-6 py-4">4</td>
                      <td className="px-6 py-4">2h</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Anglais</td>
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">2h</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">SVT</td>
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">2h</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Histoire-Géographie</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">2h30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Baccalauréat */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Baccalauréat</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Séries disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Séries Générales</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Série A : Littéraire</li>
                    <li>Série C : Mathématiques et Sciences Physiques</li>
                    <li>Série D : Sciences de la Vie et de la Terre</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Séries Techniques</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Série E : Mathématiques et Technique</li>
                    <li>Série F : Technique Industrielle</li>
                    <li>Série G : Technique de Gestion</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Organisation des Épreuves</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Épreuves anticipées en Première (Français)</li>
                <li>Épreuves terminales en fin de Terminale</li>
                <li>Session de remplacement en septembre</li>
                <li>Possibilité de conservation des notes ≥ 10</li>
              </ul>
            </div>
          </div>

          {/* Calendrier des examens */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Calendrier des Examens 2024</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left">Examen</th>
                      <th className="px-6 py-3 text-left">Période</th>
                      <th className="px-6 py-3 text-left">Publication des Résultats</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">BEPC</td>
                      <td className="px-6 py-4">15-19 juin 2024</td>
                      <td className="px-6 py-4">15 juillet 2024</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Bac - Épreuves anticipées</td>
                      <td className="px-6 py-4">1-3 juin 2024</td>
                      <td className="px-6 py-4">25 juin 2024</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Bac - Épreuves terminales</td>
                      <td className="px-6 py-4">22-30 juin 2024</td>
                      <td className="px-6 py-4">25 juillet 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Préparation aux examens */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Préparation aux Examens</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Ressources disponibles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Annales des années précédentes</li>
                <li>Cours de soutien organisés par les établissements</li>
                <li>Bibliothèques numériques</li>
                <li>Groupes d'étude encadrés</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Conseils pratiques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Établir un planning de révision</li>
                <li>S'entraîner avec les annales</li>
                <li>Participer aux examens blancs</li>
                <li>Maintenir un rythme de sommeil régulier</li>
              </ul>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vérifier régulièrement les dates et horaires des épreuves</li>
              <li>S'assurer d'avoir une pièce d'identité valide</li>
              <li>Respecter le règlement des examens</li>
              <li>Arriver 30 minutes avant le début des épreuves</li>
              <li>Conserver précieusement sa convocation</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/secondaire/etablissements" className="text-blue-600 hover:underline">
                Liste des établissements
              </Link>
            </li>
            <li>
              <Link href="/education/secondaire/orientation" className="text-blue-600 hover:underline">
                Orientation post-bac
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