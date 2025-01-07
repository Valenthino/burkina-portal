'use client';

import Link from 'next/link';

export default function CodeTravailPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Code du Travail du Burkina Faso</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            Le Code du travail du Burkina Faso, institué par la Loi N°028-2008/AN du 13 mai 2008,
            régit les relations de travail entre les employeurs et les travailleurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Dispositions Générales</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Contrat de Travail</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Durée déterminée (CDD) : Maximum 2 ans, renouvelable une fois</li>
                  <li>Durée indéterminée (CDI) : Contrat de droit commun</li>
                  <li>Période d'essai : 
                    <ul className="list-disc pl-6 mt-2">
                      <li>Ouvriers : 8 jours à 1 mois</li>
                      <li>Employés : 1 à 3 mois</li>
                      <li>Cadres : 1 à 6 mois</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Temps de Travail</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Durée légale : 40 heures par semaine</li>
                  <li>Heures supplémentaires :
                    <ul className="list-disc pl-6 mt-2">
                      <li>De la 41e à la 48e heure : majoration de 15%</li>
                      <li>Au-delà de la 48e heure : majoration de 35%</li>
                      <li>Travail de nuit : majoration de 50%</li>
                    </ul>
                  </li>
                  <li>Repos hebdomadaire : 24 heures consécutives</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Rémunération</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>SMIG : 34 664 FCFA par mois</li>
                  <li>Paiement du salaire : mensuel, au plus tard 8 jours après la fin du mois</li>
                  <li>Prime d'ancienneté :
                    <ul className="list-disc pl-6 mt-2">
                      <li>3% après 3 ans de service</li>
                      <li>5% après 5 ans de service</li>
                      <li>1% par année supplémentaire jusqu'à 25%</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-semibold mb-4">Congés et Absences</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Congés payés : 
                  <ul className="list-disc pl-6 mt-2">
                    <li>2.5 jours ouvrables par mois de travail</li>
                    <li>30 jours calendaires par an</li>
                    <li>2 jours supplémentaires par enfant à charge</li>
                  </ul>
                </li>
                <li>Congé de maternité : 14 semaines
                  <ul className="list-disc pl-6 mt-2">
                    <li>8 semaines après l'accouchement</li>
                    <li>6 semaines avant l'accouchement</li>
                  </ul>
                </li>
                <li>Permissions exceptionnelles :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Mariage du travailleur : 3 jours</li>
                    <li>Décès du conjoint : 5 jours</li>
                    <li>Naissance d'un enfant : 3 jours</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Rupture du Contrat</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Préavis de démission/licenciement :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Ouvriers : 8 jours</li>
                    <li>Employés : 1 mois</li>
                    <li>Cadres : 3 mois</li>
                  </ul>
                </li>
                <li>Indemnité de licenciement :
                  <ul className="list-disc pl-6 mt-2">
                    <li>25% du salaire mensuel par année de 1 à 5 ans</li>
                    <li>30% du salaire mensuel par année de 6 à 10 ans</li>
                    <li>35% du salaire mensuel au-delà de 10 ans</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Documents Utiles</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/documents/code-travail-2008.pdf" className="text-blue-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
                </svg>
                Code du Travail - Texte intégral (PDF)
              </Link>
            </li>
            <li>
              <Link href="/documents/convention-collective.pdf" className="text-blue-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
                </svg>
                Convention Collective Interprofessionnelle (PDF)
              </Link>
            </li>
          </ul>
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