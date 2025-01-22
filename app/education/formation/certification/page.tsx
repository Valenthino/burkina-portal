'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Formation Continue', href: '/education/formation' },
  { label: 'Certification', href: '/education/formation/certification' }
];

export default function CertificationPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Certification Professionnelle au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              La certification professionnelle au Burkina Faso permet de valider 
              officiellement les compétences et connaissances acquises dans un 
              domaine professionnel spécifique. Elle est un outil essentiel pour 
              la reconnaissance des qualifications sur le marché du travail.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Les certifications professionnelles sont 
                reconnues par l'État et les employeurs. Elles constituent un atout 
                majeur pour l'insertion professionnelle et l'évolution de carrière.
              </p>
            </div>
          </div>

          {/* Types de certification */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Certification</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Certificats de Qualification Professionnelle (CQP)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Validation des compétences techniques</li>
                  <li>Reconnaissance nationale</li>
                  <li>Spécifique à un métier</li>
                  <li>Durée : 6-12 mois</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Titres Professionnels</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Certification d'État</li>
                  <li>Validation des compétences complètes</li>
                  <li>Reconnaissance internationale possible</li>
                  <li>Durée : 12-24 mois</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Validation des Acquis de l'Expérience (VAE)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reconnaissance de l'expérience professionnelle</li>
                  <li>Minimum 3 ans d'expérience requise</li>
                  <li>Validation partielle ou totale</li>
                  <li>Durée : selon le dossier</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Domaines de certification */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Domaines de Certification</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left">Secteur</th>
                    <th className="px-6 py-3 text-left">Certifications disponibles</th>
                    <th className="px-6 py-3 text-left">Niveau</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Agriculture</td>
                    <td className="px-6 py-4">CQP Agriculture, Titre Pro Agro-alimentaire</td>
                    <td className="px-6 py-4">Niveau 3-5</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Bâtiment</td>
                    <td className="px-6 py-4">CQP Construction, Titre Pro BTP</td>
                    <td className="px-6 py-4">Niveau 3-4</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Numérique</td>
                    <td className="px-6 py-4">Certifications IT, Développement web</td>
                    <td className="px-6 py-4">Niveau 4-6</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Services</td>
                    <td className="px-6 py-4">CQP Commerce, Gestion, Hôtellerie</td>
                    <td className="px-6 py-4">Niveau 3-5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Processus de certification */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Processus de Certification</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Étapes clés</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Choix de la certification</li>
                  <li>Constitution du dossier</li>
                  <li>Évaluation des prérequis</li>
                  <li>Formation ou préparation</li>
                  <li>Évaluation finale</li>
                  <li>Délivrance du certificat</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Documents requis</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pièce d'identité</li>
                  <li>CV détaillé</li>
                  <li>Justificatifs d'expérience</li>
                  <li>Diplômes antérieurs</li>
                  <li>Lettre de motivation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Organismes certificateurs */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Organismes Certificateurs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Institutions nationales</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ANPE (Agence Nationale Pour l'Emploi)</li>
                  <li>FAFPA (Fonds d'Appui à la Formation Professionnelle et à l'Apprentissage)</li>
                  <li>Ministère de l'Emploi</li>
                  <li>Chambres consulaires</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Organismes internationaux</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Organismes de certification ISO</li>
                  <li>Centres agréés internationaux</li>
                  <li>Partenaires de développement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coûts et financement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Coûts et Financement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Tarifs indicatifs</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left">Type de certification</th>
                        <th className="px-6 py-3 text-left">Coût</th>
                        <th className="px-6 py-3 text-left">Durée du processus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4">CQP</td>
                        <td className="px-6 py-4">100 000 - 250 000 FCFA</td>
                        <td className="px-6 py-4">6-12 mois</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Titre Professionnel</td>
                        <td className="px-6 py-4">250 000 - 500 000 FCFA</td>
                        <td className="px-6 py-4">12-24 mois</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">VAE</td>
                        <td className="px-6 py-4">150 000 - 300 000 FCFA</td>
                        <td className="px-6 py-4">3-6 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Options de financement</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fonds propres</li>
                  <li>Financement FAFPA</li>
                  <li>Prise en charge employeur</li>
                  <li>Bourses et subventions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vérifier la reconnaissance de la certification</li>
              <li>S'assurer de remplir les prérequis</li>
              <li>Respecter les délais de candidature</li>
              <li>Préparer soigneusement le dossier</li>
              <li>Prévoir le financement nécessaire</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/formation/centres" className="text-blue-600 hover:underline">
                Centres de formation
              </Link>
            </li>
            <li>
              <Link href="/education/formation/adultes" className="text-blue-600 hover:underline">
                Programmes adultes
              </Link>
            </li>
            <li>
              <Link href="/education/formation/distance" className="text-blue-600 hover:underline">
                Formation à distance
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