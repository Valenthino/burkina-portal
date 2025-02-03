'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Participation Citoyenne', href: '/services/citoyens/participation-citoyenne' }
];

export default function ParticipationCitoyennePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Participation Citoyenne
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">S'engager dans la Vie Citoyenne</h2>
            <p className="mb-4">
              La participation citoyenne est au cœur de la démocratie au Burkina Faso. 
              Elle permet aux citoyens de contribuer activement au développement de leur 
              communauté et de leur pays. Découvrez les différentes façons de vous impliquer 
              dans la vie citoyenne.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> La participation citoyenne est un droit et 
                une responsabilité pour tous les citoyens burkinabè.
              </p>
            </div>
          </div>

          {/* Formes de participation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Formes de Participation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Participation Politique</h3>
                <ul className="list-disc pl-6">
                  <li>Vote aux élections</li>
                  <li>Adhésion à un parti politique</li>
                  <li>Observation électorale</li>
                  <li>Participation aux débats publics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Participation Sociale</h3>
                <ul className="list-disc pl-6">
                  <li>Bénévolat</li>
                  <li>Engagement associatif</li>
                  <li>Actions communautaires</li>
                  <li>Initiatives citoyennes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Participation Consultative</h3>
                <ul className="list-disc pl-6">
                  <li>Conseils de quartier</li>
                  <li>Consultations publiques</li>
                  <li>Forums citoyens</li>
                  <li>Budgets participatifs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mécanismes de participation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Mécanismes de Participation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Au Niveau Local</h3>
                <ul className="list-disc pl-6">
                  <li>Conseils villageois de développement (CVD)</li>
                  <li>Comités de développement de secteur</li>
                  <li>Assemblées générales de quartier</li>
                  <li>Cadres de concertation communaux</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Au Niveau National</h3>
                <ul className="list-disc pl-6">
                  <li>Conseil économique et social</li>
                  <li>Forums nationaux</li>
                  <li>États généraux</li>
                  <li>Consultations nationales</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Initiatives citoyennes */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Initiatives Citoyennes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Comment Lancer une Initiative</h3>
                <ol className="list-decimal pl-6">
                  <li className="mb-2">Identifier un besoin ou une problématique</li>
                  <li className="mb-2">Mobiliser d'autres citoyens</li>
                  <li className="mb-2">Élaborer un plan d'action</li>
                  <li className="mb-2">Contacter les autorités compétentes</li>
                  <li>Mettre en œuvre et suivre l'initiative</li>
                </ol>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Domaines d'Action</h3>
                <ul className="list-disc pl-6">
                  <li>Environnement et cadre de vie</li>
                  <li>Éducation et formation</li>
                  <li>Santé et bien-être</li>
                  <li>Culture et patrimoine</li>
                  <li>Solidarité et cohésion sociale</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Droits et devoirs */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits et Devoirs du Citoyen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Droits</h3>
                <ul className="list-disc pl-6">
                  <li>Liberté d'expression</li>
                  <li>Droit de réunion</li>
                  <li>Droit d'association</li>
                  <li>Accès à l'information</li>
                  <li>Participation aux décisions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Devoirs</h3>
                <ul className="list-disc pl-6">
                  <li>Respect des lois</li>
                  <li>Participation à la vie publique</li>
                  <li>Protection de l'environnement</li>
                  <li>Contribution au développement</li>
                  <li>Solidarité sociale</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Outils et ressources */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Outils et Ressources</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Plateformes Numériques</h3>
                <ul className="list-disc pl-6">
                  <li>Portail de participation citoyenne</li>
                  <li>Applications mobiles citoyennes</li>
                  <li>Forums de discussion en ligne</li>
                  <li>Plateformes de signalement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <ul className="list-disc pl-6">
                  <li>Guide du citoyen</li>
                  <li>Fiches pratiques</li>
                  <li>Rapports et études</li>
                  <li>Textes réglementaires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Comment participer aux consultations publiques ?</h3>
                <p className="text-gray-600">
                  Les consultations publiques sont annoncées dans les médias locaux et sur 
                  les sites web des institutions. Vous pouvez y participer en personne ou 
                  en ligne selon les modalités indiquées.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Peut-on créer un conseil de quartier ?</h3>
                <p className="text-gray-600">
                  Oui, la création d'un conseil de quartier se fait en collaboration avec 
                  la mairie. Contactez votre mairie pour connaître la procédure.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Comment signaler un problème dans ma commune ?</h3>
                <p className="text-gray-600">
                  Vous pouvez utiliser la plateforme de signalement en ligne, contacter 
                  directement votre mairie, ou passer par votre conseil de quartier.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Service de la Participation Citoyenne</h3>
                <p className="text-gray-600">
                  Téléphone : (+226) 25 30 XX XX<br />
                  Email : participation@gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires d'ouverture</h3>
                <p className="text-gray-600">
                  Du lundi au vendredi<br />
                  7h30 - 12h30 et 15h00 - 17h30
                </p>
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