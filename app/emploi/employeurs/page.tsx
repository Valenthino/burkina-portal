'use client';

import Link from 'next/link';

export default function EmployeursPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Espace Employeurs</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            Accédez aux ressources et informations essentielles pour les employeurs au Burkina Faso.
            Découvrez les obligations légales, les procédures de recrutement et les programmes de soutien disponibles.
          </p>
        </div>

        {/* Services et renseignements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Services et renseignements</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/emploi/employeurs/obligations" className="text-blue-600 hover:underline">
                    Obligations légales
                  </Link>
                </h3>
                <p className="text-gray-600">
                  Informations sur les obligations en matière d'emploi, de sécurité sociale,
                  de fiscalité et de protection des travailleurs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/emploi/employeurs/recrutement" className="text-blue-600 hover:underline">
                    Processus de recrutement
                  </Link>
                </h3>
                <p className="text-gray-600">
                  Guide complet sur les procédures de recrutement, les contrats de travail,
                  et les bonnes pratiques en matière d'embauche.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/emploi/employeurs/subventions" className="text-blue-600 hover:underline">
                    Programmes de soutien
                  </Link>
                </h3>
                <p className="text-gray-600">
                  Découvrez les subventions, les programmes d'aide à l'emploi
                  et les incitations fiscales disponibles pour les employeurs.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">En demande</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/emploi/employeurs/declaration-cnss" className="text-blue-600 hover:underline">
                  Déclaration CNSS en ligne
                </Link>
              </li>
              <li>
                <Link href="/emploi/employeurs/contrats" className="text-blue-600 hover:underline">
                  Modèles de contrats de travail
                </Link>
              </li>
              <li>
                <Link href="/emploi/employeurs/apprentissage" className="text-blue-600 hover:underline">
                  Programme d'apprentissage
                </Link>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-6">Collaborateurs</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/chambre-commerce" className="text-blue-600 hover:underline">
                  Chambre de Commerce et d'Industrie
                </Link>
              </li>
              <li>
                <Link href="/maison-entreprise" className="text-blue-600 hover:underline">
                  Maison de l'Entreprise
                </Link>
              </li>
              <li>
                <Link href="/agence-emploi" className="text-blue-600 hover:underline">
                  Agence Nationale Pour l'Emploi
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