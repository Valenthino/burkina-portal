'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Supérieur', href: '/education/superieur' },
  { label: 'Vie étudiante', href: '/education/superieur/vie-etudiante' }
];

export default function VieEtudiantePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Vie Étudiante au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              La vie étudiante au Burkina Faso est riche et diversifiée, offrant de nombreuses 
              opportunités d'épanouissement académique, social et culturel. Les campus 
              universitaires sont des lieux de vie dynamiques où se côtoient étudiants nationaux 
              et internationaux.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Les services aux étudiants sont accessibles dès 
                l'inscription définitive et la délivrance de la carte d'étudiant.
              </p>
            </div>
          </div>

          {/* Logement étudiant */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Logement Étudiant</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Cités universitaires</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left">Résidence</th>
                        <th className="px-6 py-3 text-left">Capacité</th>
                        <th className="px-6 py-3 text-left">Loyer mensuel</th>
                        <th className="px-6 py-3 text-left">Services inclus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4">Cité universitaire de Zogona</td>
                        <td className="px-6 py-4">2000 lits</td>
                        <td className="px-6 py-4">5 000 FCFA</td>
                        <td className="px-6 py-4">Eau, électricité, wifi</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Cité universitaire de Kossodo</td>
                        <td className="px-6 py-4">1500 lits</td>
                        <td className="px-6 py-4">5 000 FCFA</td>
                        <td className="px-6 py-4">Eau, électricité, wifi</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Campus de Bobo-Dioulasso</td>
                        <td className="px-6 py-4">1000 lits</td>
                        <td className="px-6 py-4">5 000 FCFA</td>
                        <td className="px-6 py-4">Eau, électricité, wifi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Logement privé</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chambres en ville : 15 000 - 30 000 FCFA/mois</li>
                  <li>Studios meublés : 50 000 - 100 000 FCFA/mois</li>
                  <li>Colocation : 25 000 - 40 000 FCFA/mois</li>
                  <li>Assistance à la recherche par le service social</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Restauration */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Restauration</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Restaurants universitaires</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Petit déjeuner : 100 FCFA</li>
                  <li>Déjeuner : 200 FCFA</li>
                  <li>Dîner : 200 FCFA</li>
                  <li>Horaires : 6h30-9h, 12h-14h30, 18h30-21h</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Autres options</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cafétérias sur le campus</li>
                  <li>Restaurants de quartier</li>
                  <li>Maquis et gargotes</li>
                  <li>Commerces de proximité</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Santé et bien-être */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Santé et Bien-être</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Services de santé</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Centre médical universitaire</li>
                  <li>Consultations gratuites</li>
                  <li>Pharmacie universitaire</li>
                  <li>Service de psychologie</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Installations sportives</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Terrains de football</li>
                  <li>Courts de basketball</li>
                  <li>Salles de fitness</li>
                  <li>Piste d'athlétisme</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vie associative */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Vie Associative</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Associations étudiantes</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ANEB (Association Nationale des Étudiants Burkinabè)</li>
                  <li>Associations de filières</li>
                  <li>Clubs culturels et artistiques</li>
                  <li>Associations sportives</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Activités culturelles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Festival universitaire</li>
                  <li>Théâtre et danse</li>
                  <li>Musique et chorale</li>
                  <li>Expositions artistiques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Transport */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Transport</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Options de transport</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bus universitaire gratuit</li>
                <li>Transport en commun (SOTRACO)</li>
                <li>Taxis</li>
                <li>Location de vélos</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Horaires des navettes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Matin : 6h00 - 8h00</li>
                <li>Midi : 12h00 - 14h00</li>
                <li>Soir : 17h00 - 19h00</li>
              </ul>
            </div>
          </div>

          {/* Services numériques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Numériques</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Wifi gratuit sur le campus</li>
                <li>Salles informatiques</li>
                <li>Bibliothèque numérique</li>
                <li>Plateforme e-learning</li>
                <li>Applications mobiles universitaires</li>
              </ul>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Faire sa demande de logement tôt</li>
              <li>S'inscrire aux associations dès la rentrée</li>
              <li>Conserver sa carte d'étudiant</li>
              <li>Respecter le règlement intérieur</li>
              <li>Participer aux réunions d'information</li>
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
              <Link href="/education/superieur/inscription" className="text-blue-600 hover:underline">
                Procédures d'inscription
              </Link>
            </li>
            <li>
              <Link href="/education/superieur/bourses" className="text-blue-600 hover:underline">
                Bourses d'études
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