'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Supérieur', href: '/education/superieur' }
];

export default function EnseignementSuperieurPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Enseignement Supérieur au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              L'enseignement supérieur au Burkina Faso est supervisé par le Ministère de 
              l'Enseignement Supérieur, de la Recherche et de l'Innovation. Il comprend 
              les universités publiques et privées, ainsi que les grandes écoles.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Le système LMD (Licence-Master-Doctorat) est en 
                vigueur dans toutes les institutions d'enseignement supérieur du pays.
              </p>
            </div>
          </div>

          {/* Services principaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link href="/education/superieur/universites" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Universités</h3>
              <p className="text-gray-600">
                Découvrez les établissements d'enseignement supérieur au Burkina Faso.
              </p>
            </Link>

            <Link href="/education/superieur/filieres"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Filières</h3>
              <p className="text-gray-600">
                Explorez les différentes filières d'études disponibles.
              </p>
            </Link>

            <Link href="/education/superieur/inscription"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Inscription</h3>
              <p className="text-gray-600">
                Informations sur les procédures d'inscription universitaire.
              </p>
            </Link>

            <Link href="/education/superieur/vie-etudiante"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Vie Étudiante</h3>
              <p className="text-gray-600">
                Tout sur la vie sur les campus universitaires.
              </p>
            </Link>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Chiffres Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">Universités publiques</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Universités privées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100 000+</div>
                <div className="text-sm text-gray-600">Étudiants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2 000+</div>
                <div className="text-sm text-gray-600">Enseignants-chercheurs</div>
              </div>
            </div>
          </div>

          {/* Ministère responsable */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ministère de Tutelle</h2>
            <div className="space-y-4">
              <p>
                L'enseignement supérieur est sous la tutelle du Ministère de l'Enseignement 
                Supérieur, de la Recherche et de l'Innovation.
              </p>
              <div className="flex justify-start">
                <Link 
                  href="/burkina/gouvernement/ministeres/enseignement-superieur" 
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
                <h3 className="font-semibold">Ouverture des inscriptions 2024-2025</h3>
                <p className="text-gray-600">Les inscriptions pour l'année académique 2024-2025 débuteront le 1er juillet 2024.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Nouveau campus numérique</h3>
                <p className="text-gray-600">Inauguration prévue du campus numérique de l'Université Joseph Ki-Zerbo.</p>
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