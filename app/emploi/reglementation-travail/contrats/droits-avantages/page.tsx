'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Droits et avantages', href: '/emploi/reglementation-travail/contrats/droits-avantages' }
];

export default function DroitsAvantagesPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Droits et Avantages des Salariés au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits Fondamentaux</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Libertés individuelles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Liberté d'expression</li>
                <li>Respect de la vie privée</li>
                <li>Protection contre la discrimination</li>
                <li>Liberté syndicale</li>
                <li>Droit de grève</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Égalité de traitement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Égalité homme-femme</li>
                <li>Non-discrimination à l'embauche</li>
                <li>Égalité de rémunération pour un même travail</li>
                <li>Égalité d'accès à la formation</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Rémunération</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Salaire</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respect du SMIG</li>
                <li>Paiement mensuel obligatoire</li>
                <li>Bulletin de paie détaillé</li>
                <li>Protection contre les retenues illégales</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Primes et indemnités</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>13ème mois (selon convention)</li>
                <li>Prime d'ancienneté</li>
                <li>Prime de rendement</li>
                <li>Indemnités de transport</li>
                <li>Indemnités de logement</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Temps de Travail</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Durée légale</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>40 heures par semaine</li>
                <li>8 heures par jour</li>
                <li>Repos hebdomadaire obligatoire</li>
                <li>Pause déjeuner garantie</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Heures supplémentaires</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Majoration de 15% (41ème à 48ème heure)</li>
                <li>Majoration de 35% (au-delà de 48 heures)</li>
                <li>Majoration de 50% (travail de nuit)</li>
                <li>Majoration de 60% (jours fériés et dimanches)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Congés et Absences</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Congés payés</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>2,5 jours ouvrables par mois de travail</li>
                <li>Période de congé continue obligatoire</li>
                <li>Indemnité de congés payés</li>
                <li>Report possible sur accord</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Autres congés</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Congé maternité (14 semaines)</li>
                <li>Congé paternité (3 jours)</li>
                <li>Congés pour événements familiaux</li>
                <li>Congé maladie</li>
                <li>Congé formation</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Protection Sociale</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Sécurité sociale</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Affiliation obligatoire</li>
                <li>Couverture maladie</li>
                <li>Prestations familiales</li>
                <li>Assurance vieillesse</li>
                <li>Accidents du travail</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Santé et sécurité</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Médecine du travail</li>
                <li>Équipements de protection</li>
                <li>Formation à la sécurité</li>
                <li>Droit de retrait</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Formation et Évolution</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Formation continue</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit à la formation</li>
                <li>Plan de formation entreprise</li>
                <li>Congé individuel de formation</li>
                <li>Bilan de compétences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Évolution professionnelle</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Entretien professionnel</li>
                <li>Promotion interne</li>
                <li>Validation des acquis</li>
                <li>Mobilité professionnelle</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ces droits sont d'ordre public, on ne peut y déroger</li>
              <li>La convention collective peut prévoir des avantages supplémentaires</li>
              <li>Le règlement intérieur doit respecter ces droits fondamentaux</li>
              <li>Le non-respect de ces droits est sanctionné</li>
              <li>L'inspection du travail veille à leur application</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/temps-travail" className="text-blue-600 hover:underline">
                Temps de travail
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/avantages-salariaux" className="text-blue-600 hover:underline">
                Avantages salariaux
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/droits-collectifs" className="text-blue-600 hover:underline">
                Droits collectifs
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