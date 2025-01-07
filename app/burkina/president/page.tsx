import Image from 'next/image';
import Link from 'next/link';

const speeches = [
  {
    title: "JOURNÉES NATIONALES D'ENGAGEMENT PATRIOTIQUE ET DE PARTICIPATION CITOYENNE",
    description: "A l'occasion de la deuxième édition des Journées nationales d'engagement patriotique et de participation citoyenne",
    date: "2 octobre 2024",
    slug: "journees-nationales-engagement-patriotique-2024"
  },
  {
    title: "Message du Président du Faso aux Forces vives de la Nation",
    description: "Message aux Forces vives de la Nation, Palais des sports de Ouaga 2 000",
    date: "23 juillet 2024",
    slug: "message-forces-vives-nation-2024"
  },
  {
    title: "Discours au 1er sommet de l'AES",
    description: "Discours de S.E. le Capitaine Ibrahim TRAORE au 1er sommet de l'AES",
    date: "9 juillet 2024",
    slug: "discours-sommet-aes-2024"
  },
  {
    title: "Grand entretien du Capitaine Ibrahim Traoré",
    description: "Grand entretien du Capitaine Ibrahim Traoré du 26 avril 2024",
    date: "3 mai 2024",
    slug: "grand-entretien-avril-2024"
  },
  {
    title: "Message nouvel an à la nation-2024",
    description: "Peuple du Burkina Faso, Camarades combattants pour la liberté, pour la paix, la souveraineté et l'indépendance réelle",
    date: "1 janvier 2024",
    slug: "message-nouvel-an-2024"
  },
  {
    title: "Message à la Nation - 11 décembre 2023",
    description: "Message à la Nation du Président de la Transition, Chef de l'Etat, le Capitaine Ibrahim Traoré, marquant le 63e anniversaire de la proclamation de l'Indépendance",
    date: "11 décembre 2023",
    slug: "message-nation-11-decembre-2023"
  },
  {
    title: "Discours au 2è sommet Russie-Afrique",
    description: "DISCOURS PRONONCE LE 28 JUILLET 2023 EN RUSSIE A L'OCCASION DU 2E SOMMET RUSSIE-AFRIQUE",
    date: "28 juillet 2023",
    slug: "discours-sommet-russie-afrique-2023"
  },
  {
    title: "Message à la Nation - 31 décembre 2022",
    description: "Message à la Nation du Président de la Transition, Chef de l'Etat, le Capitaine Ibrahim Traoré",
    date: "31 décembre 2022",
    slug: "message-nation-31-decembre-2022"
  },
  {
    title: "Message à la Nation - 11 décembre 2022",
    description: "Message à la Nation du Président de la Transition, Chef de l'Etat, le Capitaine Ibrahim Traoré, marquant le 62e anniversaire de l'indépendance",
    date: "11 décembre 2022",
    slug: "message-nation-11-decembre-2022"
  }
];

export default function PresidentPage() {
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
          <li>
            <span className="text-gray-500">Le Président</span>
          </li>
        </ol>
      </nav>

      {/* President Profile Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="relative h-96 bg-gray-100">
          <Image
            src="/images/president-banner.jpg"
            alt="Le Président du Faso"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">S.E. Capitaine Ibrahim TRAORE</h1>
          <p className="text-xl text-gray-600 mb-6">Président de la Transition, Chef de l'État</p>
          <div className="prose max-w-none">
            <p className="mb-4">
              Le Capitaine Ibrahim TRAORE est le Président de la Transition du Burkina Faso depuis le 30 septembre 2022. 
              En tant que Chef de l'État, il œuvre pour la sécurité, la souveraineté et le développement du pays.
            </p>
          </div>
        </div>
      </div>

      {/* Speeches Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Discours du Président</h2>
        <div className="grid gap-6">
          {speeches.map((speech) => (
            <Link 
              key={speech.slug}
              href={`/burkina/president/discours/${speech.slug}`}
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