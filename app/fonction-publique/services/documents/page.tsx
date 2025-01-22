'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Services', href: '/fonction-publique/services' },
  { label: 'Documents', href: '/fonction-publique/services/documents' }
];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Documents Administratifs de la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Les agents de la fonction publique peuvent obtenir différents documents 
              administratifs nécessaires à leur carrière. Ces documents sont 
              disponibles en ligne ou auprès des services compétents.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Actualités 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Dématérialisation des demandes de documents</li>
                <li>Signature électronique disponible</li>
                <li>Délais de délivrance réduits</li>
                <li>Nouveaux formulaires en ligne</li>
              </ul>
            </div>
          </div>

          {/* Types de Documents */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Documents</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents de Carrière</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Document</th>
                        <th className="border p-2">Usage</th>
                        <th className="border p-2">Délai</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Arrêté de nomination</td>
                        <td className="border p-2">Preuve de nomination</td>
                        <td className="border p-2">5 jours</td>
                      </tr>
                      <tr>
                        <td className="border p-2">État signalétique</td>
                        <td className="border p-2">Historique de carrière</td>
                        <td className="border p-2">3 jours</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Certificat de travail</td>
                        <td className="border p-2">Attestation d'emploi</td>
                        <td className="border p-2">2 jours</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Note de service</td>
                        <td className="border p-2">Affectation/Mutation</td>
                        <td className="border p-2">1 jour</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Documents de Rémunération</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Document</th>
                        <th className="border p-2">Usage</th>
                        <th className="border p-2">Délai</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Bulletin de paie</td>
                        <td className="border p-2">Justificatif de salaire</td>
                        <td className="border p-2">Immédiat</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Attestation de salaire</td>
                        <td className="border p-2">Démarches bancaires</td>
                        <td className="border p-2">2 jours</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Certificat de cessation</td>
                        <td className="border p-2">Fin de service</td>
                        <td className="border p-2">3 jours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Procédures de Demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédures de Demande</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">En Ligne</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Se connecter à l'Espace Agent</li>
                    <li className="mb-2">Sélectionner "Demande de documents"</li>
                    <li className="mb-2">Choisir le type de document</li>
                    <li className="mb-2">Remplir le formulaire</li>
                    <li className="mb-2">Joindre les pièces justificatives</li>
                    <li className="mb-2">Valider la demande</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Sur Place</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Se présenter au service concerné</li>
                    <li className="mb-2">Remplir le formulaire physique</li>
                    <li className="mb-2">Fournir les pièces justificatives</li>
                    <li className="mb-2">Obtenir un récépissé</li>
                    <li className="mb-2">Retirer le document au délai indiqué</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Pièces Justificatives */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pièces Justificatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Documents de Base</h3>
                <ul className="list-disc ml-6">
                  <li>Carte nationale d'identité</li>
                  <li>Carte professionnelle</li>
                  <li>Dernière décision d'affectation</li>
                  <li>Dernier arrêté de promotion</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Documents Spécifiques</h3>
                <ul className="list-disc ml-6">
                  <li>Acte de naissance (selon le cas)</li>
                  <li>Certificat de mariage (selon le cas)</li>
                  <li>Attestation de service (selon le cas)</li>
                  <li>Autres justificatifs selon la demande</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Authentification */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Authentification des Documents</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Signature Électronique</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>QR Code unique</li>
                    <li>Certificat numérique</li>
                    <li>Horodatage sécurisé</li>
                    <li>Vérification en ligne</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Signature Manuelle</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Cachet officiel</li>
                    <li>Signature de l'autorité</li>
                    <li>Numéro d'enregistrement</li>
                    <li>Timbre fiscal (si requis)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conservation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conservation des Documents</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Format Numérique</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Stockage sécurisé dans l'Espace Agent</li>
                    <li>Sauvegarde automatique</li>
                    <li>Accès permanent</li>
                    <li>Partage sécurisé</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Format Physique</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Conservation dans un lieu sûr</li>
                    <li>Classement chronologique</li>
                    <li>Protection contre l'humidité</li>
                    <li>Copies de sauvegarde recommandées</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact et Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Information</h2>
            <div className="space-y-4">
              <p>
                Pour plus d'informations sur les documents administratifs :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction des Ressources Humaines</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : documents@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/services/espace-agent" 
                className="text-blue-600 hover:text-blue-800">
                Espace Agent
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