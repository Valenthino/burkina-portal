'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Gestion du contrat', href: '/emploi/reglementation-travail/contrats/gestion' }
];

export default function GestionContratPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Gestion Administrative des Contrats de Travail au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Formalités d'Embauche</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Déclarations obligatoires</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Immatriculation à la CNSS (Caisse Nationale de Sécurité Sociale)</li>
                <li>Déclaration à l'inspection du travail</li>
                <li>Inscription au registre d'employeur</li>
                <li>Visite médicale d'embauche</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Documents à établir</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contrat écrit en français</li>
                <li>Fiche de poste détaillée</li>
                <li>Badge professionnel</li>
                <li>Dossier personnel du salarié</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Note :</strong> Ces formalités sont harmonisées dans l'espace UEMOA et 
                  s'inspirent du droit du travail français, adapté au contexte africain.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tenue des Registres</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Registres obligatoires</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registre d'employeur (mouvements du personnel)</li>
                <li>Registre des congés payés</li>
                <li>Registre des visites médicales</li>
                <li>Livre de paie</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Conservation des documents</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>5 ans pour les documents sociaux</li>
                <li>30 ans pour les bulletins de paie</li>
                <li>Durée illimitée pour certains documents</li>
                <li>Archivage sécurisé obligatoire</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Gestion des Temps</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Suivi des présences</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pointage obligatoire</li>
                <li>Registre des horaires</li>
                <li>Suivi des heures supplémentaires</li>
                <li>Gestion des absences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Planning et congés</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Planning prévisionnel</li>
                <li>Gestion des demandes de congés</li>
                <li>Roulement des équipes</li>
                <li>Remplacement des absents</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Paie et Cotisations</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Établissement de la paie</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Calcul du salaire brut</li>
                <li>Décompte des cotisations</li>
                <li>Établissement des bulletins</li>
                <li>Journal de paie</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Déclarations sociales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Déclaration CNSS mensuelle</li>
                <li>Versement des cotisations</li>
                <li>Déclaration annuelle des salaires</li>
                <li>Attestations diverses</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Suivi des Carrières</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Évaluation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Entretien annuel obligatoire</li>
                <li>Fixation des objectifs</li>
                <li>Bilan des compétences</li>
                <li>Plan de formation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Évolution professionnelle</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestion des promotions</li>
                <li>Changements de qualification</li>
                <li>Mobilité interne</li>
                <li>Formation continue</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Obligations de Communication</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Affichages obligatoires</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Règlement intérieur</li>
                <li>Horaires de travail</li>
                <li>Convention collective</li>
                <li>Consignes de sécurité</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Information des salariés</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Notes de service</li>
                <li>Procédures internes</li>
                <li>Droits et obligations</li>
                <li>Changements organisationnels</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respect strict des délais légaux</li>
              <li>Mise à jour régulière des documents</li>
              <li>Conservation sécurisée des données</li>
              <li>Traçabilité des décisions</li>
              <li>Information régulière de l'inspection du travail</li>
            </ul>
          </div>
        </div>

        {/* Acronymes et Définitions */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Acronymes et Définitions</h2>
          <ul className="space-y-3">
            <li><strong>CNSS</strong> : Caisse Nationale de Sécurité Sociale</li>
            <li><strong>IT</strong> : Inspection du Travail</li>
            <li><strong>DRH</strong> : Direction des Ressources Humaines</li>
            <li><strong>SMIG</strong> : Salaire Minimum Interprofessionnel Garanti</li>
            <li><strong>UEMOA</strong> : Union Économique et Monétaire Ouest Africaine</li>
          </ul>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/modification" className="text-blue-600 hover:underline">
                Modification du contrat
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/suspension" className="text-blue-600 hover:underline">
                Suspension du contrat
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/rupture" className="text-blue-600 hover:underline">
                Rupture du contrat
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