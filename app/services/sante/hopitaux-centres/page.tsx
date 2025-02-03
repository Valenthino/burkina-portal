'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Santé', href: '/services/sante' },
  { label: 'Hôpitaux et Centres de Santé', href: '/services/sante/hopitaux-centres' }
];

export default function HopitauxCentresPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Hôpitaux et Centres de Santé
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Établissements de Santé au Burkina Faso</h2>
            <p className="mb-4">
              Le Burkina Faso dispose d'un réseau d'établissements de santé publics et 
              privés offrant différents niveaux de soins. Cette page vous aide à identifier 
              et localiser les structures de santé adaptées à vos besoins.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> En cas d'urgence, rendez-vous à l'établissement 
                de santé le plus proche ou appelez le SAMU au 112.
              </p>
            </div>
          </div>

          {/* Types d'établissements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types d'Établissements</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Centres Hospitaliers Universitaires (CHU)</h3>
                <ul className="list-disc pl-6">
                  <li>CHU Yalgado Ouédraogo (Ouagadougou)</li>
                  <li>CHU Souro Sanou (Bobo-Dioulasso)</li>
                  <li>CHU Tengandogo (Ouagadougou)</li>
                  <li>CHU Bogodogo (Ouagadougou)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Centres Hospitaliers Régionaux (CHR)</h3>
                <ul className="list-disc pl-6">
                  <li>CHR de Ouahigouya</li>
                  <li>CHR de Koudougou</li>
                  <li>CHR de Banfora</li>
                  <li>CHR de Tenkodogo</li>
                  <li>CHR de Fada N'Gourma</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Centres Médicaux avec Antenne chirurgicale (CMA)</h3>
                <p className="text-gray-600 mb-2">
                  Établissements de niveau intermédiaire offrant des services chirurgicaux de base.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Centres de Santé et de Promotion Sociale (CSPS)</h3>
                <p className="text-gray-600 mb-2">
                  Structures de santé de base présentes dans les zones rurales et urbaines.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cliniques Privées</h3>
                <p className="text-gray-600 mb-2">
                  Établissements privés offrant des soins spécialisés.
                </p>
              </div>
            </div>
          </div>

          {/* Services disponibles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Disponibles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Services de Base</h3>
                <ul className="list-disc pl-6">
                  <li>Consultations générales</li>
                  <li>Soins infirmiers</li>
                  <li>Vaccination</li>
                  <li>Planification familiale</li>
                  <li>Suivi de grossesse</li>
                  <li>Pharmacie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Services Spécialisés</h3>
                <ul className="list-disc pl-6">
                  <li>Chirurgie</li>
                  <li>Pédiatrie</li>
                  <li>Gynécologie</li>
                  <li>Cardiologie</li>
                  <li>Ophtalmologie</li>
                  <li>Imagerie médicale</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comment choisir */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Comment Choisir son Établissement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Critères de Choix</h3>
                <ul className="list-disc pl-6">
                  <li>Proximité géographique</li>
                  <li>Type de soins recherchés</li>
                  <li>Urgence de la situation</li>
                  <li>Disponibilité des services</li>
                  <li>Couverture d'assurance</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Système de Référence</h3>
                <p className="text-gray-600">
                  Le système de santé fonctionne par niveau de référence. Commencez par 
                  le CSPS le plus proche qui vous orientera si nécessaire vers un 
                  établissement plus spécialisé.
                </p>
              </div>
            </div>
          </div>

          {/* Carte des établissements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Localisation des Établissements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ouagadougou</h3>
                <ul className="list-disc pl-6">
                  <li>CHU Yalgado Ouédraogo - Secteur 4</li>
                  <li>CHU Tengandogo - Secteur 30</li>
                  <li>CHU Bogodogo - Secteur 15</li>
                  <li>Hôpital Pédiatrique Charles de Gaulle - Secteur 8</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bobo-Dioulasso</h3>
                <ul className="list-disc pl-6">
                  <li>CHU Souro Sanou - Secteur 22</li>
                  <li>Clinique Sandof - Secteur 8</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Informations pratiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Informations Pratiques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents Nécessaires</h3>
                <ul className="list-disc pl-6">
                  <li>CNIB ou passeport</li>
                  <li>Carte AMU (si disponible)</li>
                  <li>Carnet de santé</li>
                  <li>Ordonnances précédentes</li>
                  <li>Résultats d'examens antérieurs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires de Consultation</h3>
                <ul className="list-disc pl-6">
                  <li>Consultations générales : 7h30 - 12h30</li>
                  <li>Consultations spécialisées : sur rendez-vous</li>
                  <li>Urgences : 24h/24 et 7j/7</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Comment prendre rendez-vous ?</h3>
                <p className="text-gray-600">
                  Pour les consultations spécialisées, contactez directement le service 
                  concerné. Pour les consultations générales, présentez-vous aux heures 
                  d'ouverture.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Que faire en cas d'urgence la nuit ?</h3>
                <p className="text-gray-600">
                  Les services d'urgence des CHU et CHR sont ouverts 24h/24. Vous pouvez 
                  aussi appeler le SAMU au 112.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Les soins sont-ils gratuits ?</h3>
                <p className="text-gray-600">
                  Les tarifs varient selon l'établissement et le type de soins. L'AMU 
                  couvre une partie des frais pour les assurés.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Direction des Établissements de Santé</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : des@sante.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Numéros d'Urgence</h3>
                <p className="text-gray-600">
                  SAMU : 112<br />
                  Pompiers : 18<br />
                  Police : 17
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