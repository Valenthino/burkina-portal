'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Guide des contrats', href: '/emploi/reglementation-travail/contrats/guide' }
];

export default function GuideContratsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Guide des Types de Contrats de Travail au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contrat à Durée Indéterminée (CDI)</h2>
            <div className="space-y-4">
              <p>
                Le CDI est la forme normale et générale de la relation de travail. Il peut être conclu par écrit 
                ou verbalement, mais l'écrit est fortement recommandé pour des raisons de preuve.
              </p>
              <h3 className="text-xl font-semibold mb-3">Caractéristiques principales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pas de terme précis défini à l'avance</li>
                <li>Période d'essai possible</li>
                <li>Plus grande stabilité pour le salarié</li>
                <li>Possibilité d'évolution professionnelle</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">Avantages</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sécurité de l'emploi</li>
                <li>Accès facilité au crédit</li>
                <li>Meilleure protection sociale</li>
                <li>Évolution de carrière facilitée</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contrat à Durée Déterminée (CDD)</h2>
            <div className="space-y-4">
              <p>
                Le CDD est un contrat d'exception qui ne peut être conclu que dans des cas précis prévus par la loi.
                Il doit obligatoirement faire l'objet d'un écrit.
              </p>
              <h3 className="text-xl font-semibold mb-3">Cas de recours autorisés</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remplacement d'un salarié absent</li>
                <li>Accroissement temporaire d'activité</li>
                <li>Emplois saisonniers</li>
                <li>Secteurs d'activité définis</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">Règles spécifiques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Durée maximale : 2 ans</li>
                <li>Renouvellement limité</li>
                <li>Période d'essai proportionnelle</li>
                <li>Indemnité de précarité en fin de contrat</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contrat d'Apprentissage</h2>
            <div className="space-y-4">
              <p>
                Le contrat d'apprentissage est un contrat de formation en alternance qui permet à un jeune 
                d'acquérir une qualification professionnelle.
              </p>
              <h3 className="text-xl font-semibold mb-3">Conditions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Âge : 15 à 29 ans</li>
                <li>Formation théorique et pratique</li>
                <li>Suivi par un maître d'apprentissage</li>
                <li>Rémunération progressive</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">Avantages</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Formation diplômante</li>
                <li>Expérience professionnelle</li>
                <li>Rémunération pendant la formation</li>
                <li>Exonérations pour l'employeur</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contrat de Professionnalisation</h2>
            <div className="space-y-4">
              <p>
                Le contrat de professionnalisation vise l'insertion ou la réinsertion professionnelle 
                par l'acquisition d'une qualification professionnelle.
              </p>
              <h3 className="text-xl font-semibold mb-3">Public concerné</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Jeunes de 16 à 25 ans</li>
                <li>Demandeurs d'emploi de 26 ans et plus</li>
                <li>Bénéficiaires de minima sociaux</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">Caractéristiques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Formation en alternance</li>
                <li>Durée : 6 à 12 mois</li>
                <li>Qualification reconnue</li>
                <li>Accompagnement personnalisé</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contrats Spécifiques</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Contrat saisonnier</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lié aux saisons</li>
                <li>Durée limitée</li>
                <li>Reconduction possible</li>
                <li>Secteurs spécifiques (agriculture, tourisme)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Contrat d'usage</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secteurs d'activité définis</li>
                <li>Emplois temporaires par nature</li>
                <li>Pas de durée maximale</li>
                <li>Succession possible</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Contrat à temps partiel</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Durée inférieure à la durée légale</li>
                <li>Répartition des horaires fixée</li>
                <li>Heures complémentaires encadrées</li>
                <li>Égalité de traitement</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Le CDI est la norme, les autres contrats sont l'exception</li>
              <li>Chaque type de contrat répond à des besoins spécifiques</li>
              <li>Les règles de forme doivent être strictement respectées</li>
              <li>La requalification en CDI est possible en cas d'irrégularité</li>
              <li>Les droits varient selon le type de contrat</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/cdd-conditions" className="text-blue-600 hover:underline">
                Conditions d'embauche en CDD
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/droits-avantages" className="text-blue-600 hover:underline">
                Droits et avantages des salariés
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/rupture" className="text-blue-600 hover:underline">
                Rupture du contrat de travail
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