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
  RiFileListLine,
  RiShieldLine,
  RiLightbulbLine,
  RiTruckLine
} from '@remixicon/react';
import Image from 'next/image';
import ServiceCategories from './components/ServiceCategories';

// Icons credit: Remix Icons (https://remixicon.com/) - MIT License

type ServiceCategory = 'plusDemandes' | 'citoyens' | 'entreprises' | 'administration' | 'international';

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType;
  url: string;
  badge?: string;
};

type IconProps = {
  className?: string;
};

const serviceCategories: Record<ServiceCategory, Service[]> = {
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
    },
    {
      title: "Permis de conduire",
      description: "Demande et renouvellement de permis de conduire",
      icon: RiFileTextLine,
      url: "/services/citoyens/permis-conduire"
    },
    {
      title: "Carte grise",
      description: "Immatriculation de véhicules",
      icon: RiFileTextLine,
      url: "/services/citoyens/carte-grise"
    },
    {
      title: "Acte de naissance",
      description: "Demande d'acte de naissance en ligne",
      icon: RiFileTextLine,
      url: "/services/citoyens/acte-naissance"
    },
    {
      title: "Certificat de nationalité",
      description: "Demande de certificat de nationalité",
      icon: RiFileTextLine,
      url: "/services/citoyens/certificat-nationalite"
    },
    {
      title: "Visa",
      description: "Demande de visa pour le Burkina Faso",
      icon: RiPassportLine,
      url: "/services/international/visa"
    },
    {
      title: "Bourses d'études",
      description: "Demande de bourses d'études",
      icon: RiGraduationCapLine,
      url: "/services/citoyens/bourses"
    },
    {
      title: "Déclaration d'impôts",
      description: "Déclaration et paiement des impôts en ligne",
      icon: RiMoneyDollarCircleLine,
      url: "/services/citoyens/impots"
    },
    {
      title: "Carte consulaire",
      description: "Demande de carte consulaire",
      icon: RiPassportLine,
      url: "/services/international/carte-consulaire"
    },
    {
      title: "Légalisation",
      description: "Légalisation de documents",
      icon: RiFileTextLine,
      url: "/services/citoyens/legalisation"
    },
    {
      title: "Certificat de résidence",
      description: "Demande de certificat de résidence",
      icon: RiFileTextLine,
      url: "/services/citoyens/certificat-residence"
    },
    {
      title: "Carte d'artisan",
      description: "Demande de carte professionnelle d'artisan",
      icon: RiFileTextLine,
      url: "/services/entreprises/carte-artisan"
    }
  ],
  citoyens: [
    {
      title: "Documents et données personnelles",
      description: "Carte d'identité, passeport, permis de conduire, accès et modification des données personnelles, certificats et attestations, légalisation de documents",
      icon: RiFileTextLine,
      url: "/services/citoyens/documents"
    },
    {
      title: "Éducation",
      description: "Inscription scolaire, bourses d'études, cours à distance, crèche, école maternelle, école primaire, lycée, école technique, formation professionnelle",
      icon: RiGraduationCapLine,
      url: "/services/citoyens/education"
    },
    {
      title: "Santé",
      description: "Assurance maladie, vaccination, carnet de santé, consultation médicale, urgences, pharmacies de garde, maternité, handicap",
      icon: RiHospitalLine,
      url: "/services/citoyens/sante"
    },
    {
      title: "Emploi",
      description: "Recherche d'emploi, formation professionnelle, chômage, droits des travailleurs, apprentissage, stage, reconversion professionnelle",
      icon: RiBriefcaseLine,
      url: "/services/citoyens/emploi"
    },
    {
      title: "Logement",
      description: "Permis de construire, achat/location, aide au logement, cadastre, copropriété, déménagement, raccordement eau/électricité",
      icon: RiBuilding2Line,
      url: "/services/citoyens/logement"
    },
    {
      title: "Transport",
      description: "Permis de conduire, carte grise, immatriculation, contrôle technique, infractions routières, transport en commun, transport scolaire",
      icon: RiPlaneLine,
      url: "/services/citoyens/transport"
    },
    {
      title: "Justice",
      description: "Aide juridictionnelle, casier judiciaire, plaintes, médiation, droits des citoyens, consultation juridique, protection des mineurs",
      icon: RiGovernmentLine,
      url: "/services/citoyens/justice"
    },
    {
      title: "Famille",
      description: "Mariage, naissance, adoption, garde d'enfants, allocations familiales, divorce, succession, tutelle, curatelle",
      icon: RiGroupLine,
      url: "/services/citoyens/famille"
    },
    {
      title: "Impôts",
      description: "Déclaration de revenus, taxe d'habitation, taxe foncière, TVA, impôt sur le patrimoine, droits de succession, attestation fiscale",
      icon: RiMoneyDollarCircleLine,
      url: "/services/citoyens/impots"
    },
    {
      title: "Retraite",
      description: "Calcul des droits, demande de pension, retraite complémentaire, réversion, minimum vieillesse, cumul emploi-retraite",
      icon: RiGroupLine,
      url: "/services/citoyens/retraite"
    },
    {
      title: "Sport et Culture",
      description: "Associations sportives, équipements culturels, bibliothèques, musées, événements culturels, subventions, activités jeunesse",
      icon: RiStarLine,
      url: "/services/citoyens/sport-culture"
    },
    {
      title: "Environnement",
      description: "Gestion des déchets, qualité de l'eau, pollution, espaces verts, développement durable, énergies renouvelables, biodiversité",
      icon: RiGlobalLine,
      url: "/services/citoyens/environnement"
    },
    {
      title: "Sécurité",
      description: "Police, gendarmerie, pompiers, protection civile, prévention des risques, surveillance, sécurité routière",
      icon: RiShieldLine,
      url: "/services/citoyens/securite"
    },
    {
      title: "Communication",
      description: "Téléphonie, internet, médias, presse, radio, télévision, services postaux, réclamations opérateurs",
      icon: RiComputerLine,
      url: "/services/citoyens/communication"
    },
    {
      title: "Énergie",
      description: "Électricité, gaz, eau, énergies renouvelables, économies d'énergie, aides à la rénovation, facturation",
      icon: RiLightbulbLine,
      url: "/services/citoyens/energie"
    }
  ],
  entreprises: [
    {
      title: "Création d'entreprise",
      description: "Formalités de création, statuts juridiques, immatriculation, registre du commerce, numéro RCCM, capital social, domiciliation",
      icon: RiBuilding2Line,
      url: "/services/entreprises/creation"
    },
    {
      title: "Impôts entreprise",
      description: "Déclaration fiscale, TVA, impôt sur les sociétés, taxes professionnelles, obligations fiscales, comptabilité, bilan",
      icon: RiMoneyDollarCircleLine,
      url: "/services/entreprises/impots"
    },
    {
      title: "Marchés publics",
      description: "Appels d'offres, soumissions, cahiers des charges, procédures de passation, suivi des marchés, factures publiques",
      icon: RiGovernmentLine,
      url: "/services/entreprises/marches-publics"
    },
    {
      title: "Import/Export",
      description: "Procédures douanières, licences d'importation, certificats d'origine, normes internationales, transport international",
      icon: RiGlobalLine,
      url: "/services/entreprises/import-export"
    },
    {
      title: "Recrutement",
      description: "Offres d'emploi, contrats de travail, conventions collectives, droit du travail, formation professionnelle, apprentissage",
      icon: RiGroupLine,
      url: "/services/entreprises/recrutement"
    },
    {
      title: "Financement",
      description: "Prêts bancaires, subventions, investissements, capital-risque, microfinance, garanties financières, fonds de roulement",
      icon: RiMoneyDollarCircleLine,
      url: "/services/entreprises/financement"
    },
    {
      title: "Propriété intellectuelle",
      description: "Brevets, marques, droits d'auteur, dessins et modèles, protection industrielle, contrefaçon, licences d'exploitation",
      icon: RiFileTextLine,
      url: "/services/entreprises/propriete-intellectuelle"
    },
    {
      title: "Formation professionnelle",
      description: "Plans de formation, certifications professionnelles, VAE, financement formation, e-learning, stages, alternance",
      icon: RiGraduationCapLine,
      url: "/services/entreprises/formation"
    },
    {
      title: "Normes et certifications",
      description: "Standards qualité, ISO, certification produits, audit qualité, conformité réglementaire, labels, accréditation",
      icon: RiStarLine,
      url: "/services/entreprises/normes"
    },
    {
      title: "Environnement",
      description: "Normes environnementales, gestion des déchets, études d'impact, énergie verte, RSE, développement durable",
      icon: RiGlobalLine,
      url: "/services/entreprises/environnement"
    },
    {
      title: "Innovation",
      description: "R&D, transfert technologique, incubation, startups, innovation collaborative, financement innovation, propriété industrielle",
      icon: RiLightbulbLine,
      url: "/services/entreprises/innovation"
    },
    {
      title: "Export",
      description: "Stratégie export, marchés internationaux, réglementation internationale, logistique, assurance export, douanes",
      icon: RiGlobalLine,
      url: "/services/entreprises/export"
    },
    {
      title: "Juridique",
      description: "Conseil juridique, contentieux, droit des sociétés, droit commercial, contrats, protection des données, conformité",
      icon: RiGovernmentLine,
      url: "/services/entreprises/juridique"
    },
    {
      title: "Numérique",
      description: "Transformation digitale, e-commerce, cybersécurité, cloud computing, solutions métiers, signature électronique",
      icon: RiComputerLine,
      url: "/services/entreprises/numerique"
    },
    {
      title: "Énergie",
      description: "Efficacité énergétique, énergies renouvelables, audit énergétique, certificats d'économie d'énergie, subventions",
      icon: RiLightbulbLine,
      url: "/services/entreprises/energie"
    }
  ],
  administration: [
    {
      title: "Ressources humaines",
      description: "Recrutement fonction publique, gestion des carrières, formation continue, évaluation, mobilité, congés, retraite",
      icon: RiGroupLine,
      url: "/services/administration/rh"
    },
    {
      title: "Budget",
      description: "Préparation budgétaire, exécution, contrôle des dépenses, comptabilité publique, marchés publics, subventions",
      icon: RiMoneyDollarCircleLine,
      url: "/services/administration/budget"
    },
    {
      title: "Marchés publics",
      description: "Publication des appels d'offres, analyse des offres, attribution des marchés, suivi d'exécution, paiements",
      icon: RiGovernmentLine,
      url: "/services/administration/marches"
    },
    {
      title: "Formation",
      description: "Plans de formation, écoles d'administration, formation continue, e-learning, séminaires, certification des compétences",
      icon: RiGraduationCapLine,
      url: "/services/administration/formation"
    },
    {
      title: "Patrimoine",
      description: "Gestion immobilière, inventaire, maintenance, sécurité des bâtiments, occupation des locaux, archives",
      icon: RiBuilding2Line,
      url: "/services/administration/patrimoine"
    },
    {
      title: "Archives",
      description: "Conservation des documents, numérisation, classification, consultation, archivage légal, gestion électronique",
      icon: RiFileTextLine,
      url: "/services/administration/archives"
    },
    {
      title: "Communication",
      description: "Communication interne, externe, relations presse, événements, publications officielles, réseaux sociaux",
      icon: RiComputerLine,
      url: "/services/administration/communication"
    },
    {
      title: "Statistiques",
      description: "Collecte de données, analyses statistiques, études démographiques, rapports d'activité, indicateurs de performance",
      icon: RiBarChartBoxLine,
      url: "/services/administration/statistiques"
    },
    {
      title: "Projets",
      description: "Gestion de projets publics, suivi d'avancement, coordination interservices, évaluation, reporting",
      icon: RiStarLine,
      url: "/services/administration/projets"
    },
    {
      title: "Informatique",
      description: "Infrastructure IT, maintenance, développement applications, support utilisateurs, sécurité informatique",
      icon: RiComputerLine,
      url: "/services/administration/informatique"
    },
    {
      title: "Logistique",
      description: "Gestion des fournitures, parc automobile, transport, stockage, distribution, inventaire, maintenance",
      icon: RiTruckLine,
      url: "/services/administration/logistique"
    },
    {
      title: "Qualité",
      description: "Démarche qualité, certification ISO, amélioration continue, audits, satisfaction usagers, procédures",
      icon: RiStarLine,
      url: "/services/administration/qualite"
    },
    {
      title: "Juridique",
      description: "Conseil juridique, contentieux administratif, rédaction textes, veille juridique, marchés publics",
      icon: RiGovernmentLine,
      url: "/services/administration/juridique"
    },
    {
      title: "International",
      description: "Coopération internationale, relations diplomatiques, projets internationaux, protocole, traduction",
      icon: RiGlobalLine,
      url: "/services/administration/international"
    },
    {
      title: "Sécurité",
      description: "Sécurité des bâtiments, contrôle accès, vidéosurveillance, plans d'urgence, protection des données",
      icon: RiShieldLine,
      url: "/services/administration/securite"
    }
  ],
  international: [
    {
      title: "Visas",
      description: "Demande de visa court/long séjour, visa d'affaires, visa étudiant, renouvellement, conditions d'obtention",
      icon: RiPassportLine,
      url: "/services/international/visas"
    },
    {
      title: "Passeports",
      description: "Demande de passeport, renouvellement, passeport d'urgence, passeport diplomatique, légalisation",
      icon: RiPassportLine,
      url: "/services/international/passeports"
    },
    {
      title: "Consulats",
      description: "Services consulaires, protection consulaire, documents officiels, assistance aux ressortissants, légalisation",
      icon: RiGovernmentLine,
      url: "/services/international/consulats"
    },
    {
      title: "Commerce",
      description: "Import/export, douanes, réglementation commerciale, accords commerciaux, licences, certification produits",
      icon: RiShoppingBag3Line,
      url: "/services/international/commerce"
    },
    {
      title: "Coopération",
      description: "Accords bilatéraux, projets de développement, aide humanitaire, coopération technique, partenariats",
      icon: RiGlobalLine,
      url: "/services/international/cooperation"
    },
    {
      title: "Études",
      description: "Bourses internationales, équivalences diplômes, inscription universités, logement étudiant, stages",
      icon: RiGraduationCapLine,
      url: "/services/international/etudes"
    },
    {
      title: "Investissement",
      description: "Opportunités d'investissement, cadre juridique, incitations fiscales, création entreprise, partenariats",
      icon: RiMoneyDollarCircleLine,
      url: "/services/international/investissement"
    },
    {
      title: "Diaspora",
      description: "Services aux Burkinabè de l'étranger, retour au pays, investissement diaspora, associations, événements",
      icon: RiGroupLine,
      url: "/services/international/diaspora"
    },
    {
      title: "Douanes",
      description: "Procédures douanières, droits de douane, franchises, déclaration en douane, contrôle des marchandises",
      icon: RiGlobalLine,
      url: "/services/international/douanes"
    },
    {
      title: "Traduction",
      description: "Traduction officielle, interprétariat, légalisation documents, certification conforme, apostille",
      icon: RiFileTextLine,
      url: "/services/international/traduction"
    },
    {
      title: "Transport",
      description: "Transport international, fret aérien/maritime, transit, licences transport, assurance transport",
      icon: RiPlaneLine,
      url: "/services/international/transport"
    },
    {
      title: "Santé",
      description: "Couverture santé internationale, vaccination, rapatriement sanitaire, conventions médicales, urgences",
      icon: RiHospitalLine,
      url: "/services/international/sante"
    },
    {
      title: "Culture",
      description: "Échanges culturels, promotion culturelle, événements internationaux, patrimoine, artistes",
      icon: RiStarLine,
      url: "/services/international/culture"
    },
    {
      title: "Tourisme",
      description: "Promotion touristique, visas touristiques, hébergement, circuits touristiques, guides, sécurité",
      icon: RiGlobalLine,
      url: "/services/international/tourisme"
    },
    {
      title: "Assistance",
      description: "Assistance consulaire, urgences à l'étranger, rapatriement, perte documents, décès à l'étranger",
      icon: RiGroupLine,
      url: "/services/international/assistance"
    }
  ]
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('plusDemandes');

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero_section_woman_picture in market.jpg"
            alt="Femme au marché"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Portail du Gouvernement du Burkina Faso
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Fonds de Soutien Section */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-2 border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-left text-red-400">
                  Soutenez la Nation !
                </h2>
                <div className="text-left mb-4">
                  <p className="text-lg">
                    Le Fonds de Soutien Patriotique vous permet de contribuer directement à la sécurisation et a l'équipement des FDS/VDP.
                  </p>
                </div>
                <Link 
                  href="/fond-soutien-patriotique"
                  className="inline-block w-full bg-red-400 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-all text-center"
                >
                  <span className="font-semibold">
                    Contribuer au Fonds Patriotique
                  </span>
                </Link>
              </div>
              {/* Help Section */}
              {/*
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-2 border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-left">
                  Besoin d'aide ?
                </h2>
                <div className="text-left mb-4">
                  <p className="text-lg">
                    Nos agents vous accompagnent dans vos démarches administratives du quotidien (CNIB, passeport, impôts, permis...)
                  </p>
                </div>
                <button 
                  className="w-full bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold"
                >
                  Trouver de l'aide près de chez moi
                </button>
              </div>
              */}
            </div>
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
      <ServiceCategories 
        serviceCategories={serviceCategories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

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
                    Annuaire des services
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
