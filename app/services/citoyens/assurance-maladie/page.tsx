'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Assurance Maladie', href: '/services/citoyens/assurance-maladie' }
];

export default function AssuranceMaladiePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Assurance Maladie Universelle (AMU)
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">L'Assurance Maladie au Burkina Faso</h2>
            <p className="mb-4">
              L'Assurance Maladie Universelle (AMU) est un système de protection sociale 
              qui garantit l'accès aux soins de santé pour tous les Burkinabè. Elle vise 
              à réduire les dépenses de santé des ménages et à améliorer l'accès aux 
              services de santé.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'adhésion à l'AMU est obligatoire pour tous 
                les résidents du Burkina Faso, avec des dispositions particulières pour 
                les personnes vulnérables.
              </p>
            </div>
          </div>

          {/* Types de couverture */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types de Couverture</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Régime Général</h3>
                <ul className="list-disc pl-6">
                  <li>Travailleurs du secteur formel</li>
                  <li>Fonctionnaires</li>
                  <li>Travailleurs indépendants</li>
                  <li>Retraités</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Régime d'Assistance Sociale</h3>
                <ul className="list-disc pl-6">
                  <li>Personnes indigentes</li>
                  <li>Personnes âgées</li>
                  <li>Personnes handicapées</li>
                  <li>Femmes enceintes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Régime Étudiant</h3>
                <ul className="list-disc pl-6">
                  <li>Étudiants des universités publiques</li>
                  <li>Étudiants des établissements privés conventionnés</li>
                  <li>Élèves des écoles professionnelles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prestations couvertes */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prestations Couvertes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Soins de Base</h3>
                <ul className="list-disc pl-6">
                  <li>Consultations médicales</li>
                  <li>Soins infirmiers</li>
                  <li>Médicaments essentiels</li>
                  <li>Analyses de laboratoire courantes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Soins Spécialisés</h3>
                <ul className="list-disc pl-6">
                  <li>Consultations spécialisées</li>
                  <li>Hospitalisations</li>
                  <li>Interventions chirurgicales</li>
                  <li>Examens d'imagerie médicale</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prestations Spécifiques</h3>
                <ul className="list-disc pl-6">
                  <li>Maternité et accouchement</li>
                  <li>Soins dentaires</li>
                  <li>Optique médicale</li>
                  <li>Évacuations sanitaires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Adhésion et cotisations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Adhésion et Cotisations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents Requis</h3>
                <ul className="list-disc pl-6">
                  <li>CNIB ou passeport</li>
                  <li>Photo d'identité récente</li>
                  <li>Justificatif de domicile</li>
                  <li>Justificatif de revenus (pour le régime général)</li>
                  <li>Certificat de scolarité (pour le régime étudiant)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Taux de Cotisation</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Catégorie
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Taux
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Périodicité
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Secteur formel</td>
                        <td className="px-6 py-4 whitespace-nowrap">4% du salaire</td>
                        <td className="px-6 py-4 whitespace-nowrap">Mensuelle</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Secteur informel</td>
                        <td className="px-6 py-4 whitespace-nowrap">2000 FCFA</td>
                        <td className="px-6 py-4 whitespace-nowrap">Mensuelle</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Étudiants</td>
                        <td className="px-6 py-4 whitespace-nowrap">1000 FCFA</td>
                        <td className="px-6 py-4 whitespace-nowrap">Mensuelle</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Utilisation des services */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Utilisation des Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Accès aux Soins</h3>
                <ol className="list-decimal pl-6">
                  <li className="mb-2">Présenter sa carte AMU au centre de santé</li>
                  <li className="mb-2">Payer le ticket modérateur (part patient)</li>
                  <li className="mb-2">Recevoir les soins nécessaires</li>
                  <li>Suivre les prescriptions médicales</li>
                </ol>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Réseau de Soins</h3>
                <ul className="list-disc pl-6">
                  <li>Centres de santé publics</li>
                  <li>Hôpitaux de district</li>
                  <li>Centres hospitaliers régionaux</li>
                  <li>Centres hospitaliers universitaires</li>
                  <li>Établissements privés conventionnés</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Droits et obligations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Droits et Obligations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Droits des Assurés</h3>
                <ul className="list-disc pl-6">
                  <li>Libre choix du prestataire</li>
                  <li>Qualité des soins</li>
                  <li>Confidentialité médicale</li>
                  <li>Information sur les prestations</li>
                  <li>Recours en cas de litige</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Obligations</h3>
                <ul className="list-disc pl-6">
                  <li>Paiement régulier des cotisations</li>
                  <li>Mise à jour des informations personnelles</li>
                  <li>Respect des procédures</li>
                  <li>Usage personnel de la carte</li>
                  <li>Déclaration des changements de situation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Comment obtenir sa carte AMU ?</h3>
                <p className="text-gray-600">
                  Vous pouvez vous inscrire auprès des agences AMU ou en ligne. Après 
                  validation de votre dossier et paiement des premières cotisations, 
                  votre carte vous sera délivrée.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Que faire en cas de perte de la carte ?</h3>
                <p className="text-gray-600">
                  Signalez immédiatement la perte à l'agence AMU la plus proche. Un 
                  duplicata vous sera délivré moyennant des frais administratifs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Les médicaments sont-ils tous couverts ?</h3>
                <p className="text-gray-600">
                  L'AMU couvre les médicaments essentiels figurant sur la liste nationale. 
                  Les médicaments de spécialité peuvent nécessiter une autorisation préalable.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Caisse Nationale d'Assurance Maladie</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : contact@amu.gov.bf
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