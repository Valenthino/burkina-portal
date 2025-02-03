'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Santé', href: '/services/sante' },
  { label: 'Santé Maternelle et Infantile', href: '/services/sante/maternelle-infantile' }
];

export default function MaternelleInfantilePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Santé Maternelle et Infantile
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services de Santé Maternelle et Infantile</h2>
            <p className="mb-4">
              La santé maternelle et infantile est une priorité au Burkina Faso. Des services 
              complets sont disponibles pour assurer le bien-être des femmes enceintes, 
              des mères et des enfants de 0 à 5 ans.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Les consultations prénatales sont gratuites 
                dans tous les établissements publics de santé.
              </p>
            </div>
          </div>

          {/* Suivi de grossesse */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Suivi de Grossesse</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Consultations Prénatales (CPN)</h3>
                <ul className="list-disc pl-6">
                  <li>1ère CPN : Avant la fin du 3ème mois</li>
                  <li>2ème CPN : 6ème mois</li>
                  <li>3ème CPN : 8ème mois</li>
                  <li>4ème CPN : 9ème mois</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Examens Recommandés</h3>
                <ul className="list-disc pl-6">
                  <li>Test de grossesse</li>
                  <li>Groupe sanguin et rhésus</li>
                  <li>Test VIH (avec consentement)</li>
                  <li>Échographie obstétricale</li>
                  <li>Dépistage du diabète gestationnel</li>
                  <li>Analyses de sang et d'urine</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accouchement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accouchement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Préparation à l'Accouchement</h3>
                <ul className="list-disc pl-6">
                  <li>Plan d'accouchement</li>
                  <li>Choix de la maternité</li>
                  <li>Préparation du trousseau</li>
                  <li>Transport d'urgence</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Structures d'Accouchement</h3>
                <ul className="list-disc pl-6">
                  <li>Maternités des CSPS</li>
                  <li>Centres médicaux</li>
                  <li>CHU et CHR</li>
                  <li>Cliniques privées agréées</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soins post-nataux */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Soins Post-nataux</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Pour la Mère</h3>
                <ul className="list-disc pl-6">
                  <li>Suivi médical post-partum</li>
                  <li>Conseils d'allaitement</li>
                  <li>Planification familiale</li>
                  <li>Soutien psychologique</li>
                  <li>Rééducation périnéale</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pour le Nouveau-né</h3>
                <ul className="list-disc pl-6">
                  <li>Examen médical complet</li>
                  <li>Vaccination</li>
                  <li>Dépistage néonatal</li>
                  <li>Suivi de croissance</li>
                  <li>Allaitement maternel</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Santé infantile */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Santé Infantile (0-5 ans)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Services Disponibles</h3>
                <ul className="list-disc pl-6">
                  <li>Consultations pédiatriques</li>
                  <li>Vaccination selon le calendrier national</li>
                  <li>Suivi de la croissance</li>
                  <li>Dépistage de la malnutrition</li>
                  <li>Supplémentation en vitamines</li>
                  <li>Traitement des maladies courantes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Consultations Recommandées</h3>
                <ul className="list-disc pl-6">
                  <li>1er mois : tous les 15 jours</li>
                  <li>2-12 mois : mensuelle</li>
                  <li>1-2 ans : trimestrielle</li>
                  <li>2-5 ans : semestrielle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nutrition */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Nutrition</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Allaitement Maternel</h3>
                <ul className="list-disc pl-6">
                  <li>Allaitement exclusif jusqu'à 6 mois</li>
                  <li>Conseils et soutien à l'allaitement</li>
                  <li>Banques de lait maternel</li>
                  <li>Groupes de soutien</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Alimentation Complémentaire</h3>
                <ul className="list-disc pl-6">
                  <li>Introduction des aliments à partir de 6 mois</li>
                  <li>Conseils nutritionnels</li>
                  <li>Suivi de la croissance</li>
                  <li>Supplémentation en micronutriments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Urgences */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Urgences</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Signes d'Alerte Pendant la Grossesse</h3>
                <ul className="list-disc pl-6">
                  <li>Saignements</li>
                  <li>Contractions avant terme</li>
                  <li>Perte des eaux</li>
                  <li>Fièvre élevée</li>
                  <li>Maux de tête sévères</li>
                  <li>Diminution des mouvements du bébé</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Urgences Pédiatriques</h3>
                <ul className="list-disc pl-6">
                  <li>Fièvre élevée</li>
                  <li>Difficultés respiratoires</li>
                  <li>Déshydratation</li>
                  <li>Convulsions</li>
                  <li>Diarrhée sévère</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Programmes spéciaux */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Programmes Spéciaux</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Prévention de la Transmission Mère-Enfant du VIH</h3>
                <ul className="list-disc pl-6">
                  <li>Dépistage volontaire</li>
                  <li>Traitement préventif</li>
                  <li>Suivi médical spécialisé</li>
                  <li>Soutien psychosocial</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Lutte contre la Malnutrition</h3>
                <ul className="list-disc pl-6">
                  <li>Dépistage systématique</li>
                  <li>Prise en charge nutritionnelle</li>
                  <li>Distribution d'aliments thérapeutiques</li>
                  <li>Éducation nutritionnelle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Quand commencer les consultations prénatales ?</h3>
                <p className="text-gray-600">
                  Dès que vous pensez être enceinte, idéalement avant la fin du premier 
                  trimestre de grossesse.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Les soins sont-ils gratuits ?</h3>
                <p className="text-gray-600">
                  Les consultations prénatales sont gratuites dans les établissements 
                  publics. Certains examens et médicaments peuvent être payants.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Quand reprendre le travail après l'accouchement ?</h3>
                <p className="text-gray-600">
                  Le congé de maternité est de 14 semaines au Burkina Faso. La reprise 
                  du travail dépend de votre récupération et de l'avis de votre médecin.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Direction de la Santé Maternelle</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : dsm@sante.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires de Consultation</h3>
                <p className="text-gray-600">
                  Du lundi au vendredi<br />
                  7h30 - 12h30 et 15h00 - 17h30
                </p>
              </div>
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