'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction Publique', href: '/fonction-publique' },
  { label: 'Carrières', href: '/fonction-publique/carrieres' }
];

export default function CarrieresPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Carrières dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              La carrière dans la Fonction Publique burkinabè est structurée selon 
              différentes catégories et échelles, offrant des possibilités d'évolution 
              basées sur l'ancienneté, la formation continue et les concours professionnels.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'avancement dans la Fonction Publique 
                se fait selon deux modalités principales : l'avancement d'échelon 
                (à l'ancienneté) et l'avancement de grade (par concours professionnel 
                ou formation qualifiante).
              </p>
            </div>
          </div>

          {/* Structure des carrières */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Structure des Carrières</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Catégories</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Catégorie A</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>A1 : BAC + 7 ou plus</li>
                      <li>A2 : BAC + 5</li>
                      <li>A3 : BAC + 4</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Catégorie B</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>B1 : BAC + 3</li>
                      <li>B2 : BAC + 2</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Catégorie C</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>C1 : BAC</li>
                      <li>C2 : BEPC</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Échelles et Échelons</h3>
                <p className="mb-4">
                  Chaque grade comprend plusieurs échelons, représentant les différents 
                  niveaux de rémunération au sein d'un même grade.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>1er échelon : début de carrière</li>
                  <li>Échelons intermédiaires : progression à l'ancienneté</li>
                  <li>Échelon terminal : sommet du grade</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Évolution de carrière */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Évolution de Carrière</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Avancement d'Échelon</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Automatique tous les 2 ans</li>
                  <li>Basé sur l'ancienneté</li>
                  <li>Augmentation de l'indice de rémunération</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Avancement de Grade</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Par concours professionnel</li>
                  <li>Par formation qualifiante</li>
                  <li>Par ancienneté (cas exceptionnels)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Changement de Corps</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Par concours professionnel</li>
                  <li>Par formation diplômante</li>
                  <li>Par validation des acquis de l'expérience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rémunération */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Rémunération</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Composantes du Salaire</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Traitement de base (selon indice)</li>
                  <li>Indemnités statutaires</li>
                  <li>Primes spécifiques</li>
                  <li>Allocations familiales</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Grille Indiciaire</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Catégorie
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Indice minimum
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Indice maximum
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">A1</td>
                        <td className="px-6 py-4 whitespace-nowrap">1000</td>
                        <td className="px-6 py-4 whitespace-nowrap">1600</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">A2</td>
                        <td className="px-6 py-4 whitespace-nowrap">800</td>
                        <td className="px-6 py-4 whitespace-nowrap">1400</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">B1</td>
                        <td className="px-6 py-4 whitespace-nowrap">600</td>
                        <td className="px-6 py-4 whitespace-nowrap">1200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Mobilité et positions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Mobilité et Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Positions Statutaires</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Activité</li>
                  <li>Détachement</li>
                  <li>Disponibilité</li>
                  <li>Sous les drapeaux</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Mobilité</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mutation géographique</li>
                  <li>Mutation fonctionnelle</li>
                  <li>Mise à disposition</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Évaluation et notation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Évaluation et Notation</h2>
            <div className="space-y-4">
              <p>
                L'évaluation annuelle des fonctionnaires est un élément clé de la 
                gestion des carrières. Elle permet d'apprécier les compétences, 
                les performances et le potentiel d'évolution de chaque agent.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-3">Critères d'Évaluation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Compétences professionnelles</li>
                  <li>Qualité du travail</li>
                  <li>Sens des responsabilités</li>
                  <li>Relations professionnelles</li>
                  <li>Ponctualité et assiduité</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Documents utiles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Documents Utiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Guide des carrières
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Grille indiciaire complète
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Formulaires administratifs
              </a>
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