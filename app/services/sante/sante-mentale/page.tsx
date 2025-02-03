'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Santé', href: '/services/sante' },
  { label: 'Santé Mentale', href: '/services/sante/sante-mentale' }
];

export default function SanteMentalePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Santé Mentale
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services de Santé Mentale</h2>
            <p className="mb-4">
              La santé mentale est une composante essentielle du bien-être. Le Burkina 
              Faso dispose de services spécialisés pour accompagner les personnes 
              souffrant de troubles psychiques et promouvoir le bien-être mental.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> En cas de crise ou d'urgence psychiatrique, 
                contactez immédiatement le numéro d'urgence : 80 00 11 12
              </p>
            </div>
          </div>

          {/* Types de troubles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Troubles Mentaux</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Troubles Courants</h3>
                <ul className="list-disc pl-6">
                  <li>Dépression</li>
                  <li>Anxiété</li>
                  <li>Troubles du sommeil</li>
                  <li>Stress post-traumatique</li>
                  <li>Addictions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Troubles Sévères</h3>
                <ul className="list-disc pl-6">
                  <li>Schizophrénie</li>
                  <li>Troubles bipolaires</li>
                  <li>Troubles obsessionnels compulsifs</li>
                  <li>Psychoses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services disponibles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Disponibles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Consultations</h3>
                <ul className="list-disc pl-6">
                  <li>Psychiatrie</li>
                  <li>Psychologie</li>
                  <li>Psychothérapie</li>
                  <li>Thérapie familiale</li>
                  <li>Addictologie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prises en Charge</h3>
                <ul className="list-disc pl-6">
                  <li>Hospitalisation</li>
                  <li>Hôpital de jour</li>
                  <li>Suivi ambulatoire</li>
                  <li>Urgences psychiatriques</li>
                  <li>Réhabilitation psychosociale</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Centres spécialisés */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Centres Spécialisés</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ouagadougou</h3>
                <ul className="list-disc pl-6">
                  <li>Service de Psychiatrie du CHU Yalgado</li>
                  <li>Centre de Santé Mentale</li>
                  <li>Cliniques privées spécialisées</li>
                  <li>Centres d'addictologie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bobo-Dioulasso</h3>
                <ul className="list-disc pl-6">
                  <li>Service de Psychiatrie du CHU Souro Sanou</li>
                  <li>Centre de consultation psychologique</li>
                  <li>Unités de soins spécialisés</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Traitements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Traitements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Approches Thérapeutiques</h3>
                <ul className="list-disc pl-6">
                  <li>Médicaments psychotropes</li>
                  <li>Psychothérapie individuelle</li>
                  <li>Thérapie de groupe</li>
                  <li>Thérapie comportementale</li>
                  <li>Art-thérapie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suivi</h3>
                <ul className="list-disc pl-6">
                  <li>Consultations régulières</li>
                  <li>Ajustement des traitements</li>
                  <li>Soutien psychosocial</li>
                  <li>Réinsertion sociale</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prévention */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prévention et Bien-être Mental</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conseils de Prévention</h3>
                <ul className="list-disc pl-6">
                  <li>Gestion du stress</li>
                  <li>Hygiène de vie</li>
                  <li>Activité physique</li>
                  <li>Relations sociales</li>
                  <li>Équilibre travail-repos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Signes d'Alerte</h3>
                <ul className="list-disc pl-6">
                  <li>Changements d'humeur importants</li>
                  <li>Troubles du sommeil persistants</li>
                  <li>Isolement social</li>
                  <li>Pensées négatives récurrentes</li>
                  <li>Difficultés professionnelles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soutien */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Soutien et Accompagnement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Associations et Groupes de Soutien</h3>
                <ul className="list-disc pl-6">
                  <li>Association de soutien psychologique</li>
                  <li>Groupes d'entraide</li>
                  <li>Associations de familles</li>
                  <li>Réseaux de pairs-aidants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Soutien Social</h3>
                <ul className="list-disc pl-6">
                  <li>Aide à l'insertion professionnelle</li>
                  <li>Accompagnement social</li>
                  <li>Soutien familial</li>
                  <li>Activités communautaires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Urgences */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Urgences Psychiatriques</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Quand Consulter en Urgence</h3>
                <ul className="list-disc pl-6">
                  <li>Idées suicidaires</li>
                  <li>Crise d'angoisse sévère</li>
                  <li>Comportement dangereux</li>
                  <li>Confusion mentale</li>
                  <li>Délire ou hallucinations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Services d'Urgence</h3>
                <ul className="list-disc pl-6">
                  <li>SAMU psychiatrique</li>
                  <li>Urgences hospitalières</li>
                  <li>Ligne d'écoute 24h/24</li>
                  <li>Équipes mobiles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Comment obtenir une consultation ?</h3>
                <p className="text-gray-600">
                  Vous pouvez consulter directement un professionnel de santé mentale 
                  ou passer par votre médecin traitant pour une orientation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Les consultations sont-elles confidentielles ?</h3>
                <p className="text-gray-600">
                  Oui, tous les professionnels de santé mentale sont tenus au secret 
                  médical. Vos informations restent strictement confidentielles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Les soins sont-ils remboursés ?</h3>
                <p className="text-gray-600">
                  L'AMU couvre une partie des soins psychiatriques. Des aides spécifiques 
                  existent pour les personnes en difficulté.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Service de Santé Mentale</h3>
                <p className="text-gray-600">
                  Numéro d'urgence : 80 00 11 12<br />
                  Email : sante.mentale@sante.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires de Consultation</h3>
                <p className="text-gray-600">
                  Du lundi au vendredi<br />
                  7h30 - 12h30 et 15h00 - 17h30<br />
                  Urgences : 24h/24 et 7j/7
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