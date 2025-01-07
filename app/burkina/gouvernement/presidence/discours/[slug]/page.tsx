import Image from 'next/image';
import Link from 'next/link';

interface Speech {
  title: string;
  date: string;
  content: string;
  image: string;
  category: string;
}

type Speeches = {
  [key: string]: Speech;
}

// This would typically come from a database or CMS
const speeches: Speeches = {
  "journees-nationales-engagement-patriotique-2024": {
    title: "JOURNÉES NATIONALES D'ENGAGEMENT PATRIOTIQUE ET DE PARTICIPATION CITOYENNE",
    date: "2 octobre 2024",
    content: `A l'occasion de la deuxième édition des Journées nationales d'engagement patriotique et de participation citoyenne...`,
    image: "/images/president-speech.jpg",
    category: "Engagement Patriotique"
  },
  "message-forces-vives-nation-2024": {
    title: "Message du Président du Faso aux Forces vives de la Nation",
    date: "23 juillet 2024",
    content: `Message aux Forces vives de la Nation, Palais des sports de Ouaga 2 000...`,
    image: "/images/president-speech.jpg",
    category: "Messages à la Nation"
  },
  "discours-sommet-aes-2024": {
    title: "Discours au 1er sommet de l'AES",
    date: "9 juillet 2024",
    content: `Discours de S.E. le Capitaine Ibrahim TRAORE au 1er sommet de l'AES...`,
    image: "/images/president-speech.jpg",
    category: "Relations Internationales"
  },
  "grand-entretien-avril-2024": {
    title: "Grand entretien du Capitaine Ibrahim Traoré",
    date: "3 mai 2024",
    content: `Grand entretien du Capitaine Ibrahim Traoré du 26 avril 2024...`,
    image: "/images/president-speech.jpg",
    category: "Entretiens"
  },
  "message-nouvel-an-2024": {
    title: "Message nouvel an à la nation-2024",
    date: "1 janvier 2024",
    content: `Peuple du Burkina Faso, Camarades combattants pour la liberté, pour la paix, la souveraineté et l'indépendance réelle...`,
    image: "/images/president-speech.jpg",
    category: "Messages à la Nation"
  },
  "message-nation-11-decembre-2023": {
    title: "Message à la Nation - 11 décembre 2023",
    date: "11 décembre 2023",
    content: `Message à la Nation du Président de la Transition, Chef de l'Etat, le Capitaine Ibrahim Traoré, marquant le 63e anniversaire de la proclamation de l'Indépendance...`,
    image: "/images/president-speech.jpg",
    category: "Messages à la Nation"
  },
  "discours-sommet-russie-afrique-2023": {
    title: "Discours au 2è sommet Russie-Afrique",
    date: "28 juillet 2023",
    content: `DISCOURS PRONONCE LE 28 JUILLET 2023 EN RUSSIE A L'OCCASION DU 2E SOMMET RUSSIE-AFRIQUE...`,
    image: "/images/president-speech.jpg",
    category: "Relations Internationales"
  }
};

export default function SpeechPage({ params }: { params: { slug: string } }) {
  const speech = speeches[params.slug];

  if (!speech) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Discours non trouvé</h1>
        <Link href="/burkina/gouvernement/presidence" className="text-blue-600 hover:text-blue-800">
          Retour à la page de la Présidence
        </Link>
      </div>
    );
  }

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
          <li className="flex items-center">
            <Link href="/burkina/gouvernement/presidence" className="text-blue-600 hover:text-blue-800">Présidence</Link>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li>
            <span className="text-gray-500">Discours</span>
          </li>
        </ol>
      </nav>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <Image
            src={speech.image}
            alt={speech.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8">
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {speech.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{speech.title}</h1>
            <p className="text-gray-600">{speech.date}</p>
          </div>
          
          <div className="prose max-w-none">
            <p className="whitespace-pre-line">{speech.content}</p>
          </div>
        </div>
      </article>

      {/* Navigation Section */}
      <div className="mt-8 flex justify-between items-center">
        <Link 
          href="/burkina/gouvernement/presidence#discours"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux discours
        </Link>
        <Link 
          href={`/burkina/gouvernement/presidence#${speech.category.toLowerCase().replace(/ /g, '-')}`}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          Voir tous les {speech.category}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Share Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Partager ce discours</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Facebook
          </button>
          <button className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-500">
            Twitter
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            WhatsApp
          </button>
        </div>
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