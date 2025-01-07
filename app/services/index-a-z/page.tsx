'use client';

import Link from 'next/link';

interface IndexItem {
  title: string;
  href: string;
  category: string;
}

const indexItems: IndexItem[] = [
  // A
  {
    title: "Avantages salariaux en CDD",
    href: "/emploi/reglementation-travail/contrats/avantages-salariaux-cdd",
    category: "Contrats de travail"
  },
  // C
  {
    title: "Conditions d'embauche en CDD",
    href: "/emploi/reglementation-travail/contrats/cdd-conditions",
    category: "Contrats de travail"
  },
  {
    title: "Congés en CDD",
    href: "/emploi/reglementation-travail/contrats/conges-cdd",
    category: "Contrats de travail"
  },
  {
    title: "Contrat de travail - Guide complet",
    href: "/emploi/reglementation-travail/contrats",
    category: "Contrats de travail"
  },
  // D
  {
    title: "Droits collectifs en CDD",
    href: "/emploi/reglementation-travail/contrats/droits-collectifs-cdd",
    category: "Contrats de travail"
  },
  // E
  {
    title: "Équipements collectifs en CDD",
    href: "/emploi/reglementation-travail/contrats/equipements-collectifs-cdd",
    category: "Contrats de travail"
  },
  // F
  {
    title: "Formation professionnelle",
    href: "/emploi/formation-professionnelle",
    category: "Formation"
  },
  // H
  {
    title: "Heures supplémentaires",
    href: "/emploi/reglementation-travail/temps-travail/heures-supplementaires",
    category: "Temps de travail"
  },
  // T
  {
    title: "Temps de travail en CDD",
    href: "/emploi/reglementation-travail/contrats/temps-travail-cdd",
    category: "Contrats de travail"
  }
];

function groupByFirstLetter(items: IndexItem[]) {
  const grouped = items.reduce((acc: { [key: string]: IndexItem[] }, item) => {
    const firstLetter = item.title.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  return Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b));
}

export default function IndexAZPage() {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Index A-Z', href: '/services/index-a-z' }
  ];

  const groupedItems = groupByFirstLetter(indexItems);

  return (
    <main className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-500">
            {breadcrumbItems.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">›</span>}
                <Link 
                  href={item.href}
                  className={index === breadcrumbItems.length - 1 ? 'text-gray-900' : 'hover:underline'}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Index A-Z des Services</h1>

        {/* Alphabet Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 bg-gray-50 p-4 rounded-lg">
          {groupedItems.map(([letter]) => (
            <a 
              key={letter}
              href={`#section-${letter}`}
              className="w-8 h-8 flex items-center justify-center rounded bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
            >
              {letter}
            </a>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {groupedItems.map(([letter, items]) => (
            <section key={letter} id={`section-${letter}`} className="scroll-mt-16">
              <h2 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2">{letter}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <Link href={item.href} className="block hover:bg-gray-50 p-2 -m-2 rounded">
                      <h3 className="text-lg font-medium text-blue-600 hover:underline mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-12">
          <h2 className="text-xl font-semibold mb-4">Avez-vous trouvé ce que vous cherchiez ?</h2>
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