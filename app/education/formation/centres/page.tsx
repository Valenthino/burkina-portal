'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Formation Continue', href: '/education/formation' },
  { label: 'Centres de formation', href: '/education/formation/centres' }
];

export default function CentresFormationPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Centres de Formation Professionnelle au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Les centres de formation professionnelle au Burkina Faso offrent une variété de 
              programmes adaptés aux besoins du marché du travail. Ces établissements 
              permettent d'acquérir des compétences pratiques et des qualifications 
              professionnelles reconnues.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Les inscriptions pour l'année 2024-2025 sont 
                ouvertes dans la plupart des centres. Consultez chaque établissement pour les 
                dates précises.
              </p>
            </div>
          </div>

          {/* Centres publics */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Centres de Formation Publics</h2>
            <div className="space-y-6">
              {/* ANPE */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Agence Nationale Pour l'Emploi (ANPE)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations générales</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Localisation : Plusieurs centres dans le pays</li>
                      <li>Tél : +226 25 31 XX XX</li>
                      <li>Email : info@anpe.bf</li>
                      <li>Site web : www.anpe.bf</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Formations proposées</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Métiers du bâtiment</li>
                      <li>Mécanique automobile</li>
                      <li>Électricité</li>
                      <li>Informatique</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CFPR-Z */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Centre de Formation Professionnelle de Référence de Ziniaré (CFPR-Z)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations générales</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Localisation : Ziniaré</li>
                      <li>Tél : +226 25 30 XX XX</li>
                      <li>Email : contact@cfprz.bf</li>
                      <li>Site web : www.cfprz.bf</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Formations proposées</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Agriculture moderne</li>
                      <li>Élevage</li>
                      <li>Transformation alimentaire</li>
                      <li>Énergies renouvelables</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centres privés */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Centres de Formation Privés</h2>
            <div className="space-y-6">
              {/* CFIAM */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Centre de Formation en Informatique Appliquée et Management (CFIAM)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations générales</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Localisation : Ouagadougou</li>
                      <li>Tél : +226 25 33 XX XX</li>
                      <li>Email : info@cfiam.bf</li>
                      <li>Site web : www.cfiam.bf</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Formations proposées</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Développement web</li>
                      <li>Réseaux informatiques</li>
                      <li>Gestion de projets</li>
                      <li>Marketing digital</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ISIG */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Institut Supérieur d'Informatique de Gestion (ISIG)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations générales</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Localisation : Ouagadougou</li>
                      <li>Tél : +226 25 34 XX XX</li>
                      <li>Email : contact@isig.bf</li>
                      <li>Site web : www.isig.bf</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Formations proposées</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Comptabilité informatisée</li>
                      <li>Administration système</li>
                      <li>Sécurité informatique</li>
                      <li>Business Intelligence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Types de formations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Formations</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Formation qualifiante</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Durée : 3 à 6 mois</li>
                    <li>Attestation de formation</li>
                    <li>Orientation pratique</li>
                    <li>Stage en entreprise</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Formation diplômante</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Durée : 1 à 3 ans</li>
                    <li>Diplôme reconnu</li>
                    <li>Théorie et pratique</li>
                    <li>Stage obligatoire</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Modalités d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modalités d'Inscription</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Documents requis</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Photocopie de la pièce d'identité</li>
                <li>Photos d'identité</li>
                <li>Dernier diplôme obtenu</li>
                <li>CV et lettre de motivation</li>
                <li>Frais d'inscription</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Coûts indicatifs</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left">Type de formation</th>
                      <th className="px-6 py-3 text-left">Durée</th>
                      <th className="px-6 py-3 text-left">Coût</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Formation courte</td>
                      <td className="px-6 py-4">3-6 mois</td>
                      <td className="px-6 py-4">50 000 - 150 000 FCFA</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Formation longue</td>
                      <td className="px-6 py-4">1-2 ans</td>
                      <td className="px-6 py-4">200 000 - 500 000 FCFA/an</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Formation spécialisée</td>
                      <td className="px-6 py-4">6-12 mois</td>
                      <td className="px-6 py-4">300 000 - 800 000 FCFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vérifier l'accréditation du centre</li>
              <li>S'informer sur les débouchés</li>
              <li>Comparer les programmes et coûts</li>
              <li>Se renseigner sur les modalités de paiement</li>
              <li>Vérifier les conditions d'obtention du diplôme</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/formation/adultes" className="text-blue-600 hover:underline">
                Programmes pour adultes
              </Link>
            </li>
            <li>
              <Link href="/education/formation/distance" className="text-blue-600 hover:underline">
                Formation à distance
              </Link>
            </li>
            <li>
              <Link href="/education/formation/certification" className="text-blue-600 hover:underline">
                Certification professionnelle
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