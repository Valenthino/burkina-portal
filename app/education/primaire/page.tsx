'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Primaire', href: '/education/primaire' }
];

export default function EnseignementPrimairePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Enseignement Primaire au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              L'enseignement primaire au Burkina Faso est obligatoire et gratuit dans 
              les écoles publiques pour tous les enfants âgés de 6 à 16 ans. Il s'étend 
              sur six années d'études et est sanctionné par le Certificat d'Études 
              Primaires (CEP).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'inscription est obligatoire pour tous les 
                enfants atteignant l'âge de 6 ans avant le 31 décembre de l'année en cours.
              </p>
            </div>
          </div>

          {/* Services principaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link href="/education/primaire/inscription" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Inscription</h3>
              <p className="text-gray-600">
                Procédures et conditions d'inscription.
              </p>
            </Link>

            <Link href="/education/primaire/programme"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Programme Scolaire</h3>
              <p className="text-gray-600">
                Contenu des enseignements par niveau.
              </p>
            </Link>

            <Link href="/education/primaire/fournitures"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Fournitures</h3>
              <p className="text-gray-600">
                Liste des fournitures scolaires requises.
              </p>
            </Link>

            <Link href="/education/primaire/cantines"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Cantines Scolaires</h3>
              <p className="text-gray-600">
                Programme d'alimentation scolaire.
              </p>
            </Link>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Chiffres Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15 482</div>
                <div className="text-sm text-gray-600">Écoles primaires</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">78%</div>
                <div className="text-sm text-gray-600">Taux de scolarisation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">48:1</div>
                <div className="text-sm text-gray-600">Ratio élèves/classe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">72%</div>
                <div className="text-sm text-gray-600">Taux de réussite CEP</div>
              </div>
            </div>
          </div>

          {/* Organisation des études */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Organisation des Études</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Cours Préparatoire (CP)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CP1 : Initiation à la lecture et au calcul</li>
                  <li>CP2 : Consolidation des bases</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Cours Élémentaire (CE)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CE1 : Approfondissement</li>
                  <li>CE2 : Renforcement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Cours Moyen (CM)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CM1 : Préparation au CEP</li>
                  <li>CM2 : Année du CEP</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ministère responsable */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ministère de Tutelle</h2>
            <div className="space-y-4">
              <p>
                L'enseignement primaire est sous la tutelle du Ministère de 
                l'Éducation Nationale, de l'Alphabétisation et de la Promotion 
                des Langues Nationales.
              </p>
              <div className="flex justify-start">
                <Link 
                  href="/burkina/gouvernement/ministeres/education-nationale" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Voir les détails du ministère
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Actualités */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Actualités</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Rentrée scolaire 2024-2025</h3>
                <p className="text-gray-600">Calendrier et modalités de la prochaine rentrée scolaire.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Distribution de manuels scolaires</h3>
                <p className="text-gray-600">Programme national de distribution gratuite de manuels.</p>
              </div>
            </div>
          </div>
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