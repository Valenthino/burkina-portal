'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Carrière', href: '/fonction-publique/carriere' },
  { label: 'Concours', href: '/fonction-publique/carriere/concours' }
];

export default function ConcoursPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Concours de la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation des Concours</h2>
            <p className="mb-4">
              Les concours de la fonction publique constituent la voie principale d'accès 
              aux emplois publics au Burkina Faso. Organisés annuellement par le Ministère 
              de la Fonction Publique, ils garantissent l'égalité des chances et la sélection 
              basée sur le mérite.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Session 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Période d'inscription : du 15 février au 15 mars 2024</li>
                <li>Déroulement des épreuves : du 1er mai au 30 mai 2024</li>
                <li>Publication des résultats : juillet 2024</li>
              </ul>
            </div>
          </div>

          {/* Types de Concours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Concours</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Concours Directs</h3>
                <p className="mb-2">Ouverts aux candidats externes répondant aux conditions d'accès.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="border rounded p-4">
                    <h4 className="font-semibold mb-2">Catégorie A</h4>
                    <p className="text-sm">Niveau BAC+4 minimum</p>
                  </div>
                  <div className="border rounded p-4">
                    <h4 className="font-semibold mb-2">Catégorie B</h4>
                    <p className="text-sm">Niveau BAC à BAC+2</p>
                  </div>
                  <div className="border rounded p-4">
                    <h4 className="font-semibold mb-2">Catégorie C</h4>
                    <p className="text-sm">Niveau BEPC à BAC</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Concours Professionnels</h3>
                <p className="mb-2">Réservés aux fonctionnaires en activité pour l'avancement en grade.</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Conditions d'ancienneté spécifiques selon les corps</li>
                  <li>Formation professionnelle requise</li>
                  <li>Autorisation hiérarchique nécessaire</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conditions d'Accès */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'Accès</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Conditions Générales</h3>
              <ul className="list-disc ml-6 mb-4">
                <li>Être de nationalité burkinabè</li>
                <li>Jouir de ses droits civiques</li>
                <li>Être âgé de 18 ans au moins et de 37 ans au plus au 31 décembre de l'année du concours</li>
                <li>Remplir les conditions d'aptitude physique exigées</li>
                <li>Être de bonne moralité</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Conditions Spécifiques</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Catégorie</th>
                      <th className="border p-2">Diplôme requis</th>
                      <th className="border p-2">Âge limite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">A1</td>
                      <td className="border p-2">BAC + 7 (Doctorat)</td>
                      <td className="border p-2">37 ans</td>
                    </tr>
                    <tr>
                      <td className="border p-2">A2</td>
                      <td className="border p-2">BAC + 5 (Master)</td>
                      <td className="border p-2">37 ans</td>
                    </tr>
                    <tr>
                      <td className="border p-2">A3</td>
                      <td className="border p-2">BAC + 4 (Maîtrise)</td>
                      <td className="border p-2">37 ans</td>
                    </tr>
                    <tr>
                      <td className="border p-2">B1</td>
                      <td className="border p-2">BAC + 2 (DUT, BTS)</td>
                      <td className="border p-2">37 ans</td>
                    </tr>
                    <tr>
                      <td className="border p-2">B2</td>
                      <td className="border p-2">BAC</td>
                      <td className="border p-2">37 ans</td>
                    </tr>
                    <tr>
                      <td className="border p-2">C</td>
                      <td className="border p-2">BEPC</td>
                      <td className="border p-2">37 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Procédure d'Inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure d'Inscription</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Inscription en Ligne</h3>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">Créer un compte sur la plateforme e-Concours</li>
                  <li className="mb-2">Remplir le formulaire d'inscription</li>
                  <li className="mb-2">Télécharger et imprimer la fiche d'inscription</li>
                  <li className="mb-2">Constituer le dossier physique</li>
                  <li className="mb-2">Déposer le dossier au centre de dépôt choisi</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Documents Requis</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>CNIB en cours de validité</li>
                  <li>Diplôme requis ou attestation</li>
                  <li>Certificat de nationalité</li>
                  <li>Casier judiciaire</li>
                  <li>Certificat médical d'aptitude</li>
                  <li>Fiche d'inscription imprimée</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Centres d'Examen */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Centres d'Examen</h2>
            <p className="mb-4">
              Les épreuves se déroulent dans les centres suivants :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded p-4">
                <h4 className="font-semibold mb-2">Ouagadougou</h4>
                <p className="text-sm">Tous les concours</p>
              </div>
              <div className="border rounded p-4">
                <h4 className="font-semibold mb-2">Bobo-Dioulasso</h4>
                <p className="text-sm">Concours des catégories B et C</p>
              </div>
              <div className="border rounded p-4">
                <h4 className="font-semibold mb-2">Koudougou</h4>
                <p className="text-sm">Concours des catégories B et C</p>
              </div>
              <div className="border rounded p-4">
                <h4 className="font-semibold mb-2">Fada N'Gourma</h4>
                <p className="text-sm">Concours de la catégorie C</p>
              </div>
              <div className="border rounded p-4">
                <h4 className="font-semibold mb-2">Dédougou</h4>
                <p className="text-sm">Concours de la catégorie C</p>
              </div>
              <div className="border rounded p-4">
                <h4 className="font-semibold mb-2">Ouahigouya</h4>
                <p className="text-sm">Concours de la catégorie C</p>
              </div>
            </div>
          </div>

          {/* Préparation aux Concours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Préparation aux Concours</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ressources Disponibles</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Annales des sessions précédentes</li>
                  <li>Programme des épreuves</li>
                  <li>Guides de préparation</li>
                  <li>Centres de préparation agréés</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Conseils de Préparation</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Commencer la préparation au moins 6 mois avant</li>
                  <li>S'entraîner avec les annales</li>
                  <li>Participer à des groupes d'étude</li>
                  <li>Suivre l'actualité administrative</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact et Assistance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="space-y-4">
              <p>
                Pour toute information complémentaire, contactez le service des concours :
              </p>
              <ul className="list-disc ml-6">
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : concours@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/carriere/recrutements" 
                className="text-blue-600 hover:text-blue-800">
                Recrutements directs
              </Link>
              <Link href="/fonction-publique/formation/examens" 
                className="text-blue-600 hover:text-blue-800">
                Examens professionnels
              </Link>
              <Link href="/fonction-publique/administration/statut" 
                className="text-blue-600 hover:text-blue-800">
                Statut général
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