'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Santé', href: '/services/sante' },
  { label: 'Pharmacies', href: '/services/sante/pharmacies' }
];

export default function PharmaciesPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Pharmacies
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Pharmaceutiques</h2>
            <p className="mb-4">
              Les pharmacies au Burkina Faso assurent la distribution des médicaments 
              et produits de santé. Elles jouent un rôle essentiel dans l'accès aux 
              soins et le conseil en santé.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> En dehors des heures d'ouverture normales, 
                des pharmacies de garde sont disponibles 24h/24 pour les urgences.
              </p>
            </div>
          </div>

          {/* Pharmacies de garde */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pharmacies de Garde</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Comment Trouver une Pharmacie de Garde</h3>
                <ul className="list-disc pl-6">
                  <li>Consulter la liste dans les journaux locaux</li>
                  <li>Appeler le numéro vert : 80 00 11 11</li>
                  <li>Vérifier sur le site de l'Ordre des Pharmaciens</li>
                  <li>Consulter les affichages dans les pharmacies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires des Gardes</h3>
                <ul className="list-disc pl-6">
                  <li>Jours ouvrables : 19h30 - 7h30</li>
                  <li>Week-ends : du samedi 12h au lundi 7h30</li>
                  <li>Jours fériés : 24h/24</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services disponibles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Disponibles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Services de Base</h3>
                <ul className="list-disc pl-6">
                  <li>Délivrance de médicaments</li>
                  <li>Conseil pharmaceutique</li>
                  <li>Premiers secours</li>
                  <li>Orientation médicale</li>
                  <li>Mesure de la tension artérielle</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Services Spécialisés</h3>
                <ul className="list-disc pl-6">
                  <li>Préparations magistrales</li>
                  <li>Matériel médical</li>
                  <li>Produits vétérinaires</li>
                  <li>Analyses biologiques rapides</li>
                  <li>Vaccination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Médicaments */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Médicaments</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Types de Médicaments</h3>
                <ul className="list-disc pl-6">
                  <li>Médicaments essentiels</li>
                  <li>Génériques</li>
                  <li>Spécialités</li>
                  <li>Produits traditionnels améliorés</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prescriptions</h3>
                <ul className="list-disc pl-6">
                  <li>Médicaments sur ordonnance</li>
                  <li>Médicaments en vente libre</li>
                  <li>Renouvellement d'ordonnance</li>
                  <li>Substitution par des génériques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Localisation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pharmacies à Ouagadougou</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Centre-ville</h3>
                <ul className="list-disc pl-6">
                  <li>Pharmacie Centrale - Avenue de la Nation</li>
                  <li>Pharmacie du Progrès - Rue du Commerce</li>
                  <li>Pharmacie de l'Indépendance - Boulevard Charles de Gaulle</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quartiers Périphériques</h3>
                <ul className="list-disc pl-6">
                  <li>Pharmacie de Dassasgho</li>
                  <li>Pharmacie de la Patte d'Oie</li>
                  <li>Pharmacie de Pissy</li>
                  <li>Pharmacie de Tampouy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prix et remboursements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prix et Remboursements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Tarification</h3>
                <ul className="list-disc pl-6">
                  <li>Prix réglementés des médicaments essentiels</li>
                  <li>Tarifs des préparations magistrales</li>
                  <li>Majoration pour service de garde</li>
                  <li>Différences entre génériques et spécialités</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prise en Charge</h3>
                <ul className="list-disc pl-6">
                  <li>Couverture AMU</li>
                  <li>Assurances privées</li>
                  <li>Mutuelles de santé</li>
                  <li>Programmes spéciaux (VIH, tuberculose)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conseils Pratiques</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conservation des Médicaments</h3>
                <ul className="list-disc pl-6">
                  <li>Respecter les conditions de stockage</li>
                  <li>Vérifier les dates de péremption</li>
                  <li>Tenir hors de portée des enfants</li>
                  <li>Protéger de la chaleur et de l'humidité</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bon Usage des Médicaments</h3>
                <ul className="list-disc pl-6">
                  <li>Respecter la posologie</li>
                  <li>Suivre la durée du traitement</li>
                  <li>Ne pas s'automédiquer</li>
                  <li>Rapporter les médicaments non utilisés</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Peut-on obtenir des médicaments sans ordonnance ?</h3>
                <p className="text-gray-600">
                  Certains médicaments sont disponibles en vente libre, mais beaucoup 
                  nécessitent une ordonnance pour des raisons de sécurité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Les génériques sont-ils aussi efficaces ?</h3>
                <p className="text-gray-600">
                  Oui, les médicaments génériques contiennent les mêmes principes actifs 
                  que les médicaments de marque et sont soumis aux mêmes contrôles de qualité.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Que faire des médicaments périmés ?</h3>
                <p className="text-gray-600">
                  Les médicaments périmés doivent être rapportés à la pharmacie pour 
                  être détruits de manière sécurisée.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ordre des Pharmaciens</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : ordre@pharmaciens.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires Standards</h3>
                <p className="text-gray-600">
                  Du lundi au samedi<br />
                  7h30 - 12h30 et 15h00 - 19h30
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