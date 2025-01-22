'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Services', href: '/fonction-publique/services' },
  { label: 'Réclamations', href: '/fonction-publique/services/reclamations' }
];

export default function ReclamationsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Réclamations dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Les agents de la fonction publique disposent d'un droit de réclamation 
              pour faire valoir leurs droits ou contester une décision administrative. 
              Ce service permet de traiter les réclamations de manière équitable et 
              transparente.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Actualités 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Nouvelle plateforme de réclamation en ligne</li>
                <li>Délais de traitement optimisés</li>
                <li>Suivi en temps réel des dossiers</li>
                <li>Médiation préalable obligatoire</li>
              </ul>
            </div>
          </div>

          {/* Types de Réclamations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Réclamations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Réclamations Administratives</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Délai de Réponse</th>
                        <th className="border p-2">Service Concerné</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Carrière</td>
                        <td className="border p-2">30 jours</td>
                        <td className="border p-2">DRH</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Rémunération</td>
                        <td className="border p-2">15 jours</td>
                        <td className="border p-2">Solde</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Affectation</td>
                        <td className="border p-2">45 jours</td>
                        <td className="border p-2">Personnel</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Formation</td>
                        <td className="border p-2">20 jours</td>
                        <td className="border p-2">Formation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Réclamations Sociales</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Délai de Réponse</th>
                        <th className="border p-2">Service Concerné</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Logement</td>
                        <td className="border p-2">30 jours</td>
                        <td className="border p-2">Action Sociale</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Santé</td>
                        <td className="border p-2">15 jours</td>
                        <td className="border p-2">CARFO</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Transport</td>
                        <td className="border p-2">20 jours</td>
                        <td className="border p-2">Services Généraux</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Procédure de Réclamation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure de Réclamation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">En Ligne</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Se connecter à l'Espace Agent</li>
                    <li className="mb-2">Sélectionner "Nouvelle réclamation"</li>
                    <li className="mb-2">Choisir le type de réclamation</li>
                    <li className="mb-2">Remplir le formulaire détaillé</li>
                    <li className="mb-2">Joindre les pièces justificatives</li>
                    <li className="mb-2">Soumettre la réclamation</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Sur Place</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Se présenter au bureau des réclamations</li>
                    <li className="mb-2">Remplir le formulaire de réclamation</li>
                    <li className="mb-2">Fournir les pièces justificatives</li>
                    <li className="mb-2">Obtenir un numéro de suivi</li>
                    <li className="mb-2">Attendre la réponse dans le délai indiqué</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Suivi des Réclamations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Suivi des Réclamations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Étapes de Traitement</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Réception et enregistrement</li>
                    <li className="mb-2">Analyse de recevabilité</li>
                    <li className="mb-2">Instruction du dossier</li>
                    <li className="mb-2">Proposition de décision</li>
                    <li className="mb-2">Validation hiérarchique</li>
                    <li className="mb-2">Notification de la décision</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Statuts Possibles</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>En attente de traitement</li>
                    <li>En cours d'instruction</li>
                    <li>En attente de validation</li>
                    <li>Décision rendue</li>
                    <li>Clôturé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Voies de Recours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voies de Recours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Recours Gracieux</h3>
                <ul className="list-disc ml-6">
                  <li>Auprès de l'autorité décisionnaire</li>
                  <li>Délai de 2 mois</li>
                  <li>Réponse motivée obligatoire</li>
                  <li>Possibilité de médiation</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Recours Hiérarchique</h3>
                <ul className="list-disc ml-6">
                  <li>Auprès du supérieur hiérarchique</li>
                  <li>Après recours gracieux</li>
                  <li>Délai de 2 mois</li>
                  <li>Décision définitive</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Médiation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Médiation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Processus de Médiation</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Demande de médiation</li>
                    <li className="mb-2">Désignation du médiateur</li>
                    <li className="mb-2">Réunion de médiation</li>
                    <li className="mb-2">Proposition de solution</li>
                    <li className="mb-2">Accord des parties</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Avantages</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Procédure rapide</li>
                    <li>Solution amiable</li>
                    <li>Confidentialité</li>
                    <li>Gratuité</li>
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
                Pour plus d'informations sur les réclamations :
              </p>
              <ul className="list-disc ml-6">
                <li>Service des Réclamations</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : reclamations@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
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
              <Link href="/fonction-publique/services/assistance" 
                className="text-blue-600 hover:text-blue-800">
                Assistance
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