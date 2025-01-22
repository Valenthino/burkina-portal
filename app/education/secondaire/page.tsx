'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Secondaire', href: '/education/secondaire' }
];

export default function EnseignementSecondairePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Enseignement Secondaire au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              L'enseignement secondaire au Burkina Faso comprend deux cycles : le premier 
              cycle (6ème à 3ème) sanctionné par le BEPC, et le second cycle (2nde à 
              Terminale) conduisant au baccalauréat.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'enseignement secondaire est accessible après 
                l'obtention du Certificat d'Études Primaires (CEP) et la réussite au 
                concours d'entrée en 6ème.
              </p>
            </div>
          </div>

          {/* Services principaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link href="/education/secondaire/etablissements" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Établissements</h3>
              <p className="text-gray-600">
                Liste des collèges et lycées au Burkina Faso.
              </p>
            </Link>

            <Link href="/education/secondaire/examens"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Examens</h3>
              <p className="text-gray-600">
                Informations sur le BEPC et le BAC.
              </p>
            </Link>

            <Link href="/education/secondaire/orientation"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Orientation</h3>
              <p className="text-gray-600">
                Services d'orientation scolaire et professionnelle.
              </p>
            </Link>

            <Link href="/education/secondaire/bourses"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Bourses</h3>
              <p className="text-gray-600">
                Aides financières pour les études secondaires.
              </p>
            </Link>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Chiffres Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2 845</div>
                <div className="text-sm text-gray-600">Établissements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">42%</div>
                <div className="text-sm text-gray-600">Taux de scolarisation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">45:1</div>
                <div className="text-sm text-gray-600">Ratio élèves/classe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">65%</div>
                <div className="text-sm text-gray-600">Taux de réussite BEPC</div>
              </div>
            </div>
          </div>

          {/* Organisation des études */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Organisation des Études</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Premier Cycle</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>6ème : Cycle d'observation</li>
                  <li>5ème : Cycle d'observation</li>
                  <li>4ème : Cycle d'orientation</li>
                  <li>3ème : Préparation au BEPC</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Second Cycle</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>2nde : Tronc commun</li>
                  <li>1ère : Spécialisation</li>
                  <li>Terminale : Préparation au BAC</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ministère responsable */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ministère de Tutelle</h2>
            <div className="space-y-4">
              <p>
                L'enseignement secondaire est sous la tutelle du Ministère de 
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
                <h3 className="font-semibold">Calendrier des examens 2024</h3>
                <p className="text-gray-600">Publication des dates du BEPC et du BAC pour la session 2024.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Réforme du programme scolaire</h3>
                <p className="text-gray-600">Introduction de nouveaux modules d'enseignement technique.</p>
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