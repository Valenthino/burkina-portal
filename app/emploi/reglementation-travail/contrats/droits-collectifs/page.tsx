'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Droits collectifs', href: '/emploi/reglementation-travail/contrats/droits-collectifs' }
];

export default function DroitsCollectifsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Droits Collectifs des Travailleurs au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Liberté Syndicale</h2>
            <div className="space-y-4">
              <p>
                La liberté syndicale est un droit fondamental garanti par la Constitution du Burkina Faso 
                et le Code du Travail, conformément aux conventions de l'OIT (Organisation Internationale du Travail).
              </p>
              <h3 className="text-xl font-semibold mb-3">Droits garantis</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit de créer un syndicat</li>
                <li>Droit d'adhérer à un syndicat</li>
                <li>Protection contre la discrimination syndicale</li>
                <li>Droit de grève</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Note :</strong> Ces droits sont similaires dans toute la zone UEMOA et s'inspirent 
                  du modèle français, adapté aux réalités africaines.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Représentation du Personnel</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Délégués du Personnel (DP)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Obligatoire à partir de 11 salariés</li>
                <li>Élus pour un mandat de 3 ans</li>
                <li>Protection contre le licenciement</li>
                <li>Crédit d'heures mensuel</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Missions des délégués</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Présentation des réclamations</li>
                <li>Contrôle de l'application du droit</li>
                <li>Communication avec l'inspection du travail</li>
                <li>Participation aux négociations</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Négociation Collective</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Conventions collectives</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Négociation obligatoire annuelle</li>
                <li>Thèmes obligatoires (salaires, durée du travail)</li>
                <li>Extension possible par arrêté</li>
                <li>Dépôt auprès de l'inspection du travail</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Accords d'entreprise</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adaptations spécifiques à l'entreprise</li>
                <li>Conditions plus favorables possibles</li>
                <li>Négociation avec les syndicats représentatifs</li>
                <li>Révision et dénonciation encadrées</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droit de Grève</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Conditions d'exercice</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Préavis obligatoire de 6 jours ouvrables</li>
                <li>Motifs professionnels uniquement</li>
                <li>Service minimum dans certains secteurs</li>
                <li>Protection contre les sanctions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Limitations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interdiction dans certains services publics</li>
                <li>Réquisition possible</li>
                <li>Maintien de la sécurité</li>
                <li>Protection des biens de l'entreprise</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Instances de Dialogue Social</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Comité d'Hygiène et de Sécurité (CHS)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Obligatoire à partir de 30 salariés</li>
                <li>Réunion trimestrielle</li>
                <li>Analyse des risques professionnels</li>
                <li>Propositions d'amélioration</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Commission consultative du travail</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instance tripartite nationale</li>
                <li>Avis sur la législation</li>
                <li>Études sur l'emploi</li>
                <li>Recommandations au gouvernement</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Protection des Représentants</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Statut protégé</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Protection contre le licenciement</li>
                <li>Autorisation préalable de l'inspection</li>
                <li>Maintien du salaire pendant le mandat</li>
                <li>Protection contre la discrimination</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Moyens d'action</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Local syndical</li>
                <li>Panneau d'affichage</li>
                <li>Heures de délégation</li>
                <li>Liberté de déplacement</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>L'entrave aux droits syndicaux est pénalement sanctionnée</li>
              <li>Les accords collectifs doivent être écrits et déposés</li>
              <li>Le dialogue social est encouragé à tous les niveaux</li>
              <li>La protection des représentants est d'ordre public</li>
              <li>Les conflits collectifs doivent suivre une procédure légale</li>
            </ul>
          </div>
        </div>

        {/* Acronymes et Définitions */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Acronymes et Définitions</h2>
          <ul className="space-y-3">
            <li><strong>OIT</strong> : Organisation Internationale du Travail</li>
            <li><strong>DP</strong> : Délégués du Personnel</li>
            <li><strong>CHS</strong> : Comité d'Hygiène et de Sécurité</li>
            <li><strong>CCT</strong> : Convention Collective du Travail</li>
            <li><strong>UEMOA</strong> : Union Économique et Monétaire Ouest Africaine</li>
          </ul>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/droits-avantages" className="text-blue-600 hover:underline">
                Droits et avantages individuels
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/equipements" className="text-blue-600 hover:underline">
                Équipements collectifs
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/temps-travail" className="text-blue-600 hover:underline">
                Temps de travail
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