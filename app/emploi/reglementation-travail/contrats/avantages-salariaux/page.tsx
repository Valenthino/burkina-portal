'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Emploi - Travail', href: '/emploi' },
  { label: 'Contrats de travail', href: '/emploi/reglementation-travail/contrats' },
  { label: 'Avantages salariaux', href: '/emploi/reglementation-travail/contrats/avantages-salariaux' }
];

export default function AvantagesSalariauxPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Avantages Salariaux en CDD au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Rémunération de Base</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Principe d'égalité</h3>
              <p>
                Un salarié en CDD doit percevoir une rémunération au moins égale à celle que percevrait 
                un salarié en CDI de qualification équivalente occupant le même poste de travail.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Salaire de base identique</li>
                <li>Respect des minima conventionnels</li>
                <li>Application des augmentations générales</li>
                <li>Accès aux mêmes éléments de rémunération</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnité de Précarité</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Conditions d'attribution</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Due à la fin du CDD</li>
                <li>10% de la rémunération totale brute</li>
                <li>Versée avec le dernier salaire</li>
                <li>Incluse dans l'assiette des cotisations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Cas d'exclusion</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rupture anticipée à l'initiative du salarié</li>
                <li>Faute grave du salarié</li>
                <li>Force majeure</li>
                <li>Refus d'un CDI pour un emploi similaire</li>
                <li>Contrats saisonniers ou d'usage</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Primes et Gratifications</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Primes liées au travail</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prime de rendement</li>
                <li>Prime d'objectifs</li>
                <li>Prime de productivité</li>
                <li>Prime de pénibilité</li>
                <li>Prime de risque</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Primes exceptionnelles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prime de fin d'année</li>
                <li>Prime de bilan</li>
                <li>Prime de participation</li>
                <li>Gratifications exceptionnelles</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnités et Avantages</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Indemnités légales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indemnité de congés payés (10%)</li>
                <li>Indemnité de transport</li>
                <li>Indemnité de repas</li>
                <li>Indemnité de déplacement</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Avantages en nature</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Logement de fonction</li>
                <li>Véhicule de service</li>
                <li>Téléphone professionnel</li>
                <li>Tickets restaurant</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Heures Supplémentaires</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Majorations légales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>15% de la 41ème à la 48ème heure</li>
                <li>35% au-delà de la 48ème heure</li>
                <li>50% pour le travail de nuit</li>
                <li>60% pour le travail des jours fériés et dimanches</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Repos compensateur</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Obligatoire au-delà d'un certain seuil</li>
                <li>Rémunéré comme temps de travail</li>
                <li>Cumulable avec les majorations</li>
                <li>À prendre par journée entière</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Les avantages doivent être proportionnels à la durée du contrat</li>
              <li>L'égalité de traitement est un principe fondamental</li>
              <li>Les primes conventionnelles sont dues si les conditions sont remplies</li>
              <li>Le bulletin de paie doit détailler tous les éléments de rémunération</li>
              <li>Les cotisations sociales s'appliquent sur l'ensemble des éléments</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/emploi/reglementation-travail/contrats/droits-avantages" className="text-blue-600 hover:underline">
                Droits et avantages généraux
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/temps-travail" className="text-blue-600 hover:underline">
                Temps de travail en CDD
              </Link>
            </li>
            <li>
              <Link href="/emploi/reglementation-travail/contrats/rupture" className="text-blue-600 hover:underline">
                Rupture du contrat
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