'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction Publique', href: '/fonction-publique' },
  { label: 'Concours', href: '/fonction-publique/concours' }
];

export default function ConcoursPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Concours de la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Les concours de la Fonction Publique constituent la voie principale d'accès 
              aux emplois publics au Burkina Faso. Ils sont organisés annuellement par 
              le Ministère de la Fonction Publique pour recruter les agents publics dans 
              les différents corps de l'État.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Les inscriptions aux concours directs 
                session 2024 sont ouvertes du 15 février au 15 mars 2024. Les épreuves 
                se dérouleront du 1er au 30 mai 2024.
              </p>
            </div>
          </div>

          {/* Types de concours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Concours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Concours Directs</h3>
                <p className="text-gray-600 mb-4">
                  Ouverts aux candidats externes répondant aux conditions de diplôme 
                  et d'âge requises.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Concours de catégorie A</li>
                  <li>Concours de catégorie B</li>
                  <li>Concours de catégorie C</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Concours Professionnels</h3>
                <p className="text-gray-600 mb-4">
                  Réservés aux fonctionnaires en activité pour l'avancement en grade 
                  ou le changement de corps.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Concours d'avancement</li>
                  <li>Concours de spécialisation</li>
                  <li>Concours de reclassement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conditions d'accès */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'Accès</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Générales</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Être de nationalité burkinabè</li>
                  <li>Jouir de ses droits civiques</li>
                  <li>Être de bonne moralité</li>
                  <li>Remplir les conditions d'aptitude physique exigées</li>
                  <li>Être âgé de 18 ans au moins et de 37 ans au plus</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions de Diplôme</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Catégorie A : BAC + 4 minimum</li>
                  <li>Catégorie B : BAC + 2 minimum</li>
                  <li>Catégorie C : BEPC minimum</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Procédure d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure d'Inscription</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Inscription en Ligne</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Se connecter à la plateforme e-Concours</li>
                  <li>Créer un compte utilisateur</li>
                  <li>Remplir le formulaire d'inscription</li>
                  <li>Télécharger les pièces justificatives</li>
                  <li>Payer les frais d'inscription</li>
                  <li>Imprimer la fiche d'inscription</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents Requis</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CNIB ou passeport en cours de validité</li>
                  <li>Diplôme requis ou attestation</li>
                  <li>Certificat de nationalité</li>
                  <li>Casier judiciaire</li>
                  <li>Certificat de visite et contre-visite</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Calendrier des épreuves */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Calendrier des Épreuves 2024</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date des épreuves
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Centres d'examen
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Catégorie A</td>
                    <td className="px-6 py-4 whitespace-nowrap">1er - 5 mai 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">Ouagadougou, Bobo-Dioulasso</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Catégorie B</td>
                    <td className="px-6 py-4 whitespace-nowrap">8 - 12 mai 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">Tous les chefs-lieux de région</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Catégorie C</td>
                    <td className="px-6 py-4 whitespace-nowrap">15 - 20 mai 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">Tous les chefs-lieux de région</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Préparation aux concours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Préparation aux Concours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Ressources Disponibles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Annales des concours précédents</li>
                  <li>Programmes des épreuves</li>
                  <li>Guides de préparation</li>
                  <li>Cours en ligne</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Centres de Préparation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ENAM - École Nationale d'Administration</li>
                  <li>Centres privés agréés</li>
                  <li>Bibliothèques publiques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact et assistance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Service des Concours</h3>
                <ul className="space-y-2">
                  <li>Téléphone : (+226) 25 33 06 85</li>
                  <li>Email : concours@fonction-publique.gov.bf</li>
                  <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Assistance en Ligne</h3>
                <ul className="space-y-2">
                  <li>Support technique : support@e-concours.gov.bf</li>
                  <li>WhatsApp : (+226) 70 00 00 00</li>
                  <li>Facebook : Fonction Publique BF</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Documents utiles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Documents Utiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Communiqué d'ouverture 2024
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Guide du candidat
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Programme des épreuves
              </a>
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