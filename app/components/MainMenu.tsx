'use client';

import Link from 'next/link';
import { useState } from 'react';
import { type MegaMenu, type MegaMenuItem, type MenuItem, type MenuLink, type SubSection } from '@/lib/types';

const megaMenu: MegaMenu = {
  citoyens: {
    title: "Citoyens",
    sections: [
      {
        title: "État Civil",
        links: [
          { title: "Acte de naissance", url: "/citoyens/etat-civil/naissance", description: "Demande et obtention d'actes de naissance" },
          { title: "Carte d'identité", url: "/citoyens/etat-civil/carte-identite", description: "Procédures pour la CNIB" },
          { title: "Passeport", url: "/citoyens/etat-civil/passeport", description: "Demande et renouvellement de passeport" },
          { title: "Certificat de nationalité", url: "/citoyens/etat-civil/nationalite", description: "Obtention de la nationalité" }
        ]
      },
      {
        title: "Services de Santé",
        links: [
          { title: "Carte sanitaire", url: "/citoyens/sante/carte", description: "Obtention de la carte sanitaire" },
          { title: "Vaccination", url: "/citoyens/sante/vaccination", description: "Calendrier et points de vaccination" },
          { title: "Assurance maladie", url: "/citoyens/sante/assurance", description: "Couverture santé universelle" },
          { title: "Centres de santé", url: "/citoyens/sante/centres", description: "Localisation des centres de santé" }
        ]
      },
      {
        title: "Éducation",
        links: [
          { title: "Inscription scolaire", url: "/citoyens/education/inscription", description: "Procédures d'inscription scolaire" },
          { title: "Bourses d'études", url: "/citoyens/education/bourses", description: "Demande de bourses" },
          { title: "Formation continue", url: "/citoyens/education/formation", description: "Programmes de formation" },
          { title: "Examens nationaux", url: "/citoyens/education/examens", description: "Calendrier des examens" }
        ]
      },
      {
        title: "Services sociaux",
        links: [
          { title: "Aide sociale", url: "/citoyens/social/aide", description: "Programmes d'aide sociale" },
          { title: "Logement", url: "/citoyens/social/logement", description: "Accès au logement" },
          { title: "Retraite", url: "/citoyens/social/retraite", description: "Gestion de la retraite" },
          { title: "Protection sociale", url: "/citoyens/social/protection", description: "Services de protection sociale" }
        ]
      },
      {
        title: "Sécurité",
        links: [
          { title: "Police de proximité", url: "/citoyens/securite/police", description: "Services de police locale" },
          { title: "Numéros d'urgence", url: "/citoyens/securite/urgences", description: "Contacts d'urgence" },
          { title: "Plaintes en ligne", url: "/citoyens/securite/plaintes", description: "Dépôt de plaintes" },
          { title: "Sécurité civile", url: "/citoyens/securite/civile", description: "Protection civile" }
        ]
      },
      {
        title: "Démarches administratives",
        links: [
          { title: "Services en ligne", url: "/citoyens/demarches/services", description: "Portail e-services" },
          { title: "Formulaires", url: "/citoyens/demarches/formulaires", description: "Documents administratifs" },
          { title: "Légalisation", url: "/citoyens/demarches/legalisation", description: "Services de légalisation" },
          { title: "Assistance", url: "/citoyens/demarches/assistance", description: "Support aux démarches" }
        ]
      }
    ]
  },
  entreprises: {
    title: "Entreprises",
    sections: [
      {
        title: "Création d'entreprise",
        links: [
          { title: "Procédures", url: "/entreprises/creation/procedures", description: "Guide des démarches de création" },
          { title: "Documents requis", url: "/entreprises/creation/documents", description: "Liste des documents nécessaires" },
          { title: "Statut juridique", url: "/entreprises/creation/statut", description: "Choix de la forme juridique" },
          { title: "Financement", url: "/entreprises/creation/financement", description: "Options de financement initial" }
        ]
      },
      {
        title: "Fiscalité",
        links: [
          { title: "Impôts", url: "https://esintax.bf/", description: "Obligations fiscales des entreprises" },
          { title: "TVA", url: "/entreprises/fiscalite/tva", description: "Gestion de la TVA" },
          { title: "Déclarations", url: "/entreprises/fiscalite/declarations", description: "Calendrier des déclarations" },
          { title: "Exonérations", url: "/entreprises/fiscalite/exonerations", description: "Avantages fiscaux disponibles" }
        ]
      },
      {
        title: "Gestion",
        links: [
          { title: "Ressources humaines", url: "/entreprises/gestion/rh", description: "Gestion du personnel" },
          { title: "Comptabilité", url: "/entreprises/gestion/comptabilite", description: "Normes comptables" },
          { title: "Marketing", url: "/entreprises/gestion/marketing", description: "Stratégies commerciales" },
          { title: "Export", url: "/entreprises/gestion/export", description: "Développement international" }
        ]
      },
      {
        title: "Développement",
        links: [
          { title: "Innovation", url: "/entreprises/developpement/innovation", description: "Solutions innovantes" },
          { title: "Formation", url: "/entreprises/developpement/formation", description: "Formation continue" },
          { title: "Partenariats", url: "/entreprises/developpement/partenariats", description: "Opportunités de collaboration" },
          { title: "Financement", url: "/entreprises/developpement/financement", description: "Aides au développement" }
        ]
      }
    ]
  },
  emploi: {
    title: "Emploi",
    sections: [
      {
        title: "Réglementation du travail",
        links: [
          { title: "Contrats de travail", url: "/emploi/reglementation-travail/contrats", description: "Conditions générales de travail" },
          { title: "Temps de travail", url: "/emploi/reglementation-travail/temps-travail", description: "Calcul du temps de travail" },
          { title: "Congés et absences", url: "/emploi/reglementation-travail/conges", description: "Gestion des congés" },
          { title: "Salaires", url: "/emploi/reglementation-travail/salaires", description: "Calcul et paiement des salaires" }
        ]
      },
      {
        title: "Formation",
        links: [
          { title: "Formation professionnelle", url: "/emploi/formation-professionnelle", description: "Formation initiale" },
          { title: "Apprentissage", url: "/emploi/formation/apprentissage", description: "Formation en entreprise" },
          { title: "Certification", url: "/emploi/formation/certification", description: "Validation des compétences" },
          { title: "Validation des acquis", url: "/emploi/formation/validation", description: "Évaluation des acquis de formation" }
        ]
      },
      {
        title: "Recrutement",
        links: [
          { title: "Offres d'emploi", url: "/emploi/recrutement/offres", description: "Annonces d'emploi disponibles" },
          { title: "CV et candidatures", url: "/emploi/recrutement/cv", description: "Préparation de candidatures" },
          { title: "Entretiens", url: "/emploi/recrutement/entretiens", description: "Organisation des entretiens" },
          { title: "Stages", url: "/emploi/recrutement/stages", description: "Organisation des stages" }
        ]
      },
      {
        title: "Protection sociale",
        links: [
          { title: "Sécurité sociale", url: "/emploi/protection/securite-sociale", description: "Protection sociale" },
          { title: "Assurance maladie", url: "/emploi/protection/assurance", description: "Gestion de l'assurance maladie" },
          { title: "Retraite", url: "/emploi/protection/retraite", description: "Préparation et gestion de la retraite" },
          { title: "Accidents du travail", url: "/emploi/protection/accidents", description: "Gestion des accidents du travail" }
        ]
      }
    ]
  },
  education: {
    title: "Éducation",
    sections: [
      {
        title: "Enseignement primaire",
        links: [
          { title: "Inscription", url: "/education/primaire/inscription", description: "Procédures d'inscription scolaire" },
          { title: "Programme scolaire", url: "/education/primaire/programme", description: "Contenu des enseignements" },
          { title: "Fournitures", url: "/education/primaire/fournitures", description: "Liste des fournitures requises" },
          { title: "Cantines scolaires", url: "/education/primaire/cantines", description: "Services de restauration" }
        ]
      },
      {
        title: "Enseignement secondaire",
        links: [
          { title: "Collèges et lycées", url: "/education/secondaire/etablissements", description: "Liste des établissements" },
          { title: "Examens", url: "/education/secondaire/examens", description: "Calendrier des examens" },
          { title: "Orientation", url: "/education/secondaire/orientation", description: "Conseil en orientation" },
          { title: "Bourses", url: "/education/secondaire/bourses", description: "Aides financières" }
        ]
      },
      {
        title: "Enseignement supérieur",
        links: [
          { title: "Universités", url: "/education/superieur/universites", description: "Établissements universitaires" },
          { title: "Filières", url: "/education/superieur/filieres", description: "Parcours d'études" },
          { title: "Inscription universitaire", url: "/education/superieur/inscription", description: "Procédures d'admission" },
          { title: "Vie étudiante", url: "/education/superieur/vie-etudiante", description: "Services aux étudiants" }
        ]
      },
      {
        title: "Formation continue",
        links: [
          { title: "Centres de formation", url: "/education/formation/centres", description: "Organismes de formation" },
          { title: "Programmes adultes", url: "/education/formation/adultes", description: "Formation pour adultes" },
          { title: "Formation à distance", url: "/education/formation/distance", description: "E-learning et FOAD" },
          { title: "Certification", url: "/education/formation/certification", description: "Validation des acquis" }
        ]
      }
    ]
  },
  sante: {
    title: "Santé",
    sections: [
      {
        title: "Services de santé",
        links: [
          { title: "Hôpitaux publics", url: "/sante/services/hopitaux", description: "Réseau hospitalier public" },
          { title: "Centres de santé", url: "/sante/services/centres", description: "Localisation des centres de santé" },
          { title: "Urgences", url: "/sante/services/urgences", description: "Services d'urgence" },
          { title: "Pharmacies", url: "/sante/services/pharmacies", description: "Réseau pharmaceutique" }
        ]
      },
      {
        title: "Prévention",
        links: [
          { title: "Vaccination", url: "/sante/prevention/vaccination", description: "Programme national" },
          { title: "Hygiène publique", url: "/sante/prevention/hygiene", description: "Hygiène et santé publique" },
          { title: "Santé maternelle", url: "/sante/prevention/maternelle", description: "Santé et maternité" },
          { title: "Maladies tropicales", url: "/sante/prevention/tropicales", description: "Prévention des maladies tropicales" }
        ]
      },
      {
        title: "Assurance maladie",
        links: [
          { title: "Couverture santé", url: "/sante/assurance/couverture", description: "Accès à la couverture santé" },
          { title: "Remboursements", url: "/sante/assurance/remboursements", description: "Gestion des remboursements" },
          { title: "Mutuelle de santé", url: "/sante/assurance/mutuelle", description: "Mutuelle de santé" },
          { title: "Aide médicale", url: "/sante/assurance/aide", description: "Aide médicale" }
        ]
      },
      {
        title: "Professionnels",
        links: [
          { title: "Médecins", url: "/sante/professionnels/medecins", description: "Médecins et praticiens" },
          { title: "Infirmiers", url: "/sante/professionnels/infirmiers", description: "Infirmiers et soignants" },
          { title: "Spécialistes", url: "/sante/professionnels/specialistes", description: "Spécialistes médicaux" },
          { title: "Formation médicale", url: "/sante/professionnels/formation", description: "Formation médicale" }
        ]
      }
    ]
  },
  fonction: {
    title: "Fonction Publique",
    sections: [
      {
        title: "Carrière",
        links: [
          { 
            title: "Concours de la fonction publique", 
            url: "/fonction-publique/carriere/concours",
            description: "Calendrier et inscription aux concours administratifs"
          },
          { 
            title: "Recrutements directs", 
            url: "/fonction-publique/carriere/recrutements",
            description: "Offres de recrutement sans concours"
          },
          { 
            title: "Avancements", 
            url: "/fonction-publique/carriere/avancements",
            description: "Procédures et conditions d'avancement"
          },
          { 
            title: "Mutations", 
            url: "/fonction-publique/carriere/mutations",
            description: "Demandes et procédures de mutation"
          }
        ]
      },
      {
        title: "Administration",
        links: [
          { 
            title: "Statut général", 
            url: "/fonction-publique/administration/statut",
            description: "Droits et obligations des fonctionnaires"
          },
          { 
            title: "Rémunération", 
            url: "/fonction-publique/administration/remuneration",
            description: "Grilles salariales et primes"
          },
          { 
            title: "Congés et absences", 
            url: "/fonction-publique/administration/conges",
            description: "Gestion des congés administratifs"
          },
          { 
            title: "Retraite", 
            url: "/fonction-publique/administration/retraite",
            description: "Préparation et gestion de la retraite"
          }
        ]
      },
      {
        title: "Formation",
        links: [
          { 
            title: "Formation continue", 
            url: "/fonction-publique/formation/continue",
            description: "Programmes de perfectionnement professionnel"
          },
          { 
            title: "Écoles de formation", 
            url: "/fonction-publique/formation/ecoles",
            description: "Établissements de formation administrative"
          },
          { 
            title: "Stages", 
            url: "/fonction-publique/formation/stages",
            description: "Opportunités de stage dans l'administration"
          },
          { 
            title: "Examens professionnels", 
            url: "/fonction-publique/formation/examens",
            description: "Préparation aux examens de qualification"
          }
        ]
      },
      {
        title: "Services en ligne",
        links: [
          { 
            title: "Espace agent", 
            url: "/fonction-publique/services/espace-agent",
            description: "Accès personnel aux services administratifs"
          },
          { 
            title: "Documents administratifs", 
            url: "/fonction-publique/services/documents",
            description: "Téléchargement de formulaires officiels"
          },
          { 
            title: "Réclamations", 
            url: "/fonction-publique/services/reclamations",
            description: "Suivi des demandes et réclamations"
          },
          { 
            title: "Assistance en ligne", 
            url: "/fonction-publique/services/assistance",
            description: "Support et aide aux démarches"
          }
        ]
      }
    ]
  },
  burkina: {
    title: "Le Burkina",
    sections: [
      {
        title: "Gouvernement",
        links: [
          { 
            title: "Présidence", 
            url: "/burkina/gouvernement/presidence",
            description: "Institution présidentielle et cabinet"
          },
          {
            title: "Ministres",
            url: "/burkina/gouvernement/ministres",
            description: "Liste des membres du gouvernement"
          },
          { 
            title: "Ministères", 
            url: "/burkina/gouvernement/ministeres",
            description: "Liste et contacts des ministères",
            subsections: [
              {
                title: "Agriculture",
                links: [
                  { title: "Cultures vivrières", url: "/burkina/gouvernement/ministeres/agriculture/vivrieres", description: "Production alimentaire locale" },
                  { title: "Cultures de rente", url: "/burkina/gouvernement/ministeres/agriculture/rente", description: "Cultures d'exportation" },
                  { title: "Élevage", url: "/burkina/gouvernement/ministeres/agriculture/elevage", description: "Gestion du bétail" },
                  { title: "Pêche", url: "/burkina/gouvernement/ministeres/agriculture/peche", description: "Ressources halieutiques" },
                  { title: "Subventions", url: "/burkina/gouvernement/ministeres/agriculture/subventions", description: "Aides aux agriculteurs" },
                  { title: "Formation agricole", url: "/burkina/gouvernement/ministeres/agriculture/formation", description: "Développement des compétences" },
                  { title: "Équipements", url: "/burkina/gouvernement/ministeres/agriculture/equipements", description: "Matériel agricole" },
                  { title: "Innovation", url: "/burkina/gouvernement/ministeres/agriculture/innovation", description: "Nouvelles technologies" }
                ]
              },
              {
                title: "Santé",
                links: [
                  { title: "Hôpitaux publics", url: "/burkina/gouvernement/ministeres/sante/hopitaux", description: "Réseau hospitalier public" },
                  { title: "Centres de santé", url: "/burkina/gouvernement/ministeres/sante/centres", description: "Services de proximité" },
                  { title: "Urgences", url: "/burkina/gouvernement/ministeres/sante/urgences", description: "Services d'urgence" },
                  { title: "Pharmacies", url: "/burkina/gouvernement/ministeres/sante/pharmacies", description: "Réseau pharmaceutique" },
                  { title: "Vaccination", url: "/burkina/gouvernement/ministeres/sante/vaccination", description: "Programme national" },
                  { title: "Santé maternelle", url: "/burkina/gouvernement/ministeres/sante/maternelle", description: "Protection maternelle" },
                  { title: "Assurance maladie", url: "/burkina/gouvernement/ministeres/sante/assurance", description: "Couverture sanitaire" },
                  { title: "Formation médicale", url: "/burkina/gouvernement/ministeres/sante/formation", description: "Formation des professionnels" }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Histoire et Culture",
        links: [
          { 
            title: "Histoire", 
            url: "/burkina/histoire-culture/histoire",
            description: "Histoire du Burkina Faso"
          },
          { 
            title: "Patrimoine culturel", 
            url: "/burkina/histoire-culture/patrimoine",
            description: "Sites historiques et culturels"
          },
          { 
            title: "Arts et traditions", 
            url: "/burkina/histoire-culture/arts",
            description: "Expression artistique et traditions"
          },
          { 
            title: "Langues nationales", 
            url: "/burkina/histoire-culture/langues",
            description: "Diversité linguistique du pays"
          }
        ]
      },
      {
        title: "Économie",
        links: [
          { 
            title: "Secteurs clés", 
            url: "/burkina/economie/secteurs",
            description: "Principaux secteurs économiques"
          },
          { 
            title: "Investissement", 
            url: "/burkina/economie/investissement",
            description: "Opportunités d'investissement"
          },
          { 
            title: "Développement", 
            url: "/burkina/economie/developpement",
            description: "Projets de développement nationaux"
          },
          { 
            title: "Statistiques", 
            url: "/burkina/economie/statistiques",
            description: "Données économiques et sociales"
          }
        ]
      },
      {
        title: "Découvrir le Burkina",
        links: [
          { 
            title: "Régions", 
            url: "/burkina/decouvrir/regions",
            description: "Présentation des régions"
          },
          { 
            title: "Tourisme", 
            url: "/burkina/decouvrir/tourisme",
            description: "Sites touristiques et hébergement"
          },
          { 
            title: "Événements", 
            url: "/burkina/decouvrir/evenements",
            description: "Agenda culturel et festivités"
          },
          { 
            title: "Vie pratique", 
            url: "/burkina/decouvrir/vie-pratique",
            description: "Informations pratiques pour visiteurs"
          }
        ]
      }
    ]
  },
  securite: {
    title: "Sécurité & Défense",
    sections: [
      {
        title: "Forces de Défense",
        links: [
          { title: "Forces Armées", url: "/securite/defense/forces-armees", description: "Organisation militaire nationale" },
          { title: "Gendarmerie", url: "/securite/defense/gendarmerie", description: "Services de la gendarmerie" },
          { title: "Police Nationale", url: "/securite/defense/police", description: "Services de police" },
          { title: "Douanes", url: "/securite/defense/douanes", description: "Services douaniers" }
        ]
      },
      {
        title: "Sécurité Intérieure",
        links: [
          { title: "Protection civile", url: "/securite/interieure/protection-civile", description: "Services de protection civile" },
          { title: "Sécurité routière", url: "/securite/interieure/securite-routiere", description: "Sécurité des transports" },
          { title: "Surveillance du territoire", url: "/securite/interieure/surveillance", description: "Contrôle territorial" },
          { title: "Pompiers", url: "/securite/interieure/pompiers", description: "Services d'incendie" }
        ]
      },
      {
        title: "Services d'Urgence",
        links: [
          { title: "Numéros d'urgence", url: "/securite/urgences/numeros", description: "Contacts d'urgence" },
          { title: "Centres d'appel", url: "/securite/urgences/centres", description: "Centres de traitement des appels" },
          { title: "Premiers secours", url: "/securite/urgences/premiers-secours", description: "Services de premiers secours" },
          { title: "Plans d'urgence", url: "/securite/urgences/plans", description: "Plans d'intervention" }
        ]
      },
      {
        title: "Défense Nationale",
        links: [
          { title: "Stratégie nationale", url: "/securite/defense-nationale/strategie", description: "Politique de défense" },
          { title: "Coopération militaire", url: "/securite/defense-nationale/cooperation", description: "Partenariats militaires" },
          { title: "Formation militaire", url: "/securite/defense-nationale/formation", description: "Écoles militaires" },
          { title: "Équipements", url: "/securite/defense-nationale/equipements", description: "Matériel militaire" }
        ]
      }
    ]
  }
};

interface MainMenuProps {
  activeMenu: string | null;
  onMenuChange: (key: string | null) => void;
}

export default function MainMenu({ activeMenu, onMenuChange }: MainMenuProps) {
  const mainMenuItems = Object.entries(megaMenu).filter(
    ([key]) => !['agriculture', 'justice', 'sante'].includes(key)
  );

  return (
    <nav className="border-t border-gray-200 bg-background">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex justify-center" role="menubar">
            {mainMenuItems.map(([key, item]) => (
              <li
                key={key}
                className="relative group"
                role="none"
              >
                <Link
                  href={`/${key === 'citoyens' ? 'services/citoyens' : key}`}
                  className={`px-6 py-4 text-foreground-dark hover:text-primary flex items-center gap-1 transition-colors relative ${
                    activeMenu === key ? 'text-primary' : ''
                  }`}
                  role="menuitem"
                  onMouseEnter={() => onMenuChange(key)}
                  onMouseLeave={() => onMenuChange(null)}
                >
                  <span className="relative">
                    {item.title}
                    <span className="ml-1.5 text-xs opacity-70" aria-hidden="true">▾</span>
                    {activeMenu === key && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                    )}
                  </span>
                </Link>

                {activeMenu === key && (
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 top-full w-[calc(100vw-2rem)] max-w-[1200px] bg-white rounded-lg shadow-lg py-6 z-50 mx-auto"
                    style={{
                      maxHeight: 'calc(100vh - 200px)',
                      overflowY: 'auto'
                    }}
                    role="menu"
                    onMouseEnter={() => onMenuChange(key)}
                    onMouseLeave={() => onMenuChange(null)}
                  >
                    <div className="max-w-5xl mx-auto px-8">
                      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                        <div className="space-y-8">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg mb-4 pb-2 border-b">
                              {item.sections[0].title}
                            </h3>
                            <ul className="space-y-3">
                              {item.sections[0].links.map((link, linkIdx) => (
                                <li key={linkIdx} role="none" className="group">
                                  <Link
                                    href={link.url}
                                    className="block group-hover:bg-primary/[0.06] hover:bg-primary/[0.08] rounded-lg transition-all duration-200 p-4 relative group/link"
                                  >
                                    <div className="flex items-start justify-between gap-4">
                                      <div>
                                        <span className="text-gray-900 font-medium group-hover/link:text-primary transition-colors">
                                          {link.title}
                                        </span>
                                        {link.description && (
                                          <span className="text-sm text-gray-600 block mt-1 leading-relaxed group-hover/link:text-gray-700">
                                            {link.description}
                                          </span>
                                        )}
                                      </div>
                                      {(link.title === "Carte d'identité" || 
                                        link.title === "Passeport" ||
                                        link.title === "Couverture santé" ||
                                        link.title === "Concours de la fonction publique") && (
                                        <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                          Nouveau
                                        </span>
                                      )}
                                      {(link.title === "Assurance maladie" ||
                                        link.title === "Formation continue" ||
                                        link.title === "Marchés publics") && (
                                        <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                          En cours
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {item.sections[2] && (
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg mb-4 pb-2 border-b">
                                {item.sections[2].title}
                              </h3>
                              <ul className="space-y-3">
                                {item.sections[2].links.map((link, linkIdx) => (
                                  <li key={linkIdx} role="none" className="group">
                                    <Link
                                      href={link.url}
                                      className="block group-hover:bg-primary/[0.06] hover:bg-primary/[0.08] rounded-lg transition-all duration-200 p-4 relative group/link"
                                    >
                                      <div className="flex items-start justify-between gap-4">
                                        <div>
                                          <span className="text-gray-900 font-medium group-hover/link:text-primary transition-colors">
                                            {link.title}
                                          </span>
                                          {link.description && (
                                            <span className="text-sm text-gray-600 block mt-1 leading-relaxed group-hover/link:text-gray-700">
                                              {link.description}
                                            </span>
                                          )}
                                        </div>
                                        {(link.title === "Carte d'identité" || 
                                          link.title === "Passeport" ||
                                          link.title === "Couverture santé" ||
                                          link.title === "Concours de la fonction publique") && (
                                            <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                              Nouveau
                                            </span>
                                          )}
                                        {(link.title === "Assurance maladie" ||
                                          link.title === "Formation continue" ||
                                          link.title === "Marchés publics") && (
                                          <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            En cours
                                          </span>
                                        )}
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="space-y-8">
                          {item.sections[1] && (
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg mb-4 pb-2 border-b">
                                {item.sections[1].title}
                              </h3>
                              <ul className="space-y-3">
                                {item.sections[1].links.map((link, linkIdx) => (
                                  <li key={linkIdx} role="none" className="group">
                                    <Link
                                      href={link.url}
                                      className="block group-hover:bg-primary/[0.06] hover:bg-primary/[0.08] rounded-lg transition-all duration-200 p-4 relative group/link"
                                    >
                                      <div className="flex items-start justify-between gap-4">
                                        <div>
                                          <span className="text-gray-900 font-medium group-hover/link:text-primary transition-colors">
                                            {link.title}
                                          </span>
                                          {link.description && (
                                            <span className="text-sm text-gray-600 block mt-1 leading-relaxed group-hover/link:text-gray-700">
                                              {link.description}
                                            </span>
                                          )}
                                        </div>
                                        {(link.title === "Carte d'identité" || 
                                          link.title === "Passeport" ||
                                          link.title === "Couverture santé" ||
                                          link.title === "Concours de la fonction publique") && (
                                            <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                              Nouveau
                                            </span>
                                          )}
                                        {(link.title === "Assurance maladie" ||
                                          link.title === "Formation continue" ||
                                          link.title === "Marchés publics") && (
                                          <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            En cours
                                          </span>
                                        )}
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {item.sections[3] && (
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg mb-4 pb-2 border-b">
                                {item.sections[3].title}
                              </h3>
                              <ul className="space-y-3">
                                {item.sections[3].links.map((link, linkIdx) => (
                                  <li key={linkIdx} role="none" className="group">
                                    <Link
                                      href={link.url}
                                      className="block group-hover:bg-primary/[0.06] hover:bg-primary/[0.08] rounded-lg transition-all duration-200 p-4 relative group/link"
                                    >
                                      <div className="flex items-start justify-between gap-4">
                                        <div>
                                          <span className="text-gray-900 font-medium group-hover/link:text-primary transition-colors">
                                            {link.title}
                                          </span>
                                          {link.description && (
                                            <span className="text-sm text-gray-600 block mt-1 leading-relaxed group-hover/link:text-gray-700">
                                              {link.description}
                                            </span>
                                          )}
                                        </div>
                                        {(link.title === "Carte d'identité" || 
                                          link.title === "Passeport" ||
                                          link.title === "Couverture santé" ||
                                          link.title === "Concours de la fonction publique") && (
                                            <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                              Nouveau
                                            </span>
                                          )}
                                        {(link.title === "Assurance maladie" ||
                                          link.title === "Formation continue" ||
                                          link.title === "Marchés publics") && (
                                          <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            En cours
                                          </span>
                                        )}
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          {Object.entries(megaMenu).map(([key, menu]) => (
            <div key={key} className="border-t border-gray-100">
              <button
                className="w-full py-4 px-6 flex justify-between items-center text-left"
                onClick={() => onMenuChange(activeMenu === key ? null : key)}
                aria-expanded={activeMenu === key}
              >
                <span className="font-medium text-gray-900">{menu.title}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    activeMenu === key ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeMenu === key && (
                <div className="px-6 pb-4">
                  {menu.sections.map((section, idx) => (
                    <div key={idx} className="mb-6 last:mb-0">
                      <h3 className="font-medium text-gray-900 mb-3 pb-2 border-b">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <Link
                              href={link.url}
                              className="block hover:bg-primary/[0.06] active:bg-primary/[0.08] rounded-lg p-4 transition-all duration-200 relative group/link"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <span className="text-gray-900 font-medium group-hover/link:text-primary transition-colors">
                                    {link.title}
                                  </span>
                                  {link.description && (
                                    <span className="text-sm text-gray-600 block mt-1 group-hover/link:text-gray-700">
                                      {link.description}
                                    </span>
                                  )}
                                </div>
                                {(link.title === "Carte d'identité" || 
                                  link.title === "Passeport" ||
                                  link.title === "Couverture santé" ||
                                  link.title === "Concours de la fonction publique") && (
                                  <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                    Nouveau
                                  </span>
                                )}
                                {(link.title === "Assurance maladie" ||
                                  link.title === "Formation continue" ||
                                  link.title === "Marchés publics") && (
                                  <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    En cours
                                  </span>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
} 