'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' }
];

const menuSections = [
  {
    title: "Documents d'Identité",
    links: [
      {
        title: "CNIB",
        description: "Carte Nationale d'Identité Burkinabè",
        href: "/services/citoyens/cnib"
      },
      {
        title: "Passeport",
        description: "Demande et renouvellement de passeport",
        href: "/services/citoyens/passeport"
      },
      {
        title: "Actes d'État Civil",
        description: "Naissance, mariage, décès",
        href: "/services/citoyens/etat-civil"
      }
    ]
  },
  {
    title: "Démarches Administratives",
    links: [
      {
        title: "Certificats de Résidence",
        description: "Obtention et renouvellement",
        href: "/services/citoyens/certificat-residence"
      },
      {
        title: "Casier Judiciaire",
        description: "Demande d'extrait de casier judiciaire",
        href: "/services/citoyens/casier-judiciaire"
      },
      {
        title: "Légalisation de Documents",
        description: "Authentification de documents officiels",
        href: "/services/citoyens/legalisation"
      }
    ]
  },
  {
    title: "Vie Citoyenne",
    links: [
      {
        title: "Élections",
        description: "Inscription sur les listes électorales",
        href: "/services/citoyens/elections"
      },
      {
        title: "Associations",
        description: "Création et gestion d'associations",
        href: "/services/citoyens/associations"
      },
      {
        title: "Participation Citoyenne",
        description: "Consultations et initiatives citoyennes",
        href: "/services/citoyens/participation"
      }
    ]
  },
  {
    title: "Protection Sociale",
    links: [
      {
        title: "Sécurité Sociale",
        description: "Prestations et cotisations sociales",
        href: "/services/citoyens/securite-sociale"
      },
      {
        title: "Assurance Maladie",
        description: "Couverture maladie universelle",
        href: "/services/citoyens/assurance-maladie"
      },
      {
        title: "Aide Sociale",
        description: "Programmes d'assistance aux personnes vulnérables",
        href: "/services/citoyens/aide-sociale"
      }
    ]
  }
];

export default function CitoyensPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Services aux Citoyens
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services aux Citoyens</h2>
            <p className="mb-4">
              Bienvenue sur le portail des services aux citoyens du Burkina Faso. 
              Retrouvez ici toutes les informations et démarches administratives 
              essentielles pour les citoyens.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Pour toute démarche administrative, 
                assurez-vous d'avoir une pièce d'identité valide.
              </p>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="grid gap-8">
            {menuSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6 text-primary">{section.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.links.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex} 
                      href={link.href}
                      className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all"
                    >
                      <h3 className="text-xl font-medium mb-2 text-primary">{link.title}</h3>
                      <p className="text-gray-600">{link.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Actualités */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Actualités</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Nouvelle procédure CNIB</h3>
                <p className="text-gray-600">Simplification de la procédure de demande de CNIB.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Assurance Maladie Universelle</h3>
                <p className="text-gray-600">Lancement de la phase pilote de la couverture maladie universelle.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Services en Ligne</h3>
                <p className="text-gray-600">Nouveaux services administratifs disponibles en ligne.</p>
              </div>
            </div>
          </div>

          {/* Contact et Assistance */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Assistance téléphonique</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Du lundi au vendredi de 7h30 à 16h00
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Assistance en ligne</h3>
                <p className="text-gray-600">
                  Email : assistance@citoyens.gov.bf<br />
                  Chat en ligne disponible sur ce portail
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