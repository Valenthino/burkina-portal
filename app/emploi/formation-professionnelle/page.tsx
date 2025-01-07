'use client';

import Link from 'next/link';

export default function FormationProfessionnellePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Formation Professionnelle</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            Découvrez les opportunités de formation professionnelle au Burkina Faso.
            Développez vos compétences et qualifications pour améliorer votre employabilité.
          </p>
        </div>

        {/* Services et renseignements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Services et renseignements</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/emploi/formation-professionnelle/centres" className="text-blue-600 hover:underline">
                    Centres de formation
                  </Link>
                </h3>
                <p className="text-gray-600">
                  Trouvez les centres de formation professionnelle agréés
                  et leurs programmes de formation disponibles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/emploi/formation-professionnelle/programmes" className="text-blue-600 hover:underline">
                    Programmes de formation
                  </Link>
                </h3>
                <p className="text-gray-600">
                  Consultez les différents programmes de formation disponibles,
                  leurs durées et les compétences visées.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/emploi/formation-professionnelle/financement" className="text-blue-600 hover:underline">
                    Financement de la formation
                  </Link>
                </h3>
                <p className="text-gray-600">
                  Informations sur les options de financement, les bourses
                  et les aides disponibles pour la formation professionnelle.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">En demande</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/emploi/formation-professionnelle/catalogue" className="text-blue-600 hover:underline">
                  Catalogue des formations
                </Link>
              </li>
              <li>
                <Link href="/emploi/formation-professionnelle/apprentissage" className="text-blue-600 hover:underline">
                  Formation en apprentissage
                </Link>
              </li>
              <li>
                <Link href="/emploi/formation-professionnelle/certification" className="text-blue-600 hover:underline">
                  Certification professionnelle
                </Link>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-6">Collaborateurs</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/fafpa" className="text-blue-600 hover:underline">
                  FAFPA - Fonds d'Appui à la Formation Professionnelle et à l'Apprentissage
                </Link>
              </li>
              <li>
                <Link href="/anpe" className="text-blue-600 hover:underline">
                  Agence Nationale Pour l'Emploi
                </Link>
              </li>
              <li>
                <Link href="/centres-formation" className="text-blue-600 hover:underline">
                  Centres de Formation Professionnelle
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Avez-vous trouvé ce que vous cherchiez?</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">
              Oui
            </button>
            <button className="bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700">
              Non
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Date de modification : {new Date().toISOString().split('T')[0]}
          </p>
        </div>
      </div>
    </main>
  );
} 