'use client';

import Link from 'next/link';

export default function RecrutementPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Guide du Recrutement</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            Découvrez les bonnes pratiques et les procédures légales pour le recrutement au Burkina Faso.
            Ce guide vous accompagne dans toutes les étapes du processus de recrutement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Processus de Recrutement</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Préparation du Recrutement</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Analyse des besoins en personnel</li>
                  <li>Définition du poste :
                    <ul className="list-disc pl-6 mt-2">
                      <li>Fiche de poste détaillée</li>
                      <li>Profil du candidat recherché</li>
                      <li>Conditions de travail et rémunération</li>
                    </ul>
                  </li>
                  <li>Budget et planification du recrutement</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Diffusion de l'Offre</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Canaux de diffusion :
                    <ul className="list-disc pl-6 mt-2">
                      <li>Sites d'emploi nationaux</li>
                      <li>Journaux officiels</li>
                      <li>Réseaux professionnels</li>
                      <li>Agences de recrutement</li>
                    </ul>
                  </li>
                  <li>Contenu de l'annonce conforme à la législation</li>
                  <li>Durée de publication recommandée</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-semibold mb-4">Sélection des Candidats</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Présélection des CV :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Critères objectifs d'évaluation</li>
                    <li>Grille de présélection</li>
                    <li>Non-discrimination</li>
                  </ul>
                </li>
                <li>Entretiens :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Préparation des questions</li>
                    <li>Grille d'évaluation</li>
                    <li>Tests professionnels si nécessaire</li>
                  </ul>
                </li>
                <li>Vérifications :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Références professionnelles</li>
                    <li>Diplômes et certifications</li>
                    <li>Casier judiciaire si requis</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Embauche</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Formalités administratives :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Visite médicale d'embauche</li>
                    <li>Déclaration CNSS</li>
                    <li>Contrat de travail</li>
                  </ul>
                </li>
                <li>Intégration :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Programme d'accueil</li>
                    <li>Formation initiale</li>
                    <li>Suivi période d'essai</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ressources Utiles</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/documents/guide-recrutement.pdf" className="text-blue-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
                </svg>
                Guide complet du recrutement (PDF)
              </Link>
            </li>
            <li>
              <Link href="/documents/modeles-contrats.pdf" className="text-blue-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
                </svg>
                Modèles de contrats de travail (PDF)
              </Link>
            </li>
          </ul>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Avez-vous trouvé ce que vous cherchiez?</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">
              Oui
            </button>
            <button className="bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700">
              Non
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Date de modification : {new Date().toISOString().split('T')[0]}
          </p>
        </div>
      </div>
    </main>
  );
} 