'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Formation', href: '/fonction-publique/formation' },
  { label: 'Formation Continue', href: '/fonction-publique/formation/continue' }
];

export default function FormationContinuePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Formation Continue dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              La formation continue des agents de la fonction publique au Burkina Faso 
              vise à renforcer leurs compétences et à améliorer la qualité du service 
              public. Elle s'inscrit dans le cadre de la politique nationale de 
              modernisation de l'administration.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Programme 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Dépôt des demandes de formation : du 1er au 31 janvier 2024</li>
                <li>Sessions de formation : mars à novembre 2024</li>
                <li>Évaluation des formations : décembre 2024</li>
              </ul>
            </div>
          </div>

          {/* Types de Formation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Formation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Formation de Perfectionnement</h3>
                <div className="space-y-4">
                  <p>Vise à améliorer les compétences dans le poste actuel.</p>
                  <ul className="list-disc ml-6">
                    <li>Séminaires thématiques</li>
                    <li>Ateliers pratiques</li>
                    <li>Formations courtes</li>
                    <li>Stages d'immersion</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Formation Qualifiante</h3>
                <div className="space-y-4">
                  <p>Permet d'accéder à un niveau supérieur.</p>
                  <ul className="list-disc ml-6">
                    <li>Formations diplômantes</li>
                    <li>Certifications professionnelles</li>
                    <li>Spécialisations</li>
                    <li>Reconversions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Domaines de Formation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Domaines de Formation</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Domaine</th>
                    <th className="border p-2">Types de Formation</th>
                    <th className="border p-2">Durée Moyenne</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Management Public</td>
                    <td className="border p-2">Leadership, Gestion de projets, Pilotage</td>
                    <td className="border p-2">2-5 jours</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Finances Publiques</td>
                    <td className="border p-2">Comptabilité, Budget, Marchés publics</td>
                    <td className="border p-2">5-10 jours</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Numérique</td>
                    <td className="border p-2">Bureautique, Applications métiers</td>
                    <td className="border p-2">3-5 jours</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Juridique</td>
                    <td className="border p-2">Droit administratif, Contentieux</td>
                    <td className="border p-2">5-15 jours</td>
                  </tr>
                </tbody>
              </table>
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
                  <li>Avoir l'accord du supérieur hiérarchique</li>
                  <li>Formation en lien avec les fonctions</li>
                  <li>Respecter les délais de candidature</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Critères de Sélection</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Pertinence de la formation</li>
                    <li>Ancienneté dans le poste</li>
                    <li>Évaluations professionnelles</li>
                    <li>Budget disponible</li>
                    <li>Équité entre services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Procédure de Demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure de Demande</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Constitution du Dossier</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Formulaire de demande</li>
                    <li>CV actualisé</li>
                    <li>Lettre de motivation</li>
                    <li>Avis motivé du supérieur</li>
                    <li>Programme de formation</li>
                    <li>Devis si formation externe</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Circuit de la Demande</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Soumission au supérieur hiérarchique</li>
                    <li className="mb-2">Validation par la DRH</li>
                    <li className="mb-2">Examen par le comité de formation</li>
                    <li className="mb-2">Décision d'attribution</li>
                    <li className="mb-2">Notification au candidat</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Droits et Obligations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits et Obligations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Droits du Stagiaire</h3>
                <ul className="list-disc ml-6">
                  <li>Maintien du salaire</li>
                  <li>Frais de formation</li>
                  <li>Indemnités éventuelles</li>
                  <li>Attestation de formation</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Obligations</h3>
                <ul className="list-disc ml-6">
                  <li>Assiduité aux cours</li>
                  <li>Évaluation des acquis</li>
                  <li>Rapport de formation</li>
                  <li>Transfert des compétences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Financement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Sources de Financement</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Budget de l'État</li>
                    <li>Partenaires techniques et financiers</li>
                    <li>Fonds de formation professionnelle</li>
                    <li>Autofinancement</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Prise en Charge</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Frais pédagogiques</li>
                    <li>Frais de déplacement</li>
                    <li>Frais d'hébergement</li>
                    <li>Matériel pédagogique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Évaluation et Suivi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Évaluation et Suivi</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Modalités d'Évaluation</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Évaluation à chaud</li>
                    <li>Évaluation à froid (3-6 mois)</li>
                    <li>Rapport d'impact</li>
                    <li>Suivi post-formation</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Indicateurs de Suivi</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Taux de participation</li>
                    <li>Taux de réussite</li>
                    <li>Satisfaction des participants</li>
                    <li>Impact sur le service</li>
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
                Pour plus d'informations sur la formation continue :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction de la Formation Continue</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : formation@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/formation/ecoles" 
                className="text-blue-600 hover:text-blue-800">
                Écoles de formation
              </Link>
              <Link href="/fonction-publique/formation/stages" 
                className="text-blue-600 hover:text-blue-800">
                Stages de formation
              </Link>
              <Link href="/fonction-publique/formation/examens" 
                className="text-blue-600 hover:text-blue-800">
                Examens professionnels
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