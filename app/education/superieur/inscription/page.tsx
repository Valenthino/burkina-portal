'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Supérieur', href: '/education/superieur' },
  { label: 'Inscription universitaire', href: '/education/superieur/inscription' }
];

export default function InscriptionUniversitairePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Inscription Universitaire au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              L'inscription dans les établissements d'enseignement supérieur au Burkina Faso 
              suit une procédure précise et requiert certains documents spécifiques. Les 
              inscriptions se font généralement entre juillet et octobre.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Pour l'année académique 2024-2025, les inscriptions 
                en ligne débuteront le 1er juillet 2024. Les nouveaux bacheliers sont priés de 
                respecter les délais.
              </p>
            </div>
          </div>

          {/* Calendrier des inscriptions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Calendrier des Inscriptions 2024-2025</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left">Étape</th>
                    <th className="px-6 py-3 text-left">Période</th>
                    <th className="px-6 py-3 text-left">Public concerné</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Préinscription en ligne</td>
                    <td className="px-6 py-4">1er - 31 juillet 2024</td>
                    <td className="px-6 py-4">Nouveaux bacheliers</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Dépôt des dossiers</td>
                    <td className="px-6 py-4">15 juillet - 15 août 2024</td>
                    <td className="px-6 py-4">Tous les candidats</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Inscriptions définitives</td>
                    <td className="px-6 py-4">1er septembre - 15 octobre 2024</td>
                    <td className="px-6 py-4">Candidats admis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Procédure d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure d'Inscription</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Préinscription en ligne</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Se connecter sur la plateforme d'inscription</li>
                  <li>Créer un compte utilisateur</li>
                  <li>Remplir le formulaire de préinscription</li>
                  <li>Choisir les filières (3 choix maximum)</li>
                  <li>Imprimer la fiche de préinscription</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Constitution du dossier</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fiche de préinscription</li>
                  <li>Copie légalisée du baccalauréat</li>
                  <li>Relevé de notes du baccalauréat</li>
                  <li>Extrait d'acte de naissance</li>
                  <li>Certificat de nationalité</li>
                  <li>Photos d'identité</li>
                  <li>Quittance des frais de dossier</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Inscription définitive</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vérification de l'admission</li>
                  <li>Paiement des frais de scolarité</li>
                  <li>Visite médicale obligatoire</li>
                  <li>Retrait de la carte d'étudiant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Frais d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Frais d'Inscription</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left">Type d'établissement</th>
                      <th className="px-6 py-3 text-left">Frais annuels</th>
                      <th className="px-6 py-3 text-left">Frais annexes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Université publique</td>
                      <td className="px-6 py-4">15 000 - 50 000 FCFA</td>
                      <td className="px-6 py-4">25 000 FCFA</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Université privée</td>
                      <td className="px-6 py-4">400 000 - 1 500 000 FCFA</td>
                      <td className="px-6 py-4">50 000 FCFA</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Grande école</td>
                      <td className="px-6 py-4">600 000 - 2 000 000 FCFA</td>
                      <td className="px-6 py-4">75 000 FCFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600">
                * Les frais annexes comprennent : assurance, bibliothèque, sport, etc.
              </p>
            </div>
          </div>

          {/* Modalités de paiement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modalités de Paiement</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Options de paiement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Paiement en ligne (carte bancaire)</li>
                <li>Virement bancaire</li>
                <li>Paiement mobile (Orange Money, Mobicash)</li>
                <li>Paiement en espèces à la caisse de l'université</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Échéancier possible</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Premier versement : 60% à l'inscription</li>
                <li>Deuxième versement : 40% avant les examens du 1er semestre</li>
                <li>Possibilité de paiement mensuel pour certains établissements</li>
              </ul>
            </div>
          </div>

          {/* Services aux étudiants */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services aux Étudiants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Services administratifs</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bureau des inscriptions</li>
                  <li>Service de scolarité</li>
                  <li>Bureau des bourses</li>
                  <li>Service social</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Services d'accompagnement</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Orientation académique</li>
                  <li>Assistance logement</li>
                  <li>Service médical</li>
                  <li>Activités culturelles et sportives</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respecter scrupuleusement les délais</li>
              <li>Vérifier l'authenticité des documents</li>
              <li>Conserver les copies des documents</li>
              <li>S'assurer de la conformité des paiements</li>
              <li>Se renseigner sur les possibilités de bourse</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/superieur/universites" className="text-blue-600 hover:underline">
                Liste des universités
              </Link>
            </li>
            <li>
              <Link href="/education/superieur/filieres" className="text-blue-600 hover:underline">
                Filières d'études
              </Link>
            </li>
            <li>
              <Link href="/education/superieur/vie-etudiante" className="text-blue-600 hover:underline">
                Vie étudiante
              </Link>
            </li>
          </ul>
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