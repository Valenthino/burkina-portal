'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Administration', href: '/fonction-publique/administration' },
  { label: 'Retraite', href: '/fonction-publique/administration/retraite' }
];

export default function RetraitePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Retraite dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              La retraite des fonctionnaires au Burkina Faso est gérée par la 
              Caisse Autonome de Retraite des Fonctionnaires (CARFO). Elle garantit 
              aux agents publics une pension après leurs années de service.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Actualités 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Revalorisation des pensions de 5%</li>
                <li>Nouveau portail en ligne pour les retraités</li>
                <li>Simplification des procédures de liquidation</li>
                <li>Extension des services numériques</li>
              </ul>
            </div>
          </div>

          {/* Conditions de Départ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions de Départ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Âge de Départ</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Catégorie</th>
                        <th className="border p-2">Âge Normal</th>
                        <th className="border p-2">Prolongation Possible</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">A</td>
                        <td className="border p-2">63 ans</td>
                        <td className="border p-2">Jusqu'à 65 ans</td>
                      </tr>
                      <tr>
                        <td className="border p-2">B</td>
                        <td className="border p-2">60 ans</td>
                        <td className="border p-2">Jusqu'à 63 ans</td>
                      </tr>
                      <tr>
                        <td className="border p-2">C et D</td>
                        <td className="border p-2">58 ans</td>
                        <td className="border p-2">Jusqu'à 60 ans</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Durée de Service</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Minimum : 15 ans de service</li>
                    <li>Maximum : 40 ans de service</li>
                    <li>Bonifications possibles pour certains corps</li>
                    <li>Validation des services auxiliaires</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Calcul de la Pension */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Calcul de la Pension</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Formule de Calcul</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">
                    Pension = (2% × Nombre d'années de service × Traitement de base)
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Maximum : 80% du traitement de base</li>
                    <li>Minimum : 60% du SMIG</li>
                    <li>Bonification : 1 an par enfant (max 6 ans)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Éléments Pris en Compte</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Élément</th>
                        <th className="border p-2">Modalités</th>
                        <th className="border p-2">Observations</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Traitement de base</td>
                        <td className="border p-2">Dernier indice</td>
                        <td className="border p-2">6 derniers mois</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Années de service</td>
                        <td className="border p-2">Services effectifs</td>
                        <td className="border p-2">+ bonifications</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Bonifications</td>
                        <td className="border p-2">Enfants, campagnes</td>
                        <td className="border p-2">Plafonnées</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Procédure de Départ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure de Départ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Étapes</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Notification de départ (1 an avant)</li>
                    <li className="mb-2">Constitution du dossier</li>
                    <li className="mb-2">Transmission à la CARFO</li>
                    <li className="mb-2">Liquidation de la pension</li>
                    <li className="mb-2">Concession de la pension</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Documents Requis</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Demande de mise à la retraite</li>
                    <li>État signalétique des services</li>
                    <li>Acte de naissance</li>
                    <li>Certificat de cessation de paiement</li>
                    <li>Relevé des émoluments</li>
                    <li>Actes de naissance des enfants</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Droits et Avantages */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits et Avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Pension de Retraite</h3>
                <ul className="list-disc ml-6">
                  <li>Versement mensuel</li>
                  <li>Revalorisation périodique</li>
                  <li>Réversibilité aux ayants droit</li>
                  <li>Cumul possible avec activité privée</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Autres Avantages</h3>
                <ul className="list-disc ml-6">
                  <li>Capital décès</li>
                  <li>Couverture maladie</li>
                  <li>Allocation familiale</li>
                  <li>Carte de retraité</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pension de Réversion */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pension de Réversion</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Bénéficiaires</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Conjoint survivant : 50% de la pension</li>
                    <li>Orphelins : 10% par enfant (max 50%)</li>
                    <li>Conditions spécifiques pour le conjoint</li>
                    <li>Limite d'âge pour les orphelins</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Bénéficiaire</th>
                        <th className="border p-2">Conditions</th>
                        <th className="border p-2">Taux</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Veuf/Veuve</td>
                        <td className="border p-2">2 ans de mariage</td>
                        <td className="border p-2">50%</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Orphelins</td>
                        <td className="border p-2">Moins de 21 ans</td>
                        <td className="border p-2">10% chacun</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Contact et Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Information</h2>
            <div className="space-y-4">
              <p>
                Pour plus d'informations sur la retraite :
              </p>
              <ul className="list-disc ml-6">
                <li>CARFO - Direction des Pensions</li>
                <li>Téléphone : (+226) 25 37 69 85</li>
                <li>Email : info@carfo.gov.bf</li>
                <li>Adresse : 01 BP 5569 Ouagadougou 01</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/administration/statut" 
                className="text-blue-600 hover:text-blue-800">
                Statut général
              </Link>
              <Link href="/fonction-publique/administration/remuneration" 
                className="text-blue-600 hover:text-blue-800">
                Rémunération
              </Link>
              <Link href="/fonction-publique/administration/conges" 
                className="text-blue-600 hover:text-blue-800">
                Congés et absences
              </Link>
              <Link href="/fonction-publique/services/documents" 
                className="text-blue-600 hover:text-blue-800">
                Documents administratifs
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