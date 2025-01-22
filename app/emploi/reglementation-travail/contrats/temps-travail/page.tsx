'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Temps de travail', href: '/emploi/reglementation-travail/contrats/temps-travail' }
];

export default function TempsDeTravailPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Réglementation du Temps de Travail au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Durée Légale du Travail</h2>
            <div className="space-y-4">
              <p>
                La durée légale du travail au Burkina Faso, comme dans la plupart des pays de l'UEMOA 
                (Union Économique et Monétaire Ouest Africaine), est fixée à :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>40 heures par semaine</li>
                <li>8 heures par jour</li>
                <li>173,33 heures par mois</li>
                <li>2080 heures par an</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Note :</strong> Cette durée est alignée sur les standards internationaux et 
                  similaire à celle en vigueur dans d'autres pays comme la Côte d'Ivoire, le Sénégal, 
                  et le Mali.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Organisation du Temps de Travail</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Répartition hebdomadaire</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>5 jours de 8 heures</li>
                <li>6 jours de 6 heures 40 minutes</li>
                <li>Possibilité d'aménagement sur accord</li>
                <li>Respect des périodes de repos obligatoire</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Pauses et repos</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pause déjeuner : minimum 1 heure</li>
                <li>Repos quotidien : 11 heures consécutives</li>
                <li>Repos hebdomadaire : 24 heures consécutives</li>
                <li>Repos les jours fériés légaux</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Heures Supplémentaires</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Définition et limites</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Au-delà de 40 heures par semaine</li>
                <li>Maximum 20 heures supplémentaires par semaine</li>
                <li>Autorisation préalable de l'inspection du travail</li>
                <li>Caractère exceptionnel et temporaire</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Majorations salariales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>15% de majoration (41ème à 48ème heure)</li>
                <li>35% de majoration (au-delà de 48 heures)</li>
                <li>50% pour le travail de nuit (21h à 5h)</li>
                <li>60% pour le travail des jours fériés et dimanches</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Travail de Nuit</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Définition et conditions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Période : 21 heures à 5 heures</li>
                <li>Interdiction pour les moins de 18 ans</li>
                <li>Autorisation spéciale pour les femmes</li>
                <li>Compensation obligatoire</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Protections spécifiques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visite médicale régulière</li>
                <li>Transport assuré par l'employeur</li>
                <li>Pause obligatoire toutes les 6 heures</li>
                <li>Équipements de protection adaptés</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Aménagements Particuliers</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Travail par équipes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>2x8 (deux équipes alternantes)</li>
                <li>3x8 (trois équipes alternantes)</li>
                <li>Équipes chevauchantes</li>
                <li>Rotation des équipes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Horaires flexibles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Plages fixes obligatoires</li>
                <li>Plages variables</li>
                <li>Accord collectif nécessaire</li>
                <li>Contrôle des horaires</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Décompte du Temps de Travail</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Obligations de l'employeur</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registre des horaires obligatoire</li>
                <li>Affichage des horaires</li>
                <li>Suivi des heures supplémentaires</li>
                <li>Conservation des documents</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Temps de travail effectif</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Temps à disposition de l'employeur</li>
                <li>Temps de formation obligatoire</li>
                <li>Temps d'habillage/déshabillage imposé</li>
                <li>Temps de trajet professionnel</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Le non-respect des durées maximales est sanctionné pénalement</li>
              <li>Les conventions collectives peuvent prévoir des dispositions plus favorables</li>
              <li>L'inspection du travail peut autoriser des dérogations temporaires</li>
              <li>Les heures supplémentaires doivent être justifiées par des nécessités de service</li>
              <li>Le repos compensateur est obligatoire au-delà de certains seuils</li>
            </ul>
          </div>
        </div>

        {/* Acronymes et Définitions */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Acronymes et Définitions</h2>
          <ul className="space-y-3">
            <li><strong>UEMOA</strong> : Union Économique et Monétaire Ouest Africaine</li>
            <li><strong>SMIG</strong> : Salaire Minimum Interprofessionnel Garanti</li>
            <li><strong>IT</strong> : Inspection du Travail</li>
            <li><strong>CCT</strong> : Convention Collective du Travail</li>
          </ul>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/droits-avantages" className="text-blue-600 hover:underline">
                Droits et avantages des salariés
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/avantages-salariaux" className="text-blue-600 hover:underline">
                Avantages salariaux
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/droits-collectifs" className="text-blue-600 hover:underline">
                Droits collectifs
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