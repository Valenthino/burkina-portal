'use client';

import { FaPassport, FaIdCard, FaClock, FaMoneyBill, FaExclamationTriangle, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Passeport', href: '/services/citoyens/passeport' }
];

export default function PassportPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Passeport AES
          </h1>
          <p className="text-xl text-gray-600">
            Passeport biométrique de la Confédération des États du Sahel
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-12">
          <div className="flex items-start">
            <FaExclamationTriangle className="text-yellow-400 w-6 h-6 mt-1 mr-4" />
            <div>
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                Information importante
              </h2>
              <p className="text-yellow-700">
                À partir du 29 janvier 2025, le nouveau passeport biométrique AES (Alliance des États du Sahel) remplacera l'ancien passeport CEDEAO. Cette transition fait suite à la sortie du Burkina Faso de la CEDEAO et à son intégration dans l'AES avec le Mali et le Niger.
              </p>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Validity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <FaClock className="w-8 h-8 text-[#009e49] mr-3" />
              <h2 className="text-xl font-semibold">Validité</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Passeport ordinaire : 5 ans</li>
              <li>• Passeport diplomatique : durée de la mission</li>
              <li>• Passeport de service : durée de la mission</li>
            </ul>
          </div>

          {/* Cost */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <FaMoneyBill className="w-8 h-8 text-[#009e49] mr-3" />
              <h2 className="text-xl font-semibold">Coût</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Procédure normale : 50.000 FCFA</li>
              <li>• Procédure accélérée : 100.000 FCFA</li>
              <li>• Duplicata : 75.000 FCFA</li>
            </ul>
          </div>

          {/* Processing Time */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="w-8 h-8 text-[#009e49] mr-3" />
              <h2 className="text-xl font-semibold">Délais</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Procédure normale : 1 mois</li>
              <li>• Procédure accélérée : 1 semaine</li>
              <li>• Cas d'urgence : 72 heures</li>
            </ul>
          </div>
        </div>

        {/* Required Documents Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Documents requis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Première demande</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>CNIB ou carte d'identité nationale en cours de validité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>Extrait d'acte de naissance original</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>Certificat de nationalité burkinabè</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>Certificat de résidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>4 photos d'identité récentes sur fond blanc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>Reçu de paiement des frais</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Renouvellement</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>Ancien passeport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>CNIB ou carte d'identité nationale en cours de validité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>4 photos d'identité récentes sur fond blanc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#009e49] mt-1">•</span>
                  <span>Reçu de paiement des frais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Procédure de demande</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#009e49] text-white flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Prise de rendez-vous</h3>
                <p className="text-gray-600">Prenez rendez-vous en ligne ou auprès d'un centre d'enrôlement</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#009e49] text-white flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">Préparation du dossier</h3>
                <p className="text-gray-600">Rassemblez tous les documents requis selon votre situation</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#009e49] text-white flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">Enrôlement biométrique</h3>
                <p className="text-gray-600">Présentez-vous au centre d'enrôlement avec votre dossier complet pour la capture des données biométriques</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#009e49] text-white flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-2">Retrait du passeport</h3>
                <p className="text-gray-600">Retirez votre passeport au centre d'enrôlement après le délai de traitement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Informations complémentaires</h2>
          <div className="space-y-4 text-gray-600">
            <p>• Le passeport AES est valable dans tous les pays membres de l'Alliance des États du Sahel (Burkina Faso, Mali, Niger)</p>
            <p>• Les anciens passeports CEDEAO restent valables jusqu'à leur date d'expiration</p>
            <p>• Le renouvellement anticipé est possible 6 mois avant la date d'expiration</p>
            <p>• Les mineurs doivent être accompagnés d'un parent ou tuteur légal</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Besoin d'aide ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Centres d'enrôlement</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="w-5 h-5 text-[#009e49] mt-1" />
                  <span>Direction de la Police des Frontières - Ouagadougou</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="w-5 h-5 text-[#009e49] mt-1" />
                  <span>Direction Régionale de la Police - Bobo-Dioulasso</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-600 mb-2">Pour toute information supplémentaire :</p>
              <ul className="space-y-2 text-gray-600">
                <li>Tél : +226 25 30 63 25</li>
                <li>Email : passeports@securite.gov.bf</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 