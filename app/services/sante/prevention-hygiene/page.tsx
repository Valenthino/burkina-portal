'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Santé', href: '/services/sante' },
  { label: 'Prévention et Hygiène', href: '/services/sante/prevention-hygiene' }
];

export default function PreventionHygienePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Prévention et Hygiène
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prévention et Hygiène au Burkina Faso</h2>
            <p className="mb-4">
              La prévention des maladies et l'hygiène sont essentielles pour maintenir 
              une bonne santé. Cette page vous informe sur les bonnes pratiques et les 
              mesures préventives à adopter au quotidien.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> La prévention est le meilleur moyen de 
                réduire les risques de maladies et d'épidémies.
              </p>
            </div>
          </div>

          {/* Hygiène personnelle */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Hygiène Personnelle</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Hygiène Corporelle</h3>
                <ul className="list-disc pl-6">
                  <li>Lavage régulier des mains</li>
                  <li>Douche quotidienne</li>
                  <li>Brossage des dents</li>
                  <li>Soins des cheveux et des ongles</li>
                  <li>Port de vêtements propres</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Moments Clés du Lavage des Mains</h3>
                <ul className="list-disc pl-6">
                  <li>Avant de manger</li>
                  <li>Après les toilettes</li>
                  <li>Après avoir changé un bébé</li>
                  <li>Avant de préparer les repas</li>
                  <li>Après avoir touché des objets sales</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hygiène alimentaire */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Hygiène Alimentaire</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conservation des Aliments</h3>
                <ul className="list-disc pl-6">
                  <li>Stockage approprié</li>
                  <li>Respect de la chaîne du froid</li>
                  <li>Dates de péremption</li>
                  <li>Protection contre les insectes</li>
                  <li>Nettoyage des ustensiles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Préparation des Repas</h3>
                <ul className="list-disc pl-6">
                  <li>Lavage des fruits et légumes</li>
                  <li>Cuisson suffisante des aliments</li>
                  <li>Propreté des surfaces de travail</li>
                  <li>Séparation des aliments crus et cuits</li>
                  <li>Utilisation d'eau potable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hygiène environnementale */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Hygiène Environnementale</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Habitat</h3>
                <ul className="list-disc pl-6">
                  <li>Nettoyage régulier</li>
                  <li>Aération des pièces</li>
                  <li>Gestion des déchets</li>
                  <li>Lutte contre les nuisibles</li>
                  <li>Entretien des sanitaires</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Environnement</h3>
                <ul className="list-disc pl-6">
                  <li>Gestion des eaux usées</li>
                  <li>Propreté des espaces publics</li>
                  <li>Élimination des eaux stagnantes</li>
                  <li>Entretien des caniveaux</li>
                  <li>Protection des points d'eau</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prévention des maladies */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prévention des Maladies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Maladies Transmissibles</h3>
                <ul className="list-disc pl-6">
                  <li>Vaccination</li>
                  <li>Protection contre les moustiques</li>
                  <li>Utilisation de moustiquaires</li>
                  <li>Évitement des contacts à risque</li>
                  <li>Port du masque si nécessaire</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Maladies Non Transmissibles</h3>
                <ul className="list-disc pl-6">
                  <li>Alimentation équilibrée</li>
                  <li>Activité physique régulière</li>
                  <li>Limitation de l'alcool</li>
                  <li>Arrêt du tabac</li>
                  <li>Gestion du stress</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Santé au travail */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Santé au Travail</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mesures Préventives</h3>
                <ul className="list-disc pl-6">
                  <li>Équipements de protection</li>
                  <li>Posture de travail</li>
                  <li>Pauses régulières</li>
                  <li>Ventilation des locaux</li>
                  <li>Propreté du lieu de travail</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Risques Professionnels</h3>
                <ul className="list-disc pl-6">
                  <li>Identification des dangers</li>
                  <li>Formation à la sécurité</li>
                  <li>Premiers secours</li>
                  <li>Signalement des incidents</li>
                  <li>Suivi médical</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Éducation à la santé */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Éducation à la Santé</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Sensibilisation</h3>
                <ul className="list-disc pl-6">
                  <li>Campagnes d'information</li>
                  <li>Ateliers pratiques</li>
                  <li>Supports éducatifs</li>
                  <li>Démonstrations</li>
                  <li>Formations communautaires</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Publics Cibles</h3>
                <ul className="list-disc pl-6">
                  <li>Écoles</li>
                  <li>Communautés</li>
                  <li>Entreprises</li>
                  <li>Familles</li>
                  <li>Professionnels de santé</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ressources */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ressources</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Matériel d'Information</h3>
                <ul className="list-disc pl-6">
                  <li>Guides pratiques</li>
                  <li>Affiches</li>
                  <li>Vidéos éducatives</li>
                  <li>Brochures</li>
                  <li>Applications mobiles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Services de Soutien</h3>
                <ul className="list-disc pl-6">
                  <li>Centres de santé</li>
                  <li>Services d'hygiène</li>
                  <li>Associations communautaires</li>
                  <li>Agents de santé communautaire</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Comment purifier l'eau de boisson ?</h3>
                <p className="text-gray-600">
                  L'eau peut être purifiée par ébullition, filtration ou traitement 
                  chimique (chlore, aquatabs). L'eau en bouteille est également une 
                  option sûre.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Quand faut-il se laver les mains ?</h3>
                <p className="text-gray-600">
                  Il est essentiel de se laver les mains avant de manger, après les 
                  toilettes, après avoir touché des objets sales et avant de préparer 
                  les repas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Comment éviter les maladies pendant la saison des pluies ?</h3>
                <p className="text-gray-600">
                  Évitez les eaux stagnantes, utilisez des moustiquaires, maintenez 
                  votre environnement propre et sec, et suivez les règles d'hygiène 
                  alimentaire.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Direction de l'Hygiène Publique</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : hygiene@sante.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Services Disponibles</h3>
                <p className="text-gray-600">
                  Conseils et informations : 24h/24<br />
                  Inspections et contrôles : jours ouvrables
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