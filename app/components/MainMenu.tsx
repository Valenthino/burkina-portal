'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { type MegaMenu, type MegaMenuItem, type MenuItem, type MenuLink, type SubSection } from '@/lib/types';

const megaMenu: MegaMenu = {
  citoyens: {
    title: "Citoyens",
    sections: [
      {
        title: "État Civil",
        links: [
          { 
            title: "Acte de naissance", 
            url: "/services/citoyens/etat-civil", 
            description: "Demande et obtention d'actes de naissance" 
          },
          { 
            title: "Carte d'identité", 
            url: "/services/citoyens/cnib", 
            description: "Procédures pour la CNIB",
            isNew: true 
          },
          { 
            title: "Passeport", 
            url: "/services/citoyens/passeport", 
            description: "Demande et renouvellement de passeport",
            isNew: true 
          },
          { 
            title: "Certificat de nationalité", 
            url: "/citoyens/etat-civil/nationalite", 
            description: "Obtention de la nationalité" 
          }
        ]
      },
      {
        title: "Services de Santé",
        links: [
          { 
            title: "Les Services de Santé", 
            url: "/services/sante", 
            description: "Services de Santé au Burkina Faso" 
          },
          { 
            title: "Vaccination", 
            url: "/services/sante/vaccination", 
            description: "Calendrier et points de vaccination" 
          },
          { 
            title: "Assurance maladie", 
            url: "/services/citoyens/assurance-maladie", 
            description: "Couverture santé universelle",
            inProgress: true 
          },
          { 
            title: "Centres de santé", 
            url: "/services/sante/hopitaux-centres", 
            description: "Localisation des centres de santé" 
          }
        ]
      },
      {
        title: "Éducation",
        links: [
          { 
            title: "Inscription scolaire", 
            url: "/citoyens/education/inscription", 
            description: "Procédures d'inscription scolaire" 
          },
          { 
            title: "Bourses d'études", 
            url: "/citoyens/education/bourses", 
            description: "Demande de bourses" 
          },
          { 
            title: "Formation continue", 
            url: "/citoyens/education/formation", 
            description: "Programmes de formation" 
          },
          { 
            title: "Examens nationaux", 
            url: "/citoyens/education/examens", 
            description: "Calendrier des examens" 
          }
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
          { 
            title: "Procédures", 
            url: "/entreprises/creation/procedures", 
            description: "Guide des démarches de création" 
          },
          { 
            title: "Documents requis", 
            url: "/entreprises/creation/documents", 
            description: "Liste des documents nécessaires" 
          },
          { 
            title: "Statut juridique", 
            url: "/entreprises/creation/statut", 
            description: "Choix de la forme juridique" 
          },
          { 
            title: "Financement", 
            url: "/entreprises/creation/financement", 
            description: "Options de financement initial" 
          }
        ]
      },
      {
        title: "Fiscalité",
        links: [
          { 
            title: "Impôts", 
            url: "https://esintax.bf/", 
            description: "Obligations fiscales des entreprises" 
          },
          { 
            title: "TVA", 
            url: "/entreprises/fiscalite/tva", 
            description: "Gestion de la TVA" 
          },
          { 
            title: "Déclarations", 
            url: "/entreprises/fiscalite/declarations", 
            description: "Calendrier des déclarations" 
          },
          { 
            title: "Exonérations", 
            url: "/entreprises/fiscalite/exonerations", 
            description: "Avantages fiscaux disponibles" 
          }
        ]
      },
      {
        title: "Développement",
        links: [
          { 
            title: "Innovation", 
            url: "/entreprises/developpement/innovation", 
            description: "Solutions innovantes" 
          },
          { 
            title: "Formation", 
            url: "/entreprises/developpement/formation", 
            description: "Formation continue" 
          },
          { 
            title: "Partenariats", 
            url: "/entreprises/developpement/partenariats", 
            description: "Opportunités de collaboration" 
          },
          { 
            title: "Financement", 
            url: "/entreprises/developpement/financement", 
            description: "Aides au développement" 
          }
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
          { 
            title: "Contrats de travail", 
            url: "/emploi/reglementation-travail/contrats", 
            description: "Conditions générales de travail" 
          },
          { 
            title: "Temps de travail", 
            url: "/emploi/reglementation-travail/temps-travail", 
            description: "Calcul du temps de travail" 
          },
          { 
            title: "Congés et absences", 
            url: "/emploi/reglementation-travail/conges", 
            description: "Gestion des congés" 
          },
          { 
            title: "Salaires", 
            url: "/emploi/reglementation-travail/salaires", 
            description: "Calcul et paiement des salaires" 
          }
        ]
      },
      {
        title: "Formation",
        links: [
          { 
            title: "Formation professionnelle", 
            url: "/emploi/formation-professionnelle", 
            description: "Formation initiale" 
          },
          { 
            title: "Apprentissage", 
            url: "/emploi/formation/apprentissage", 
            description: "Formation en entreprise" 
          },
          { 
            title: "Certification", 
            url: "/emploi/formation/certification", 
            description: "Validation des compétences" 
          },
          { 
            title: "Validation des acquis", 
            url: "/emploi/formation/validation", 
            description: "Évaluation des acquis de formation" 
          }
        ]
      },
      {
        title: "Protection sociale",
        links: [
          { 
            title: "Sécurité sociale", 
            url: "/emploi/protection/securite-sociale", 
            description: "Protection sociale" 
          },
          { 
            title: "Assurance maladie", 
            url: "/emploi/protection/assurance", 
            description: "Gestion de l'assurance maladie" 
          },
          { 
            title: "Retraite", 
            url: "/emploi/protection/retraite", 
            description: "Préparation et gestion de la retraite" 
          },
          { 
            title: "Accidents du travail", 
            url: "/emploi/protection/accidents", 
            description: "Gestion des accidents du travail" 
          }
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
          { 
            title: "Inscription", 
            url: "/education/primaire/inscription", 
            description: "Procédures d'inscription scolaire" 
          },
          { 
            title: "Programme scolaire", 
            url: "/education/primaire/programme", 
            description: "Contenu des enseignements" 
          },
          { 
            title: "Fournitures", 
            url: "/education/primaire/fournitures", 
            description: "Liste des fournitures requises" 
          },
          { 
            title: "Cantines scolaires", 
            url: "/education/primaire/cantines", 
            description: "Services de restauration" 
          }
        ]
      },
      {
        title: "Enseignement secondaire",
        links: [
          { 
            title: "Collèges et lycées", 
            url: "/education/secondaire/etablissements", 
            description: "Liste des établissements" 
          },
          { 
            title: "Examens", 
            url: "/education/secondaire/examens", 
            description: "Calendrier des examens" 
          },
          { 
            title: "Orientation", 
            url: "/education/secondaire/orientation", 
            description: "Conseil en orientation" 
          },
          { 
            title: "Bourses", 
            url: "/education/secondaire/bourses", 
            description: "Aides financières" 
          }
        ]
      },
      {
        title: "Enseignement supérieur",
        links: [
          { 
            title: "Universités", 
            url: "/education/superieur/universites", 
            description: "Établissements universitaires" 
          },
          { 
            title: "Filières", 
            url: "/education/superieur/filieres", 
            description: "Parcours d'études" 
          },
          { 
            title: "Inscription universitaire", 
            url: "/education/superieur/inscription", 
            description: "Procédures d'admission" 
          },
          { 
            title: "Vie étudiante", 
            url: "/education/superieur/vie-etudiante", 
            description: "Services aux étudiants" 
          }
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
          { 
            title: "Hôpitaux publics", 
            url: "/sante/services/hopitaux", 
            description: "Réseau hospitalier public" 
          },
          { 
            title: "Centres de santé", 
            url: "/sante/services/centres", 
            description: "Localisation des centres de santé" 
          },
          { 
            title: "Urgences", 
            url: "/sante/services/urgences", 
            description: "Services d'urgence" 
          },
          { 
            title: "Pharmacies", 
            url: "/sante/services/pharmacies", 
            description: "Réseau pharmaceutique" 
          }
        ]
      },
      {
        title: "Prévention",
        links: [
          { 
            title: "Vaccination", 
            url: "/sante/prevention/vaccination", 
            description: "Programme national" 
          },
          { 
            title: "Hygiène publique", 
            url: "/sante/prevention/hygiene", 
            description: "Hygiène et santé publique" 
          },
          { 
            title: "Santé maternelle", 
            url: "/sante/prevention/maternelle", 
            description: "Santé et maternité" 
          },
          { 
            title: "Maladies tropicales", 
            url: "/sante/prevention/tropicales", 
            description: "Prévention des maladies tropicales" 
          }
        ]
      },
      {
        title: "Assurance maladie",
        links: [
          { 
            title: "Couverture santé", 
            url: "/sante/assurance/couverture", 
            description: "Accès à la couverture santé" 
          },
          { 
            title: "Remboursements", 
            url: "/sante/assurance/remboursements", 
            description: "Gestion des remboursements" 
          },
          { 
            title: "Mutuelle de santé", 
            url: "/sante/assurance/mutuelle", 
            description: "Mutuelle de santé" 
          },
          { 
            title: "Aide médicale", 
            url: "/sante/assurance/aide", 
            description: "Aide médicale" 
          }
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
            description: "Calendrier et inscription aux concours administratifs",
            isNew: true 
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
            description: "Programmes de perfectionnement professionnel",
            inProgress: true 
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
            description: "Liste et contacts des ministères" 
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
          { 
            title: "Forces Armées", 
            url: "/securite/defense/forces-armees", 
            description: "Organisation militaire nationale" 
          },
          { 
            title: "Gendarmerie", 
            url: "/securite/defense/gendarmerie", 
            description: "Services de la gendarmerie" 
          },
          { 
            title: "Police Nationale", 
            url: "/securite/defense/police", 
            description: "Services de police" 
          },
          { 
            title: "Douanes", 
            url: "/securite/defense/douanes", 
            description: "Services douaniers" 
          }
        ]
      },
      {
        title: "Sécurité Intérieure",
        links: [
          { 
            title: "Protection civile", 
            url: "/securite/interieure/protection-civile", 
            description: "Services de protection civile" 
          },
          { 
            title: "Sécurité routière", 
            url: "/securite/interieure/securite-routiere", 
            description: "Sécurité des transports" 
          },
          { 
            title: "Surveillance du territoire", 
            url: "/securite/interieure/surveillance", 
            description: "Contrôle territorial" 
          },
          { 
            title: "Pompiers", 
            url: "/securite/interieure/pompiers", 
            description: "Services d'incendie" 
          }
        ]
      },
      {
        title: "Services d'Urgence",
        links: [
          { 
            title: "Numéros d'urgence", 
            url: "/securite/urgences/numeros", 
            description: "Contacts d'urgence" 
          },
          { 
            title: "Centres d'appel", 
            url: "/securite/urgences/centres", 
            description: "Centres de traitement des appels" 
          },
          { 
            title: "Premiers secours", 
            url: "/securite/urgences/premiers-secours", 
            description: "Services de premiers secours" 
          },
          { 
            title: "Plans d'urgence", 
            url: "/securite/urgences/plans", 
            description: "Plans d'intervention" 
          }
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  
  const mainMenuItems = Object.entries(megaMenu).filter(
    ([key]) => !['agriculture', 'justice', 'sante'].includes(key)
  );

  return (
    <nav className="border-t border-gray-200 bg-white relative">
      <div className="container mx-auto">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-4 flex items-center justify-between w-full text-gray-900"
            aria-expanded={mobileMenuOpen}
          >
            <span className="font-medium">Menu</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                mobileMenuOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex justify-center" role="menubar">
            {mainMenuItems.map(([key, item]) => (
              <li
                key={key}
                className="relative group"
                role="none"
              >
                <button
                  className={`px-6 py-4 text-gray-700 hover:text-[#1a5653] flex items-center gap-1 transition-colors relative ${
                    activeMenu === key ? 'text-[#1a5653]' : ''
                  }`}
                  role="menuitem"
                  onMouseEnter={() => onMenuChange(key)}
                  onMouseLeave={() => onMenuChange(null)}
                >
                  <span className="relative">
                    {item.title}
                    <span className="ml-1.5 text-xs opacity-70" aria-hidden="true">▾</span>
                    {activeMenu === key && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a5653]"></span>
                    )}
                  </span>
                </button>

                {activeMenu === key && (
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 top-full w-[calc(100vw-2rem)] max-w-7xl bg-white rounded-lg shadow-lg py-6 z-50"
                    role="menu"
                    onMouseEnter={() => onMenuChange(key)}
                    onMouseLeave={() => onMenuChange(null)}
                  >
                    <div className="max-w-5xl mx-auto px-8">
                      <div className="grid grid-cols-3 gap-x-8">
                        {item.sections.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="font-semibold text-gray-900 text-lg mb-4 pb-2 border-b">
                              {section.title}
                            </h3>
                            <ul className="space-y-3">
                              {section.links.map((link, linkIdx) => (
                                <li key={linkIdx} role="none">
                                  <Link
                                    href={link.url}
                                    className="block hover:bg-gray-50 rounded-lg p-3 transition-colors group"
                                  >
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <span className="text-gray-900 font-medium group-hover:text-[#1a5653] transition-colors">
                                          {link.title}
                                        </span>
                                        {link.description && (
                                          <span className="text-sm text-gray-600 block mt-0.5">
                                            {link.description}
                                          </span>
                                        )}
                                      </div>
                                      {link.isNew && (
                                        <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#1a5653]/10 text-[#1a5653]">
                                          Nouveau
                                        </span>
                                      )}
                                      {link.inProgress && (
                                        <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
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
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Mobile Menu Header */}
            <div className="border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto">
              {mainMenuItems.map(([key, item]) => (
                <div key={key} className="border-b border-gray-100">
                  <button
                    className="w-full py-4 px-6 flex justify-between items-center text-left"
                    onClick={() => setActiveMobileSection(activeMobileSection === key ? null : key)}
                  >
                    <span className="font-medium text-gray-900">{item.title}</span>
                    <ChevronRightIcon 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        activeMobileSection === key ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {activeMobileSection === key && (
                    <div className="bg-gray-50 px-6 py-4">
                      {item.sections.map((section, idx) => (
                        <div key={idx} className="mb-6 last:mb-0">
                          <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-3">
                            {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.links.map((link, linkIdx) => (
                              <li key={linkIdx}>
                                <Link
                                  href={link.url}
                                  className="block py-2 text-gray-900 hover:text-[#1a5653]"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{link.title}</span>
                                    {link.isNew && (
                                      <span className="ml-2 px-2 py-0.5 text-xs bg-[#1a5653]/10 text-[#1a5653] rounded-full">
                                        Nouveau
                                      </span>
                                    )}
                                    {link.inProgress && (
                                      <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded-full">
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
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
} 