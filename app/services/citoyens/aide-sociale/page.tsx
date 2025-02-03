'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Aide Sociale', href: '/services/citoyens/aide-sociale' }
];

export default function AideSocialePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Aide Sociale
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">L'Aide Sociale au Burkina Faso</h2>
            <p className="mb-4">
              L'aide sociale est un ensemble de prestations et services destinés à aider 
              les personnes et les familles en situation de vulnérabilité. Elle vise à 
              garantir un niveau de vie minimal et à favoriser l'insertion sociale et 
              professionnelle.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'aide sociale est un droit pour toute 
                personne résidant au Burkina Faso qui remplit les conditions d'attribution.
              </p>
            </div>
          </div>

          {/* Types d'aide */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types d'Aide Sociale</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Aide Financière</h3>
                <ul className="list-disc pl-6">
                  <li>Allocations familiales</li>
                  <li>Aide d'urgence</li>
                  <li>Soutien au logement</li>
                  <li>Aide alimentaire</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Aide Médicale</h3>
                <ul className="list-disc pl-6">
                  <li>Prise en charge des soins</li>
                  <li>Médicaments gratuits</li>
                  <li>Assistance aux personnes handicapées</li>
                  <li>Soins aux personnes âgées</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Aide à l'Éducation</h3>
                <ul className="list-disc pl-6">
                  <li>Bourses scolaires</li>
                  <li>Fournitures scolaires</li>
                  <li>Cantines scolaires</li>
                  <li>Transport scolaire</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bénéficiaires */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Bénéficiaires</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Personnes Éligibles</h3>
                <ul className="list-disc pl-6">
                  <li>Personnes âgées</li>
                  <li>Personnes handicapées</li>
                  <li>Familles nombreuses</li>
                  <li>Femmes chefs de famille</li>
                  <li>Enfants vulnérables</li>
                  <li>Personnes sans emploi</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions d'Éligibilité</h3>
                <ul className="list-disc pl-6">
                  <li>Résidence au Burkina Faso</li>
                  <li>Situation de précarité avérée</li>
                  <li>Revenus inférieurs au seuil fixé</li>
                  <li>Absence de soutien familial suffisant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Procédures de demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Comment Faire une Demande</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents Requis</h3>
                <ul className="list-disc pl-6">
                  <li>CNIB ou passeport</li>
                  <li>Certificat de résidence</li>
                  <li>Justificatifs de revenus</li>
                  <li>Certificat médical (si nécessaire)</li>
                  <li>Attestation de situation familiale</li>
                  <li>Photos d'identité récentes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Étapes de la Demande</h3>
                <ol className="list-decimal pl-6">
                  <li className="mb-2">Retirer le formulaire de demande auprès du service social</li>
                  <li className="mb-2">Constituer le dossier complet</li>
                  <li className="mb-2">Déposer le dossier au bureau d'action sociale</li>
                  <li className="mb-2">Entretien avec un travailleur social</li>
                  <li>Attendre la décision de la commission</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Programmes spéciaux */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Programmes Spéciaux</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Programme d'Urgence</h3>
                <p className="text-gray-600 mb-4">
                  Aide immédiate pour les situations de crise (catastrophes naturelles, 
                  déplacements forcés, etc.).
                </p>
                <ul className="list-disc pl-6">
                  <li>Hébergement d'urgence</li>
                  <li>Distribution alimentaire</li>
                  <li>Soins médicaux d'urgence</li>
                  <li>Assistance psychologique</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Programme d'Insertion</h3>
                <p className="text-gray-600 mb-4">
                  Accompagnement vers l'autonomie sociale et professionnelle.
                </p>
                <ul className="list-disc pl-6">
                  <li>Formation professionnelle</li>
                  <li>Aide à la recherche d'emploi</li>
                  <li>Soutien à la création d'activité</li>
                  <li>Accompagnement social</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Droits et recours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits et Recours</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Droits des Bénéficiaires</h3>
                <ul className="list-disc pl-6">
                  <li>Confidentialité des informations</li>
                  <li>Traitement équitable</li>
                  <li>Information sur les décisions</li>
                  <li>Accès au dossier</li>
                  <li>Droit de recours</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Procédures de Recours</h3>
                <ul className="list-disc pl-6">
                  <li>Recours gracieux</li>
                  <li>Recours hiérarchique</li>
                  <li>Médiation sociale</li>
                  <li>Recours contentieux</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Quel est le délai de traitement d'une demande ?</h3>
                <p className="text-gray-600">
                  Le délai moyen est de 2 à 3 mois, mais peut varier selon le type d'aide 
                  et l'urgence de la situation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">L'aide peut-elle être renouvelée ?</h3>
                <p className="text-gray-600">
                  Oui, l'aide peut être renouvelée sur demande et après réévaluation de 
                  la situation du bénéficiaire.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Peut-on cumuler différentes aides ?</h3>
                <p className="text-gray-600">
                  Certaines aides sont cumulables selon votre situation et les critères 
                  d'attribution. Un travailleur social pourra vous conseiller.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Direction de l'Action Sociale</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : action.sociale@gov.bf
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