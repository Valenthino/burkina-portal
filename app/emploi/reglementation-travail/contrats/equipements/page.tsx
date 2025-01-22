'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Équipements collectifs', href: '/emploi/reglementation-travail/contrats/equipements' }
];

export default function EquipementsCollectifsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Équipements et Services Collectifs en Entreprise au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Installations Sanitaires</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Obligations légales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Toilettes séparées hommes/femmes</li>
                <li>Lavabos avec eau potable</li>
                <li>Vestiaires séparés par sexe</li>
                <li>Douches pour travaux salissants</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Entretien et hygiène</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nettoyage quotidien</li>
                <li>Désinfection régulière</li>
                <li>Ventilation adéquate</li>
                <li>Éclairage suffisant</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Note :</strong> Ces normes sont basées sur les recommandations de l'OIT et 
                  sont similaires dans les pays de l'UEMOA.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Restauration Collective</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Réfectoire</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Obligatoire à partir de 25 salariés</li>
                <li>Local spécifique aéré et éclairé</li>
                <li>Tables et sièges en nombre suffisant</li>
                <li>Point d'eau potable</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Équipements minimaux</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Réfrigérateur</li>
                <li>Micro-ondes</li>
                <li>Lave-mains</li>
                <li>Poubelles fermées</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sécurité et Premiers Secours</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Matériel obligatoire</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trousse de premiers secours</li>
                <li>Extincteurs aux normes</li>
                <li>Signalisation de sécurité</li>
                <li>Issues de secours dégagées</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Local infirmerie</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Obligatoire à partir de 200 salariés</li>
                <li>Personnel médical qualifié</li>
                <li>Équipement médical de base</li>
                <li>Registre des soins</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Espaces de Travail</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Aménagement des locaux</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Surface minimale par personne</li>
                <li>Ventilation adaptée au climat</li>
                <li>Éclairage naturel privilégié</li>
                <li>Protection contre la chaleur</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Postes de travail</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ergonomie adaptée</li>
                <li>Sièges appropriés</li>
                <li>Protection contre le bruit</li>
                <li>Rangements suffisants</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Sociaux</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Transport du personnel</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transport collectif selon distance</li>
                <li>Horaires adaptés aux équipes</li>
                <li>Véhicules aux normes</li>
                <li>Points de ramassage définis</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Services annexes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Salle de repos</li>
                <li>Local syndical</li>
                <li>Parking sécurisé</li>
                <li>Espace de prière</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Maintenance et Entretien</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Obligations de l'employeur</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintenance régulière des équipements</li>
                <li>Nettoyage quotidien des locaux</li>
                <li>Contrôles périodiques obligatoires</li>
                <li>Registre de sécurité à jour</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Vérifications techniques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Installations électriques</li>
                <li>Systèmes de ventilation</li>
                <li>Équipements de sécurité</li>
                <li>Ascenseurs et monte-charges</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Les équipements doivent être adaptés à l'effectif</li>
              <li>L'accès doit être garanti à tous les salariés</li>
              <li>L'entretien régulier est obligatoire</li>
              <li>Les normes de sécurité sont d'ordre public</li>
              <li>Le CHS doit être consulté sur les aménagements</li>
            </ul>
          </div>
        </div>

        {/* Acronymes et Définitions */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Acronymes et Définitions</h2>
          <ul className="space-y-3">
            <li><strong>CHS</strong> : Comité d'Hygiène et de Sécurité</li>
            <li><strong>EPI</strong> : Équipement de Protection Individuelle</li>
            <li><strong>OIT</strong> : Organisation Internationale du Travail</li>
            <li><strong>UEMOA</strong> : Union Économique et Monétaire Ouest Africaine</li>
          </ul>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/droits-collectifs" className="text-blue-600 hover:underline">
                Droits collectifs
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/temps-travail" className="text-blue-600 hover:underline">
                Temps de travail
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/droits-avantages" className="text-blue-600 hover:underline">
                Droits et avantages
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