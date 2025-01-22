'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Services', href: '/fonction-publique/services' },
  { label: 'Espace Agent', href: '/fonction-publique/services/espace-agent' }
];

export default function EspaceAgentPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Espace Agent de la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              L'Espace Agent est une plateforme numérique sécurisée permettant aux 
              agents de la fonction publique d'accéder à leurs services en ligne 
              et de gérer leur carrière de manière autonome.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Actualités 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Nouveau portail avec interface modernisée</li>
                <li>Ajout de services de signature électronique</li>
                <li>Application mobile disponible</li>
                <li>Authentification renforcée</li>
              </ul>
            </div>
          </div>

          {/* Accès au Compte */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accès au Compte</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Création de Compte</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Se rendre sur le portail en ligne</li>
                    <li className="mb-2">Cliquer sur "Créer un compte"</li>
                    <li className="mb-2">Saisir son matricule et informations personnelles</li>
                    <li className="mb-2">Valider par SMS ou email</li>
                    <li className="mb-2">Définir ses identifiants</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Documents Requis</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Matricule de la fonction publique</li>
                    <li>Carte nationale d'identité</li>
                    <li>Adresse email professionnelle</li>
                    <li>Numéro de téléphone mobile</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Services Disponibles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Gestion Administrative</h3>
                <ul className="list-disc ml-6">
                  <li>Consultation du dossier</li>
                  <li>Demande d'actes administratifs</li>
                  <li>Suivi des demandes</li>
                  <li>Mise à jour des informations</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Gestion de Carrière</h3>
                <ul className="list-disc ml-6">
                  <li>Demande d'avancement</li>
                  <li>Demande de mutation</li>
                  <li>Inscription aux concours</li>
                  <li>Demande de formation</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Gestion des Congés</h3>
                <ul className="list-disc ml-6">
                  <li>Demande de congés</li>
                  <li>Suivi des soldes</li>
                  <li>Historique des absences</li>
                  <li>Planning d'équipe</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Rémunération</h3>
                <ul className="list-disc ml-6">
                  <li>Bulletins de paie</li>
                  <li>Attestations de salaire</li>
                  <li>Déclarations fiscales</li>
                  <li>Simulation retraite</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fonctionnalités Spéciales */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Fonctionnalités Spéciales</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Signature Électronique</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Signature de documents officiels</li>
                    <li>Validation des demandes</li>
                    <li>Authentification renforcée</li>
                    <li>Archivage sécurisé</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Messagerie Sécurisée</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Communication avec l'administration</li>
                    <li>Notifications personnalisées</li>
                    <li>Alertes importantes</li>
                    <li>Suivi des échanges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Application Mobile */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Application Mobile</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Fonctionnalités</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Accès rapide au compte</li>
                    <li>Notifications push</li>
                    <li>Scanner de documents</li>
                    <li>Mode hors connexion</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Téléchargement</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Disponible sur Google Play</li>
                    <li>Disponible sur App Store</li>
                    <li>Version minimale : Android 8.0 / iOS 12</li>
                    <li>Mise à jour automatique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sécurité et Confidentialité */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sécurité et Confidentialité</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mesures de Sécurité</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Double authentification</li>
                    <li>Chiffrement des données</li>
                    <li>Session sécurisée</li>
                    <li>Audit des connexions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Protection des Données</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Conformité RGPD</li>
                    <li>Données personnelles protégées</li>
                    <li>Droit d'accès et de rectification</li>
                    <li>Conservation sécurisée</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Assistance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Assistance</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Support Technique</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Hotline : (+226) 25 33 06 85</li>
                    <li>Email : support@fonction-publique.gov.bf</li>
                    <li>Chat en ligne disponible</li>
                    <li>FAQ interactive</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Guides et Tutoriels</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Manuel utilisateur</li>
                    <li>Vidéos explicatives</li>
                    <li>Guides pas à pas</li>
                    <li>Formations en ligne</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/services/documents" 
                className="text-blue-600 hover:text-blue-800">
                Documents administratifs
              </Link>
              <Link href="/fonction-publique/services/reclamations" 
                className="text-blue-600 hover:text-blue-800">
                Réclamations
              </Link>
              <Link href="/fonction-publique/services/assistance" 
                className="text-blue-600 hover:text-blue-800">
                Assistance
              </Link>
              <Link href="/fonction-publique/administration/statut" 
                className="text-blue-600 hover:text-blue-800">
                Statut général
              </Link>
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