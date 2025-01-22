'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Formation', href: '/fonction-publique/formation' },
  { label: 'Écoles', href: '/fonction-publique/formation/ecoles' }
];

export default function EcolesFormationPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Écoles de Formation de la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Les écoles de formation de la fonction publique au Burkina Faso sont des 
              établissements spécialisés chargés de la formation initiale et continue 
              des agents publics. Elles jouent un rôle crucial dans le renforcement 
              des capacités de l'administration publique.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Calendrier 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Concours d'entrée : mars-avril 2024</li>
                <li>Rentrée académique : octobre 2024</li>
                <li>Tests de certification : juin-juillet 2024</li>
              </ul>
            </div>
          </div>

          {/* Principales Écoles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Principales Écoles</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">ENAM (École Nationale d'Administration et de Magistrature)</h3>
                <div className="space-y-4">
                  <p>Formation des cadres supérieurs de l'administration.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Filières</h4>
                      <ul className="list-disc ml-6">
                        <li>Administration Générale</li>
                        <li>Magistrature</li>
                        <li>Inspection du Travail</li>
                        <li>Trésor</li>
                        <li>Impôts</li>
                        <li>Douanes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Informations Pratiques</h4>
                      <ul className="list-disc ml-6">
                        <li>Durée : 2 ans</li>
                        <li>Niveau : BAC+3 minimum</li>
                        <li>Régime : Temps plein</li>
                        <li>Concours annuel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">ENSP (École Nationale de Santé Publique)</h3>
                <div className="space-y-4">
                  <p>Formation des professionnels de santé publique.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Filières</h4>
                      <ul className="list-disc ml-6">
                        <li>Infirmiers d'État</li>
                        <li>Sages-femmes</li>
                        <li>Techniciens de laboratoire</li>
                        <li>Administrateurs de santé</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Informations Pratiques</h4>
                      <ul className="list-disc ml-6">
                        <li>Durée : 3 ans</li>
                        <li>Niveau : BAC requis</li>
                        <li>Régime : Internat possible</li>
                        <li>Concours direct et professionnel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">ENAREF (École Nationale des Régies Financières)</h3>
                <div className="space-y-4">
                  <p>Formation des cadres des régies financières.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Filières</h4>
                      <ul className="list-disc ml-6">
                        <li>Impôts</li>
                        <li>Trésor</li>
                        <li>Douanes</li>
                        <li>Comptabilité publique</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Informations Pratiques</h4>
                      <ul className="list-disc ml-6">
                        <li>Durée : 2 ans</li>
                        <li>Niveau : BAC+2 minimum</li>
                        <li>Régime : Temps plein</li>
                        <li>Formation initiale et continue</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conditions d'Admission */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'Admission</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Générales</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Être de nationalité burkinabè</li>
                  <li>Avoir le niveau requis</li>
                  <li>Être âgé de 18 à 37 ans</li>
                  <li>Être apte physiquement</li>
                  <li>Jouir de ses droits civiques</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Voies d'Accès</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Conditions</th>
                        <th className="border p-2">Public Cible</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Concours Direct</td>
                        <td className="border p-2">Diplôme requis + Concours</td>
                        <td className="border p-2">Candidats externes</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Concours Professionnel</td>
                        <td className="border p-2">Ancienneté + Concours</td>
                        <td className="border p-2">Fonctionnaires</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Formation Continue</td>
                        <td className="border p-2">Sur demande du service</td>
                        <td className="border p-2">Agents en poste</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Procédure d'Inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure d'Inscription</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Constitution du Dossier</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Formulaire d'inscription</li>
                    <li>Copie légalisée du diplôme requis</li>
                    <li>Extrait d'acte de naissance</li>
                    <li>Certificat de nationalité</li>
                    <li>Certificat médical</li>
                    <li>Photos d'identité</li>
                    <li>Frais d'inscription</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Étapes d'Inscription</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Retrait du dossier d'inscription</li>
                    <li className="mb-2">Constitution du dossier complet</li>
                    <li className="mb-2">Dépôt du dossier</li>
                    <li className="mb-2">Vérification et validation</li>
                    <li className="mb-2">Paiement des frais</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Formation et Pédagogie */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Formation et Pédagogie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Méthodes Pédagogiques</h3>
                <ul className="list-disc ml-6">
                  <li>Cours théoriques</li>
                  <li>Travaux pratiques</li>
                  <li>Stages pratiques</li>
                  <li>Études de cas</li>
                  <li>Conférences-débats</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Évaluation</h3>
                <ul className="list-disc ml-6">
                  <li>Contrôles continus</li>
                  <li>Examens semestriels</li>
                  <li>Rapports de stage</li>
                  <li>Mémoire de fin d'études</li>
                  <li>Soutenance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vie Étudiante */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Vie Étudiante</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Services aux Étudiants</h3>
                <ul className="list-disc ml-6">
                  <li>Bibliothèque</li>
                  <li>Salles informatiques</li>
                  <li>Restaurant</li>
                  <li>Infirmerie</li>
                  <li>Aires de sport</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Activités Extra-scolaires</h3>
                <ul className="list-disc ml-6">
                  <li>Associations d'élèves</li>
                  <li>Activités culturelles</li>
                  <li>Compétitions sportives</li>
                  <li>Clubs thématiques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact et Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Information</h2>
            <div className="space-y-4">
              <p>
                Pour plus d'informations sur les écoles de formation :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction des Écoles de Formation</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : ecoles@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/formation/continue" 
                className="text-blue-600 hover:text-blue-800">
                Formation continue
              </Link>
              <Link href="/fonction-publique/formation/stages" 
                className="text-blue-600 hover:text-blue-800">
                Stages de formation
              </Link>
              <Link href="/fonction-publique/formation/examens" 
                className="text-blue-600 hover:text-blue-800">
                Examens professionnels
              </Link>
              <Link href="/fonction-publique/carriere/concours" 
                className="text-blue-600 hover:text-blue-800">
                Concours de la fonction publique
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