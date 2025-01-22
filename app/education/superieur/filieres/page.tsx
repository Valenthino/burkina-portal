'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Supérieur', href: '/education/superieur' },
  { label: 'Filières', href: '/education/superieur/filieres' }
];

export default function FilieresPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Filières d'Études Supérieures au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              L'enseignement supérieur au Burkina Faso offre une large gamme de filières 
              d'études organisées selon le système LMD (Licence-Master-Doctorat). Les formations 
              sont dispensées dans les universités publiques et privées, ainsi que dans les 
              grandes écoles.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Le choix de la filière doit tenir compte des 
                prérequis académiques, des débouchés professionnels et des capacités d'accueil 
                des établissements.
              </p>
            </div>
          </div>

          {/* Sciences et Technologies */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sciences et Technologies</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Informatique et Réseaux</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Génie Logiciel</li>
                    <li>Systèmes et Réseaux</li>
                    <li>Intelligence Artificielle</li>
                    <li>Sécurité Informatique</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mathématiques</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mathématiques Fondamentales</li>
                    <li>Mathématiques Appliquées</li>
                    <li>Statistiques</li>
                    <li>Actuariat</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Sciences Physiques</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Physique Fondamentale</li>
                    <li>Physique Appliquée</li>
                    <li>Énergies Renouvelables</li>
                    <li>Matériaux</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Génie Civil</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Construction</li>
                    <li>Hydraulique</li>
                    <li>Géotechnique</li>
                    <li>Topographie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sciences de la Santé */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sciences de la Santé</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Médecine</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Médecine Générale</li>
                    <li>Chirurgie</li>
                    <li>Pédiatrie</li>
                    <li>Gynécologie</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Pharmacie</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pharmacie Hospitalière</li>
                    <li>Industrie Pharmaceutique</li>
                    <li>Biologie Médicale</li>
                    <li>Toxicologie</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Sciences Infirmières</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Soins Infirmiers</li>
                    <li>Sage-femme</li>
                    <li>Anesthésie</li>
                    <li>Santé Publique</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Autres Spécialités</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kinésithérapie</li>
                    <li>Nutrition</li>
                    <li>Radiologie</li>
                    <li>Laboratoire</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sciences Économiques et Gestion */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sciences Économiques et Gestion</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Économie</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Analyse Économique</li>
                    <li>Économie du Développement</li>
                    <li>Finance</li>
                    <li>Économétrie</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Gestion</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Management</li>
                    <li>Marketing</li>
                    <li>Comptabilité</li>
                    <li>Ressources Humaines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sciences Humaines et Sociales */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sciences Humaines et Sociales</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Lettres et Langues</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Littérature Française</li>
                    <li>Anglais</li>
                    <li>Linguistique</li>
                    <li>Traduction</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Sciences Sociales</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sociologie</li>
                    <li>Anthropologie</li>
                    <li>Histoire</li>
                    <li>Géographie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Système LMD */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Système LMD</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left">Niveau</th>
                      <th className="px-6 py-3 text-left">Durée</th>
                      <th className="px-6 py-3 text-left">Crédits</th>
                      <th className="px-6 py-3 text-left">Conditions d'accès</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Licence</td>
                      <td className="px-6 py-4">3 ans</td>
                      <td className="px-6 py-4">180 crédits</td>
                      <td className="px-6 py-4">Baccalauréat</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Master</td>
                      <td className="px-6 py-4">2 ans</td>
                      <td className="px-6 py-4">120 crédits</td>
                      <td className="px-6 py-4">Licence</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Doctorat</td>
                      <td className="px-6 py-4">3 ans minimum</td>
                      <td className="px-6 py-4">180 crédits</td>
                      <td className="px-6 py-4">Master</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Débouchés professionnels */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Débouchés Professionnels</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Secteurs porteurs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technologies de l'Information</li>
                <li>Santé et Recherche Médicale</li>
                <li>Énergie et Environnement</li>
                <li>Finance et Banque</li>
                <li>Enseignement et Recherche</li>
                <li>Administration Publique</li>
              </ul>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vérifier les prérequis académiques</li>
              <li>S'informer sur les débouchés</li>
              <li>Tenir compte des capacités d'accueil</li>
              <li>Se renseigner sur les frais de scolarité</li>
              <li>Étudier les possibilités de poursuite d'études</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/superieur/universites" className="text-blue-600 hover:underline">
                Liste des universités
              </Link>
            </li>
            <li>
              <Link href="/education/superieur/inscription" className="text-blue-600 hover:underline">
                Procédures d'inscription
              </Link>
            </li>
            <li>
              <Link href="/education/superieur/vie-etudiante" className="text-blue-600 hover:underline">
                Vie étudiante
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