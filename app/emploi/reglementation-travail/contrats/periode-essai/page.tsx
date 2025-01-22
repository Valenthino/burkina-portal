'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Période d\'essai', href: '/emploi/reglementation-travail/contrats/periode-essai' }
];

export default function PeriodeEssaiPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">
          Quelle est la durée de la période d'essai ?
        </h1>
        
        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Durées maximales légales</h2>
            <div className="space-y-4">
              <p>
                La durée de la période d'essai est fixée par la loi burkinabè. 
                Elle varie selon la catégorie professionnelle du salarié :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Ouvriers et employés :</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>8 jours à 1 mois</li>
                    <li>Renouvelable une fois</li>
                  </ul>
                </li>
                <li>
                  <strong>Agents de maîtrise et techniciens :</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>1 à 3 mois</li>
                    <li>Renouvelable une fois</li>
                  </ul>
                </li>
                <li>
                  <strong>Cadres :</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>1 à 6 mois</li>
                    <li>Renouvelable une fois</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions de validité</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>La période d'essai doit être expressément prévue dans le contrat de travail</li>
              <li>Sa durée doit être fixée dès la conclusion du contrat</li>
              <li>Le renouvellement doit être prévu dans le contrat initial ou par accord collectif</li>
              <li>Un accord écrit est nécessaire pour le renouvellement</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Rupture pendant l'essai</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>L'employeur et le salarié peuvent rompre librement la période d'essai</li>
              <li>Aucun préavis n'est requis</li>
              <li>Aucune indemnité n'est due</li>
              <li>La rupture ne doit pas être abusive ou discriminatoire</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>La période d'essai ne se présume pas</li>
              <li>Elle ne peut être prolongée du fait des absences du salarié</li>
              <li>Le temps de trajet domicile-travail n'est pas inclus</li>
              <li>Les jours fériés sont inclus dans le décompte</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/cdd-conditions" className="text-blue-600 hover:underline">
                Un employeur peut-il embaucher en CDD ?
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/rupture" className="text-blue-600 hover:underline">
                Comment rompre un contrat de travail ?
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/modification" className="text-blue-600 hover:underline">
                Peut-on modifier un contrat de travail ?
              </Link>
            </li>
          </ul>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Avez-vous trouvé ce que vous cherchiez ?</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">
              Oui
            </button>
            <button className="bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700">
              Non
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Date de modification : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </main>
  );
} 