'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' },
  { label: 'Carrière', href: '/fonction-publique/carriere' },
  { label: 'Avancements', href: '/fonction-publique/carriere/avancements' }
];

export default function AvancementsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Avancements dans la Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              L'avancement dans la fonction publique burkinabè constitue une progression 
              dans la carrière du fonctionnaire, se manifestant soit par un changement 
              d'échelon, soit par un changement de classe, soit par un changement de 
              catégorie, conformément aux dispositions de la loi n°081-2015/CNT.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold">
                Important : Calendrier 2024
              </p>
              <ul className="list-disc ml-4 text-sm">
                <li>Dépôt des dossiers d'avancement : du 1er au 31 mars 2024</li>
                <li>Commission d'avancement : mai 2024</li>
                <li>Prise d'effet : 1er janvier 2024</li>
              </ul>
            </div>
          </div>

          {/* Types d'Avancement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types d'Avancement</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Avancement d'Échelon</h3>
                <p className="mb-2">Progression automatique basée sur l'ancienneté.</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Tous les deux ans</li>
                  <li>Augmentation de l'indice de traitement</li>
                  <li>Sans changement de fonction</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Avancement de Classe</h3>
                <p className="mb-2">Progression au sein d'une même catégorie.</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Après 2 ans dans le dernier échelon</li>
                  <li>Sur la base du mérite</li>
                  <li>Évaluation professionnelle requise</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Avancement de Catégorie</h3>
                <p className="mb-2">Changement de catégorie par concours professionnel ou formation.</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Concours professionnels</li>
                  <li>Formation qualifiante</li>
                  <li>Conditions d'ancienneté spécifiques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conditions d'Avancement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'Avancement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Générales</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Être en activité ou en détachement</li>
                  <li>Avoir l'ancienneté requise</li>
                  <li>Avoir une évaluation positive</li>
                  <li>Ne pas être sous le coup d'une sanction disciplinaire</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Conditions Spécifiques</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Type d'Avancement</th>
                        <th className="border p-2">Ancienneté Requise</th>
                        <th className="border p-2">Conditions Particulières</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Échelon</td>
                        <td className="border p-2">2 ans</td>
                        <td className="border p-2">Automatique</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Classe</td>
                        <td className="border p-2">2 ans dans le dernier échelon</td>
                        <td className="border p-2">Évaluation positive</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Catégorie</td>
                        <td className="border p-2">Variable selon le corps</td>
                        <td className="border p-2">Concours ou formation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Procédure d'Avancement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédure d'Avancement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Constitution du Dossier</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Demande manuscrite timbrée</li>
                  <li>Acte de nomination ou de titularisation</li>
                  <li>Dernier acte d'avancement</li>
                  <li>Fiches d'évaluation des deux dernières années</li>
                  <li>État signalétique des services</li>
                  <li>Certificat administratif</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Circuit du Dossier</h3>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">Dépôt auprès du supérieur hiérarchique</li>
                  <li className="mb-2">Transmission à la DRH du ministère</li>
                  <li className="mb-2">Examen par la commission d'avancement</li>
                  <li className="mb-2">Décision d'avancement</li>
                  <li className="mb-2">Notification à l'agent</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Effets de l'Avancement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Effets de l'Avancement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Effets Administratifs</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Nouvelle position indiciaire</li>
                  <li>Nouvelles responsabilités éventuelles</li>
                  <li>Modification du dossier administratif</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Effets Financiers</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Augmentation du traitement de base</li>
                  <li>Révision des indemnités</li>
                  <li>Impact sur la pension de retraite</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recours et Contentieux */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Recours et Contentieux</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Types de Recours</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Recours gracieux auprès de l'administration</li>
                  <li>Recours hiérarchique</li>
                  <li>Recours contentieux devant le tribunal administratif</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Délais de Recours</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Recours gracieux : 2 mois</li>
                  <li>Recours contentieux : 2 mois après décision explicite ou implicite</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact et Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Information</h2>
            <div className="space-y-4">
              <p>
                Pour plus d'informations sur les avancements :
              </p>
              <ul className="list-disc ml-6">
                <li>Direction des Ressources Humaines</li>
                <li>Téléphone : (+226) 25 33 06 85</li>
                <li>Email : drh@fonction-publique.gov.bf</li>
                <li>Adresse : Avenue de l'Indépendance, Ouagadougou</li>
              </ul>
            </div>
          </div>

          {/* Voir aussi */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fonction-publique/carriere/mutations" 
                className="text-blue-600 hover:text-blue-800">
                Mutations
              </Link>
              <Link href="/fonction-publique/administration/remuneration" 
                className="text-blue-600 hover:text-blue-800">
                Rémunération
              </Link>
              <Link href="/fonction-publique/formation/examens" 
                className="text-blue-600 hover:text-blue-800">
                Examens professionnels
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