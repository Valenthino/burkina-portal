'use client';

import Link from 'next/link';

export default function ReglementationTravailPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Réglementation du travail</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            Renseignez-vous sur les lois du travail au Burkina Faso et les normes relatives en milieu de travail.
            Comprend les normes nationales de santé et de sécurité et les programmes sur les relations de travail.
          </p>
        </div>

        {/* Services et renseignements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Services et renseignements</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/emploi/reglementation-travail/code-travail" className="text-blue-600 hover:underline">
                    Code du travail
                  </Link>
                </h3>
                <p className="text-gray-600">
                  Information sur les droits, la cessation d'emploi, le salaire minimum, 
                  les heures de travail, les vacances et les congés.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/emploi/reglementation-travail/sante-securite" className="text-blue-600 hover:underline">
                    Santé et sécurité au travail
                  </Link>
                </h3>
                <p className="text-gray-600">
                  Renseignez-vous sur les dangers au travail, les droits et responsabilités,
                  santé et bien-être, prévention des accidents et compensation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/emploi/reglementation-travail/relations-travail" className="text-blue-600 hover:underline">
                    Relations de travail
                  </Link>
                </h3>
                <p className="text-gray-600">
                  Information sur le processus de négociation collective, 
                  les programmes de prévention des conflits et la médiation.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">En demande</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/emploi/reglementation-travail/conges" className="text-blue-600 hover:underline">
                  Normes du travail sur les congés annuels et jours fériés
                </Link>
              </li>
              <li>
                <Link href="/emploi/reglementation-travail/cessation" className="text-blue-600 hover:underline">
                  Normes sur la cessation d'emploi et indemnités
                </Link>
              </li>
              <li>
                <Link href="/emploi/reglementation-travail/securite" className="text-blue-600 hover:underline">
                  Sécurité au travail
                </Link>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-6">Collaborateurs</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/ministere-travail" className="text-blue-600 hover:underline">
                  Ministère du Travail
                </Link>
              </li>
              <li>
                <Link href="/inspection-travail" className="text-blue-600 hover:underline">
                  Inspection du Travail
                </Link>
              </li>
              <li>
                <Link href="/cnss" className="text-blue-600 hover:underline">
                  Caisse Nationale de Sécurité Sociale
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