'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Services', href: '/fonction-publique/services' },
  { label: 'Assistance', href: '/fonction-publique/services/assistance' }
];

export default function AssistancePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Assistance aux Agents de la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Le service d'assistance aux agents de la fonction publique offre un 
              accompagnement personnalisé pour toutes les questions relatives à la 
              carrière, aux démarches administratives et aux services en ligne.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Actualités 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Nouveau centre d'appels disponible 24/7</li>
                <li>Assistance en ligne par chat</li>
                <li>Rendez-vous en visioconférence</li>
                <li>Application mobile d'assistance</li>
              </ul>
            </div>
          </div>

          {/* Canaux d'Assistance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Canaux d'Assistance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Centre d'Appels</h3>
                <ul className="list-disc ml-6">
                  <li>Numéro vert : 80 00 11 22</li>
                  <li>Disponible 24h/24 et 7j/7</li>
                  <li>Support en français et langues locales</li>
                  <li>Temps d'attente moyen : 2 minutes</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Chat en Ligne</h3>
                <ul className="list-disc ml-6">
                  <li>Accessible depuis l'Espace Agent</li>
                  <li>Réponse instantanée</li>
                  <li>Historique des conversations</li>
                  <li>Partage de documents possible</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <ul className="list-disc ml-6">
                  <li>assistance@fonction-publique.gov.bf</li>
                  <li>Réponse sous 24 heures</li>
                  <li>Suivi par ticket</li>
                  <li>Confirmation automatique</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Guichet Physique</h3>
                <ul className="list-disc ml-6">
                  <li>Dans chaque chef-lieu de région</li>
                  <li>Lundi au vendredi, 7h30-15h30</li>
                  <li>Avec ou sans rendez-vous</li>
                  <li>Service personnalisé</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types d'Assistance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types d'Assistance</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Assistance Technique</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Service</th>
                        <th className="border p-2">Délai</th>
                        <th className="border p-2">Canal Privilégié</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Connexion Espace Agent</td>
                        <td className="border p-2">Immédiat</td>
                        <td className="border p-2">Chat/Téléphone</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Problèmes Application</td>
                        <td className="border p-2">2 heures</td>
                        <td className="border p-2">Email/Chat</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Signature Électronique</td>
                        <td className="border p-2">4 heures</td>
                        <td className="border p-2">Guichet/Email</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Assistance Administrative</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Service</th>
                        <th className="border p-2">Délai</th>
                        <th className="border p-2">Canal Privilégié</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Démarches Carrière</td>
                        <td className="border p-2">24 heures</td>
                        <td className="border p-2">Guichet/Email</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Questions Statut</td>
                        <td className="border p-2">48 heures</td>
                        <td className="border p-2">Email/Guichet</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Réclamations</td>
                        <td className="border p-2">72 heures</td>
                        <td className="border p-2">Guichet/Email</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Base de Connaissances */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Base de Connaissances</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">FAQ</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Questions fréquentes par thème</li>
                    <li>Réponses détaillées et à jour</li>
                    <li>Exemples et cas pratiques</li>
                    <li>Mise à jour régulière</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Guides et Tutoriels</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Guides pas à pas</li>
                    <li>Vidéos explicatives</li>
                    <li>Fiches pratiques</li>
                    <li>Documentation technique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Formation et Accompagnement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Formation et Accompagnement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Formations en Ligne</h3>
                <ul className="list-disc ml-6">
                  <li>Modules d'auto-formation</li>
                  <li>Webinaires interactifs</li>
                  <li>Tests de validation</li>
                  <li>Certificats de réussite</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Ateliers Pratiques</h3>
                <ul className="list-disc ml-6">
                  <li>Sessions en présentiel</li>
                  <li>Exercices pratiques</li>
                  <li>Échanges d'expériences</li>
                  <li>Support personnalisé</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Qualité de Service */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Qualité de Service</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Engagements</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Réponse rapide et efficace</li>
                    <li>Suivi personnalisé</li>
                    <li>Confidentialité des échanges</li>
                    <li>Satisfaction garantie</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Évaluation</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Enquêtes de satisfaction</li>
                    <li>Suggestions d'amélioration</li>
                    <li>Indicateurs de performance</li>
                    <li>Rapport mensuel de qualité</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact et Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Information</h2>
            <div className="space-y-4">
              <p>
                Pour contacter le service d'assistance :
              </p>
              <ul className="list-disc ml-6">
                <li>Numéro vert : 80 00 11 22</li>
                <li>Email : assistance@fonction-publique.gov.bf</li>
                <li>Chat : Espace Agent</li>
                <li>Guichet : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/services/espace-agent" 
                className="text-blue-600 hover:text-blue-800">
                Espace Agent
              </Link>
              <Link href="/fonction-publique/services/documents" 
                className="text-blue-600 hover:text-blue-800">
                Documents administratifs
              </Link>
              <Link href="/fonction-publique/services/reclamations" 
                className="text-blue-600 hover:text-blue-800">
                Réclamations
              </Link>
              <Link href="/fonction-publique/administration/statut" 
                className="text-blue-600 hover:text-blue-800">
                Statut général
              </Link>
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