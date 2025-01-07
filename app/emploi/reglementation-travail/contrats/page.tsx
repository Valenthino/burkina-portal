'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail dans le secteur privé', href: '/emploi/reglementation-travail/contrats' }
];

const faqItems = [
  {
    question: "Un employeur peut-il embaucher en contrat à durée déterminée (CDD) ?",
    href: "/emploi/reglementation-travail/contrats/cdd-conditions"
  },
  {
    question: "Qu'est-ce qu'une clause de non-concurrence ?",
    href: "/emploi/reglementation-travail/contrats/clause-non-concurrence"
  },
  {
    question: "Déménagement : un salarié doit-il suivre son entreprise ?",
    href: "/emploi/reglementation-travail/contrats/demenagement-entreprise"
  },
  {
    question: "Quelle est la durée de la période d'essai ?",
    href: "/emploi/reglementation-travail/contrats/periode-essai"
  },
  {
    question: "CDD d'usage ou d'intérim : dans quels secteurs d'activités peut-on y recourir ?",
    href: "/emploi/reglementation-travail/contrats/secteurs-cdd-interim"
  },
  {
    question: "Suspension du contrat de travail : le salarié a-t-il des obligations ?",
    href: "/emploi/reglementation-travail/contrats/obligations-suspension"
  },
  {
    question: "Qu'est-ce qu'une clause de mobilité ?",
    href: "/emploi/reglementation-travail/contrats/clause-mobilite"
  },
  {
    question: "Quelles sont les conséquences de la modification du lieu de travail ?",
    href: "/emploi/reglementation-travail/contrats/modification-lieu-travail"
  }
];

export default function ContratsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Contrats de travail dans le secteur privé</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            Découvrez toutes les informations sur les différents types de contrats de travail au Burkina Faso,
            leurs spécificités et les règles qui les régissent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Types de Contrats</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Contrat à Durée Indéterminée (CDI)</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Contrat de droit commun</li>
                  <li>Pas de terme précis</li>
                  <li>Période d'essai possible</li>
                  <li>Rupture selon conditions légales</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Contrat à Durée Déterminée (CDD)</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Durée maximale : 2 ans</li>
                  <li>Renouvellement limité</li>
                  <li>Cas de recours précis</li>
                  <li>Indemnité de précarité</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Contrats Spécifiques</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Contrat d'apprentissage</li>
                  <li>Contrat de professionnalisation</li>
                  <li>Contrat saisonnier</li>
                  <li>Contrat d'usage</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-semibold mb-4">Clauses Essentielles</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Identification des parties</li>
                <li>Date de début du contrat</li>
                <li>Poste et qualification</li>
                <li>Lieu de travail</li>
                <li>Rémunération</li>
                <li>Durée du travail</li>
                <li>Congés payés</li>
                <li>Convention collective applicable</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Clauses Particulières</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Période d'essai</li>
                <li>Clause de non-concurrence</li>
                <li>Clause de mobilité</li>
                <li>Clause de confidentialité</li>
                <li>Avantages en nature</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Questions & Réponses */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Questions ? Réponses !</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index}>
                <Link href={item.href} className="text-blue-600 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {item.question}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Documents Utiles</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/documents/modeles-contrats.pdf" className="text-blue-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
                </svg>
                Modèles de contrats de travail (PDF)
              </Link>
            </li>
            <li>
              <Link href="/documents/guide-contrats.pdf" className="text-blue-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
                </svg>
                Guide des contrats de travail (PDF)
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