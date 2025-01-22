'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' }
];

const sections = [
  {
    title: 'Bases du contrat de travail',
    href: '/emploi/reglementation-travail/contrats/bases',
    description: 'Comprendre les fondamentaux du contrat de travail au Burkina Faso'
  },
  {
    title: 'Guide des contrats de travail',
    href: '/emploi/reglementation-travail/contrats/guide',
    description: 'Types de contrats et leurs spécificités'
  },
  {
    title: 'Conditions d\'embauche en CDD',
    href: '/emploi/reglementation-travail/contrats/cdd-conditions',
    description: 'Règles et conditions pour l\'embauche en CDD'
  },
  {
    title: 'Période d\'essai',
    href: '/emploi/reglementation-travail/contrats/periode-essai',
    description: 'Durée et modalités de la période d\'essai'
  },
  {
    title: 'Droits et avantages',
    href: '/emploi/reglementation-travail/contrats/droits-avantages',
    description: 'Droits fondamentaux et avantages des salariés'
  },
  {
    title: 'Avantages salariaux en CDD',
    href: '/emploi/reglementation-travail/contrats/avantages-salariaux',
    description: 'Rémunération et primes en CDD'
  },
  {
    title: 'Temps de travail en CDD',
    href: '/emploi/reglementation-travail/contrats/temps-travail',
    description: 'Organisation et durée du temps de travail'
  },
  {
    title: 'Droits collectifs',
    href: '/emploi/reglementation-travail/contrats/droits-collectifs',
    description: 'Droits syndicaux et représentation du personnel'
  },
  {
    title: 'Équipements collectifs',
    href: '/emploi/reglementation-travail/contrats/equipements',
    description: 'Accès aux équipements et services collectifs'
  },
  {
    title: 'Gestion du contrat',
    href: '/emploi/reglementation-travail/contrats/gestion',
    description: 'Gestion administrative du contrat de travail'
  },
  {
    title: 'Modification du contrat',
    href: '/emploi/reglementation-travail/contrats/modification',
    description: 'Procédures de modification du contrat'
  },
  {
    title: 'Suspension du contrat',
    href: '/emploi/reglementation-travail/contrats/suspension',
    description: 'Cas et procédures de suspension du contrat'
  },
  {
    title: 'Rupture du contrat',
    href: '/emploi/reglementation-travail/contrats/rupture',
    description: 'Modalités de rupture du contrat de travail'
  }
];

export default function ContratsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Guide Complet des Contrats de Travail au Burkina Faso
        </h1>

        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Ce guide complet vous aide à comprendre tous les aspects des contrats de travail au Burkina Faso. 
            Que vous soyez employeur ou salarié, vous trouverez ici toutes les informations nécessaires pour 
            comprendre vos droits et obligations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link 
              key={section.href} 
              href={section.href}
              className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Besoin d'aide supplémentaire ?</h2>
          <p className="text-gray-700 mb-4">
            Si vous ne trouvez pas l'information que vous cherchez, vous pouvez :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Contacter l'inspection du travail de votre région</li>
            <li>Consulter un conseiller juridique spécialisé</li>
            <li>Vous rapprocher de votre syndicat</li>
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