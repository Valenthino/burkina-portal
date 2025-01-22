'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Secondaire', href: '/education/secondaire' },
  { label: 'Bourses', href: '/education/secondaire/bourses' }
];

export default function BoursesSecondairePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Bourses et Aides Financières pour l'Enseignement Secondaire
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Le système de bourses au Burkina Faso vise à faciliter l'accès à l'éducation 
              secondaire pour les élèves méritants et/ou issus de milieux défavorisés. Ces aides 
              sont gérées par la Direction des Bourses et Aides Financières (DBAF).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> La campagne de bourses pour l'année scolaire 
                2024-2025 sera ouverte du 1er mars au 30 avril 2024.
              </p>
            </div>
          </div>

          {/* Types de bourses */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Bourses</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Bourses d'Excellence</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pour les élèves ayant obtenu une moyenne ≥ 16/20</li>
                  <li>Couvre les frais de scolarité et une allocation mensuelle</li>
                  <li>Renouvelable sous condition de maintien des résultats</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Bourses Sociales</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Basées sur les critères sociaux et le revenu familial</li>
                  <li>Couvre partiellement les frais de scolarité</li>
                  <li>Priorité aux zones rurales et défavorisées</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Bourses pour Filles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Programme spécial pour encourager l'éducation des filles</li>
                  <li>Inclut un soutien pour les fournitures et l'hébergement</li>
                  <li>Accompagnement et tutorat disponibles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Critères d'éligibilité */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Critères d'Éligibilité</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Conditions générales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Être de nationalité burkinabè</li>
                <li>Être inscrit dans un établissement reconnu</li>
                <li>Ne pas bénéficier d'une autre bourse</li>
                <li>Avoir moins de 20 ans pour le premier cycle</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Critères académiques</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left">Type de Bourse</th>
                      <th className="px-6 py-3 text-left">Moyenne Minimale</th>
                      <th className="px-6 py-3 text-left">Autres Conditions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Excellence</td>
                      <td className="px-6 py-4">16/20</td>
                      <td className="px-6 py-4">Aucun redoublement</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Sociale</td>
                      <td className="px-6 py-4">12/20</td>
                      <td className="px-6 py-4">Situation familiale</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Filles</td>
                      <td className="px-6 py-4">13/20</td>
                      <td className="px-6 py-4">Zone rurale prioritaire</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Procédure de demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure de Demande</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Étapes à suivre</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Retrait du dossier</strong>
                  <p className="text-gray-600">
                    Disponible dans les établissements ou en ligne sur le portail des bourses.
                  </p>
                </li>
                <li>
                  <strong>Constitution du dossier</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Formulaire de demande</li>
                    <li>Acte de naissance</li>
                    <li>Certificat de scolarité</li>
                    <li>Bulletins de notes</li>
                    <li>Justificatifs de revenus des parents</li>
                  </ul>
                </li>
                <li>
                  <strong>Dépôt du dossier</strong>
                  <p className="text-gray-600">
                    À déposer à la Direction des Bourses ou dans les directions régionales.
                  </p>
                </li>
                <li>
                  <strong>Suivi de la demande</strong>
                  <p className="text-gray-600">
                    Consultation des résultats en ligne ou par affichage.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* Montants et versements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Montants et Versements</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left">Type de Bourse</th>
                      <th className="px-6 py-3 text-left">Montant Annuel</th>
                      <th className="px-6 py-3 text-left">Modalités de Versement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Excellence</td>
                      <td className="px-6 py-4">250 000 FCFA</td>
                      <td className="px-6 py-4">Trimestriel</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Sociale</td>
                      <td className="px-6 py-4">150 000 FCFA</td>
                      <td className="px-6 py-4">Semestriel</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Filles</td>
                      <td className="px-6 py-4">200 000 FCFA</td>
                      <td className="px-6 py-4">Trimestriel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respecter scrupuleusement les délais de dépôt</li>
              <li>Fournir des documents authentiques et à jour</li>
              <li>Conserver une copie du dossier</li>
              <li>Suivre régulièrement l'état d'avancement</li>
              <li>Signaler tout changement de situation</li>
            </ul>
          </div>

          {/* Contacts et assistance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contacts et Assistance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Direction des Bourses</h3>
                <ul className="space-y-2">
                  <li>Tél : +226 25 30 XX XX</li>
                  <li>Email : bourses@education.gov.bf</li>
                  <li>Adresse : [Adresse complète]</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Assistance en ligne</h3>
                <ul className="space-y-2">
                  <li>Site web : www.bourses.gov.bf</li>
                  <li>Plateforme d'assistance : support.bourses.gov.bf</li>
                  <li>Numéro vert : 80 00 XX XX</li>
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
              <Link href="/education/secondaire/etablissements" className="text-blue-600 hover:underline">
                Liste des établissements
              </Link>
            </li>
            <li>
              <Link href="/education/secondaire/orientation" className="text-blue-600 hover:underline">
                Orientation scolaire
              </Link>
            </li>
            <li>
              <Link href="/education/superieur/bourses" className="text-blue-600 hover:underline">
                Bourses de l'enseignement supérieur
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