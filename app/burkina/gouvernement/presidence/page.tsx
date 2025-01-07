import Image from 'next/image';
import Link from 'next/link';

const speeches = [
  {
    title: "JOURNÉES NATIONALES D'ENGAGEMENT PATRIOTIQUE ET DE PARTICIPATION CITOYENNE",
    description: "A l'occasion de la deuxième édition des Journées nationales d'engagement patriotique et de participation citoyenne",
    date: "2 octobre 2024",
    slug: "journees-nationales-engagement-patriotique-2024",
    category: "Engagement Patriotique"
  },
  {
    title: "Message du Président du Faso aux Forces vives de la Nation",
    description: "Message aux Forces vives de la Nation, Palais des sports de Ouaga 2 000",
    date: "23 juillet 2024",
    slug: "message-forces-vives-nation-2024",
    category: "Messages à la Nation"
  },
  {
    title: "Discours au 1er sommet de l'AES",
    description: "Discours de S.E. le Capitaine Ibrahim TRAORE au 1er sommet de l'AES",
    date: "9 juillet 2024",
    slug: "discours-sommet-aes-2024",
    category: "Relations Internationales"
  },
  {
    title: "Grand entretien du Capitaine Ibrahim Traoré",
    description: "Grand entretien du Capitaine Ibrahim Traoré du 26 avril 2024",
    date: "3 mai 2024",
    slug: "grand-entretien-avril-2024",
    category: "Entretiens"
  },
  {
    title: "Message nouvel an à la nation-2024",
    description: "Peuple du Burkina Faso, Camarades combattants pour la liberté, pour la paix, la souveraineté et l'indépendance réelle",
    date: "1 janvier 2024",
    slug: "message-nouvel-an-2024",
    category: "Messages à la Nation"
  },
  {
    title: "Message à la Nation - 11 décembre 2023",
    description: "Message à la Nation du Président de la Transition, Chef de l'Etat, le Capitaine Ibrahim Traoré, marquant le 63e anniversaire de la proclamation de l'Indépendance",
    date: "11 décembre 2023",
    slug: "message-nation-11-decembre-2023",
    category: "Messages à la Nation"
  },
  {
    title: "Discours au 2è sommet Russie-Afrique",
    description: "DISCOURS PRONONCE LE 28 JUILLET 2023 EN RUSSIE A L'OCCASION DU 2E SOMMET RUSSIE-AFRIQUE",
    date: "28 juillet 2023",
    slug: "discours-sommet-russie-afrique-2023",
    category: "Relations Internationales"
  },
  {
    title: "Message à la Nation - 31 décembre 2022",
    description: "Message à la Nation du Président de la Transition, Chef de l'Etat, le Capitaine Ibrahim Traoré",
    date: "31 décembre 2022",
    slug: "message-nation-31-decembre-2022",
    category: "Messages à la Nation"
  },
  {
    title: "Message à la Nation - 11 décembre 2022",
    description: "Message à la Nation du Président de la Transition, Chef de l'Etat, le Capitaine Ibrahim Traoré, marquant le 62e anniversaire de l'indépendance",
    date: "11 décembre 2022",
    slug: "message-nation-11-decembre-2022",
    category: "Messages à la Nation"
  }
];

// Grouper les discours par catégorie
const groupedSpeeches = speeches.reduce((acc, speech) => {
  if (!acc[speech.category]) {
    acc[speech.category] = [];
  }
  acc[speech.category].push(speech);
  return acc;
}, {} as { [key: string]: typeof speeches });

const timeline = [
  {
    date: "30 septembre 2022",
    title: "Accession à la Présidence",
    description: "Devient Président de la Transition du Burkina Faso"
  },
  {
    date: "14 octobre 2022",
    title: "Confirmation constitutionnelle",
    description: "Désignation officielle comme Président de la Transition"
  },
  {
    date: "21 octobre 2022",
    title: "Formation du gouvernement",
    description: "Constitution du premier gouvernement de la Transition"
  },
  {
    date: "1 novembre 2022",
    title: "Initiative de recrutement",
    description: "Lancement du recrutement de 50 000 Volontaires pour la Défense de la Patrie (VDP)"
  }
];

const achievements = [
  {
    title: "Sécurité nationale",
    description: "Reconquête de plus de 80% du territoire national"
  },
  {
    title: "Défense populaire",
    description: "Recrutement et formation de plus de 50 000 VDP"
  },
  {
    title: "Souveraineté alimentaire",
    description: "Lancement du programme de développement agricole"
  },
  {
    title: "Infrastructure",
    description: "Réhabilitation des axes routiers stratégiques"
  },
  {
    title: "Diplomatie",
    description: "Renforcement des partenariats internationaux"
  },
  {
    title: "Économie minière",
    description: "Création de la compagnie nationale des mines"
  }
];

export default function PresidencePage() {
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
            <span className="text-gray-500">Présidence</span>
          </li>
        </ol>
      </nav>

      {/* President Profile Section - Redesigned */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/President Ibrahim Traore.png"
              alt="S.E. le Capitaine Ibrahim TRAORÉ"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h1 className="text-3xl font-bold text-white mb-2">S.E. Capitaine Ibrahim TRAORÉ</h1>
              <p className="text-xl text-white/90">Président de la Transition, Chef de l'État</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Biographie</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Le Capitaine Ibrahim TRAORÉ est devenu le Président de la Transition du Burkina Faso le 30 septembre 2022. 
                  En tant que Chef de l'État, il dirige le pays dans une période cruciale de son histoire, œuvrant pour la restauration 
                  de l'intégrité territoriale et le renforcement de la souveraineté nationale.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Formation et Carrière Militaire</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Formation militaire à l'Académie militaire Georges Namoano</li>
                  <li>Spécialisation en artillerie</li>
                  <li>Service dans plusieurs régions du Burkina Faso</li>
                  <li>Engagement actif dans la lutte contre le terrorisme</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Vision pour le Burkina Faso</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Restauration de l'intégrité territoriale</li>
                  <li>Renforcement de la souveraineté nationale</li>
                  <li>Développement économique et social</li>
                  <li>Modernisation des forces de défense et de sécurité</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section - Simplified */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-8">Parcours du Président</h2>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {item.date}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section - Simplified */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-8">Réalisations Majeures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6">Accès Rapide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.keys(groupedSpeeches).map((category) => (
            <Link 
              key={category}
              href={`#${category.toLowerCase().replace(/ /g, '-')}`}
              className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">{category}</h3>
              <p className="text-sm text-gray-600">{groupedSpeeches[category].length} discours</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Speeches Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Discours et Messages du Président</h2>
        {Object.entries(groupedSpeeches).map(([category, categorySpeeches]) => (
          <div key={category} id={category.toLowerCase().replace(/ /g, '-')} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">{category}</h3>
            <div className="grid gap-6">
              {categorySpeeches.map((speech) => (
                <Link 
                  key={speech.slug}
                  href={`/burkina/gouvernement/presidence/discours/${speech.slug}`}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600">
                          {speech.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{speech.description}</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                        {speech.date}
                      </span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <span>Lire le discours</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

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