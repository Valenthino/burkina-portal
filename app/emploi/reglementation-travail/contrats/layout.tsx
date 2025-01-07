'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarLinks = [
  {
    title: "Bases du contrat de travail",
    links: [
      {
        title: "Guide des contrats de travail",
        href: "/emploi/reglementation-travail/contrats"
      },
      {
        title: "Conditions d'embauche en CDD",
        href: "/emploi/reglementation-travail/contrats/cdd-conditions"
      },
      {
        title: "Période d'essai",
        href: "/emploi/reglementation-travail/contrats/periode-essai"
      }
    ]
  },
  {
    title: "Droits et avantages",
    links: [
      {
        title: "Avantages salariaux en CDD",
        href: "/emploi/reglementation-travail/contrats/avantages-salariaux-cdd"
      },
      {
        title: "Temps de travail en CDD",
        href: "/emploi/reglementation-travail/contrats/temps-travail-cdd"
      },
      {
        title: "Droits collectifs",
        href: "/emploi/reglementation-travail/contrats/droits-collectifs-cdd"
      },
      {
        title: "Équipements collectifs",
        href: "/emploi/reglementation-travail/contrats/equipements-collectifs-cdd"
      }
    ]
  },
  {
    title: "Gestion du contrat",
    links: [
      {
        title: "Modification du contrat",
        href: "/emploi/reglementation-travail/contrats/modification"
      },
      {
        title: "Suspension du contrat",
        href: "/emploi/reglementation-travail/contrats/suspension"
      },
      {
        title: "Rupture du contrat",
        href: "/emploi/reglementation-travail/contrats/rupture"
      }
    ]
  }
];

export default function ContratsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-gray-50 rounded-lg p-4 sticky top-4">
              <div className="mb-4">
                <Link 
                  href="/services/index-a-z" 
                  className="text-blue-600 hover:underline text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                  Index A-Z des services
                </Link>
              </div>
              
              {sidebarLinks.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className={`block text-sm py-1 px-2 rounded ${
                            pathname === link.href
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                          }`}
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

          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 