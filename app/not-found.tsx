'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h1>
      <p className="text-xl text-gray-600 mb-8">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-vert-bf text-white rounded-lg hover:bg-opacity-90 transition-colors"
      >
        Retour à l'accueil
      </Link>
    </main>
  );
} 