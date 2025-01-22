'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Administration', href: '/fonction-publique/administration' },
  { label: 'Congés', href: '/fonction-publique/administration/conges' }
];

export default function CongesPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Congés et Absences dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Les agents de la fonction publique au Burkina Faso bénéficient de 
              différents types de congés et d'autorisations d'absence, régis par 
              la loi n°081-2015/CNT portant statut général de la fonction publique 
              d'État.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Actualités 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Nouvelle procédure de demande de congé en ligne</li>
                <li>Harmonisation des délais de traitement</li>
                <li>Mise à jour du calendrier des congés annuels</li>
                <li>Révision des conditions d'octroi des congés exceptionnels</li>
              </ul>
            </div>
          </div>

          {/* Types de Congés */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Congés</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Congé Annuel</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Durée : 30 jours calendaires par an</li>
                    <li>Acquisition : 2.5 jours par mois de service</li>
                    <li>Report possible sur l'année suivante</li>
                    <li>Fractionnement autorisé</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Congés de Maladie</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Durée</th>
                        <th className="border p-2">Conditions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Courte durée</td>
                        <td className="border p-2">6 mois max</td>
                        <td className="border p-2">Plein traitement</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Longue durée</td>
                        <td className="border p-2">5 ans max</td>
                        <td className="border p-2">Traitement dégressif</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Congés de Maternité</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Durée : 14 semaines</li>
                    <li>6 semaines avant l'accouchement</li>
                    <li>8 semaines après l'accouchement</li>
                    <li>Prolongation possible sur avis médical</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Congés Exceptionnels</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Motif</th>
                        <th className="border p-2">Durée</th>
                        <th className="border p-2">Observations</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Mariage</td>
                        <td className="border p-2">5 jours</td>
                        <td className="border p-2">Une fois dans la carrière</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Naissance</td>
                        <td className="border p-2">3 jours</td>
                        <td className="border p-2">Par enfant</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Décès proche</td>
                        <td className="border p-2">7 jours</td>
                        <td className="border p-2">Conjoint, enfant, parent</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Pèlerinage</td>
                        <td className="border p-2">30 jours</td>
                        <td className="border p-2">Une fois dans la carrière</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Autorisations d'Absence */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Autorisations d'Absence</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Motifs Autorisés</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Examens et concours</li>
                    <li>Événements familiaux</li>
                    <li>Obligations civiques</li>
                    <li>Activités syndicales</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Durées et Conditions</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Motif</th>
                        <th className="border p-2">Durée Maximum</th>
                        <th className="border p-2">Justificatifs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Examens</td>
                        <td className="border p-2">Durée + trajet</td>
                        <td className="border p-2">Convocation</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Activités syndicales</td>
                        <td className="border p-2">15 jours/an</td>
                        <td className="border p-2">Convocation syndicale</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Procédures */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédures</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Demande de Congé</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal ml-6">
                    <li className="mb-2">Remplir le formulaire de demande</li>
                    <li className="mb-2">Joindre les justificatifs nécessaires</li>
                    <li className="mb-2">Transmission au supérieur hiérarchique</li>
                    <li className="mb-2">Validation par le service RH</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Délais de Traitement</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc ml-6">
                    <li>Congé annuel : 15 jours avant la date</li>
                    <li>Congé maladie : Immédiat avec justificatif</li>
                    <li>Congé exceptionnel : 48h avant sauf urgence</li>
                    <li>Autorisation d'absence : 72h avant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Droits et Obligations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits et Obligations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Droits</h3>
                <ul className="list-disc ml-6">
                  <li>Maintien du traitement selon le type de congé</li>
                  <li>Conservation du poste</li>
                  <li>Prise en compte pour l'ancienneté</li>
                  <li>Protection sociale maintenue</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Obligations</h3>
                <ul className="list-disc ml-6">
                  <li>Respect des délais de demande</li>
                  <li>Fourniture des justificatifs</li>
                  <li>Information en cas de prolongation</li>
                  <li>Reprise à la date prévue</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact et Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Information</h2>
            <div className="space-y-4">
              <p>
                Pour plus d'informations sur les congés et absences :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction des Ressources Humaines</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : conges@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/administration/statut" 
                className="text-blue-600 hover:text-blue-800">
                Statut général
              </Link>
              <Link href="/fonction-publique/administration/remuneration" 
                className="text-blue-600 hover:text-blue-800">
                Rémunération
              </Link>
              <Link href="/fonction-publique/administration/retraite" 
                className="text-blue-600 hover:text-blue-800">
                Retraite
              </Link>
              <Link href="/fonction-publique/services/documents" 
                className="text-blue-600 hover:text-blue-800">
                Documents administratifs
              </Link>
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