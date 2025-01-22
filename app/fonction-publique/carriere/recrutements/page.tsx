'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Carrière', href: '/fonction-publique/carriere' },
  { label: 'Recrutements directs', href: '/fonction-publique/carriere/recrutements' }
];

export default function RecrutementsDirectsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Recrutements Directs dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Le recrutement direct constitue une voie d'accès exceptionnelle à la fonction 
              publique burkinabè, permettant de pourvoir des postes spécifiques nécessitant 
              des compétences particulières ou dans le cadre de programmes spéciaux de recrutement.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Recrutements en cours
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Enseignants contractuels : 3000 postes</li>
                <li>Personnels de santé : 1500 postes</li>
                <li>Date limite de candidature : 30 mars 2024</li>
              </ul>
            </div>
          </div>

          {/* Cas de Recrutement Direct */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cas de Recrutement Direct</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Besoins Spécifiques</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Postes techniques hautement spécialisés</li>
                  <li>Profils rares ou expertise particulière</li>
                  <li>Programmes d'urgence ou spéciaux</li>
                  <li>Remplacement temporaire de fonctionnaires</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Secteurs Concernés</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded p-4">
                    <h4 className="font-semibold mb-2">Éducation</h4>
                    <p className="text-sm">Enseignants contractuels</p>
                  </div>
                  <div className="border rounded p-4">
                    <h4 className="font-semibold mb-2">Santé</h4>
                    <p className="text-sm">Personnel médical et paramédical</p>
                  </div>
                  <div className="border rounded p-4">
                    <h4 className="font-semibold mb-2">Sécurité</h4>
                    <p className="text-sm">Forces de défense et de sécurité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conditions d'Éligibilité */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'Éligibilité</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Générales</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Être de nationalité burkinabè</li>
                  <li>Jouir de ses droits civiques</li>
                  <li>Être âgé de 18 ans au moins</li>
                  <li>Remplir les conditions d'aptitude physique</li>
                  <li>Être de bonne moralité</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Spécifiques</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Diplômes et qualifications requis pour le poste</li>
                  <li>Expérience professionnelle selon le profil</li>
                  <li>Compétences techniques spécifiques</li>
                  <li>Disponibilité immédiate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Procédure de Candidature */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure de Candidature</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Constitution du Dossier</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Demande manuscrite timbrée</li>
                  <li>CV détaillé avec photo</li>
                  <li>Copie légalisée de la CNIB</li>
                  <li>Copies légalisées des diplômes</li>
                  <li>Certificat de nationalité</li>
                  <li>Casier judiciaire</li>
                  <li>Certificat médical d'aptitude</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Dépôt des Candidatures</h3>
                <p className="mb-4">
                  Les dossiers doivent être déposés à la Direction des Ressources Humaines 
                  du ministère concerné ou à la Direction Générale de la Fonction Publique.
                </p>
              </div>
            </div>
          </div>

          {/* Processus de Sélection */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Processus de Sélection</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Étapes de la Sélection</h3>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">Présélection sur dossier</li>
                  <li className="mb-2">Entretien avec le jury</li>
                  <li className="mb-2">Tests techniques éventuels</li>
                  <li className="mb-2">Vérification des références</li>
                  <li className="mb-2">Décision finale</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Critères d'Évaluation</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Adéquation du profil avec le poste</li>
                  <li>Expérience professionnelle</li>
                  <li>Compétences techniques</li>
                  <li>Qualités personnelles</li>
                  <li>Motivation pour le service public</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conditions d'Emploi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'Emploi</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Types de Contrats</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Contrat à durée déterminée (1 à 2 ans)</li>
                  <li>Contrat à durée indéterminée</li>
                  <li>Possibilité d'intégration dans la fonction publique</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Avantages</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Rémunération selon la grille salariale de la fonction publique</li>
                  <li>Couverture sociale</li>
                  <li>Formation continue</li>
                  <li>Possibilité d'évolution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Offres en Cours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Offres en Cours</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4 mb-4">
                <h3 className="font-semibold">Ministère de l'Éducation Nationale</h3>
                <p className="text-gray-600">3000 postes d'enseignants contractuels</p>
                <p className="text-sm">Date limite : 30 mars 2024</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 mb-4">
                <h3 className="font-semibold">Ministère de la Santé</h3>
                <p className="text-gray-600">1500 postes de personnel de santé</p>
                <p className="text-sm">Date limite : 30 mars 2024</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Ministère de la Sécurité</h3>
                <p className="text-gray-600">500 postes d'agents de sécurité</p>
                <p className="text-sm">Date limite : 15 avril 2024</p>
              </div>
            </div>
          </div>

          {/* Contact et Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Information</h2>
            <div className="space-y-4">
              <p>
                Pour plus d'informations sur les recrutements directs :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction Générale de la Fonction Publique</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : recrutement@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/carriere/concours" 
                className="text-blue-600 hover:text-blue-800">
                Concours de la fonction publique
              </Link>
              <Link href="/fonction-publique/administration/statut" 
                className="text-blue-600 hover:text-blue-800">
                Statut général
              </Link>
              <Link href="/fonction-publique/administration/remuneration" 
                className="text-blue-600 hover:text-blue-800">
                Rémunération
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