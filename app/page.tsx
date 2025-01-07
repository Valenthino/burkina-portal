'use client';

import Link from 'next/link';
import Image from 'next/image';

const mostRequestedServices = [
  {
    title: "CNIB en ligne",
    description: "Demande et renouvellement de la carte d'identité",
    url: "/services/citoyens/cnib",
    category: "Documents"
  },
  {
    title: "Passeport",
    description: "Demande et renouvellement de passeport",
    url: "/services/citoyens/passeport",
    category: "Documents"
  },
  {
    title: "État civil",
    description: "Actes de naissance, mariage et décès",
    url: "/services/citoyens/etat-civil",
    category: "Documents"
  },
  {
    title: "Concours de la fonction publique",
    description: "Calendrier et inscription aux concours",
    url: "/emploi/concours",
    category: "Emploi"
  },
  {
    title: "Marchés publics",
    description: "Appels d'offres et opportunités",
    url: "/entreprises/marches-publics",
    category: "Entreprises"
  },
  {
    title: "Création d'entreprise",
    description: "Démarches et formalités",
    url: "/entreprises/creation",
    category: "Entreprises"
  }
];

const quickAccessLinks = [
  { 
    title: 'Emploi', 
    href: '/emploi',
    description: 'Offres d\'emploi et concours'
  },
  { 
    title: 'Entreprises', 
    href: '/entreprises',
    description: 'Services aux entreprises'
  },
  { 
    title: 'Éducation', 
    href: '/services/citoyens/education',
    description: 'Formation et enseignement'
  },
  { 
    title: 'Santé', 
    href: '/services/citoyens/sante',
    description: 'Services de santé'
  },
  { 
    title: 'Tourisme', 
    href: '/burkina/tourisme',
    description: 'Découvrir le Burkina Faso'
  },
  { 
    title: 'Contact', 
    href: '/contact',
    description: 'Nous contacter'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bienvenue sur le portail du Gouvernement du Burkina Faso
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Accédez aux services gouvernementaux, informations et ressources en ligne
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/services/citoyens" 
                className="btn-secondary"
              >
                Services aux citoyens
              </Link>
              <Link 
                href="/services" 
                className="btn-outline-light"
              >
                Tous les services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/citoyens" className="tag">
              Citoyens
            </Link>
            <Link href="/entreprises" className="tag">
              Entreprises
            </Link>
            <Link href="/administration" className="tag">
              Administration
            </Link>
            <Link href="/international" className="tag">
              International
            </Link>
          </div>
        </div>
      </section>

      {/* Most Requested Services */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark text-center mb-12">
            Services les plus demandés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mostRequestedServices.map((service, index) => (
              <Link key={index} href={service.url} className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground-dark group-hover:text-primary">
                      {service.title}
                    </h3>
                    <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-foreground-light">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark text-center mb-12">
            Accès rapide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickAccessLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-xl font-semibold text-foreground-dark group-hover:text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-light">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
