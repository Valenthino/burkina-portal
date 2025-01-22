'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' }
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Système Éducatif au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Le système éducatif du Burkina Faso est structuré en plusieurs niveaux, 
              de l'enseignement primaire à l'enseignement supérieur, en passant par 
              le secondaire et la formation professionnelle. L'éducation est une 
              priorité nationale, avec un accent particulier sur l'accès universel 
              à l'éducation de base.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'éducation est obligatoire pour tous 
                les enfants âgés de 6 à 16 ans, conformément à la loi d'orientation 
                de l'éducation.
              </p>
            </div>
          </div>

          {/* Niveaux d'enseignement */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link href="/education/primaire" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Enseignement Primaire</h3>
              <p className="text-gray-600">
                Six années d'études fondamentales, du CP1 au CM2.
              </p>
            </Link>

            <Link href="/education/secondaire"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Enseignement Secondaire</h3>
              <p className="text-gray-600">
                Premier et second cycles, du collège au lycée.
              </p>
            </Link>

            <Link href="/education/superieur"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Enseignement Supérieur</h3>
              <p className="text-gray-600">
                Universités et grandes écoles.
              </p>
            </Link>

            <Link href="/education/formation"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Formation Continue</h3>
              <p className="text-gray-600">
                Formation professionnelle et apprentissage.
              </p>
            </Link>
          </div>

          {/* Statistiques nationales */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Chiffres Clés de l'Éducation</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">82%</div>
                <div className="text-sm text-gray-600">Taux d'alphabétisation des jeunes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">20%</div>
                <div className="text-sm text-gray-600">Budget national pour l'éducation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">45:1</div>
                <div className="text-sm text-gray-600">Ratio moyen élèves/enseignant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.2M</div>
                <div className="text-sm text-gray-600">Élèves et étudiants</div>
              </div>
            </div>
          </div>

          {/* Ministères responsables */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ministères de Tutelle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Éducation Nationale</h3>
                <p className="text-gray-600">
                  Ministère de l'Éducation Nationale, de l'Alphabétisation et de la 
                  Promotion des Langues Nationales
                </p>
                <div className="flex justify-start">
                  <Link 
                    href="/burkina/gouvernement/ministeres/education-nationale" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Voir les détails
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Enseignement Supérieur</h3>
                <p className="text-gray-600">
                  Ministère de l'Enseignement Supérieur, de la Recherche et de 
                  l'Innovation
                </p>
                <div className="flex justify-start">
                  <Link 
                    href="/burkina/gouvernement/ministeres/enseignement-superieur" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Voir les détails
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Actualités */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Actualités de l'Éducation</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Calendrier Scolaire 2024-2025</h3>
                <p className="text-gray-600">Publication des dates officielles pour tous les niveaux.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Réforme du Système Éducatif</h3>
                <p className="text-gray-600">Nouvelles mesures pour améliorer la qualité de l'enseignement.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Programme de Construction d'Écoles</h3>
                <p className="text-gray-600">Lancement d'un projet de construction de 500 nouvelles salles de classe.</p>
              </div>
            </div>
          </div>

          {/* Documents utiles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Documents Utiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Loi d'orientation de l'éducation
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Plan sectoriel de l'éducation
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Statistiques de l'éducation
              </a>
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