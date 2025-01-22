'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Formation', href: '/fonction-publique/formation' },
  { label: 'Stages', href: '/fonction-publique/formation/stages' }
];

export default function StagesFormationPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Stages de Formation dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Les stages de formation dans la fonction publique au Burkina Faso 
              constituent un élément essentiel du développement professionnel des 
              agents. Ils permettent d'acquérir une expérience pratique et de 
              renforcer les compétences dans un domaine spécifique.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Programme 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Stages de perfectionnement : février à novembre 2024</li>
                <li>Stages d'immersion : mars à octobre 2024</li>
                <li>Stages de spécialisation : avril à septembre 2024</li>
              </ul>
            </div>
          </div>

          {/* Types de Stages */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Stages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Stage de Perfectionnement</h3>
                <div className="space-y-4">
                  <p>Amélioration des compétences dans le poste actuel.</p>
                  <ul className="list-disc ml-6">
                    <li>Durée : 1 à 3 mois</li>
                    <li>Dans le service d'affectation</li>
                    <li>Encadrement personnalisé</li>
                    <li>Évaluation continue</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Stage d'Immersion</h3>
                <div className="space-y-4">
                  <p>Découverte d'un nouveau service ou domaine.</p>
                  <ul className="list-disc ml-6">
                    <li>Durée : 2 semaines à 1 mois</li>
                    <li>Dans un autre service</li>
                    <li>Observation et pratique</li>
                    <li>Rapport d'immersion</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Stage de Spécialisation</h3>
                <div className="space-y-4">
                  <p>Acquisition d'une expertise spécifique.</p>
                  <ul className="list-disc ml-6">
                    <li>Durée : 3 à 6 mois</li>
                    <li>Dans un service spécialisé</li>
                    <li>Formation théorique et pratique</li>
                    <li>Certification à la clé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Domaines de Stage */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Domaines de Stage</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Domaine</th>
                    <th className="border p-2">Types de Stage</th>
                    <th className="border p-2">Services Concernés</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Administration</td>
                    <td className="border p-2">Perfectionnement, Immersion</td>
                    <td className="border p-2">Services administratifs, RH</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Finances</td>
                    <td className="border p-2">Spécialisation, Perfectionnement</td>
                    <td className="border p-2">Trésor, Impôts, Budget</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Technique</td>
                    <td className="border p-2">Spécialisation, Immersion</td>
                    <td className="border p-2">Services techniques, Laboratoires</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Social</td>
                    <td className="border p-2">Immersion, Perfectionnement</td>
                    <td className="border p-2">Services sociaux, Santé</td>
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
                  <li>Stage en lien avec les fonctions</li>
                  <li>Disponibilité du service d'accueil</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Critères de Sélection</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Pertinence du stage</li>
                    <li>Ancienneté dans le poste</li>
                    <li>Évaluations professionnelles</li>
                    <li>Capacité d'accueil</li>
                    <li>Budget disponible</li>
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
                    <li>Demande manuscrite</li>
                    <li>CV actualisé</li>
                    <li>Projet de stage</li>
                    <li>Avis motivé du supérieur</li>
                    <li>Accord du service d'accueil</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Circuit de la Demande</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Soumission au supérieur hiérarchique</li>
                    <li className="mb-2">Transmission à la DRH</li>
                    <li className="mb-2">Validation par le service d'accueil</li>
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
                  <li>Frais de stage</li>
                  <li>Attestation de stage</li>
                  <li>Encadrement adapté</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Obligations</h3>
                <ul className="list-disc ml-6">
                  <li>Assiduité</li>
                  <li>Respect du règlement</li>
                  <li>Rapport de stage</li>
                  <li>Restitution des acquis</li>
                </ul>
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
                    <li>Évaluation continue</li>
                    <li>Rapport de stage</li>
                    <li>Soutenance éventuelle</li>
                    <li>Appréciation du maître de stage</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Suivi Post-Stage</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Mise en pratique des acquis</li>
                    <li>Évaluation d'impact</li>
                    <li>Partage d'expérience</li>
                    <li>Recommandations</li>
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
                Pour plus d'informations sur les stages de formation :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction des Stages et de la Formation</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : stages@fonction-publique.gov.bf</li>
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