'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Administration', href: '/fonction-publique/administration' },
  { label: 'Rémunération', href: '/fonction-publique/administration/remuneration' }
];

export default function RemunerationPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Rémunération dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              La rémunération des agents de la fonction publique au Burkina Faso 
              comprend le traitement de base et divers compléments et indemnités. 
              Elle est déterminée selon la catégorie, l'échelle, la classe et 
              l'échelon de l'agent.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Actualités 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Nouvelle grille indiciaire en vigueur depuis janvier 2024</li>
                <li>Revalorisation des indemnités spécifiques</li>
                <li>Harmonisation des primes de rendement</li>
                <li>Révision du régime indemnitaire</li>
              </ul>
            </div>
          </div>

          {/* Structure de la Rémunération */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Structure de la Rémunération</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Éléments Principaux</h3>
                <div className="space-y-4">
                  <p>Composantes fixes de la rémunération.</p>
                  <ul className="list-disc ml-6">
                    <li>Traitement de base</li>
                    <li>Indemnité de résidence</li>
                    <li>Supplément familial</li>
                    <li>Indemnités statutaires</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Éléments Variables</h3>
                <div className="space-y-4">
                  <p>Compléments liés à la situation personnelle ou professionnelle.</p>
                  <ul className="list-disc ml-6">
                    <li>Primes de rendement</li>
                    <li>Indemnités spécifiques</li>
                    <li>Heures supplémentaires</li>
                    <li>Gratifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Grille Indiciaire */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Grille Indiciaire</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Indices par Catégorie</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Catégorie</th>
                        <th className="border p-2">Indice Minimum</th>
                        <th className="border p-2">Indice Maximum</th>
                        <th className="border p-2">Progression</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">A</td>
                        <td className="border p-2">443</td>
                        <td className="border p-2">1000</td>
                        <td className="border p-2">30 points</td>
                      </tr>
                      <tr>
                        <td className="border p-2">B</td>
                        <td className="border p-2">315</td>
                        <td className="border p-2">700</td>
                        <td className="border p-2">25 points</td>
                      </tr>
                      <tr>
                        <td className="border p-2">C</td>
                        <td className="border p-2">220</td>
                        <td className="border p-2">500</td>
                        <td className="border p-2">20 points</td>
                      </tr>
                      <tr>
                        <td className="border p-2">D</td>
                        <td className="border p-2">180</td>
                        <td className="border p-2">350</td>
                        <td className="border p-2">15 points</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Valeur du Point d'Indice</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Valeur actuelle : 3 750 FCFA</li>
                    <li>Dernière revalorisation : janvier 2024</li>
                    <li>Mode de calcul : Indice × Valeur du point</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Indemnités et Primes */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnités et Primes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Indemnités Statutaires</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Type d'Indemnité</th>
                        <th className="border p-2">Bénéficiaires</th>
                        <th className="border p-2">Montant/Taux</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Logement</td>
                        <td className="border p-2">Tous agents</td>
                        <td className="border p-2">15-25% du traitement</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Transport</td>
                        <td className="border p-2">Tous agents</td>
                        <td className="border p-2">10-20% du traitement</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Technicité</td>
                        <td className="border p-2">Cadres techniques</td>
                        <td className="border p-2">15-30% du traitement</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Sujétion</td>
                        <td className="border p-2">Postes spécifiques</td>
                        <td className="border p-2">10-25% du traitement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Primes Spéciales</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Prime de rendement : 0-15% du traitement</li>
                    <li>Prime de risque : selon le poste</li>
                    <li>Prime de responsabilité : selon la fonction</li>
                    <li>Prime d'astreinte : selon le service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Avantages Sociaux */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Avantages Sociaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Prestations Familiales</h3>
                <ul className="list-disc ml-6">
                  <li>Allocations familiales</li>
                  <li>Prime de naissance</li>
                  <li>Indemnité de garde</li>
                  <li>Aide à la scolarité</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Couverture Sociale</h3>
                <ul className="list-disc ml-6">
                  <li>Assurance maladie</li>
                  <li>Mutuelle de santé</li>
                  <li>Assurance décès</li>
                  <li>Pension de retraite</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Retenues et Cotisations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Retenues et Cotisations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Retenues Obligatoires</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>IUTS (Impôt Unique sur les Traitements et Salaires)</li>
                    <li>CARFO (Caisse Autonome de Retraite des Fonctionnaires)</li>
                    <li>CNSS (Caisse Nationale de Sécurité Sociale)</li>
                    <li>Mutuelle de santé</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Taux de Cotisation</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Retraite : 8% du traitement</li>
                    <li>Sécurité sociale : 5.5%</li>
                    <li>Mutuelle : 2.5%</li>
                    <li>IUTS : barème progressif</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Procédures et Réclamations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédures et Réclamations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Procédures</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Vérification du bulletin de paie</li>
                    <li className="mb-2">Signalement des anomalies</li>
                    <li className="mb-2">Demande de régularisation</li>
                    <li className="mb-2">Suivi du dossier</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Voies de Recours</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Réclamation administrative</li>
                    <li>Recours hiérarchique</li>
                    <li>Recours contentieux</li>
                    <li>Médiation</li>
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
                Pour plus d'informations sur la rémunération :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction de la Solde</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : solde@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
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
              <Link href="/fonction-publique/administration/conges" 
                className="text-blue-600 hover:text-blue-800">
                Congés et absences
              </Link>
              <Link href="/fonction-publique/administration/retraite" 
                className="text-blue-600 hover:text-blue-800">
                Retraite
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