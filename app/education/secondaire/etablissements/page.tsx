'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import { useState } from 'react';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Secondaire', href: '/education/secondaire' },
  { label: 'Établissements', href: '/education/secondaire/etablissements' }
];

// Liste des régions du Burkina Faso
const regions = [
  'Boucle du Mouhoun',
  'Cascades',
  'Centre',
  'Centre-Est',
  'Centre-Nord',
  'Centre-Ouest',
  'Centre-Sud',
  'Est',
  'Hauts-Bassins',
  'Nord',
  'Plateau-Central',
  'Sahel',
  'Sud-Ouest'
];

// Types d'établissements
const typeEtablissements = [
  'Public',
  'Privé conventionné',
  'Privé non conventionné'
];

export default function EtablissementsSecondairePage() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Collèges et Lycées au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Le Burkina Faso compte plus de 2 800 établissements d'enseignement secondaire 
              répartis sur l'ensemble du territoire. Ces établissements se divisent en deux cycles :
              le premier cycle (6ème à 3ème) et le second cycle (2nde à Terminale).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Note :</strong> La carte scolaire est régulièrement mise à jour pour 
                répondre aux besoins de scolarisation croissants.
              </p>
            </div>
          </div>

          {/* Filtres de recherche */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Rechercher un Établissement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Région
                </label>
                <select 
                  className="w-full border-gray-300 rounded-md shadow-sm"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <option value="">Toutes les régions</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type d'établissement
                </label>
                <select 
                  className="w-full border-gray-300 rounded-md shadow-sm"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">Tous les types</option>
                  {typeEtablissements.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recherche par nom
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Nom de l'établissement"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Liste des établissements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Établissements Phares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Lycée Philippe Zinda Kaboré */}
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Lycée Philippe Zinda Kaboré</h3>
                <p className="text-sm text-gray-600 mb-2">Ouagadougou, Centre</p>
                <ul className="text-sm space-y-1">
                  <li>Type : Public</li>
                  <li>Cycles : 1er et 2nd cycles</li>
                  <li>Tél : +226 25 30 XX XX</li>
                </ul>
              </div>

              {/* Lycée Bogodogo */}
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Lycée Bogodogo</h3>
                <p className="text-sm text-gray-600 mb-2">Ouagadougou, Centre</p>
                <ul className="text-sm space-y-1">
                  <li>Type : Public</li>
                  <li>Cycles : 1er et 2nd cycles</li>
                  <li>Tél : +226 25 31 XX XX</li>
                </ul>
              </div>

              {/* Lycée Saint Jean-Baptiste */}
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Lycée Saint Jean-Baptiste</h3>
                <p className="text-sm text-gray-600 mb-2">Ouagadougou, Centre</p>
                <ul className="text-sm space-y-1">
                  <li>Type : Privé conventionné</li>
                  <li>Cycles : 1er et 2nd cycles</li>
                  <li>Tél : +226 25 33 XX XX</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Chiffres Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2,845</div>
                <div className="text-sm text-gray-600">Établissements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">42%</div>
                <div className="text-sm text-gray-600">Taux de scolarisation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">45:1</div>
                <div className="text-sm text-gray-600">Ratio élèves/classe</div>
              </div>
            </div>
          </div>

          {/* Informations pratiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Informations Pratiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Documents requis pour l'inscription</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Extrait d'acte de naissance</li>
                  <li>Certificat de scolarité</li>
                  <li>Bulletins de notes</li>
                  <li>Photos d'identité</li>
                  <li>Certificat de réussite au CEP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Frais de scolarité moyens</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Public : 5,000 - 15,000 FCFA/an</li>
                  <li>Privé conventionné : 75,000 - 150,000 FCFA/an</li>
                  <li>Privé non conventionné : 150,000 - 300,000 FCFA/an</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/secondaire/examens" className="text-blue-600 hover:underline">
                Examens et concours
              </Link>
            </li>
            <li>
              <Link href="/education/secondaire/orientation" className="text-blue-600 hover:underline">
                Orientation scolaire
              </Link>
            </li>
            <li>
              <Link href="/education/secondaire/bourses" className="text-blue-600 hover:underline">
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