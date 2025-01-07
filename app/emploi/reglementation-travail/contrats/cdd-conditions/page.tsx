'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Conditions d\'embauche en CDD', href: '/emploi/reglementation-travail/contrats/cdd-conditions' }
];

export default function CddConditionsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">
          Un employeur peut-il embaucher en contrat à durée déterminée (CDD) ?
        </h1>
        
        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Principe général</h2>
            <p className="mb-4">
              Le contrat à durée déterminée (CDD) est un contrat d'exception. 
              Il ne peut être conclu que pour l'exécution d'une tâche précise et temporaire, 
              et uniquement dans les cas prévus par la loi.
            </p>
            <p className="mb-4">
              Le CDD ne peut avoir ni pour objet ni pour effet de pourvoir durablement 
              un emploi lié à l'activité normale et permanente de l'entreprise.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cas de recours autorisés</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remplacement d'un salarié absent ou temporairement à temps partiel</li>
              <li>Accroissement temporaire de l'activité de l'entreprise</li>
              <li>Emplois saisonniers</li>
              <li>Emplois pour lesquels il est d'usage constant de ne pas recourir au CDI</li>
              <li>Remplacement d'un chef d'entreprise</li>
              <li>Exécution d'un chantier ou d'une opération définie</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions de forme</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Le CDD doit obligatoirement être écrit</li>
              <li>Il doit préciser le motif de recours</li>
              <li>Il doit comporter une date de fin ou une durée minimale</li>
              <li>Il doit être signé dans les 2 jours suivant l'embauche</li>
              <li>Il doit mentionner la convention collective applicable</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Durée et renouvellement</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Durée maximale : 2 ans, renouvellement compris</li>
              <li>Un seul renouvellement possible</li>
              <li>Le renouvellement doit être prévu dans le contrat initial ou faire l'objet d'un avenant</li>
              <li>Délai de carence obligatoire entre deux CDD sur le même poste</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sanctions en cas de non-respect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Requalification possible en CDI</li>
              <li>Indemnité de requalification</li>
              <li>Rappel de salaires</li>
              <li>Dommages et intérêts possibles</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/periode-essai" className="text-blue-600 hover:underline">
                Quelle est la durée de la période d'essai ?
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/secteurs-cdd-interim" className="text-blue-600 hover:underline">
                Dans quels secteurs peut-on recourir au CDD d'usage ?
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/rupture-cdd" className="text-blue-600 hover:underline">
                Comment rompre un CDD ?
              </Link>
            </li>
          </ul>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Avez-vous trouvé ce que vous cherchiez?</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">
              Oui
            </button>
            <button className="bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700">
              Non
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Date de modification : {new Date().toISOString().split('T')[0]}
          </p>
        </div>
      </div>
    </main>
  );
} 