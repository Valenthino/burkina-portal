'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Casier Judiciaire', href: '/services/citoyens/casier-judiciaire' }
];

export default function CasierJudiciairePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Casier Judiciaire
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">À propos du Casier Judiciaire</h2>
            <p className="mb-4">
              Le casier judiciaire est un document officiel qui recense les condamnations 
              pénales d'une personne. L'extrait de casier judiciaire (Bulletin N°3) 
              est souvent demandé pour des démarches administratives ou professionnelles.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'extrait de casier judiciaire a une 
                validité de 3 mois à compter de sa date d'établissement.
              </p>
            </div>
          </div>

          {/* Types de Bulletins */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Bulletins</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Bulletin N°1</h3>
                <p className="text-gray-600">
                  Réservé aux autorités judiciaires, il contient toutes les 
                  condamnations et décisions de justice.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bulletin N°2</h3>
                <p className="text-gray-600">
                  Délivré à certaines administrations publiques, il contient la 
                  plupart des condamnations à l'exception de certaines condamnations 
                  anciennes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bulletin N°3</h3>
                <p className="text-gray-600">
                  Délivré uniquement à la personne concernée, il mentionne les 
                  condamnations les plus graves.
                </p>
              </div>
            </div>
          </div>

          {/* Procédure de demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Procédure de Demande</h2>
            
            <h3 className="text-xl font-semibold mb-4">Documents Requis</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>CNIB en cours de validité</li>
              <li>Extrait d'acte de naissance</li>
              <li>Certificat de nationalité burkinabè</li>
              <li>Timbre fiscal</li>
              <li>Formulaire de demande dûment rempli</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Étapes de la Demande</h3>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-3">Se procurer le formulaire de demande au tribunal</li>
              <li className="mb-3">Remplir le formulaire avec les informations requises</li>
              <li className="mb-3">Joindre les documents nécessaires</li>
              <li className="mb-3">Payer les frais d'établissement</li>
              <li className="mb-3">Déposer le dossier complet</li>
              <li>Retirer l'extrait dans le délai indiqué</li>
            </ol>
          </div>

          {/* Lieux de délivrance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Lieux de Délivrance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Tribunaux de Grande Instance</h3>
                <ul className="list-disc pl-6">
                  <li>TGI de Ouagadougou</li>
                  <li>TGI de Bobo-Dioulasso</li>
                  <li>Autres TGI des chefs-lieux de région</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pour les Burkinabè à l'étranger</h3>
                <ul className="list-disc pl-6">
                  <li>Ambassades du Burkina Faso</li>
                  <li>Consulats du Burkina Faso</li>
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
                    <th className="px-6 py-3 text-left">Type de demande</th>
                    <th className="px-6 py-3 text-left">Tarif</th>
                    <th className="px-6 py-3 text-left">Délai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4">Procédure normale</td>
                    <td className="px-6 py-4">1 000 FCFA</td>
                    <td className="px-6 py-4">7 jours ouvrables</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Procédure d'urgence</td>
                    <td className="px-6 py-4">2 500 FCFA</td>
                    <td className="px-6 py-4">48 heures</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Utilisation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Utilisation</h2>
            <p className="mb-4">L'extrait de casier judiciaire est requis pour :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Les concours administratifs</li>
              <li>L'embauche dans certaines entreprises</li>
              <li>L'inscription à certaines formations</li>
              <li>L'obtention de certains agréments</li>
              <li>Les procédures d'adoption</li>
              <li>L'obtention de visa pour certains pays</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Quelle est la durée de validité ?</h3>
                <p className="text-gray-600">
                  L'extrait de casier judiciaire est valable 3 mois à compter de sa 
                  date d'établissement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Peut-on faire la demande pour quelqu'un d'autre ?</h3>
                <p className="text-gray-600">
                  Non, la demande doit être faite personnellement ou par un mandataire 
                  légal avec une procuration.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Comment faire effacer une mention du casier ?</h3>
                <p className="text-gray-600">
                  Une demande de réhabilitation peut être faite auprès du tribunal 
                  après un certain délai, selon la nature de la condamnation.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Service du casier judiciaire</h3>
                <p className="text-gray-600">
                  Téléphone : (+226) 25 30 XX XX<br />
                  Email : casier.judiciaire@justice.gov.bf
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