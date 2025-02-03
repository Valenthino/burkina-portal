'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Associations', href: '/services/citoyens/associations' }
];

export default function AssociationsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Création et Gestion des Associations
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Les Associations au Burkina Faso</h2>
            <p className="mb-4">
              La liberté d'association est un droit fondamental au Burkina Faso. Les associations 
              contribuent au développement social, culturel et économique du pays. Cette page 
              vous guide dans les démarches de création et de gestion d'une association.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Toute association doit être déclarée auprès 
                des autorités compétentes pour avoir une existence légale.
              </p>
            </div>
          </div>

          {/* Types d'associations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types d'Associations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Associations Simples</h3>
                <ul className="list-disc pl-6">
                  <li>Associations culturelles</li>
                  <li>Associations sportives</li>
                  <li>Associations de développement</li>
                  <li>Associations de jeunesse</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">ONG</h3>
                <p className="text-gray-600">
                  Les Organisations Non Gouvernementales (ONG) sont des associations à but 
                  non lucratif qui nécessitent une convention avec l'État.
                </p>
              </div>
            </div>
          </div>

          {/* Création d'une association */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Créer une Association</h2>
            
            <h3 className="text-xl font-semibold mb-4">Documents Requis</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Procès-verbal de l'assemblée constitutive</li>
              <li>Statuts de l'association</li>
              <li>Règlement intérieur</li>
              <li>Liste des membres fondateurs avec leurs coordonnées</li>
              <li>Liste des membres du bureau exécutif</li>
              <li>Photocopies des CNIB des membres du bureau</li>
              <li>Demande de reconnaissance adressée au ministre concerné</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Étapes de Création</h3>
            <ol className="list-decimal pl-6">
              <li className="mb-3">Réunir les membres fondateurs</li>
              <li className="mb-3">Tenir l'assemblée constitutive</li>
              <li className="mb-3">Rédiger les documents constitutifs</li>
              <li className="mb-3">Déposer le dossier auprès des autorités</li>
              <li>Obtenir le récépissé de déclaration</li>
            </ol>
          </div>

          {/* Gestion d'une association */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Gestion d'une Association</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Obligations Légales</h3>
                <ul className="list-disc pl-6">
                  <li>Tenir une assemblée générale annuelle</li>
                  <li>Produire un rapport d'activités annuel</li>
                  <li>Tenir une comptabilité régulière</li>
                  <li>Déclarer tout changement dans l'administration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bonnes Pratiques</h3>
                <ul className="list-disc pl-6">
                  <li>Tenir des réunions régulières du bureau</li>
                  <li>Documenter toutes les décisions importantes</li>
                  <li>Maintenir une communication transparente avec les membres</li>
                  <li>Respecter les statuts et le règlement intérieur</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Financement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Sources de Financement</h3>
                <ul className="list-disc pl-6">
                  <li>Cotisations des membres</li>
                  <li>Dons et legs</li>
                  <li>Subventions publiques</li>
                  <li>Activités génératrices de revenus</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Gestion Financière</h3>
                <ul className="list-disc pl-6">
                  <li>Ouvrir un compte bancaire au nom de l'association</li>
                  <li>Tenir une comptabilité transparente</li>
                  <li>Produire des rapports financiers réguliers</li>
                  <li>Faire auditer les comptes si nécessaire</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modification et dissolution */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modification et Dissolution</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Modifications</h3>
                <ul className="list-disc pl-6">
                  <li>Changement de dirigeants</li>
                  <li>Modification des statuts</li>
                  <li>Changement d'adresse</li>
                  <li>Modification du nom</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dissolution</h3>
                <ul className="list-disc pl-6">
                  <li>Dissolution volontaire</li>
                  <li>Dissolution judiciaire</li>
                  <li>Dévolution des biens</li>
                  <li>Formalités administratives</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Combien coûte la création d'une association ?</h3>
                <p className="text-gray-600">
                  La déclaration d'une association est gratuite. Cependant, des frais peuvent 
                  être engagés pour la constitution du dossier (photocopies, légalisations, etc.).
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Quel est le délai d'obtention du récépissé ?</h3>
                <p className="text-gray-600">
                  Le délai légal est de 2 mois maximum à compter du dépôt du dossier complet.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Une association peut-elle exercer des activités commerciales ?</h3>
                <p className="text-gray-600">
                  Oui, une association peut exercer des activités commerciales accessoires, 
                  à condition que les bénéfices soient réinvestis dans son objet social.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Direction des Libertés Publiques</h3>
                <p className="text-gray-600">
                  Téléphone : (+226) 25 31 86 60<br />
                  Email : dlp@matd.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires d'ouverture</h3>
                <p className="text-gray-600">
                  Du lundi au vendredi<br />
                  7h30 - 12h30 et 15h00 - 17h30
                </p>
              </div>
            </div>
          </div>
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