'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Formation Continue', href: '/education/formation' },
  { label: 'Programmes adultes', href: '/education/formation/adultes' }
];

export default function ProgrammesAdultesPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Programmes de Formation pour Adultes au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Les programmes de formation pour adultes au Burkina Faso visent à offrir des 
              opportunités d'apprentissage et de développement professionnel aux personnes 
              déjà engagées dans la vie active ou souhaitant se reconvertir.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Ces formations sont conçues pour être compatibles 
                avec une activité professionnelle, avec des horaires aménagés et des modalités 
                d'apprentissage flexibles.
              </p>
            </div>
          </div>

          {/* Types de programmes */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Programmes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Alphabétisation fonctionnelle</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lecture et écriture en langues nationales</li>
                  <li>Calcul de base</li>
                  <li>Compétences pratiques</li>
                  <li>Durée : 6-12 mois</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Formation professionnelle</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Métiers techniques</li>
                  <li>Gestion d'entreprise</li>
                  <li>Compétences numériques</li>
                  <li>Durée : selon le programme</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Validation des acquis</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reconnaissance de l'expérience</li>
                  <li>Certification professionnelle</li>
                  <li>Mise à niveau des compétences</li>
                  <li>Durée : variable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Domaines de formation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Domaines de Formation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Secteur primaire</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Agriculture moderne</li>
                  <li>Élevage</li>
                  <li>Maraîchage</li>
                  <li>Transformation alimentaire</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Secteur secondaire</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mécanique</li>
                  <li>Électricité</li>
                  <li>Bâtiment</li>
                  <li>Menuiserie</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Secteur tertiaire</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Commerce</li>
                  <li>Gestion</li>
                  <li>Informatique</li>
                  <li>Services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Compétences transversales</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Communication</li>
                  <li>Leadership</li>
                  <li>Gestion de projet</li>
                  <li>Langues étrangères</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modalités de formation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modalités de Formation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Formats disponibles</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left">Format</th>
                        <th className="px-6 py-3 text-left">Caractéristiques</th>
                        <th className="px-6 py-3 text-left">Public cible</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4">Cours du soir</td>
                        <td className="px-6 py-4">18h-21h, 2-3 fois/semaine</td>
                        <td className="px-6 py-4">Salariés</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Week-end</td>
                        <td className="px-6 py-4">Samedi et/ou dimanche</td>
                        <td className="px-6 py-4">Professionnels</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Formation intensive</td>
                        <td className="px-6 py-4">Temps plein, courte durée</td>
                        <td className="px-6 py-4">Demandeurs d'emploi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Financement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Options de Financement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Sources de financement</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fonds propres</li>
                  <li>FAFPA (Fonds d'Appui à la Formation Professionnelle et à l'Apprentissage)</li>
                  <li>Employeurs</li>
                  <li>Projets de développement</li>
                  <li>ONG et partenaires</li>
                </ul>
              </div>

              <div>
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
                        <td className="px-6 py-4">Alphabétisation</td>
                        <td className="px-6 py-4">6 mois</td>
                        <td className="px-6 py-4">15 000 - 30 000 FCFA</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Formation technique</td>
                        <td className="px-6 py-4">3-6 mois</td>
                        <td className="px-6 py-4">75 000 - 150 000 FCFA</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Formation qualifiante</td>
                        <td className="px-6 py-4">12 mois</td>
                        <td className="px-6 py-4">200 000 - 400 000 FCFA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Certification et Validation</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Attestation de formation</li>
                <li>Certificat de qualification professionnelle</li>
                <li>Diplôme professionnel</li>
                <li>Validation des acquis de l'expérience (VAE)</li>
              </ul>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vérifier la compatibilité avec son emploi du temps</li>
              <li>S'assurer de la reconnaissance de la formation</li>
              <li>Se renseigner sur les prérequis</li>
              <li>Étudier les possibilités de financement</li>
              <li>Prévoir le temps nécessaire aux devoirs et révisions</li>
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