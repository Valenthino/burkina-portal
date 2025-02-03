'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Santé', href: '/services/sante' }
];

export default function SantePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Services de Santé
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services de Santé au Burkina Faso</h2>
            <p className="mb-4">
              Le système de santé du Burkina Faso offre une gamme complète de services 
              médicaux et de soins de santé. Cette section vous guide à travers les 
              différents services disponibles et vous aide à accéder aux soins dont 
              vous avez besoin.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> En cas d'urgence médicale, appelez immédiatement 
                le numéro d'urgence : 112
              </p>
            </div>
          </div>

          {/* Services disponibles */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Hôpitaux et centres de santé */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Hôpitaux et Centres de Santé</h3>
              <p className="text-gray-600 mb-4">
                Trouvez les établissements de santé près de chez vous et leurs services.
              </p>
              <Link 
                href="/services/sante/hopitaux-centres"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Urgences médicales */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Urgences Médicales</h3>
              <p className="text-gray-600 mb-4">
                Services d'urgence, numéros utiles et conduite à tenir en cas d'urgence.
              </p>
              <Link 
                href="/services/sante/urgences"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Vaccination */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Vaccination</h3>
              <p className="text-gray-600 mb-4">
                Calendrier vaccinal, campagnes de vaccination et informations pratiques.
              </p>
              <Link 
                href="/services/sante/vaccination"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Santé maternelle et infantile */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Santé Maternelle et Infantile</h3>
              <p className="text-gray-600 mb-4">
                Suivi de grossesse, soins pédiatriques et services de protection maternelle.
              </p>
              <Link 
                href="/services/sante/maternelle-infantile"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Pharmacies */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Pharmacies</h3>
              <p className="text-gray-600 mb-4">
                Trouvez les pharmacies de garde et accédez aux médicaments essentiels.
              </p>
              <Link 
                href="/services/sante/pharmacies"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Maladies chroniques */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Maladies Chroniques</h3>
              <p className="text-gray-600 mb-4">
                Prise en charge et suivi des maladies chroniques.
              </p>
              <Link 
                href="/services/sante/maladies-chroniques"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Santé mentale */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Santé Mentale</h3>
              <p className="text-gray-600 mb-4">
                Services de santé mentale et soutien psychologique.
              </p>
              <Link 
                href="/services/sante/sante-mentale"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Prévention et hygiène */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Prévention et Hygiène</h3>
              <p className="text-gray-600 mb-4">
                Conseils de prévention et bonnes pratiques d'hygiène.
              </p>
              <Link 
                href="/services/sante/prevention-hygiene"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Assurance maladie */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Assurance Maladie</h3>
              <p className="text-gray-600 mb-4">
                Informations sur l'AMU et la couverture santé.
              </p>
              <Link 
                href="/services/citoyens/assurance-maladie"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                En savoir plus →
              </Link>
            </div>
          </div>

          {/* Informations importantes */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Informations Importantes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Numéros d'Urgence</h3>
                <ul className="list-disc pl-6">
                  <li>SAMU : 112</li>
                  <li>Pompiers : 18</li>
                  <li>Police : 17</li>
                  <li>Numéro vert santé : 80 00 11 11</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents Utiles</h3>
                <ul className="list-disc pl-6">
                  <li>Carte d'identité (CNIB)</li>
                  <li>Carte AMU (si disponible)</li>
                  <li>Carnet de santé</li>
                  <li>Carnet de vaccination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Actualités santé */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Actualités Santé</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Campagne de vaccination en cours</h3>
                <p className="text-gray-600">
                  Vaccination gratuite contre la méningite dans tous les centres de santé.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">Nouveau centre de santé</h3>
                <p className="text-gray-600">
                  Ouverture d'un nouveau centre de santé dans l'arrondissement 7.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold">Conseils santé</h3>
                <p className="text-gray-600">
                  Protégez-vous contre le paludisme pendant la saison des pluies.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ministère de la Santé</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : info@sante.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires d'ouverture</h3>
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