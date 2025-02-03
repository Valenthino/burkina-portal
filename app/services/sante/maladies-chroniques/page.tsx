'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Santé', href: '/services/sante' },
  { label: 'Maladies Chroniques', href: '/services/sante/maladies-chroniques' }
];

export default function MaladiesChroniquesPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Maladies Chroniques
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prise en Charge des Maladies Chroniques</h2>
            <p className="mb-4">
              Les maladies chroniques nécessitent un suivi médical régulier et une prise 
              en charge adaptée. Le système de santé burkinabè propose des services 
              spécialisés pour accompagner les patients atteints de maladies chroniques.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Un suivi régulier et une bonne observance 
                du traitement sont essentiels pour la gestion des maladies chroniques.
              </p>
            </div>
          </div>

          {/* Principales maladies chroniques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Principales Maladies Chroniques</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Maladies Cardiovasculaires</h3>
                <ul className="list-disc pl-6">
                  <li>Hypertension artérielle</li>
                  <li>Insuffisance cardiaque</li>
                  <li>Cardiopathies</li>
                  <li>Artériopathies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Maladies Métaboliques</h3>
                <ul className="list-disc pl-6">
                  <li>Diabète</li>
                  <li>Obésité</li>
                  <li>Dyslipidémies</li>
                  <li>Troubles thyroïdiens</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Maladies Respiratoires</h3>
                <ul className="list-disc pl-6">
                  <li>Asthme</li>
                  <li>BPCO</li>
                  <li>Insuffisance respiratoire chronique</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Autres Maladies Chroniques</h3>
                <ul className="list-disc pl-6">
                  <li>VIH/SIDA</li>
                  <li>Hépatites chroniques</li>
                  <li>Insuffisance rénale chronique</li>
                  <li>Drépanocytose</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services de prise en charge */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services de Prise en Charge</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Consultations Spécialisées</h3>
                <ul className="list-disc pl-6">
                  <li>Cardiologie</li>
                  <li>Diabétologie</li>
                  <li>Pneumologie</li>
                  <li>Néphrologie</li>
                  <li>Endocrinologie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Examens de Suivi</h3>
                <ul className="list-disc pl-6">
                  <li>Analyses biologiques</li>
                  <li>Imagerie médicale</li>
                  <li>Tests fonctionnels</li>
                  <li>Électrocardiogramme</li>
                  <li>Échographie</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Centres spécialisés */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Centres Spécialisés</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ouagadougou</h3>
                <ul className="list-disc pl-6">
                  <li>CHU Yalgado Ouédraogo</li>
                  <li>CHU Tengandogo</li>
                  <li>Centre de diabétologie</li>
                  <li>Centre de cardiologie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bobo-Dioulasso</h3>
                <ul className="list-disc pl-6">
                  <li>CHU Souro Sanou</li>
                  <li>Centre médical spécialisé</li>
                  <li>Clinique de diabétologie</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Traitements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Traitements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Médicaments</h3>
                <ul className="list-disc pl-6">
                  <li>Médicaments essentiels</li>
                  <li>Traitements spécifiques</li>
                  <li>Médicaments génériques</li>
                  <li>Dispositifs médicaux</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Autres Interventions</h3>
                <ul className="list-disc pl-6">
                  <li>Kinésithérapie</li>
                  <li>Rééducation</li>
                  <li>Soutien psychologique</li>
                  <li>Éducation thérapeutique</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prévention et mode de vie */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prévention et Mode de Vie</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mesures Préventives</h3>
                <ul className="list-disc pl-6">
                  <li>Alimentation équilibrée</li>
                  <li>Activité physique régulière</li>
                  <li>Arrêt du tabac</li>
                  <li>Limitation de l'alcool</li>
                  <li>Gestion du stress</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suivi Personnel</h3>
                <ul className="list-disc pl-6">
                  <li>Carnet de suivi</li>
                  <li>Auto-surveillance</li>
                  <li>Respect des rendez-vous médicaux</li>
                  <li>Observance du traitement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soutien et accompagnement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Soutien et Accompagnement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Associations de Patients</h3>
                <ul className="list-disc pl-6">
                  <li>Association des Diabétiques</li>
                  <li>Association des Insuffisants Rénaux</li>
                  <li>Association des Drépanocytaires</li>
                  <li>Groupes de soutien</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Services Sociaux</h3>
                <ul className="list-disc pl-6">
                  <li>Aide sociale</li>
                  <li>Soutien psychologique</li>
                  <li>Accompagnement familial</li>
                  <li>Insertion professionnelle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Comment obtenir une prise en charge ?</h3>
                <p className="text-gray-600">
                  Consultez d'abord votre médecin traitant qui vous orientera vers les 
                  services spécialisés appropriés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Les traitements sont-ils remboursés ?</h3>
                <p className="text-gray-600">
                  L'AMU couvre une partie des frais. Des programmes spéciaux existent 
                  pour certaines maladies chroniques.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Peut-on vivre normalement avec une maladie chronique ?</h3>
                <p className="text-gray-600">
                  Oui, avec un bon suivi médical et une bonne observance du traitement, 
                  la plupart des patients mènent une vie normale.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Direction des Maladies Non Transmissibles</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : dmnt@sante.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires de Consultation</h3>
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