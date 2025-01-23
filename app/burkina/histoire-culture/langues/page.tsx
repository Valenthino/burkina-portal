'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Histoire et Culture', href: '/burkina/histoire-culture' },
  { label: 'Langues Nationales', href: '/burkina/histoire-culture/langues' }
];

export default function LanguesPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Langues Nationales du Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Diversité Linguistique</h2>
            <p className="mb-4">
              Le Burkina Faso compte plus de 60 langues nationales, reflétant la 
              richesse culturelle du pays. Bien que le français soit la langue 
              officielle, les langues nationales jouent un rôle crucial dans la 
              vie quotidienne et la préservation du patrimoine culturel.
            </p>
          </div>

          {/* Principales Langues */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Principales Langues Nationales</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Mooré</h3>
              <div className="pl-6">
                <p className="mb-2">
                  Langue la plus parlée du pays, le mooré est la langue des Mossi.
                </p>
                <ul className="list-disc space-y-2">
                  <li>Environ 40% de locuteurs</li>
                  <li>Principale langue véhiculaire</li>
                  <li>Utilisée dans les médias</li>
                  <li>Riche tradition orale</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Dioula</h3>
              <div className="pl-6">
                <p className="mb-2">
                  Langue du commerce et des échanges dans l'ouest du pays.
                </p>
                <ul className="list-disc space-y-2">
                  <li>Langue véhiculaire importante</li>
                  <li>Utilisée dans le commerce</li>
                  <li>Forte présence médiatique</li>
                  <li>Liens avec le bambara du Mali</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Fulfuldé</h3>
              <div className="pl-6">
                <p className="mb-2">
                  Langue des Peuls, présente dans plusieurs régions.
                </p>
                <ul className="list-disc space-y-2">
                  <li>Langue pastorale traditionnelle</li>
                  <li>Importante tradition poétique</li>
                  <li>Utilisée dans l'élevage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Autres Langues Importantes */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Autres Langues Importantes</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Langues Régionales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gourmantché (Est)</li>
                <li>Bissa (Centre-Est)</li>
                <li>Bobo (Ouest)</li>
                <li>Dagara (Sud-Ouest)</li>
                <li>San (Nord-Ouest)</li>
                <li>Lobi (Sud-Ouest)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Langues Transfrontalières</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gourounsi (avec le Ghana)</li>
                <li>Songhaï (avec le Mali et le Niger)</li>
                <li>Tamasheq (avec le Mali)</li>
              </ul>
            </div>
          </div>

          {/* Politique Linguistique */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Politique Linguistique</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Cadre Légal</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reconnaissance officielle des langues nationales</li>
                <li>Promotion dans l'éducation</li>
                <li>Usage dans les médias</li>
                <li>Protection du patrimoine linguistique</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Initiatives</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alphabétisation en langues nationales</li>
                <li>Production de matériel pédagogique</li>
                <li>Recherche linguistique</li>
                <li>Promotion culturelle</li>
              </ul>
            </div>
          </div>

          {/* Usage et Développement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Usage et Développement</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Médias</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Programmes radio en langues nationales</li>
                <li>Journaux et publications</li>
                <li>Contenus numériques</li>
                <li>Productions audiovisuelles</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Éducation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Écoles bilingues</li>
                <li>Formation des enseignants</li>
                <li>Matériel didactique</li>
                <li>Recherche pédagogique</li>
              </ul>
            </div>
          </div>

          {/* Préservation et Documentation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Préservation et Documentation</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Recherche</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Études linguistiques</li>
                <li>Documentation des dialectes</li>
                <li>Archives sonores</li>
                <li>Publications scientifiques</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Conservation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Numérisation des documents</li>
                <li>Collecte de traditions orales</li>
                <li>Préservation des variantes</li>
                <li>Transmission intergénérationnelle</li>
              </ul>
            </div>
          </div>

          {/* Défis et Perspectives */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Défis et Perspectives</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Défis Actuels</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standardisation de l'écriture</li>
                <li>Modernisation du vocabulaire</li>
                <li>Transmission aux jeunes générations</li>
                <li>Ressources pédagogiques</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Perspectives</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Développement numérique</li>
                <li>Intégration dans l'éducation formelle</li>
                <li>Coopération régionale</li>
                <li>Innovation pédagogique</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/burkina/histoire-culture/patrimoine" className="text-blue-600 hover:underline">
                Patrimoine culturel
              </Link>
            </li>
            <li>
              <Link href="/burkina/histoire-culture/arts" className="text-blue-600 hover:underline">
                Arts et traditions
              </Link>
            </li>
            <li>
              <Link href="/education/langues" className="text-blue-600 hover:underline">
                Apprentissage des langues
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