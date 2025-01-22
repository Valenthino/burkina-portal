'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Primaire', href: '/education/primaire' },
  { label: 'Inscription', href: '/education/primaire/inscription' }
];

export default function InscriptionPrimairePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Inscription à l'École Primaire au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Informations Générales</h2>
            <p className="mb-4">
              L'inscription à l'école primaire au Burkina Faso est obligatoire pour tous les enfants 
              âgés de 6 ans. L'enseignement primaire est gratuit dans les écoles publiques et 
              s'étend sur six années d'études.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Les inscriptions pour l'année scolaire 2024-2025 
                se déroulent du 1er juin au 31 juillet 2024.
              </p>
            </div>
          </div>

          {/* Conditions d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'Inscription</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Âge requis</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>6 ans révolus au 31 décembre de l'année en cours</li>
                <li>Possibilité de dérogation pour les enfants de 5 ans et demi</li>
                <li>Limite d'âge supérieure : 7 ans pour le CP1</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Documents nécessaires</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Extrait d'acte de naissance</li>
                <li>Certificat de résidence</li>
                <li>Carnet de vaccination à jour</li>
                <li>Photo d'identité récente</li>
                <li>Livret scolaire (en cas de transfert)</li>
              </ul>
            </div>
          </div>

          {/* Procédure d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure d'Inscription</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Étapes à suivre</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Retrait du dossier</strong>
                  <p className="text-gray-600">
                    Se présenter à la circonscription d'éducation de base (CEB) de votre zone 
                    ou à l'école de votre choix pour retirer le formulaire d'inscription.
                  </p>
                </li>
                <li>
                  <strong>Constitution du dossier</strong>
                  <p className="text-gray-600">
                    Rassembler tous les documents requis et remplir le formulaire d'inscription.
                  </p>
                </li>
                <li>
                  <strong>Dépôt du dossier</strong>
                  <p className="text-gray-600">
                    Déposer le dossier complet à l'école ou à la CEB selon les directives locales.
                  </p>
                </li>
                <li>
                  <strong>Validation de l'inscription</strong>
                  <p className="text-gray-600">
                    Attendre la confirmation de l'inscription et récupérer le certificat d'inscription.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* Carte scolaire */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Carte Scolaire</h2>
            <div className="space-y-4">
              <p>
                L'affectation des élèves se fait selon la carte scolaire qui définit le découpage 
                géographique des zones de recrutement des écoles. Les critères principaux sont :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La proximité du domicile</li>
                <li>La capacité d'accueil de l'école</li>
                <li>La présence de fratrie dans l'établissement</li>
                <li>Les situations particulières (handicap, etc.)</li>
              </ul>
            </div>
          </div>

          {/* Frais de scolarité */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Frais de Scolarité</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type d'École</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frais d'Inscription</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frais Annexes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">École Publique</td>
                    <td className="px-6 py-4 whitespace-nowrap">Gratuit</td>
                    <td className="px-6 py-4 whitespace-nowrap">2 000 FCFA (APE)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">École Privée Conventionnée</td>
                    <td className="px-6 py-4 whitespace-nowrap">15 000 - 25 000 FCFA</td>
                    <td className="px-6 py-4 whitespace-nowrap">5 000 - 10 000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">École Privée Non Conventionnée</td>
                    <td className="px-6 py-4 whitespace-nowrap">25 000 - 50 000 FCFA</td>
                    <td className="px-6 py-4 whitespace-nowrap">10 000 - 20 000 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * APE : Association des Parents d'Élèves
            </p>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respecter les délais d'inscription</li>
              <li>Fournir des documents authentiques et à jour</li>
              <li>Conserver une copie du dossier d'inscription</li>
              <li>Se renseigner sur les fournitures scolaires requises</li>
              <li>Participer à la réunion d'information de pré-rentrée</li>
            </ul>
          </div>

          {/* Contacts utiles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contacts Utiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Direction Provinciale</h3>
                <ul className="space-y-2">
                  <li>Téléphone : +226 25 30 XX XX</li>
                  <li>Email : dp.education@gov.bf</li>
                  <li>Adresse : [Adresse complète]</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Service des Inscriptions</h3>
                <ul className="space-y-2">
                  <li>Téléphone : +226 25 31 XX XX</li>
                  <li>Email : inscriptions@education.gov.bf</li>
                  <li>Horaires : 7h30 - 12h30 / 15h00 - 17h30</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/primaire/programme" className="text-blue-600 hover:underline">
                Programme scolaire du primaire
              </Link>
            </li>
            <li>
              <Link href="/education/primaire/fournitures" className="text-blue-600 hover:underline">
                Liste des fournitures scolaires
              </Link>
            </li>
            <li>
              <Link href="/education/primaire/cantines" className="text-blue-600 hover:underline">
                Services de restauration scolaire
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