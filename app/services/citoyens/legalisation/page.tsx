'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Légalisation de Documents', href: '/services/citoyens/legalisation' }
];

export default function LegalisationPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Légalisation de Documents
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">La Légalisation de Documents</h2>
            <p className="mb-4">
              La légalisation de documents est une procédure administrative qui permet 
              d'authentifier la signature d'un document ou de certifier conforme une 
              copie à l'original. Cette démarche est souvent nécessaire pour donner 
              une valeur juridique à vos documents.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> La légalisation doit être effectuée en 
                personne, car elle nécessite la présence du signataire ou du détenteur 
                du document original.
              </p>
            </div>
          </div>

          {/* Types de légalisation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Légalisation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Légalisation de Signature</h3>
                <p className="text-gray-600 mb-4">
                  Authentification de la signature d'une personne sur un document.
                </p>
                <ul className="list-disc pl-6">
                  <li>Documents administratifs</li>
                  <li>Autorisations parentales</li>
                  <li>Procurations</li>
                  <li>Attestations sur l'honneur</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Certification Conforme</h3>
                <p className="text-gray-600 mb-4">
                  Attestation qu'une copie est conforme à l'original.
                </p>
                <ul className="list-disc pl-6">
                  <li>Diplômes</li>
                  <li>Actes d'état civil</li>
                  <li>Documents d'identité</li>
                  <li>Documents officiels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Procédure */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Procédure de Légalisation</h2>
            
            <h3 className="text-xl font-semibold mb-4">Documents Requis</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Document à légaliser</li>
              <li>Original du document (pour la certification conforme)</li>
              <li>Pièce d'identité en cours de validité (CNIB ou passeport)</li>
              <li>Justificatif de domicile (pour certaines mairies)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Étapes de la Légalisation</h3>
            <ol className="list-decimal pl-6">
              <li className="mb-3">Se présenter au service de légalisation</li>
              <li className="mb-3">Présenter les documents requis</li>
              <li className="mb-3">Signer le document devant l'agent (pour la légalisation de signature)</li>
              <li className="mb-3">Payer les frais de légalisation</li>
              <li>Récupérer le document légalisé</li>
            </ol>
          </div>

          {/* Où faire légaliser */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Où Faire Légaliser ses Documents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">En Zone Urbaine</h3>
                <ul className="list-disc pl-6">
                  <li>Mairies centrales</li>
                  <li>Mairies d'arrondissement</li>
                  <li>Services administratifs spécialisés</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">En Zone Rurale</h3>
                <ul className="list-disc pl-6">
                  <li>Mairies des communes rurales</li>
                  <li>Préfectures</li>
                  <li>Sous-préfectures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarifs */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tarifs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type de Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tarif
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Délai
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Légalisation de signature</td>
                    <td className="px-6 py-4 whitespace-nowrap">200 FCFA par document</td>
                    <td className="px-6 py-4 whitespace-nowrap">Immédiat</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Certification conforme</td>
                    <td className="px-6 py-4 whitespace-nowrap">200 FCFA par page</td>
                    <td className="px-6 py-4 whitespace-nowrap">Immédiat</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Traitement urgent</td>
                    <td className="px-6 py-4 whitespace-nowrap">500 FCFA par document</td>
                    <td className="px-6 py-4 whitespace-nowrap">Prioritaire</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cas particuliers */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cas Particuliers</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents en Langue Étrangère</h3>
                <p className="text-gray-600">
                  Les documents en langue étrangère doivent être traduits par un 
                  traducteur assermenté avant la légalisation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents pour l'Étranger</h3>
                <p className="text-gray-600">
                  Pour une utilisation à l'étranger, une légalisation supplémentaire 
                  peut être nécessaire auprès du Ministère des Affaires Étrangères.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Peut-on faire légaliser tous types de documents ?</h3>
                <p className="text-gray-600">
                  Non, certains documents comme les originaux d'actes d'état civil ou 
                  les documents commerciaux ne peuvent pas être légalisés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Quelle est la durée de validité d'une légalisation ?</h3>
                <p className="text-gray-600">
                  La légalisation n'a pas de durée de validité en soi, mais celle-ci 
                  dépend de la validité du document légalisé.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Peut-on faire légaliser un document pour quelqu'un d'autre ?</h3>
                <p className="text-gray-600">
                  Pour la légalisation de signature, la personne concernée doit être 
                  présente. Pour la certification conforme, un tiers peut présenter le document.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Service de Légalisation</h3>
                <p className="text-gray-600">
                  Téléphone : (+226) 25 30 XX XX<br />
                  Email : legalisation@gov.bf
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