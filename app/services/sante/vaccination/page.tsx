'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Santé', href: '/services/sante' },
  { label: 'Vaccination', href: '/services/sante/vaccination' }
];

export default function VaccinationPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Vaccination
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Programme National de Vaccination</h2>
            <p className="mb-4">
              La vaccination est un moyen efficace de prévention des maladies infectieuses. 
              Au Burkina Faso, le Programme Élargi de Vaccination (PEV) assure la 
              vaccination gratuite des enfants contre les principales maladies évitables.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> La vaccination est obligatoire pour tous les 
                enfants de 0 à 11 mois et fortement recommandée pour les autres tranches d'âge.
              </p>
            </div>
          </div>

          {/* Calendrier vaccinal */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Calendrier Vaccinal</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Âge
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vaccins
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Maladies Prévenues
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">À la naissance</td>
                    <td className="px-6 py-4">BCG, VPO 0, Hépatite B</td>
                    <td className="px-6 py-4">Tuberculose, Poliomyélite, Hépatite B</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">6 semaines</td>
                    <td className="px-6 py-4">Penta 1, VPO 1, Pneumo 1, Rota 1</td>
                    <td className="px-6 py-4">Diphtérie, Tétanos, Coqueluche, Hépatite B, Hib, Polio, Pneumonie, Rotavirus</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">10 semaines</td>
                    <td className="px-6 py-4">Penta 2, VPO 2, Pneumo 2, Rota 2</td>
                    <td className="px-6 py-4">Diphtérie, Tétanos, Coqueluche, Hépatite B, Hib, Polio, Pneumonie, Rotavirus</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">14 semaines</td>
                    <td className="px-6 py-4">Penta 3, VPO 3, Pneumo 3</td>
                    <td className="px-6 py-4">Diphtérie, Tétanos, Coqueluche, Hépatite B, Hib, Polio, Pneumonie</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">9 mois</td>
                    <td className="px-6 py-4">VAR, VAA</td>
                    <td className="px-6 py-4">Rougeole, Fièvre jaune</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Vaccins disponibles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Vaccins Disponibles</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Vaccins de Base (Gratuits)</h3>
                <ul className="list-disc pl-6">
                  <li>BCG (Tuberculose)</li>
                  <li>VPO (Poliomyélite)</li>
                  <li>Pentavalent (DTC-HepB-Hib)</li>
                  <li>Pneumocoque</li>
                  <li>Rotavirus</li>
                  <li>Rougeole</li>
                  <li>Fièvre jaune</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vaccins Supplémentaires</h3>
                <ul className="list-disc pl-6">
                  <li>Méningite</li>
                  <li>HPV (Cancer du col de l'utérus)</li>
                  <li>Hépatite A</li>
                  <li>Typhoïde</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lieux de vaccination */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Où Se Faire Vacciner</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Centres de Vaccination</h3>
                <ul className="list-disc pl-6">
                  <li>Centres de Santé et de Promotion Sociale (CSPS)</li>
                  <li>Centres Médicaux (CM)</li>
                  <li>Hôpitaux de district</li>
                  <li>Centres hospitaliers régionaux</li>
                  <li>Cliniques privées agréées</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Stratégies Avancées</h3>
                <p className="text-gray-600">
                  Des équipes mobiles se déplacent régulièrement dans les zones rurales 
                  pour assurer la vaccination des populations éloignées des centres de santé.
                </p>
              </div>
            </div>
          </div>

          {/* Campagnes de vaccination */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Campagnes de Vaccination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Campagnes Nationales</h3>
                <ul className="list-disc pl-6">
                  <li>Journées nationales de vaccination contre la poliomyélite</li>
                  <li>Campagnes de vaccination contre la méningite</li>
                  <li>Semaine de la vaccination en Afrique</li>
                  <li>Campagnes de rattrapage vaccinal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Campagnes Spéciales</h3>
                <ul className="list-disc pl-6">
                  <li>Vaccination contre la fièvre jaune</li>
                  <li>Vaccination contre la rougeole</li>
                  <li>Vaccination des adolescentes contre le HPV</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conservation des vaccins */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conservation des Vaccins</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Chaîne de Froid</h3>
                <ul className="list-disc pl-6">
                  <li>Réfrigérateurs solaires</li>
                  <li>Glacières et porte-vaccins</li>
                  <li>Moniteurs de température</li>
                  <li>Système d'alerte</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contrôle Qualité</h3>
                <ul className="list-disc pl-6">
                  <li>Vérification quotidienne des températures</li>
                  <li>Maintenance des équipements</li>
                  <li>Formation du personnel</li>
                  <li>Supervision régulière</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Carnet de vaccination */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Carnet de Vaccination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Importance</h3>
                <ul className="list-disc pl-6">
                  <li>Suivi du calendrier vaccinal</li>
                  <li>Preuve de vaccination</li>
                  <li>Document obligatoire pour la scolarité</li>
                  <li>Nécessaire pour les voyages internationaux</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">En Cas de Perte</h3>
                <p className="text-gray-600">
                  En cas de perte du carnet de vaccination, contactez le centre de santé 
                  où ont été effectuées les vaccinations pour obtenir un duplicata.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Les vaccins sont-ils sûrs ?</h3>
                <p className="text-gray-600">
                  Oui, les vaccins utilisés au Burkina Faso sont homologués et suivent 
                  les normes internationales de qualité et de sécurité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Que faire en cas d'effets secondaires ?</h3>
                <p className="text-gray-600">
                  Les effets secondaires sont généralement légers (fièvre, douleur au 
                  point d'injection). En cas d'effets plus importants, consultez 
                  immédiatement un professionnel de santé.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Comment rattraper des vaccins manqués ?</h3>
                <p className="text-gray-600">
                  Il est possible de rattraper les vaccins manqués à tout âge. Consultez 
                  un professionnel de santé qui établira un calendrier de rattrapage.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Programme Élargi de Vaccination</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : pev@sante.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires de Vaccination</h3>
                <p className="text-gray-600">
                  Du lundi au vendredi<br />
                  7h30 - 12h30 et 15h00 - 17h30
                </p>
              </div>
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