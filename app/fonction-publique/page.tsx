'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction Publique', href: '/fonction-publique' }
];

export default function FonctionPubliquePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Fonction Publique du Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              La Fonction Publique du Burkina Faso est l'ensemble des personnels civils 
              employés par l'État et les collectivités territoriales. Elle est régie 
              par la loi n°081-2015/CNT du 24 novembre 2015 portant statut général 
              de la Fonction publique d'État.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'accès à la Fonction Publique se fait 
                principalement par voie de concours, garantissant l'égalité des chances 
                et la sélection basée sur le mérite.
              </p>
            </div>
          </div>

          {/* Services principaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link href="/fonction-publique/concours" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Concours</h3>
              <p className="text-gray-600">
                Calendrier des concours, conditions d'accès et inscriptions.
              </p>
            </Link>

            <Link href="/fonction-publique/carrieres"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Carrières</h3>
              <p className="text-gray-600">
                Corps et emplois, évolution de carrière, rémunération.
              </p>
            </Link>

            <Link href="/fonction-publique/statut"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Statut</h3>
              <p className="text-gray-600">
                Droits, obligations et protection sociale des fonctionnaires.
              </p>
            </Link>

            <Link href="/fonction-publique/formation"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Formation</h3>
              <p className="text-gray-600">
                Formation continue et perfectionnement professionnel.
              </p>
            </Link>

            <Link href="/fonction-publique/retraite"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Retraite</h3>
              <p className="text-gray-600">
                Pension de retraite et prestations sociales.
              </p>
            </Link>

            <Link href="/fonction-publique/services-en-ligne"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Services en Ligne</h3>
              <p className="text-gray-600">
                Plateforme e-Concours et services numériques.
              </p>
            </Link>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Chiffres Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">180 000+</div>
                <div className="text-sm text-gray-600">Agents publics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">40%</div>
                <div className="text-sm text-gray-600">Femmes dans la fonction publique</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15 000+</div>
                <div className="text-sm text-gray-600">Recrutements annuels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">45</div>
                <div className="text-sm text-gray-600">Âge moyen des agents</div>
              </div>
            </div>
          </div>

          {/* Catégories et corps */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Catégories et Corps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Catégorie A</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A1 : Conception et direction</li>
                  <li>A2 : Études et administration</li>
                  <li>A3 : Application et encadrement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Catégorie B</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>B1 : Maîtrise et encadrement</li>
                  <li>B2 : Application et contrôle</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Catégorie C</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>C1 : Exécution spécialisée</li>
                  <li>C2 : Exécution simple</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ministère responsable */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ministère de Tutelle</h2>
            <div className="space-y-4">
              <p>
                La Fonction Publique est sous la tutelle du Ministère de la Fonction 
                Publique, du Travail et de la Protection Sociale.
              </p>
              <div className="flex justify-start">
                <Link 
                  href="/burkina/gouvernement/ministeres/fonction-publique" 
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
                <h3 className="font-semibold">Concours directs 2024</h3>
                <p className="text-gray-600">Ouverture des inscriptions aux concours directs session 2024.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Réforme administrative</h3>
                <p className="text-gray-600">Modernisation des services et digitalisation des procédures.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Formation continue</h3>
                <p className="text-gray-600">Nouveau programme de renforcement des capacités des agents.</p>
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
                Statut général de la fonction publique
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Guide des concours administratifs
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Grille indiciaire
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