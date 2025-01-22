'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Bases du contrat', href: '/emploi/reglementation-travail/contrats/bases' }
];

export default function BasesContratPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Les Bases du Contrat de Travail au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Définition du Contrat de Travail</h2>
            <p className="mb-4">
              Le contrat de travail est une convention par laquelle une personne (le salarié) s'engage à mettre son activité 
              professionnelle sous la direction et l'autorité d'une autre personne (l'employeur) moyennant rémunération.
            </p>
            <h3 className="text-xl font-semibold mb-3">Éléments constitutifs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Une prestation de travail</li>
              <li>Une rémunération</li>
              <li>Un lien de subordination juridique</li>
              <li>Un accord des parties</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions de Validité</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Capacité juridique</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Âge minimum : 16 ans (sauf dérogation)</li>
                <li>Autorisation parentale pour les mineurs</li>
                <li>Capacité juridique des parties</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Consentement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Libre et éclairé</li>
                <li>Sans vice (erreur, dol, violence)</li>
                <li>Expression claire de la volonté</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Objet licite</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conforme à la loi et aux bonnes mœurs</li>
                <li>Activité réelle et déterminée</li>
                <li>Respect des règles d'ordre public</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Forme et Contenu</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Mentions obligatoires</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identité des parties</li>
                <li>Date de début du contrat</li>
                <li>Lieu de travail</li>
                <li>Nature de l'emploi</li>
                <li>Classification professionnelle</li>
                <li>Rémunération</li>
                <li>Durée du travail</li>
                <li>Congés payés</li>
                <li>Préavis en cas de rupture</li>
                <li>Convention collective applicable</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Clauses facultatives</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Période d'essai</li>
                <li>Clause de non-concurrence</li>
                <li>Clause de mobilité</li>
                <li>Clause de confidentialité</li>
                <li>Avantages en nature</li>
                <li>Prime et gratifications</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Obligations des Parties</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Obligations de l'employeur</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir le travail convenu</li>
                <li>Verser la rémunération</li>
                <li>Respecter les droits et libertés</li>
                <li>Assurer la sécurité</li>
                <li>Former et informer</li>
                <li>Délivrer les documents de fin de contrat</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Obligations du salarié</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Exécuter le travail</li>
                <li>Respecter les directives</li>
                <li>Être loyal</li>
                <li>Respecter le règlement intérieur</li>
                <li>Observer la discrétion professionnelle</li>
                <li>Prendre soin du matériel</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Le contrat doit être écrit en français</li>
              <li>Un exemplaire doit être remis au salarié</li>
              <li>Les modifications substantielles nécessitent l'accord des deux parties</li>
              <li>Certaines clauses sont réglementées (non-concurrence, mobilité)</li>
              <li>Le contrat doit respecter les minima légaux et conventionnels</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/guide" className="text-blue-600 hover:underline">
                Guide des différents types de contrats
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/periode-essai" className="text-blue-600 hover:underline">
                La période d'essai
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/modification" className="text-blue-600 hover:underline">
                Modification du contrat de travail
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