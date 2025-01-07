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

export default function TempsTravalCDDPage() {
  const [openSection, setOpenSection] = useState<string>('principes');

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Emploi - Travail', href: '/emploi' },
    { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
    { label: 'Temps de travail en CDD', href: '/emploi/reglementation-travail/contrats/temps-travail-cdd' }
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
          Comment est organisé le temps de travail du salarié en CDD ?
        </h1>

        <div className="bg-white shadow-sm rounded-lg mb-8">
          <AccordionItem
            title="Principes généraux"
            isOpen={openSection === 'principes'}
            onClick={() => setOpenSection(openSection === 'principes' ? '' : 'principes')}
          >
            <p className="mb-4">
              Le salarié en CDD est soumis aux mêmes règles concernant la durée du travail
              que les autres salariés de l'entreprise. Il bénéficie des mêmes droits en matière de :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Durée légale du travail (40 heures par semaine)</li>
              <li>Durée maximale quotidienne (10 heures)</li>
              <li>Durée maximale hebdomadaire (48 heures)</li>
              <li>Repos quotidien (11 heures consécutives minimum)</li>
              <li>Repos hebdomadaire (24 heures consécutives minimum)</li>
            </ul>
          </AccordionItem>

          <AccordionItem
            title="Heures supplémentaires"
            isOpen={openSection === 'heures-sup'}
            onClick={() => setOpenSection(openSection === 'heures-sup' ? '' : 'heures-sup')}
          >
            <p className="mb-4">Les heures supplémentaires sont majorées selon les mêmes taux :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>De la 41e à la 48e heure : majoration de 15%</li>
              <li>Au-delà de la 48e heure : majoration de 35%</li>
              <li>Possibilité de récupération selon les accords d'entreprise</li>
              <li>Contingent annuel identique aux CDI</li>
            </ul>
          </AccordionItem>

          <AccordionItem
            title="Temps partiel"
            isOpen={openSection === 'temps-partiel'}
            onClick={() => setOpenSection(openSection === 'temps-partiel' ? '' : 'temps-partiel')}
          >
            <p className="mb-4">Pour un CDD à temps partiel :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Durée minimale de 24 heures par semaine (sauf dérogations)</li>
              <li>Heures complémentaires limitées à 1/10e de la durée prévue</li>
              <li>Répartition des horaires précisée dans le contrat</li>
              <li>Modification des horaires : délai de prévenance de 3 jours</li>
            </ul>
          </AccordionItem>

          <AccordionItem
            title="Congés et jours fériés"
            isOpen={openSection === 'conges'}
            onClick={() => setOpenSection(openSection === 'conges' ? '' : 'conges')}
          >
            <p className="mb-4">Droits aux congés et jours fériés :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acquisition des congés payés : 2,5 jours par mois</li>
              <li>Indemnité compensatrice si congés non pris</li>
              <li>Jours fériés chômés si prévus pour les CDI</li>
              <li>Maintien du salaire les jours fériés après 3 mois d'ancienneté</li>
            </ul>
          </AccordionItem>
        </div>

        {/* Questions connexes */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Questions connexes</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/avantages-salariaux-cdd" className="text-blue-600 hover:underline flex items-center">
                <span className="mr-2">▶</span>
                Le salarié en CDD peut-il bénéficier des avantages salariaux de l'entreprise ?
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/conges-cdd" className="text-blue-600 hover:underline flex items-center">
                <span className="mr-2">▶</span>
                Comment sont calculés les congés en CDD ?
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/modification-horaires" className="text-blue-600 hover:underline flex items-center">
                <span className="mr-2">▶</span>
                L'employeur peut-il modifier les horaires de travail ?
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