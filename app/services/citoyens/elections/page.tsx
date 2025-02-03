'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Élections', href: '/services/citoyens/elections' }
];

export default function ElectionsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Élections et Inscription sur les Listes Électorales
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Participation aux Élections</h2>
            <p className="mb-4">
              Le droit de vote est un droit fondamental qui permet aux citoyens de 
              participer à la vie démocratique du Burkina Faso. Pour exercer ce droit, 
              il est nécessaire d'être inscrit sur les listes électorales.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'inscription sur les listes électorales 
                est obligatoire pour tous les citoyens burkinabè âgés de 18 ans et plus.
              </p>
            </div>
          </div>

          {/* Conditions d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'Inscription</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Générales</h3>
                <ul className="list-disc pl-6">
                  <li>Être de nationalité burkinabè</li>
                  <li>Être âgé d'au moins 18 ans</li>
                  <li>Jouir de ses droits civiques et politiques</li>
                  <li>Résider dans la commune ou y avoir son domicile principal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cas Particuliers</h3>
                <ul className="list-disc pl-6">
                  <li>Les Burkinabè de l'étranger peuvent s'inscrire auprès des représentations diplomatiques</li>
                  <li>Les militaires et forces de sécurité ont des dispositions spécifiques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Procédure d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Procédure d'Inscription</h2>
            
            <h3 className="text-xl font-semibold mb-4">Documents Requis</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>CNIB en cours de validité</li>
              <li>Certificat de résidence (pour les nouveaux résidents)</li>
              <li>Photo d'identité récente</li>
              <li>Ancienne carte d'électeur (en cas de renouvellement)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Étapes de l'Inscription</h3>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-3">Se rendre au bureau d'inscription de sa localité</li>
              <li className="mb-3">Présenter les documents requis</li>
              <li className="mb-3">Remplir le formulaire d'inscription</li>
              <li className="mb-3">Prise de photo et données biométriques</li>
              <li>Retrait de la carte d'électeur</li>
            </ol>
          </div>

          {/* Périodes d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Périodes d'Inscription</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Révision Annuelle</h3>
                <p className="text-gray-600">
                  Les listes électorales font l'objet d'une révision annuelle du 1er 
                  janvier au 31 décembre.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Révision Exceptionnelle</h3>
                <p className="text-gray-600">
                  Des périodes de révision exceptionnelle peuvent être organisées avant 
                  les élections.
                </p>
              </div>
            </div>
          </div>

          {/* Types d'élections */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types d'Élections</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Élections Nationales</h3>
                <ul className="list-disc pl-6">
                  <li>Élection présidentielle</li>
                  <li>Élections législatives</li>
                  <li>Référendum</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Élections Locales</h3>
                <ul className="list-disc pl-6">
                  <li>Élections municipales</li>
                  <li>Élections régionales</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Le jour du vote */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Le Jour du Vote</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents à Présenter</h3>
                <ul className="list-disc pl-6">
                  <li>Carte d'électeur</li>
                  <li>CNIB ou passeport en cours de validité</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Procédure de Vote</h3>
                <ol className="list-decimal pl-6">
                  <li>Vérification de l'identité</li>
                  <li>Émargement sur la liste électorale</li>
                  <li>Vote dans l'isoloir</li>
                  <li>Dépôt du bulletin dans l'urne</li>
                  <li>Signature du registre</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Bureaux d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Où s'Inscrire</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">En Zone Urbaine</h3>
                <ul className="list-disc pl-6">
                  <li>Commissions électorales communales</li>
                  <li>Mairies d'arrondissement</li>
                  <li>Antennes de la CENI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">En Zone Rurale</h3>
                <ul className="list-disc pl-6">
                  <li>Mairies des communes rurales</li>
                  <li>Préfectures</li>
                  <li>Centres d'inscription temporaires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Peut-on voter sans carte d'électeur ?</h3>
                <p className="text-gray-600">
                  Non, la carte d'électeur est obligatoire pour voter, accompagnée 
                  d'une pièce d'identité valide.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Comment vérifier son inscription ?</h3>
                <p className="text-gray-600">
                  Vous pouvez vérifier votre inscription sur les listes électorales 
                  auprès de votre mairie ou en ligne sur le site de la CENI.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Que faire en cas de déménagement ?</h3>
                <p className="text-gray-600">
                  Il faut demander son transfert d'inscription auprès de la commission 
                  électorale de votre nouveau lieu de résidence.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Commission Électorale (CENI)</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : info@ceni.gov.bf
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