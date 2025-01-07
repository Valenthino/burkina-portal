import Image from 'next/image';
import Link from 'next/link';

const ministries = [
  {
    name: "Défense et Anciens Combattants",
    shortName: "Défense",
    minister: "Colonel-Major Kassoum COULIBALY",
    image: "/images/IMG_5191.JPG",
    slug: "defense",
    description: "Sécurité nationale et gestion des forces armées",
    functions: [
      "Élaboration et mise en œuvre de la politique de défense nationale",
      "Gestion et modernisation des forces armées",
      "Protection du territoire national",
      "Coordination des opérations militaires",
      "Gestion des anciens combattants et de leurs droits"
    ],
    keyServices: [
      { name: "Forces Armées Nationales", url: "/securite/defense/forces-armees" },
      { name: "Gendarmerie Nationale", url: "/securite/defense/gendarmerie" },
      { name: "Service National", url: "/securite/defense/service-national" },
      { name: "Anciens Combattants", url: "/securite/defense/anciens-combattants" }
    ]
  },
  {
    name: "Affaires Étrangères et Coopération Régionale",
    shortName: "Affaires Étrangères",
    minister: "Mme Olivia ROUAMBA",
    image: "/images/IMG_5192.JPG",
    slug: "affaires-etrangeres",
    description: "Relations internationales et diplomatie",
    functions: [
      "Conduite de la politique étrangère",
      "Gestion des relations diplomatiques",
      "Promotion de la coopération internationale",
      "Protection des intérêts burkinabè à l'étranger",
      "Coordination des actions internationales"
    ],
    keyServices: [
      { name: "Services Consulaires", url: "/international/services-consulaires" },
      { name: "Coopération Internationale", url: "/international/cooperation" },
      { name: "Diaspora", url: "/international/diaspora" },
      { name: "Relations Bilatérales", url: "/international/relations" }
    ]
  },
  {
    name: "Justice et Droits Humains",
    shortName: "Justice",
    minister: "Dr Edasso RODRIGUE BAYALA",
    image: "/images/IMG_5193.JPG",
    slug: "justice",
    description: "Justice et protection des droits humains",
    functions: [
      "Administration de la justice",
      "Protection des droits humains",
      "Modernisation du système judiciaire",
      "Supervision des établissements pénitentiaires",
      "Promotion de l'accès au droit"
    ],
    keyServices: [
      { name: "Tribunaux et Cours", url: "/justice/tribunaux" },
      { name: "Droits Humains", url: "/justice/droits-humains" },
      { name: "Services Pénitentiaires", url: "/justice/penitentiaire" },
      { name: "Aide Juridictionnelle", url: "/justice/aide-juridictionnelle" }
    ]
  },
  {
    name: "Économie, Finances et Prospective",
    shortName: "Économie et Finances",
    minister: "Dr Aboubakar NACANABO",
    image: "/images/IMG_5194.JPG",
    slug: "economie-finances",
    description: "Gestion économique et financière de l'État",
    functions: [
      "Élaboration et mise en œuvre de la politique économique",
      "Gestion des finances publiques",
      "Planification et prospective économique",
      "Coordination des politiques budgétaires",
      "Supervision du système financier"
    ],
    keyServices: [
      { name: "Budget et Trésor Public", url: "/finances/budget" },
      { name: "Impôts et Taxes", url: "/finances/impots" },
      { name: "Douanes", url: "/finances/douanes" },
      { name: "Marchés Publics", url: "/finances/marches-publics" }
    ]
  },
  {
    name: "Transition Digitale, Postes et Communications",
    shortName: "Transition Digitale",
    minister: "Dr Aminata ZERBO/SABANE",
    image: "/images/IMG_5195.JPG",
    slug: "transition-digitale",
    description: "Transformation numérique et communications",
    functions: [
      "Développement de l'infrastructure numérique",
      "Modernisation des services postaux",
      "Promotion de l'innovation digitale",
      "Gestion des télécommunications",
      "Cybersécurité et protection des données"
    ],
    keyServices: [
      { name: "Services Numériques", url: "/digital/services" },
      { name: "La Poste", url: "/digital/poste" },
      { name: "Télécommunications", url: "/digital/telecom" },
      { name: "E-gouvernement", url: "/digital/e-gouvernement" }
    ]
  },
  {
    name: "Fonction Publique, Travail et Protection Sociale",
    shortName: "Fonction Publique",
    minister: "M. Bassolma BAZIE",
    image: "/images/IMG_5196.JPG",
    slug: "fonction-publique",
    description: "Gestion de l'administration publique et protection sociale",
    functions: [
      "Administration de la fonction publique",
      "Régulation du travail",
      "Gestion de la protection sociale",
      "Formation des fonctionnaires",
      "Relations avec les syndicats"
    ],
    keyServices: [
      { name: "Recrutements", url: "/fonction-publique/recrutements" },
      { name: "Protection Sociale", url: "/fonction-publique/protection-sociale" },
      { name: "Formation Continue", url: "/fonction-publique/formation" },
      { name: "Services aux Agents", url: "/fonction-publique/services" }
    ]
  },
  {
    name: "Développement Industriel, Commerce, Artisanat et Petites et Moyennes Entreprises",
    shortName: "Industrie et Commerce",
    minister: "M. Serge PODA",
    image: "/images/IMG_5197.JPG",
    slug: "industrie-commerce",
    description: "Développement économique et commercial",
    functions: [
      "Promotion du développement industriel",
      "Régulation du commerce",
      "Soutien aux PME/PMI",
      "Promotion de l'artisanat",
      "Développement des exportations"
    ],
    keyServices: [
      { name: "Développement Industriel", url: "/industrie/developpement" },
      { name: "Soutien aux PME", url: "/industrie/pme" },
      { name: "Commerce", url: "/industrie/commerce" },
      { name: "Artisanat", url: "/industrie/artisanat" }
    ]
  },
  {
    name: "Agriculture, Ressources Animales et Halieutiques",
    shortName: "Agriculture",
    minister: "Dr Dénis OUEDRAOGO",
    image: "/images/IMG_5198.JPG",
    slug: "agriculture",
    description: "Développement agricole et ressources animales",
    functions: [
      "Développement de l'agriculture",
      "Gestion des ressources animales",
      "Développement de la pêche",
      "Sécurité alimentaire",
      "Modernisation agricole"
    ],
    keyServices: [
      { name: "Production Agricole", url: "/agriculture/production" },
      { name: "Élevage", url: "/agriculture/elevage" },
      { name: "Pêche", url: "/agriculture/peche" },
      { name: "Recherche Agricole", url: "/agriculture/recherche" }
    ]
  },
  {
    name: "Environnement, Eau et Assainissement",
    shortName: "Environnement",
    minister: "M. Roger BARO",
    image: "/images/IMG_5199.JPG",
    slug: "environnement",
    description: "Protection de l'environnement et gestion des ressources",
    functions: [
      "Protection de l'environnement",
      "Gestion des ressources en eau",
      "Assainissement urbain et rural",
      "Lutte contre la pollution",
      "Conservation de la biodiversité"
    ],
    keyServices: [
      { name: "Protection Environnementale", url: "/environnement/protection" },
      { name: "Gestion de l'Eau", url: "/environnement/eau" },
      { name: "Assainissement", url: "/environnement/assainissement" },
      { name: "Biodiversité", url: "/environnement/biodiversite" }
    ]
  },
  {
    name: "Éducation Nationale, Alphabétisation et Promotion des Langues Nationales",
    shortName: "Éducation Nationale",
    minister: "M. Joseph André OUEDRAOGO",
    image: "/images/IMG_5200.JPG",
    slug: "education",
    description: "Éducation et promotion des langues nationales",
    functions: [
      "Gestion du système éducatif",
      "Promotion de l'alphabétisation",
      "Développement des langues nationales",
      "Formation des enseignants",
      "Gestion des programmes scolaires"
    ],
    keyServices: [
      { name: "Enseignement Primaire", url: "/education/primaire" },
      { name: "Enseignement Secondaire", url: "/education/secondaire" },
      { name: "Alphabétisation", url: "/education/alphabetisation" },
      { name: "Langues Nationales", url: "/education/langues" }
    ]
  },
  {
    name: "Enseignement Supérieur, Recherche et Innovation",
    shortName: "Enseignement Supérieur",
    minister: "M. Adjima THIOMBIANO",
    image: "/images/IMG_5201.JPG",
    slug: "enseignement-superieur",
    description: "Enseignement supérieur et recherche scientifique",
    functions: [
      "Gestion de l'enseignement supérieur",
      "Promotion de la recherche scientifique",
      "Développement de l'innovation",
      "Coopération universitaire",
      "Gestion des bourses d'études"
    ],
    keyServices: [
      { name: "Universités", url: "/enseignement-superieur/universites" },
      { name: "Recherche", url: "/enseignement-superieur/recherche" },
      { name: "Innovation", url: "/enseignement-superieur/innovation" },
      { name: "Bourses", url: "/enseignement-superieur/bourses" }
    ]
  },
  {
    name: "Santé et Hygiène Publique",
    shortName: "Santé",
    minister: "Dr Robert Lucien Jean-Claude KARGOUGOu",
    image: "/images/IMG_5202.JPG",
    slug: "sante",
    description: "Santé publique et hygiène",
    functions: [
      "Gestion du système de santé",
      "Promotion de l'hygiène publique",
      "Prévention des maladies",
      "Formation médicale",
      "Gestion des hôpitaux"
    ],
    keyServices: [
      { name: "Hôpitaux et Cliniques", url: "/sante/hopitaux" },
      { name: "Prévention", url: "/sante/prevention" },
      { name: "Hygiène Publique", url: "/sante/hygiene" },
      { name: "Formation Médicale", url: "/sante/formation" }
    ]
  },
  {
    name: "Sports, Jeunesse et Emploi",
    shortName: "Sports et Jeunesse",
    minister: "M. Boubakar SAVADOGO",
    image: "/images/IMG_5203.JPG",
    slug: "sports-jeunesse",
    description: "Développement du sport et de la jeunesse",
    functions: [
      "Promotion du sport",
      "Politique de la jeunesse",
      "Insertion professionnelle",
      "Développement des infrastructures sportives",
      "Soutien aux associations de jeunesse"
    ],
    keyServices: [
      { name: "Sports", url: "/sports-jeunesse/sports" },
      { name: "Jeunesse", url: "/sports-jeunesse/jeunesse" },
      { name: "Emploi des Jeunes", url: "/sports-jeunesse/emploi" },
      { name: "Infrastructures Sportives", url: "/sports-jeunesse/infrastructures" }
    ]
  }
];

export default function MinisteriesIndex() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Accueil</Link>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li className="flex items-center">
            <Link href="/burkina" className="text-blue-600 hover:text-blue-800">Le Burkina</Link>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li className="flex items-center">
            <Link href="/burkina/gouvernement" className="text-blue-600 hover:text-blue-800">Gouvernement</Link>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li>
            <span className="text-gray-500">Ministères</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-8">Ministères du Burkina Faso</h1>

      <div className="grid grid-cols-1 gap-8">
        {ministries.map((ministry) => (
          <div key={ministry.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                href={`/burkina/gouvernement/ministeres/${ministry.slug}`}
                className="group"
              >
                <h2 className="text-2xl font-bold mb-1 group-hover:text-blue-600">
                  Ministère {ministry.name}
                </h2>
                <p className="text-gray-600 text-lg mb-4">{ministry.shortName}</p>
              </Link>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Missions et attributions</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {ministry.functions.map((function_, index) => (
                      <li key={index}>{function_}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Services principaux</h3>
                  <ul className="space-y-2">
                    {ministry.keyServices.map((service, index) => (
                      <li key={index}>
                        <Link 
                          href={service.url}
                          className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          <span className="mr-2">→</span>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Votre avis nous intéresse</h2>
        <p className="mb-4">Cette page vous a-t-elle été utile ?</p>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
            Oui
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Non
          </button>
        </div>
      </div>
    </div>
  );
} 