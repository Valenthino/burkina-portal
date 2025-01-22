'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Administration', href: '/fonction-publique/administration' },
  { label: 'Statut', href: '/fonction-publique/administration/statut' }
];

export default function StatutGeneralPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Statut Général de la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Le statut général de la fonction publique au Burkina Faso, régi par 
              la loi n°081-2015/CNT, définit les droits, obligations et conditions 
              de service des agents publics. Il constitue le cadre juridique 
              fondamental de la gestion des ressources humaines de l'État.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Textes de référence
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Loi n°081-2015/CNT portant statut général de la fonction publique d'État</li>
                <li>Décrets d'application</li>
                <li>Arrêtés ministériels</li>
                <li>Circulaires administratives</li>
              </ul>
            </div>
          </div>

          {/* Champ d'Application */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Champ d'Application</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Agents Concernés</h3>
                <div className="space-y-4">
                  <p>Personnel civil permanent de l'État.</p>
                  <ul className="list-disc ml-6">
                    <li>Fonctionnaires titulaires</li>
                    <li>Fonctionnaires stagiaires</li>
                    <li>Contractuels de l'État</li>
                    <li>Agents des collectivités</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Exclusions</h3>
                <div className="space-y-4">
                  <p>Personnels régis par des statuts particuliers.</p>
                  <ul className="list-disc ml-6">
                    <li>Magistrats</li>
                    <li>Militaires</li>
                    <li>Forces de sécurité</li>
                    <li>Agents diplomatiques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Structure des Emplois */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Structure des Emplois</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Catégories</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Catégorie</th>
                        <th className="border p-2">Niveau Requis</th>
                        <th className="border p-2">Types d'Emplois</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">A</td>
                        <td className="border p-2">BAC+4 minimum</td>
                        <td className="border p-2">Direction, Conception</td>
                      </tr>
                      <tr>
                        <td className="border p-2">B</td>
                        <td className="border p-2">BAC+2</td>
                        <td className="border p-2">Application</td>
                      </tr>
                      <tr>
                        <td className="border p-2">C</td>
                        <td className="border p-2">BEPC/BAC</td>
                        <td className="border p-2">Exécution</td>
                      </tr>
                      <tr>
                        <td className="border p-2">D</td>
                        <td className="border p-2">CEP</td>
                        <td className="border p-2">Personnel de soutien</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Hiérarchie des Grades</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Échelle</li>
                    <li>Échelon</li>
                    <li>Classe exceptionnelle</li>
                    <li>Classe normale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Droits et Garanties */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits et Garanties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Droits Fondamentaux</h3>
                <ul className="list-disc ml-6">
                  <li>Liberté d'opinion</li>
                  <li>Droit syndical</li>
                  <li>Droit de grève</li>
                  <li>Protection juridique</li>
                  <li>Formation continue</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Garanties Sociales</h3>
                <ul className="list-disc ml-6">
                  <li>Rémunération</li>
                  <li>Protection sociale</li>
                  <li>Congés</li>
                  <li>Retraite</li>
                  <li>Avantages sociaux</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Obligations et Responsabilités */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Obligations et Responsabilités</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Obligations Professionnelles</h3>
                <ul className="list-disc ml-6">
                  <li>Obligation de service</li>
                  <li>Devoir d'obéissance</li>
                  <li>Obligation de réserve</li>
                  <li>Secret professionnel</li>
                  <li>Neutralité</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Incompatibilités</h3>
                <ul className="list-disc ml-6">
                  <li>Activités privées lucratives</li>
                  <li>Cumul d'emplois</li>
                  <li>Conflits d'intérêts</li>
                  <li>Mandats électifs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Positions Administratives */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Positions Administratives</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Types de Positions</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Activité</li>
                    <li>Détachement</li>
                    <li>Disponibilité</li>
                    <li>Sous les drapeaux</li>
                    <li>Stage ou formation</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Effets sur la Carrière</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Avancement</li>
                    <li>Rémunération</li>
                    <li>Retraite</li>
                    <li>Réintégration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Régime Disciplinaire */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Régime Disciplinaire</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Sanctions Disciplinaires</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Degré</th>
                        <th className="border p-2">Sanctions</th>
                        <th className="border p-2">Autorité Compétente</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">1er degré</td>
                        <td className="border p-2">Avertissement, Blâme</td>
                        <td className="border p-2">Supérieur hiérarchique</td>
                      </tr>
                      <tr>
                        <td className="border p-2">2ème degré</td>
                        <td className="border p-2">Radiation, Exclusion</td>
                        <td className="border p-2">Conseil de discipline</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Procédure Disciplinaire</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Rapport hiérarchique</li>
                    <li className="mb-2">Notification des griefs</li>
                    <li className="mb-2">Conseil de discipline</li>
                    <li className="mb-2">Décision motivée</li>
                    <li className="mb-2">Voies de recours</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Cessation de Fonctions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cessation de Fonctions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Motifs</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Démission</li>
                    <li>Retraite</li>
                    <li>Licenciement</li>
                    <li>Révocation</li>
                    <li>Décès</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Droits et Indemnités</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Pension de retraite</li>
                    <li>Indemnité de départ</li>
                    <li>Capital décès</li>
                    <li>Allocation familiale</li>
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
                Pour plus d'informations sur le statut général :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction des Affaires Juridiques</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : statut@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/administration/remuneration" 
                className="text-blue-600 hover:text-blue-800">
                Rémunération
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