'use client';

import Link from 'next/link';
import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-6 flex items-center justify-between hover:bg-gray-50 focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center mr-4">
            <div className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}>
              {isOpen ? '▼' : '▶'}
            </div>
          </div>
          <span className="text-lg font-medium text-blue-900">{title}</span>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default function AvantagesSalariauxCDDPage() {
  const [openSection, setOpenSection] = useState<string>('avantages');

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Emploi - Travail', href: '/emploi' },
    { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
    { label: 'Avantages salariaux du CDD', href: '/emploi/reglementation-travail/contrats/avantages-salariaux-cdd' }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-500">
            {breadcrumbItems.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">›</span>}
                <Link 
                  href={item.href}
                  className={index === breadcrumbItems.length - 1 ? 'text-gray-900' : 'hover:underline'}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">
          Le salarié en CDD peut-il bénéficier des avantages salariaux de l'entreprise ?
        </h1>

        <div className="bg-white shadow-sm rounded-lg mb-8">
          <AccordionItem
            title="Principe d'égalité de traitement"
            isOpen={openSection === 'avantages'}
            onClick={() => setOpenSection(openSection === 'avantages' ? '' : 'avantages')}
          >
            <p className="mb-4">
              Le salaire du salarié en CDD ne peut pas être inférieur au montant de la rémunération que perçoit,
              dans la même entreprise, un salarié en CDI à durée indéterminée de qualification professionnelle
              équivalente et occupant les mêmes fonctions.
            </p>
            <p className="mb-4">
              Le salarié en CDD bénéficie des mêmes avantages salariaux de l'entreprise que le salarié en CDI.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Avantages concernés"
            isOpen={openSection === 'liste'}
            onClick={() => setOpenSection(openSection === 'liste' ? '' : 'liste')}
          >
            <p className="mb-4">Cela s'applique notamment pour les avantages suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remboursement des frais de transports (participation de l'employeur)</li>
              <li>Restauration (cantine, titres-restaurant)</li>
              <li>Accès aux soins (complémentaire santé)</li>
              <li>Épargne salariale (participation et intéressement)</li>
              <li>Primes diverses (13ème mois, vacances, etc.)</li>
              <li>Avantages en nature (voiture, logement, etc.)</li>
            </ul>
          </AccordionItem>

          <AccordionItem
            title="Indemnité de précarité"
            isOpen={openSection === 'precarite'}
            onClick={() => setOpenSection(openSection === 'precarite' ? '' : 'precarite')}
          >
            <p className="mb-4">
              En plus des avantages communs avec les CDI, le salarié en CDD a droit à une indemnité de précarité
              à la fin de son contrat, sauf cas particuliers.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Montant : 10% de la rémunération totale brute versée</li>
              <li>Versée à la fin du contrat avec le dernier salaire</li>
              <li>Incluse dans l'assiette de calcul des congés payés</li>
            </ul>
          </AccordionItem>

          <AccordionItem
            title="Cas particuliers"
            isOpen={openSection === 'exceptions'}
            onClick={() => setOpenSection(openSection === 'exceptions' ? '' : 'exceptions')}
          >
            <p className="mb-4">Certains avantages peuvent être soumis à des conditions d'ancienneté :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Participation aux résultats de l'entreprise : 3 mois d'ancienneté minimum</li>
              <li>Intéressement : application possible d'une condition d'ancienneté de 3 mois maximum</li>
              <li>Certaines primes conventionnelles peuvent être soumises à conditions</li>
            </ul>
          </AccordionItem>
        </div>

        {/* Questions connexes */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Questions connexes</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/temps-travail-cdd" className="text-blue-600 hover:underline flex items-center">
                <span className="mr-2">▶</span>
                Comment est organisé le temps de travail du salarié en CDD ?
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/droits-collectifs-cdd" className="text-blue-600 hover:underline flex items-center">
                <span className="mr-2">▶</span>
                Quels sont les droits collectifs du salarié en CDD ?
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/equipements-collectifs-cdd" className="text-blue-600 hover:underline flex items-center">
                <span className="mr-2">▶</span>
                Le salarié en CDD peut-il bénéficier des équipements collectifs de l'entreprise ?
              </Link>
            </li>
          </ul>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Avez-vous trouvé ce que vous cherchiez ?</h2>
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