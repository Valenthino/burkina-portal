'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Santé', href: '/services/sante' },
  { label: 'Urgences Médicales', href: '/services/sante/urgences' }
];

export default function UrgencesPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Urgences Médicales
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services d'Urgence au Burkina Faso</h2>
            <p className="mb-4">
              En cas d'urgence médicale, il est crucial d'agir rapidement et de manière 
              appropriée. Cette page vous guide sur les services d'urgence disponibles 
              et les procédures à suivre.
            </p>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>IMPORTANT :</strong> En cas d'urgence vitale, appelez immédiatement 
                le SAMU au 112 ou rendez-vous au service d'urgence le plus proche.
              </p>
            </div>
          </div>

          {/* Numéros d'urgence */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Numéros d'Urgence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Services de Secours</h3>
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-center bg-blue-50 p-3 rounded">
                    <span className="font-bold text-xl mr-4">112</span>
                    <span>SAMU (Service d'Aide Médicale Urgente)</span>
                  </li>
                  <li className="flex items-center bg-red-50 p-3 rounded">
                    <span className="font-bold text-xl mr-4">18</span>
                    <span>Sapeurs Pompiers</span>
                  </li>
                  <li className="flex items-center bg-green-50 p-3 rounded">
                    <span className="font-bold text-xl mr-4">17</span>
                    <span>Police Secours</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Services Spécialisés</h3>
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-center bg-purple-50 p-3 rounded">
                    <span className="font-bold text-xl mr-4">80 00 11 11</span>
                    <span>Centre Antipoison</span>
                  </li>
                  <li className="flex items-center bg-yellow-50 p-3 rounded">
                    <span className="font-bold text-xl mr-4">80 00 11 12</span>
                    <span>Urgences Psychiatriques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types d'urgences */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types d'Urgences</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Urgences Vitales</h3>
                <ul className="list-disc pl-6">
                  <li>Arrêt cardiaque</li>
                  <li>Difficultés respiratoires sévères</li>
                  <li>Hémorragie importante</li>
                  <li>Accident grave</li>
                  <li>Perte de conscience</li>
                  <li>AVC (Accident Vasculaire Cérébral)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Urgences Relatives</h3>
                <ul className="list-disc pl-6">
                  <li>Fractures</li>
                  <li>Brûlures</li>
                  <li>Intoxications</li>
                  <li>Crises d'asthme</li>
                  <li>Douleurs thoraciques</li>
                  <li>Fièvre élevée</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Que faire en cas d'urgence */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Que Faire en Cas d'Urgence</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Étapes à Suivre</h3>
                <ol className="list-decimal pl-6">
                  <li className="mb-2">Gardez votre calme</li>
                  <li className="mb-2">Évaluez la situation et la gravité</li>
                  <li className="mb-2">Appelez les secours (112) si nécessaire</li>
                  <li className="mb-2">Protégez la victime</li>
                  <li className="mb-2">Prodiguez les premiers secours si vous êtes formé</li>
                  <li>Attendez l'arrivée des secours</li>
                </ol>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Informations à Communiquer</h3>
                <ul className="list-disc pl-6">
                  <li>Votre localisation précise</li>
                  <li>Nature de l'urgence</li>
                  <li>État de la victime</li>
                  <li>Nombre de personnes concernées</li>
                  <li>Votre numéro de téléphone</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services d'urgence */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services d'Urgence</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ouagadougou</h3>
                <ul className="list-disc pl-6">
                  <li>CHU Yalgado Ouédraogo - Service des Urgences (24h/24)</li>
                  <li>CHU Tengandogo - Service des Urgences (24h/24)</li>
                  <li>CHU Bogodogo - Service des Urgences (24h/24)</li>
                  <li>Hôpital Pédiatrique Charles de Gaulle - Urgences Pédiatriques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bobo-Dioulasso</h3>
                <ul className="list-disc pl-6">
                  <li>CHU Souro Sanou - Service des Urgences (24h/24)</li>
                  <li>Clinique Sandof - Service des Urgences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Premiers secours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Gestes de Premiers Secours</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Gestes Essentiels</h3>
                <ul className="list-disc pl-6">
                  <li>Position latérale de sécurité</li>
                  <li>Massage cardiaque</li>
                  <li>Bouche-à-bouche</li>
                  <li>Compression d'une hémorragie</li>
                  <li>Traitement des brûlures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Formation</h3>
                <p className="text-gray-600">
                  Des formations aux premiers secours sont régulièrement organisées par 
                  la Croix-Rouge et les services de secours. Renseignez-vous auprès de 
                  ces organismes.
                </p>
              </div>
            </div>
          </div>

          {/* Prévention */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prévention des Urgences</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conseils Généraux</h3>
                <ul className="list-disc pl-6">
                  <li>Avoir une trousse de premiers secours à domicile</li>
                  <li>Connaître les numéros d'urgence</li>
                  <li>Identifier les centres de santé proches</li>
                  <li>Se former aux gestes de premiers secours</li>
                  <li>Maintenir à jour ses vaccinations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Populations à Risque</h3>
                <ul className="list-disc pl-6">
                  <li>Personnes âgées</li>
                  <li>Enfants en bas âge</li>
                  <li>Femmes enceintes</li>
                  <li>Personnes atteintes de maladies chroniques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Quand appeler le SAMU ?</h3>
                <p className="text-gray-600">
                  Appelez le SAMU (112) pour toute urgence vitale : difficultés 
                  respiratoires, douleurs thoraciques, perte de conscience, hémorragie 
                  importante, accident grave.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Les urgences sont-elles payantes ?</h3>
                <p className="text-gray-600">
                  Les soins d'urgence sont payants mais peuvent être pris en charge 
                  partiellement par l'AMU. En cas d'urgence vitale, les soins sont 
                  prodigués avant toute considération administrative.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Peut-on choisir son service d'urgence ?</h3>
                <p className="text-gray-600">
                  En cas d'urgence vitale, rendez-vous au service d'urgence le plus 
                  proche. Pour les urgences relatives, vous pouvez choisir votre 
                  établissement.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">SAMU National</h3>
                <p className="text-gray-600">
                  Numéro d'urgence : 112<br />
                  Email : samu@sante.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Disponibilité</h3>
                <p className="text-gray-600">
                  Services d'urgence : 24h/24 et 7j/7<br />
                  SAMU : Intervention permanente
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