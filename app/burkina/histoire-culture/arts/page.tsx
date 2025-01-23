'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Histoire et Culture', href: '/burkina/histoire-culture' },
  { label: 'Arts et Traditions', href: '/burkina/histoire-culture/arts' }
];

export default function ArtsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Arts et Traditions du Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Arts traditionnels */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Arts Traditionnels</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Sculpture</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Masques rituels</li>
                <li>Statuettes en bronze</li>
                <li>Sculptures sur bois</li>
                <li>Art Lobi</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Tissage et Textile</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pagnes traditionnels</li>
                <li>Faso Dan Fani</li>
                <li>Bogolan</li>
                <li>Techniques de teinture</li>
              </ul>
            </div>
          </div>

          {/* Musique et Danse */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Musique et Danse</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Instruments Traditionnels</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Balafon</li>
                <li>Djembé</li>
                <li>Kora</li>
                <li>Flûte peule</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Danses Traditionnelles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Warba (danse mossi)</li>
                <li>Danse des masques bobo</li>
                <li>Danse des griots</li>
                <li>Danse royale mossi</li>
              </ul>
            </div>
          </div>

          {/* Artisanat */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Artisanat</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Travail du Métal</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bronze</li>
                <li>Bijouterie traditionnelle</li>
                <li>Forge traditionnelle</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Vannerie et Poterie</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Paniers tressés</li>
                <li>Poterie décorative</li>
                <li>Objets utilitaires</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Maroquinerie</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Travail du cuir</li>
                <li>Sacs et accessoires</li>
                <li>Chaussures traditionnelles</li>
              </ul>
            </div>
          </div>

          {/* Traditions et Coutumes */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Traditions et Coutumes</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Cérémonies Traditionnelles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fêtes coutumières</li>
                <li>Rituels d'initiation</li>
                <li>Cérémonies royales mossi</li>
                <li>Mariages traditionnels</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Contes et Légendes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tradition orale</li>
                <li>Mythes fondateurs</li>
                <li>Contes populaires</li>
                <li>Rôle des griots</li>
              </ul>
            </div>
          </div>

          {/* Art Contemporain */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Art Contemporain</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Arts Visuels</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Peinture moderne</li>
                <li>Photographie</li>
                <li>Installations</li>
                <li>Art numérique</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Musique Moderne</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Musique mandingue</li>
                <li>Fusion traditionnelle-moderne</li>
                <li>Hip-hop burkinabè</li>
                <li>Scène musicale contemporaine</li>
              </ul>
            </div>
          </div>

          {/* Festivals et Événements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Festivals et Événements</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>FESPACO (Festival panafricain du cinéma)</li>
                <li>SIAO (Salon International de l'Artisanat)</li>
                <li>Semaine Nationale de la Culture</li>
                <li>Festival des Masques et des Arts</li>
                <li>NAK (Nuits Atypiques de Koudougou)</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/burkina/decouvrir/evenements" 
                  className="text-blue-600 hover:underline"
                >
                  Voir l'agenda culturel complet →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/burkina/histoire-culture/patrimoine" className="text-blue-600 hover:underline">
                Patrimoine culturel
              </Link>
            </li>
            <li>
              <Link href="/burkina/histoire-culture/langues" className="text-blue-600 hover:underline">
                Langues nationales
              </Link>
            </li>
            <li>
              <Link href="/burkina/decouvrir/tourisme" className="text-blue-600 hover:underline">
                Tourisme culturel
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