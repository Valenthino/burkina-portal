'use client';

import Link from 'next/link';

const menuSections = [
  {
    title: "Employeurs et Recrutement",
    links: [
      {
        title: "Espace Employeurs",
        description: "Ressources et informations pour les employeurs",
        href: "/emploi/employeurs"
      },
      {
        title: "Recrutement",
        description: "Guide et bonnes pratiques de recrutement",
        href: "/emploi/recrutement"
      }
    ]
  },
  {
    title: "Réglementation et Droit du Travail",
    links: [
      {
        title: "Code du Travail",
        description: "Dispositions légales et réglementation",
        href: "/emploi/reglementation-travail/code-travail"
      },
      {
        title: "Santé et Sécurité",
        description: "Normes de santé et sécurité au travail",
        href: "/emploi/reglementation-travail/sante-securite"
      },
      {
        title: "Relations de Travail",
        description: "Négociations collectives et résolution des conflits",
        href: "/emploi/reglementation-travail/relations-travail"
      }
    ]
  },
  {
    title: "Formation et Développement",
    links: [
      {
        title: "Formation Professionnelle",
        description: "Programmes et centres de formation",
        href: "/emploi/formation-professionnelle"
      },
      {
        title: "Développement Professionnel",
        description: "Évolution de carrière et compétences",
        href: "/emploi/developpement-professionnel"
      },
      {
        title: "Certification",
        description: "Certifications professionnelles",
        href: "/emploi/certification"
      }
    ]
  },
  {
    title: "Ressources et Informations",
    links: [
      {
        title: "Guide de l'Emploi",
        description: "Informations pratiques et conseils",
        href: "/emploi/guide"
      },
      {
        title: "Statistiques",
        description: "Chiffres et données sur l'emploi",
        href: "/emploi/statistiques"
      },
      {
        title: "Documentation",
        description: "Documents et formulaires utiles",
        href: "/emploi/documentation"
      }
    ]
  }
];

export default function EmploiPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Emploi et Travail</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            Accédez à toutes les informations et ressources concernant l'emploi, 
            le droit du travail et la formation professionnelle au Burkina Faso.
          </p>
        </div>

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

        {/* Feedback Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Avez-vous trouvé ce que vous cherchiez?</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">
              Oui
            </button>
            <button className="bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700">
              Non
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Date de modification : {new Date().toISOString().split('T')[0]}
          </p>
        </div>
      </div>
    </main>
  );
} 