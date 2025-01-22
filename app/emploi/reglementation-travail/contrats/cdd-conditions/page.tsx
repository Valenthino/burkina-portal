'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Conditions CDD', href: '/emploi/reglementation-travail/contrats/cdd-conditions' }
];

export default function CDDConditionsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Conditions d'Embauche en CDD au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cas de Recours au CDD</h2>
            <div className="space-y-4">
              <p>
                Le contrat à durée déterminée ne peut être conclu que pour l'exécution d'une tâche précise et temporaire, 
                et seulement dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remplacement d'un salarié absent ou dont le contrat est suspendu</li>
                <li>Accroissement temporaire de l'activité de l'entreprise</li>
                <li>Emplois à caractère saisonnier</li>
                <li>Travaux urgents nécessaires à la sécurité</li>
                <li>Commandes exceptionnelles à l'exportation</li>
                <li>Début d'activité dans l'entreprise</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Forme et Contenu du CDD</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Mentions obligatoires</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Motif précis du recours au CDD</li>
                <li>Nom et qualification du salarié remplacé (si remplacement)</li>
                <li>Date de début et de fin du contrat</li>
                <li>Poste occupé et qualification requise</li>
                <li>Durée de la période d'essai</li>
                <li>Montant de la rémunération</li>
                <li>Convention collective applicable</li>
                <li>Caisse de sécurité sociale</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Formalités</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contrat écrit obligatoire</li>
                <li>Transmission au salarié dans les 48h</li>
                <li>Signature des deux parties</li>
                <li>Déclaration à l'inspection du travail</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Durée et Renouvellement</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Durée initiale</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maximum 2 ans, tous renouvellements compris</li>
                <li>Minimum 6 mois (sauf cas particuliers)</li>
                <li>Terme précis obligatoire (sauf remplacement)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Conditions de renouvellement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Renouvellement possible une fois</li>
                <li>Accord écrit des parties</li>
                <li>Respect de la durée maximale</li>
                <li>Maintien du motif initial</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Période d'Essai</h2>
            <div className="space-y-4">
              <p>
                La période d'essai en CDD est proportionnelle à la durée du contrat :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Un jour par semaine dans la limite de 2 semaines pour les contrats inférieurs ou égaux à 6 mois</li>
                <li>Un mois maximum pour les contrats supérieurs à 6 mois</li>
                <li>Renouvellement non autorisé</li>
                <li>Rupture libre par l'une ou l'autre des parties</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Succession de CDD</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Délai de carence</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>1/3 de la durée du contrat pour les contrats de 14 jours ou plus</li>
                <li>1/2 de la durée du contrat pour les contrats de moins de 14 jours</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Exceptions au délai</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nouvelle absence du salarié remplacé</li>
                <li>Travaux urgents de sécurité</li>
                <li>Emplois saisonniers</li>
                <li>Contrats d'usage</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Sanctions et Requalification</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Requalification en CDI en cas de non-respect des règles</li>
              <li>Indemnité de requalification minimum d'un mois de salaire</li>
              <li>Rappel des droits liés au CDI</li>
              <li>Sanctions pénales possibles pour l'employeur</li>
              <li>Action possible devant le tribunal du travail</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/guide" className="text-blue-600 hover:underline">
                Guide des types de contrats
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/avantages-salariaux" className="text-blue-600 hover:underline">
                Avantages salariaux en CDD
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