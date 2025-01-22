'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Carrière', href: '/fonction-publique/carriere' },
  { label: 'Mutations', href: '/fonction-publique/carriere/mutations' }
];

export default function MutationsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Mutations dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              La mutation est un changement d'affectation d'un fonctionnaire au sein de 
              l'administration publique burkinabè. Elle peut intervenir à la demande de 
              l'agent ou dans l'intérêt du service, conformément aux dispositions de la 
              loi n°081-2015/CNT.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Calendrier 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Dépôt des demandes de mutation : du 1er février au 31 mars 2024</li>
                <li>Commission de mutation : avril 2024</li>
                <li>Prise de service : septembre 2024</li>
              </ul>
            </div>
          </div>

          {/* Types de Mutations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Mutations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Mutation sur Demande</h3>
                <div className="space-y-4">
                  <p>Initiée par l'agent pour des raisons personnelles ou professionnelles.</p>
                  <ul className="list-disc ml-6">
                    <li>Rapprochement familial</li>
                    <li>Raisons de santé</li>
                    <li>Convenances personnelles</li>
                    <li>Développement de carrière</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Mutation d'Office</h3>
                <div className="space-y-4">
                  <p>Décidée par l'administration dans l'intérêt du service.</p>
                  <ul className="list-disc ml-6">
                    <li>Nécessités de service</li>
                    <li>Réorganisation administrative</li>
                    <li>Création de nouveaux services</li>
                    <li>Mesures disciplinaires</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conditions de Mutation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions de Mutation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Générales</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Être fonctionnaire titulaire</li>
                  <li>Avoir accompli au moins 2 ans dans le poste actuel</li>
                  <li>Ne pas être sous le coup d'une sanction disciplinaire</li>
                  <li>Avoir une évaluation positive</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Critères de Priorité</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Critère</th>
                        <th className="border p-2">Points</th>
                        <th className="border p-2">Observations</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Ancienneté dans le poste</td>
                        <td className="border p-2">1-5 points</td>
                        <td className="border p-2">1 point par année</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Rapprochement familial</td>
                        <td className="border p-2">3 points</td>
                        <td className="border p-2">Conjoint fonctionnaire</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Raisons de santé</td>
                        <td className="border p-2">5 points</td>
                        <td className="border p-2">Certificat médical requis</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Zone difficile</td>
                        <td className="border p-2">2 points/an</td>
                        <td className="border p-2">Maximum 6 points</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Procédure de Mutation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure de Mutation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Constitution du Dossier</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Demande manuscrite timbrée</li>
                    <li>Acte de nomination ou de titularisation</li>
                    <li>Certificat de prise de service</li>
                    <li>Dernière décision d'affectation</li>
                    <li>Pièces justificatives selon le motif</li>
                    <li>Avis motivé du supérieur hiérarchique</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Circuit de la Demande</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Dépôt auprès du supérieur hiérarchique</li>
                    <li className="mb-2">Transmission à la DRH du ministère</li>
                    <li className="mb-2">Examen par la commission de mutation</li>
                    <li className="mb-2">Décision de mutation</li>
                    <li className="mb-2">Notification et ordre de mission</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Délais et Périodes */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Délais et Périodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Délais Réglementaires</h3>
                <ul className="list-disc ml-6">
                  <li>Dépôt des demandes : 2 mois</li>
                  <li>Traitement du dossier : 1 mois</li>
                  <li>Prise de service : 15 jours maximum</li>
                  <li>Passation de service : 1 semaine</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Périodes de Mutation</h3>
                <ul className="list-disc ml-6">
                  <li>Grande mutation : septembre</li>
                  <li>Mutations ponctuelles : toute l'année</li>
                  <li>Mutations d'office : selon nécessité</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Droits et Obligations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits et Obligations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Droits du Muté</h3>
                <ul className="list-disc ml-6">
                  <li>Frais de transport</li>
                  <li>Indemnité de déménagement</li>
                  <li>Délai de route</li>
                  <li>Maintien du salaire</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Obligations</h3>
                <ul className="list-disc ml-6">
                  <li>Respect des délais</li>
                  <li>Passation de service</li>
                  <li>Prise effective du nouveau poste</li>
                  <li>Rapport de prise de service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recours et Contentieux */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Recours et Contentieux</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Types de Recours</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Recours gracieux : auprès de l'autorité de décision</li>
                    <li>Recours hiérarchique : auprès du ministre</li>
                    <li>Recours contentieux : tribunal administratif</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Délais de Recours</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Recours gracieux : 2 mois</li>
                    <li>Recours contentieux : 2 mois après rejet explicite ou implicite</li>
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
                Pour plus d'informations sur les mutations :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction des Ressources Humaines</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : mutations@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/carriere/avancements" 
                className="text-blue-600 hover:text-blue-800">
                Avancements
              </Link>
              <Link href="/fonction-publique/administration/conges" 
                className="text-blue-600 hover:text-blue-800">
                Congés et absences
              </Link>
              <Link href="/fonction-publique/administration/statut" 
                className="text-blue-600 hover:text-blue-800">
                Statut général
              </Link>
              <Link href="/fonction-publique/services/documents" 
                className="text-blue-600 hover:text-blue-800">
                Documents administratifs
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