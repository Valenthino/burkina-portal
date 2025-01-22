'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Formation Continue', href: '/education/formation' },
  { label: 'Formation à distance', href: '/education/formation/distance' }
];

export default function FormationDistancePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Formation à Distance au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              La formation à distance au Burkina Faso représente une solution innovante 
              pour rendre l'éducation accessible à tous, particulièrement dans les zones 
              éloignées ou pour les personnes ayant des contraintes professionnelles.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> La formation à distance nécessite un accès 
                internet stable et un équipement informatique adapté. Des solutions 
                alternatives peuvent être proposées en cas de difficultés techniques.
              </p>
            </div>
          </div>

          {/* Types de formation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Formation à Distance</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">E-learning pur</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cours en ligne asynchrones</li>
                  <li>Supports numériques</li>
                  <li>Évaluations en ligne</li>
                  <li>Flexibilité totale</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Formation hybride</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Combinaison présentiel et distance</li>
                  <li>Regroupements périodiques</li>
                  <li>Travaux pratiques en présentiel</li>
                  <li>Suivi personnalisé</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Classes virtuelles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cours en direct</li>
                  <li>Interaction en temps réel</li>
                  <li>Sessions programmées</li>
                  <li>Participation active</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Plateformes et outils */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Plateformes et Outils</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Plateformes nationales</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>FOAD de l'Université Joseph Ki-Zerbo</li>
                  <li>Plateforme Virtual University</li>
                  <li>Campus numérique francophone</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Outils de communication</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Messagerie électronique</li>
                  <li>Forums de discussion</li>
                  <li>Visioconférence</li>
                  <li>Chat en ligne</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Ressources pédagogiques</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cours en format PDF</li>
                  <li>Vidéos pédagogiques</li>
                  <li>Exercices interactifs</li>
                  <li>Bibliothèque numérique</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Domaines de formation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Domaines de Formation</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left">Domaine</th>
                    <th className="px-6 py-3 text-left">Niveaux disponibles</th>
                    <th className="px-6 py-3 text-left">Durée moyenne</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Informatique et numérique</td>
                    <td className="px-6 py-4">Licence, Master</td>
                    <td className="px-6 py-4">6-24 mois</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Gestion et management</td>
                    <td className="px-6 py-4">Licence, Master, Formation courte</td>
                    <td className="px-6 py-4">3-24 mois</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Langues étrangères</td>
                    <td className="px-6 py-4">Tous niveaux</td>
                    <td className="px-6 py-4">3-12 mois</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Formation professionnelle</td>
                    <td className="px-6 py-4">Certificat, Diplôme</td>
                    <td className="px-6 py-4">6-18 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Accompagnement et tutorat */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accompagnement et Tutorat</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Services d'accompagnement</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tutorat individuel</li>
                  <li>Support technique</li>
                  <li>Coaching pédagogique</li>
                  <li>Suivi de progression</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Modalités de suivi</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rendez-vous réguliers</li>
                  <li>Rapports d'avancement</li>
                  <li>Évaluations continues</li>
                  <li>Feedback personnalisé</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coûts et financement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Coûts et Financement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Frais de formation</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left">Type de formation</th>
                        <th className="px-6 py-3 text-left">Coût moyen</th>
                        <th className="px-6 py-3 text-left">Options de paiement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4">Formation courte</td>
                        <td className="px-6 py-4">50 000 - 150 000 FCFA</td>
                        <td className="px-6 py-4">Paiement unique</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Licence</td>
                        <td className="px-6 py-4">250 000 - 500 000 FCFA/an</td>
                        <td className="px-6 py-4">Trimestriel</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Master</td>
                        <td className="px-6 py-4">500 000 - 800 000 FCFA/an</td>
                        <td className="px-6 py-4">Trimestriel</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vérifier les prérequis techniques</li>
              <li>S'assurer de la disponibilité pour les sessions synchrones</li>
              <li>Planifier son temps d'étude</li>
              <li>Maintenir une discipline personnelle</li>
              <li>Participer activement aux activités proposées</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/formation/centres" className="text-blue-600 hover:underline">
                Centres de formation
              </Link>
            </li>
            <li>
              <Link href="/education/formation/adultes" className="text-blue-600 hover:underline">
                Programmes adultes
              </Link>
            </li>
            <li>
              <Link href="/education/formation/certification" className="text-blue-600 hover:underline">
                Certification professionnelle
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