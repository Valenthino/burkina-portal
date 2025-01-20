'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  RiUser3Line, 
  RiBuilding2Line, 
  RiGlobalLine, 
  RiGovernmentLine,
  RiFileTextLine,
  RiGraduationCapLine,
  RiHospitalLine,
  RiBriefcaseLine,
  RiGroupLine,
  RiMoneyDollarCircleLine,
  RiPassportLine,
  RiBarChartBoxLine,
  RiCalculatorLine,
  RiComputerLine,
  RiPlaneLine,
  RiShoppingBag3Line,
  RiStarLine,
  RiFileListLine
} from '@remixicon/react';

// Icons credit: Remix Icons (https://remixicon.com/) - MIT License

const serviceCategories = {
  plusDemandes: [
    {
      title: "CNIB en ligne",
      description: "Demande et renouvellement de la carte d'identité nationale",
      icon: RiFileTextLine,
      url: "/services/citoyens/cnib",
      badge: "Populaire"
    },
    {
      title: "Passeport",
      description: "Demande et renouvellement de passeport biométrique",
      icon: RiPassportLine,
      url: "/services/citoyens/passeport",
      badge: "Populaire"
    },
    {
      title: "Casier judiciaire",
      description: "Demande d'extrait de casier judiciaire en ligne",
      icon: RiFileListLine,
      url: "/services/citoyens/casier-judiciaire",
      badge: "Nouveau"
    },
    {
      title: "Concours fonction publique",
      description: "Inscription aux concours de la fonction publique",
      icon: RiGovernmentLine,
      url: "/services/citoyens/concours",
      badge: "En cours"
    }
  ],
  citoyens: [
    {
      title: "Documents et données personnelles",
      description: "Carte d'identité, passeport, permis de conduire, accès et modification des données personnelles",
      icon: RiFileTextLine,
      url: "/services/citoyens/documents"
    },
    {
      title: "Éducation",
      description: "Cours d'études, crèche, école maternelle, école primaire, lycée, école technique",
      icon: RiGraduationCapLine,
      url: "/services/citoyens/education"
    },
    {
      title: "Santé et sécurité sociale",
      description: "Assurance, vaccination, maladies, pension, retraite, assurance familiale",
      icon: RiHospitalLine,
      url: "/services/citoyens/sante"
    },
    {
      title: "Emploi et formation",
      description: "Offres d'emploi, formation professionnelle, droits des travailleurs",
      icon: RiBriefcaseLine,
      url: "/services/citoyens/emploi"
    },
    {
      title: "Famille et mariage",
      description: "État civil, allocations familiales, aide sociale",
      icon: RiGroupLine,
      url: "/services/citoyens/famille"
    },
    {
      title: "Impôts",
      description: "Déclaration, paiement, attestation fiscale",
      icon: RiMoneyDollarCircleLine,
      url: "/services/citoyens/impots"
    }
  ],
  entreprises: [
    {
      title: "Création d'entreprise",
      description: "Formalités, immatriculation, statuts",
      icon: RiBuilding2Line,
      url: "/services/entreprises/creation"
    },
    {
      title: "Marchés publics",
      description: "Appels d'offres, soumissions, suivis",
      icon: RiBarChartBoxLine,
      url: "/services/entreprises/marches-publics"
    },
    {
      title: "Taxes et impôts",
      description: "Déclarations fiscales, TVA, impôts sociétés",
      icon: RiCalculatorLine,
      url: "/services/entreprises/fiscalite"
    }
  ],
  administration: [
    {
      title: "Fonction publique",
      description: "Concours, carrières, formations",
      icon: RiGovernmentLine,
      url: "/services/administration/fonction-publique"
    },
    {
      title: "Services numériques",
      description: "Outils et plateformes administratifs",
      icon: RiComputerLine,
      url: "/services/administration/numerique"
    }
  ],
  international: [
    {
      title: "Visas",
      description: "Demandes, renouvellements, conditions",
      icon: RiPassportLine,
      url: "/services/international/visas"
    },
    {
      title: "Commerce international",
      description: "Import/Export, douanes, réglementation",
      icon: RiShoppingBag3Line,
      url: "/services/international/commerce"
    }
  ]
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('plusDemandes');

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Portail du Gouvernement du Burkina Faso
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Traiter les affaires officielles en ligne, facilement et en toute sécurité !
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="search"
                placeholder="Rechercher un service..."
                className="w-full px-6 py-3 rounded-lg text-gray-900 bg-white"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-white shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-center border-b">
            <button
              onClick={() => setActiveTab('plusDemandes')}
              className={`flex items-center px-6 py-4 text-lg font-medium ${
                activeTab === 'plusDemandes'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <RiStarLine className="mr-2 w-5 h-5" />
              Services les plus demandés
            </button>
            <button
              onClick={() => setActiveTab('citoyens')}
              className={`flex items-center px-6 py-4 text-lg font-medium ${
                activeTab === 'citoyens'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <RiUser3Line className="mr-2 w-5 h-5" />
              Pour le citoyen
            </button>
            <button
              onClick={() => setActiveTab('entreprises')}
              className={`flex items-center px-6 py-4 text-lg font-medium ${
                activeTab === 'entreprises'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <RiBuilding2Line className="mr-2 w-5 h-5" />
              Pour l'entrepreneur
            </button>
            <button
              onClick={() => setActiveTab('administration')}
              className={`flex items-center px-6 py-4 text-lg font-medium ${
                activeTab === 'administration'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <RiGovernmentLine className="mr-2 w-5 h-5" />
              Administration
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`flex items-center px-6 py-4 text-lg font-medium ${
                activeTab === 'international'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <RiGlobalLine className="mr-2 w-5 h-5" />
              International
            </button>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCategories[activeTab].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={index}
                    href={service.url}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-start space-x-4">
                      <IconComponent className="w-8 h-8 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary mb-2">
                            {service.title}
                          </h3>
                          {service.badge && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Actualités et informations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Dernières actualités</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Nouvelles mesures administratives
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Calendrier des concours 2025
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Services populaires</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Demande de CNIB en ligne
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Déclaration d'impôts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Guide des démarches
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Contacts d'urgence
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
