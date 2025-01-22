'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction Publique', href: '/fonction-publique' },
  { label: 'Statut', href: '/fonction-publique/statut' }
];

export default function StatutPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Statut du Fonctionnaire
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Le statut général de la Fonction publique d'État au Burkina Faso est régi 
              par la loi n°081-2015/CNT du 24 novembre 2015. Il définit les droits et 
              obligations des fonctionnaires ainsi que les garanties fondamentales qui 
              leur sont accordées.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Le statut de fonctionnaire est accordé à 
                toute personne qui, nommée dans un emploi permanent, a été titularisée 
                dans un grade de la hiérarchie administrative.
              </p>
            </div>
          </div>

          {/* Droits et libertés */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits et Libertés</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Droits Fondamentaux</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Liberté d'opinion et d'expression</li>
                  <li>Droit syndical</li>
                  <li>Droit de grève</li>
                  <li>Protection contre le harcèlement</li>
                  <li>Égalité de traitement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Droits Sociaux</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Congés annuels et permissions exceptionnelles</li>
                  <li>Congés de maladie</li>
                  <li>Congés de maternité</li>
                  <li>Formation continue</li>
                  <li>Protection sociale</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Garanties</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Protection juridique</li>
                  <li>Droit à la carrière</li>
                  <li>Droit à la rémunération</li>
                  <li>Droit à la pension de retraite</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Obligations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Obligations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Obligations Professionnelles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Exercice personnel des fonctions</li>
                  <li>Obligation de service</li>
                  <li>Obéissance hiérarchique</li>
                  <li>Secret professionnel</li>
                  <li>Devoir de réserve</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Obligations Morales</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dignité</li>
                  <li>Intégrité</li>
                  <li>Neutralité</li>
                  <li>Probité</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Incompatibilités</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Exercice d'une activité privée lucrative</li>
                  <li>Participation aux organes de direction d'entreprises privées</li>
                  <li>Cumul d'emplois publics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Protection sociale */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Protection Sociale</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Couverture Maladie</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prise en charge des soins médicaux</li>
                  <li>Remboursement des frais pharmaceutiques</li>
                  <li>Évacuations sanitaires</li>
                  <li>Prestations familiales</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Accidents de Service</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prise en charge intégrale des soins</li>
                  <li>Maintien du traitement</li>
                  <li>Indemnisation en cas d'invalidité</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Prestations Familiales</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Allocations familiales</li>
                  <li>Allocation prénatale</li>
                  <li>Allocation de maternité</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Discipline */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Régime Disciplinaire</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Sanctions Disciplinaires</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Premier Degré</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Avertissement</li>
                      <li>Blâme</li>
                      <li>Déplacement d'office</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Second Degré</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Abaissement d'échelon</li>
                      <li>Exclusion temporaire</li>
                      <li>Révocation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Procédure Disciplinaire</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Information préalable de l'agent</li>
                  <li>Communication du dossier</li>
                  <li>Droit à la défense</li>
                  <li>Conseil de discipline</li>
                  <li>Voies de recours</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cessation de fonctions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cessation de Fonctions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Motifs</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Admission à la retraite</li>
                  <li>Démission</li>
                  <li>Licenciement</li>
                  <li>Révocation</li>
                  <li>Décès</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Droits à la Cessation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pension de retraite</li>
                  <li>Allocation de départ</li>
                  <li>Capital décès</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Documents utiles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Documents Utiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Statut général de la fonction publique
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Guide des droits et obligations
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Règlement disciplinaire
              </a>
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