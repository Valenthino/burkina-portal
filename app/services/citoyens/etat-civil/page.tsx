'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'État Civil', href: '/services/citoyens/etat-civil' }
];

export default function EtatCivilPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          État Civil
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services d'État Civil</h2>
            <p className="mb-4">
              L'état civil est un service public chargé de dresser les actes authentiques 
              concernant les naissances, mariages et décès des citoyens. Ces documents 
              sont essentiels pour établir l'identité et la situation familiale des 
              personnes.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> La déclaration des naissances est obligatoire 
                et doit être faite dans un délai de 2 mois. Passé ce délai, un jugement 
                supplétif sera nécessaire.
              </p>
            </div>
          </div>

          {/* Acte de Naissance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Acte de Naissance</h2>
            
            <h3 className="text-xl font-semibold mb-4">Déclaration de Naissance</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Documents Requis</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Certificat d'accouchement délivré par la structure sanitaire</li>
                <li>CNIB des parents</li>
                <li>Livret de famille (si disponible)</li>
              </ul>
              <h4 className="font-semibold mb-2">Délais</h4>
              <ul className="list-disc pl-6">
                <li>Délai légal : 2 mois à compter de la naissance</li>
                <li>Au-delà : procédure de jugement supplétif nécessaire</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">Copie d'Acte de Naissance</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Documents Requis</h4>
              <ul className="list-disc pl-6">
                <li>CNIB du demandeur</li>
                <li>Informations sur l'acte (numéro, année, lieu)</li>
              </ul>
            </div>
          </div>

          {/* Acte de Mariage */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Mariage Civil</h2>

            <h3 className="text-xl font-semibold mb-4">Publication des Bans</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Documents Requis</h4>
              <ul className="list-disc pl-6">
                <li>Copies intégrales d'actes de naissance des futurs époux</li>
                <li>CNIB des futurs époux</li>
                <li>Certificats de résidence</li>
                <li>Certificats de coutume (pour les étrangers)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">Célébration du Mariage</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Documents Supplémentaires</h4>
              <ul className="list-disc pl-6">
                <li>Certificat de publication des bans</li>
                <li>CNIB des témoins</li>
                <li>Option matrimoniale choisie</li>
              </ul>
            </div>
          </div>

          {/* Acte de Décès */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Déclaration de Décès</h2>

            <h3 className="text-xl font-semibold mb-4">Documents Requis</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Certificat de décès délivré par un médecin</li>
              <li>CNIB du défunt</li>
              <li>CNIB du déclarant</li>
              <li>Livret de famille (si disponible)</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm">
                <strong>Important :</strong> La déclaration de décès doit être faite 
                dans les 2 mois suivant le décès. Passé ce délai, un jugement 
                déclaratif de décès sera nécessaire.
              </p>
            </div>
          </div>

          {/* Centres d'État Civil */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Centres d'État Civil</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Centres Principaux</h3>
                <ul className="list-disc pl-6">
                  <li>Mairies centrales</li>
                  <li>Mairies d'arrondissement</li>
                  <li>Préfectures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Centres Secondaires</h3>
                <ul className="list-disc pl-6">
                  <li>Formations sanitaires</li>
                  <li>Villages administratifs</li>
                  <li>Missions diplomatiques (à l'étranger)</li>
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
                    <th className="px-6 py-3 text-left">Document</th>
                    <th className="px-6 py-3 text-left">Tarif normal</th>
                    <th className="px-6 py-3 text-left">Procédure d'urgence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4">Extrait d'acte de naissance</td>
                    <td className="px-6 py-4">200 FCFA</td>
                    <td className="px-6 py-4">500 FCFA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Copie intégrale</td>
                    <td className="px-6 py-4">500 FCFA</td>
                    <td className="px-6 py-4">1 000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Acte de mariage</td>
                    <td className="px-6 py-4">1 000 FCFA</td>
                    <td className="px-6 py-4">2 000 FCFA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Acte de décès</td>
                    <td className="px-6 py-4">200 FCFA</td>
                    <td className="px-6 py-4">500 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Comment obtenir un jugement supplétif ?</h3>
                <p className="text-gray-600">
                  La demande doit être faite auprès du tribunal de grande instance 
                  du lieu de naissance ou de résidence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Les extraits sont-ils valables à vie ?</h3>
                <p className="text-gray-600">
                  Les extraits d'acte de naissance ont une validité de 3 mois pour 
                  les procédures administratives.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Peut-on faire les démarches en ligne ?</h3>
                <p className="text-gray-600">
                  Certaines mairies proposent des services en ligne pour la demande 
                  d'extraits, mais la présence physique reste nécessaire pour les 
                  déclarations.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Service central</h3>
                <p className="text-gray-600">
                  Direction Générale de l'État Civil<br />
                  Téléphone : (+226) 25 30 XX XX<br />
                  Email : etatcivil@citoyens.gov.bf
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