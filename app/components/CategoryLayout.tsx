'use client';

import Link from 'next/link';
import PopularLinks from './PopularLinks';
import { megaMenu } from '../data/megaMenu';

interface CategoryLayoutProps {
  categoryKey: keyof typeof megaMenu;
}

export default function CategoryLayout({ categoryKey }: CategoryLayoutProps) {
  const category = megaMenu[categoryKey];
  
  // Popular links data for each category
  const popularLinks = {
    emploi: [
      {
        title: "Offres d'emploi publics",
        url: "/emploi/offres",
        description: "Consultez les dernières offres d'emploi dans la fonction publique"
      },
      {
        title: "Concours administratifs",
        url: "/emploi/concours",
        description: "Calendrier et inscription aux concours de la fonction publique"
      },
      {
        title: "Formation professionnelle",
        url: "/emploi/formation",
        description: "Programmes de formation et de développement professionnel"
      }
    ],
    entreprises: [
      {
        title: "Création d'entreprise",
        url: "/entreprises/creation",
        description: "Guide complet pour créer votre entreprise"
      },
      {
        title: "Marchés publics",
        url: "/entreprises/marches-publics",
        description: "Appels d'offres et opportunités d'affaires"
      },
      {
        title: "Financement",
        url: "/entreprises/financement",
        description: "Aides et solutions de financement pour les entreprises"
      }
    ],
    citoyens: [
      {
        title: "CNIB en ligne",
        url: "/services/citoyens/cnib",
        description: "Demande et renouvellement de la carte d'identité"
      },
      {
        title: "État civil",
        url: "/services/citoyens/etat-civil",
        description: "Actes de naissance, mariage et autres documents"
      },
      {
        title: "Passeport",
        url: "/services/citoyens/passeport",
        description: "Demande et renouvellement de passeport"
      }
    ],
    securite: [
      {
        title: "Numéros d'urgence",
        url: "/securite/urgences",
        description: "Contacts des services d'urgence"
      },
      {
        title: "Signalement",
        url: "/securite/signalement",
        description: "Plateforme de signalement en ligne"
      },
      {
        title: "Prévention",
        url: "/securite/prevention",
        description: "Conseils et guides de sécurité"
      }
    ],
    fonction: [
      {
        title: "Concours",
        url: "/fonction-publique/concours",
        description: "Calendrier des concours de la fonction publique"
      },
      {
        title: "Services en ligne",
        url: "/fonction-publique/services",
        description: "Portail des services numériques"
      },
      {
        title: "Carrière",
        url: "/fonction-publique/carriere",
        description: "Gestion de votre carrière dans la fonction publique"
      }
    ],
    burkina: [
      {
        title: "Guide touristique",
        url: "/burkina/tourisme",
        description: "Découvrez les merveilles du Burkina Faso"
      },
      {
        title: "Culture",
        url: "/burkina/culture",
        description: "Richesse culturelle et patrimoine"
      },
      {
        title: "Investir",
        url: "/burkina/investir",
        description: "Opportunités d'investissement au Burkina Faso"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            {category.title}
          </h1>
          <p className="text-base sm:text-lg text-secondary/90 max-w-2xl leading-relaxed">
            Accédez à tous les services et informations relatifs à {category.title.toLowerCase()}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {category.sections.map((section, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-lg sm:text-xl font-bold text-foreground-dark mb-3 sm:mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.url}
                        className="text-sm sm:text-base text-foreground-light hover:text-primary transition-colors block py-1"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Links */}
      <PopularLinks 
        category={category.title}
        links={popularLinks[categoryKey]}
      />
    </div>
  );
} 