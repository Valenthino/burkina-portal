'use client';

import Link from 'next/link';

export default function SanteSecuritePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Santé et Sécurité au Travail</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            La santé et la sécurité au travail sont des droits fondamentaux garantis par la législation burkinabè.
            Découvrez les obligations des employeurs et les droits des travailleurs en matière de protection de la santé
            et de la sécurité sur le lieu de travail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Obligations des Employeurs</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Mesures de Protection</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Évaluation des risques professionnels</li>
                  <li>Mise en place des équipements de protection :
                    <ul className="list-disc pl-6 mt-2">
                      <li>Protection individuelle (EPI)</li>
                      <li>Protection collective</li>
                      <li>Signalisation de sécurité</li>
                    </ul>
                  </li>
                  <li>Formation à la sécurité pour tous les employés</li>
                  <li>Mise en place d'un comité d'hygiène et de sécurité (entreprises de plus de 30 employés)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Services de Santé au Travail</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Visite médicale d'embauche obligatoire</li>
                  <li>Visites médicales périodiques :
                    <ul className="list-disc pl-6 mt-2">
                      <li>Tous les ans pour les travailleurs à risque</li>
                      <li>Tous les 2 ans pour les autres travailleurs</li>
                    </ul>
                  </li>
                  <li>Présence d'une infirmerie (entreprises de plus de 200 employés)</li>
                  <li>Convention avec un service médical (moins de 200 employés)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-semibold mb-4">Risques Professionnels</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Risques physiques :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Bruit et vibrations</li>
                    <li>Chaleur et rayonnements</li>
                    <li>Manutention de charges</li>
                  </ul>
                </li>
                <li>Risques chimiques :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Produits toxiques</li>
                    <li>Poussières</li>
                    <li>Fumées et vapeurs</li>
                  </ul>
                </li>
                <li>Risques biologiques et infectieux</li>
                <li>Risques psychosociaux</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Accidents du Travail</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Déclaration obligatoire sous 48 heures</li>
                <li>Prise en charge :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Soins médicaux à 100%</li>
                    <li>Indemnités journalières</li>
                    <li>Rente en cas d'incapacité permanente</li>
                  </ul>
                </li>
                <li>Procédure de reconnaissance :
                  <ul className="list-disc pl-6 mt-2">
                    <li>Enquête administrative</li>
                    <li>Expertise médicale</li>
                    <li>Décision de la CNSS</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">En cas d'urgence</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Numéros d'urgence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>SAMU : 1010</li>
                <li>Pompiers : 18</li>
                <li>Police : 17</li>
                <li>Numéro d'urgence unique : 112</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Premiers secours</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Présence obligatoire de secouristes formés</li>
                <li>1 secouriste pour 20 employés</li>
                <li>Trousse de premiers secours accessible</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Documents et Ressources</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/documents/guide-sst.pdf" className="text-blue-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
                </svg>
                Guide complet de la santé et sécurité au travail (PDF)
              </Link>
            </li>
            <li>
              <Link href="/documents/formulaires-accident.pdf" className="text-blue-600 hover:underline flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
                </svg>
                Formulaires de déclaration d'accident (PDF)
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