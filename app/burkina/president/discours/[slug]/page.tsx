import Image from 'next/image';
import Link from 'next/link';

interface Speech {
  title: string;
  date: string;
  content: string;
  image: string;
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
    image: "/images/president-speech.jpg"
  },
  "message-forces-vives-nation-2024": {
    title: "Message du Président du Faso aux Forces vives de la Nation",
    date: "23 juillet 2024",
    content: `Message aux Forces vives de la Nation, Palais des sports de Ouaga 2 000...`,
    image: "/images/president-speech.jpg"
  },
  // Add other speeches here
};

export default function SpeechPage({ params }: { params: { slug: string } }) {
  const speech = speeches[params.slug];

  if (!speech) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Discours non trouvé</h1>
        <Link href="/burkina/president" className="text-blue-600 hover:text-blue-800">
          Retour à la page du Président
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
            <Link href="/burkina/president" className="text-blue-600 hover:text-blue-800">Le Président</Link>
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
            <h1 className="text-4xl font-bold mb-4">{speech.title}</h1>
            <p className="text-gray-600">{speech.date}</p>
          </div>
          
          <div className="prose max-w-none">
            <p className="whitespace-pre-line">{speech.content}</p>
          </div>
        </div>
      </article>

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