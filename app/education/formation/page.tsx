'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Formation Continue', href: '/education/formation' }
];

export default function FormationContinuePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Formation Continue au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              La formation continue au Burkina Faso offre des opportunités d'apprentissage 
              tout au long de la vie, permettant aux adultes de développer leurs compétences 
              ou de se reconvertir professionnellement.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Les formations sont adaptées aux besoins du 
                marché du travail et accessibles à tous les niveaux de qualification.
              </p>
            </div>
          </div>

          {/* Services principaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link href="/education/formation/centres" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Centres de Formation</h3>
              <p className="text-gray-600">
                Découvrez les centres de formation professionnelle.
              </p>
            </Link>

            <Link href="/education/formation/adultes"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Programmes Adultes</h3>
              <p className="text-gray-600">
                Formations adaptées aux adultes en activité.
              </p>
            </Link>

            <Link href="/education/formation/distance"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Formation à Distance</h3>
              <p className="text-gray-600">
                Apprenez à votre rythme, où que vous soyez.
              </p>
            </Link>

            <Link href="/education/formation/certification"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">
                Validez vos compétences professionnelles.
              </p>
            </Link>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Chiffres Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Centres de formation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Programmes disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10 000+</div>
                <div className="text-sm text-gray-600">Apprenants par an</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">Taux d'insertion</div>
              </div>
            </div>
          </div>

          {/* Domaines de formation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Domaines de Formation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Secteur Primaire</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Agriculture moderne</li>
                  <li>Élevage</li>
                  <li>Transformation alimentaire</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Secteur Secondaire</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bâtiment et construction</li>
                  <li>Mécanique et électricité</li>
                  <li>Industries manufacturières</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Secteur Tertiaire</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Commerce et gestion</li>
                  <li>Informatique et numérique</li>
                  <li>Services aux personnes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ministère responsable */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ministère de Tutelle</h2>
            <div className="space-y-4">
              <p>
                La formation continue est sous la tutelle du Ministère de la Jeunesse, 
                de la Formation et de l'Insertion Professionnelles.
              </p>
              <div className="flex justify-start">
                <Link 
                  href="/burkina/gouvernement/ministeres/jeunesse-formation" 
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
                <h3 className="font-semibold">Nouveaux programmes de formation</h3>
                <p className="text-gray-600">Lancement de formations en énergies renouvelables et agriculture durable.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Partenariat international</h3>
                <p className="text-gray-600">Signature d'accords pour la certification internationale des formations.</p>
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