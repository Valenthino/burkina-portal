'use client';

import Link from 'next/link';

interface IndexItem {
  title: string;
  href: string;
  category: string;
  description?: string;
}

const indexItems: IndexItem[] = [
  // A
  {
    title: "Actes d'État Civil",
    href: "/services/citoyens/etat-civil",
    category: "Services aux Citoyens"
  },
  {
    title: "Agréments sectoriels",
    href: "/entreprises/licences/agrements",
    category: "Services aux Entreprises",
    description: "Obtention des agréments spécifiques par secteur d'activité"
  },
  {
    title: "Aide Sociale",
    href: "/services/citoyens/aide-sociale",
    category: "Protection Sociale"
  },
  {
    title: "Appels d'offres",
    href: "/entreprises/marches-publics/appels-offres",
    category: "Services aux Entreprises",
    description: "Consultation des appels d'offres publics en cours"
  },
  {
    title: "Arts et traditions",
    href: "/burkina/histoire-culture/arts",
    category: "Culture et Patrimoine"
  },
  {
    title: "Assistance aux agents",
    href: "/fonction-publique/services/assistance",
    category: "Services de la Fonction Publique"
  },
  {
    title: "Associations",
    href: "/services/citoyens/associations",
    category: "Vie Citoyenne"
  },
  {
    title: "Assurance Maladie",
    href: "/services/citoyens/assurance-maladie",
    category: "Protection Sociale"
  },
  {
    title: "Avantages salariaux en CDD",
    href: "/emploi/reglementation-travail/contrats/avantages-salariaux-cdd",
    category: "Contrats de travail"
  },
  // C
  {
    title: "Carte Nationale d'Identité (CNIB)",
    href: "/services/citoyens/cnib",
    category: "Services aux Citoyens"
  },
  {
    title: "Casier Judiciaire",
    href: "/services/citoyens/casier-judiciaire",
    category: "Services aux Citoyens"
  },
  {
    title: "Commerce international",
    href: "/entreprises/commerce-international",
    category: "Services aux Entreprises",
    description: "Guide des procédures d'import-export"
  },
  {
    title: "Certificat de Résidence",
    href: "/services/citoyens/certificat-residence",
    category: "Services aux Citoyens"
  },
  {
    title: "Circuits touristiques",
    href: "/burkina/decouvrir/circuits",
    category: "Tourisme"
  },
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
    title: "Congés et absences",
    href: "/fonction-publique/administration/conges",
    category: "Administration Publique"
  },
  {
    title: "Consulats et Ambassades",
    href: "/services/international/consulats",
    category: "Services Internationaux"
  },
  {
    title: "Contrat de travail - Guide complet",
    href: "/emploi/reglementation-travail/contrats",
    category: "Contrats de travail"
  },
  {
    title: "Culture et traditions",
    href: "/burkina/histoire-culture",
    category: "Culture et Patrimoine"
  },
  // D
  {
    title: "Création d'entreprise",
    href: "/entreprises/creation",
    category: "Services aux Entreprises",
    description: "Guide complet pour créer votre entreprise"
  },
  {
    title: "Déclarations fiscales",
    href: "/entreprises/fiscalite/declarations",
    category: "Services aux Entreprises",
    description: "Procédures de déclaration des impôts et taxes"
  },
  {
    title: "Documents administratifs",
    href: "/fonction-publique/services/documents",
    category: "Services de la Fonction Publique"
  },
  {
    title: "Documents requis",
    href: "/entreprises/creation/documents",
    category: "Services aux Entreprises",
    description: "Liste des documents nécessaires pour la création d'entreprise"
  },
  {
    title: "Droits collectifs en CDD",
    href: "/emploi/reglementation-travail/contrats/droits-collectifs-cdd",
    category: "Contrats de travail"
  },
  // E
  {
    title: "Écoles de formation",
    href: "/fonction-publique/formation/ecoles",
    category: "Formation Publique"
  },
  {
    title: "Élections",
    href: "/services/citoyens/elections",
    category: "Vie Citoyenne"
  },
  {
    title: "Équipements collectifs en CDD",
    href: "/emploi/reglementation-travail/contrats/equipements-collectifs-cdd",
    category: "Contrats de travail"
  },
  {
    title: "Espace agent",
    href: "/fonction-publique/services/espace-agent",
    category: "Services de la Fonction Publique"
  },
  {
    title: "Examens professionnels",
    href: "/fonction-publique/formation/examens",
    category: "Formation Publique"
  },
  {
    title: "Exportation",
    href: "/entreprises/commerce-international/export",
    category: "Services aux Entreprises",
    description: "Guide des procédures d'exportation"
  },
  {
    title: "Exonérations fiscales",
    href: "/entreprises/fiscalite/exonerations",
    category: "Services aux Entreprises",
    description: "Guide des avantages fiscaux disponibles"
  },
  // F
  {
    title: "Financement",
    href: "/entreprises/creation/financement",
    category: "Services aux Entreprises",
    description: "Options de financement pour votre entreprise"
  },
  {
    title: "Fiscalité",
    href: "/entreprises/fiscalite",
    category: "Services aux Entreprises",
    description: "Guide complet de la fiscalité des entreprises"
  },
  // I
  {
    title: "Importation",
    href: "/entreprises/commerce-international/import",
    category: "Services aux Entreprises",
    description: "Guide des procédures d'importation"
  },
  {
    title: "Incitations à l'investissement",
    href: "/entreprises/investissement/incitations",
    category: "Services aux Entreprises",
    description: "Avantages accordés aux investisseurs"
  },
  {
    title: "Investissement",
    href: "/entreprises/investissement",
    category: "Services aux Entreprises",
    description: "Guide complet pour investir au Burkina Faso"
  },
  // L
  {
    title: "Licences commerciales",
    href: "/entreprises/licences/commerce",
    category: "Services aux Entreprises",
    description: "Guide des autorisations commerciales"
  },
  {
    title: "Licences et permis",
    href: "/entreprises/licences",
    category: "Services aux Entreprises",
    description: "Guide complet des autorisations d'exercice"
  },
  // M
  {
    title: "Marchés publics",
    href: "/entreprises/marches-publics",
    category: "Services aux Entreprises",
    description: "Guide de participation aux marchés publics"
  },
  {
    title: "Ministères",
    href: "/gouvernement/ministeres",
    category: "Gouvernement"
  },
  {
    title: "Mutations",
    href: "/fonction-publique/carriere/mutations",
    category: "Carrière Publique"
  },
  // P
  {
    title: "Participation Citoyenne",
    href: "/services/citoyens/participation",
    category: "Vie Citoyenne"
  },
  {
    title: "Passeport",
    href: "/services/citoyens/passeport",
    category: "Services aux Citoyens"
  },
  {
    title: "Patrimoine culturel",
    href: "/burkina/histoire-culture/patrimoine",
    category: "Culture et Patrimoine"
  },
  // R
  {
    title: "Réclamations",
    href: "/fonction-publique/services/reclamations",
    category: "Services de la Fonction Publique"
  },
  {
    title: "Rémunération",
    href: "/fonction-publique/administration/remuneration",
    category: "Administration Publique"
  },
  {
    title: "Retraite",
    href: "/fonction-publique/administration/retraite",
    category: "Administration Publique"
  },
  // S
  {
    title: "Sécurité Sociale",
    href: "/services/citoyens/securite-sociale",
    category: "Protection Sociale"
  },
  {
    title: "Sites historiques",
    href: "/burkina/histoire-culture/sites",
    category: "Culture et Patrimoine"
  },
  {
    title: "Sites touristiques",
    href: "/burkina/decouvrir/tourisme#sites",
    category: "Tourisme"
  },
  {
    title: "Stages de formation",
    href: "/fonction-publique/formation/stages",
    category: "Formation Publique"
  },
  {
    title: "Statut général",
    href: "/fonction-publique/administration/statut",
    category: "Administration Publique"
  },
  {
    title: "Statut juridique",
    href: "/entreprises/creation/statut",
    category: "Services aux Entreprises",
    description: "Choix de la forme juridique de l'entreprise"
  },
  // T
  {
    title: "Temps de travail en CDD",
    href: "/emploi/reglementation-travail/contrats/temps-travail-cdd",
    category: "Contrats de travail"
  },
  {
    title: "Tourisme au Burkina Faso",
    href: "/burkina/decouvrir/tourisme",
    category: "Tourisme"
  },
  {
    title: "TVA",
    href: "/entreprises/fiscalite/tva",
    category: "Services aux Entreprises",
    description: "Guide de la Taxe sur la Valeur Ajoutée"
  },
  {
    title: "Hôpitaux et Centres de Santé",
    href: "/services/sante/hopitaux-centres",
    category: "Santé"
  },
  {
    title: "Maladies Chroniques",
    href: "/services/sante/maladies-chroniques",
    category: "Santé"
  },
  {
    title: "Pharmacies",
    href: "/services/sante/pharmacies",
    category: "Santé"
  },
  {
    title: "Prévention et Hygiène",
    href: "/services/sante/prevention-hygiene",
    category: "Santé"
  },
  {
    title: "Santé Maternelle et Infantile",
    href: "/services/sante/maternelle-infantile",
    category: "Santé"
  },
  {
    title: "Santé Mentale",
    href: "/services/sante/sante-mentale",
    category: "Santé"
  },
  {
    title: "Urgences Médicales",
    href: "/services/sante/urgences",
    category: "Santé"
  },
  {
    title: "Vaccination",
    href: "/services/sante/vaccination",
    category: "Santé"
  },
  // V
  {
    title: "Visas",
    href: "/services/international/visas",
    category: "Services Internationaux"
  },
  {
    title: "Permis spéciaux",
    href: "/entreprises/licences/speciaux",
    category: "Services aux Entreprises",
    description: "Guide des autorisations spéciales"
  },
  {
    title: "Procédures de création",
    href: "/entreprises/creation/procedures",
    category: "Services aux Entreprises",
    description: "Étapes de création d'une entreprise"
  },
  {
    title: "Régimes douaniers",
    href: "/entreprises/commerce-international/regimes",
    category: "Services aux Entreprises",
    description: "Guide des régimes douaniers spéciaux"
  },
  {
    title: "Réglementation des marchés publics",
    href: "/entreprises/marches-publics/reglementation",
    category: "Services aux Entreprises",
    description: "Cadre légal des marchés publics"
  },
  {
    title: "Secteurs prioritaires",
    href: "/entreprises/investissement/secteurs",
    category: "Services aux Entreprises",
    description: "Secteurs prioritaires pour l'investissement"
  },
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

        {/* Catégories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Parcourir par catégorie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from(new Set(indexItems.map(item => item.category))).sort().map((category, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{category}</h3>
                <ul className="space-y-1">
                  {indexItems.filter(item => item.category === category).map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={item.href} className="text-blue-600 hover:underline">
                        {item.title}
                      </Link>
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

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
                      {item.description && (
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      )}
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
            Date de modification : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </main>
  );
} 