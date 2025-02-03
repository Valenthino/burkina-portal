'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Certificat de Résidence', href: '/services/citoyens/certificat-residence' }
];

export default function CertificatResidencePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Certificat de Résidence
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">À propos du Certificat de Résidence</h2>
            <p className="mb-4">
              Le certificat de résidence est un document administratif qui atteste du 
              lieu de résidence d'une personne. Il est souvent requis pour diverses 
              démarches administratives, notamment l'obtention de la CNIB, du passeport, 
              ou l'inscription sur les listes électorales.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Le certificat de résidence a une validité 
                de 3 mois à compter de sa date d'établissement.
              </p>
            </div>
          </div>

          {/* Procédure de demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Procédure de Demande</h2>
            
            <h3 className="text-xl font-semibold mb-4">Documents Requis</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>CNIB en cours de validité</li>
              <li>Facture récente d'électricité ou d'eau (moins de 3 mois)</li>
              <li>Contrat de bail ou titre de propriété</li>
              <li>Attestation d'hébergement (si hébergé)</li>
              <li>Timbre fiscal</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Étapes de la Demande</h3>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-3">Se présenter à la mairie de son lieu de résidence</li>
              <li className="mb-3">Présenter les documents requis</li>
              <li className="mb-3">Payer les frais d'établissement</li>
              <li className="mb-3">Attendre la vérification par les services compétents</li>
              <li>Retirer le certificat</li>
            </ol>
          </div>

          {/* Cas Particuliers */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cas Particuliers</h2>
            
            <h3 className="text-xl font-semibold mb-4">Personnes Hébergées</h3>
            <div className="mb-6">
              <p className="mb-4">Documents supplémentaires requis :</p>
              <ul className="list-disc pl-6">
                <li>Attestation d'hébergement signée par l'hébergeant</li>
                <li>CNIB de l'hébergeant</li>
                <li>Justificatif de domicile de l'hébergeant</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">Étudiants</h3>
            <div className="mb-6">
              <p className="mb-4">Documents supplémentaires requis :</p>
              <ul className="list-disc pl-6">
                <li>Carte d'étudiant en cours de validité</li>
                <li>Attestation de résidence universitaire ou contrat de bail</li>
              </ul>
            </div>
          </div>

          {/* Lieux de délivrance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Lieux de Délivrance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Services Municipaux</h3>
                <ul className="list-disc pl-6">
                  <li>Mairies centrales</li>
                  <li>Mairies d'arrondissement</li>
                  <li>Services municipaux de proximité</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Autres Services</h3>
                <ul className="list-disc pl-6">
                  <li>Préfectures</li>
                  <li>Hauts-Commissariats</li>
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
                    <td className="px-6 py-4">500 FCFA</td>
                    <td className="px-6 py-4">2-3 jours ouvrables</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Procédure d'urgence</td>
                    <td className="px-6 py-4">1 000 FCFA</td>
                    <td className="px-6 py-4">24 heures</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Utilisation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Utilisation</h2>
            <p className="mb-4">Le certificat de résidence est requis pour :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>L'obtention de la CNIB</li>
              <li>La demande de passeport</li>
              <li>L'inscription sur les listes électorales</li>
              <li>L'ouverture d'un compte bancaire</li>
              <li>La scolarisation des enfants</li>
              <li>Les démarches auprès des services publics</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Quelle est la durée de validité ?</h3>
                <p className="text-gray-600">
                  Le certificat de résidence est valable 3 mois à compter de sa date 
                  d'établissement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Peut-on faire la demande pour quelqu'un d'autre ?</h3>
                <p className="text-gray-600">
                  Non, la présence physique du demandeur est obligatoire pour 
                  l'établissement du certificat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Que faire en cas de déménagement ?</h3>
                <p className="text-gray-600">
                  Il faut demander un nouveau certificat de résidence auprès de la 
                  mairie de votre nouveau lieu de résidence.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Service d'information</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : info@mairie.gov.bf
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