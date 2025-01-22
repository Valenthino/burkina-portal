'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Formation', href: '/fonction-publique/formation' },
  { label: 'Examens', href: '/fonction-publique/formation/examens' }
];

export default function ExamensProfessionnelsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Examens Professionnels de la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Les examens professionnels de la fonction publique au Burkina Faso 
              permettent aux agents de progresser dans leur carrière en accédant à 
              des grades ou des corps supérieurs. Ils constituent un moyen de 
              promotion interne basé sur le mérite et les compétences.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Session 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Inscriptions : du 15 janvier au 15 février 2024</li>
                <li>Épreuves écrites : mai 2024</li>
                <li>Épreuves orales : juillet 2024</li>
                <li>Résultats : septembre 2024</li>
              </ul>
            </div>
          </div>

          {/* Types d'Examens */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types d'Examens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Examens de Changement de Corps</h3>
                <div className="space-y-4">
                  <p>Permettent d'accéder à un corps supérieur.</p>
                  <ul className="list-disc ml-6">
                    <li>Passage de B à A</li>
                    <li>Passage de C à B</li>
                    <li>Changement de filière</li>
                    <li>Nouvelle qualification</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Examens de Changement de Grade</h3>
                <div className="space-y-4">
                  <p>Permettent d'évoluer dans le même corps.</p>
                  <ul className="list-disc ml-6">
                    <li>Avancement de grade</li>
                    <li>Promotion interne</li>
                    <li>Spécialisation</li>
                    <li>Qualification supérieure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conditions d'Accès */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'Accès</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Générales</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Être fonctionnaire titulaire</li>
                  <li>Avoir l'ancienneté requise</li>
                  <li>Être en position d'activité</li>
                  <li>Ne pas avoir de sanction disciplinaire</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Spécifiques</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Type d'Examen</th>
                        <th className="border p-2">Ancienneté Requise</th>
                        <th className="border p-2">Autres Conditions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Changement de Corps B vers A</td>
                        <td className="border p-2">5 ans minimum</td>
                        <td className="border p-2">Diplôme requis + Formation</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Changement de Corps C vers B</td>
                        <td className="border p-2">3 ans minimum</td>
                        <td className="border p-2">Diplôme requis</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Changement de Grade</td>
                        <td className="border p-2">2 ans dans le grade</td>
                        <td className="border p-2">Évaluation positive</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Programme et Épreuves */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Programme et Épreuves</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Épreuves Écrites</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Culture générale</li>
                    <li>Droit administratif</li>
                    <li>Épreuve technique</li>
                    <li>Note de synthèse</li>
                    <li>Cas pratique</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Épreuves Orales</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Entretien avec le jury</li>
                    <li>Présentation d'un dossier</li>
                    <li>Questions professionnelles</li>
                    <li>Mise en situation</li>
                  </ul>
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
                    <li>Acte de nomination</li>
                    <li>État signalétique</li>
                    <li>Diplômes requis</li>
                    <li>Certificat administratif</li>
                    <li>Autorisation hiérarchique</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Étapes d'Inscription</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Retrait du dossier</li>
                    <li className="mb-2">Constitution du dossier</li>
                    <li className="mb-2">Validation hiérarchique</li>
                    <li className="mb-2">Dépôt du dossier</li>
                    <li className="mb-2">Vérification administrative</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Préparation aux Examens */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Préparation aux Examens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Ressources Disponibles</h3>
                <ul className="list-disc ml-6">
                  <li>Annales des examens</li>
                  <li>Documentation en ligne</li>
                  <li>Modules de formation</li>
                  <li>Guides de préparation</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Centres de Préparation</h3>
                <ul className="list-disc ml-6">
                  <li>ENAM</li>
                  <li>Centres régionaux</li>
                  <li>Formations à distance</li>
                  <li>Cours du soir</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Résultats et Nomination */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Résultats et Nomination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Publication des Résultats</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Affichage officiel</li>
                    <li>Publication en ligne</li>
                    <li>Notification individuelle</li>
                    <li>Délai de recours</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Procédure de Nomination</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Arrêté de nomination</li>
                    <li>Stage probatoire</li>
                    <li>Titularisation</li>
                    <li>Reclassement indiciaire</li>
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
                Pour plus d'informations sur les examens professionnels :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction des Examens et Concours</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : examens@fonction-publique.gov.bf</li>
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
              <Link href="/fonction-publique/formation/ecoles" 
                className="text-blue-600 hover:text-blue-800">
                Écoles de formation
              </Link>
              <Link href="/fonction-publique/formation/stages" 
                className="text-blue-600 hover:text-blue-800">
                Stages de formation
              </Link>
              <Link href="/fonction-publique/carriere/avancements" 
                className="text-blue-600 hover:text-blue-800">
                Avancements
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