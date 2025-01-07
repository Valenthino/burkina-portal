'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Retour à l'accueil | Back to Home
          </Link>
          <Link
            href="/services/index-a-z"
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            Index A-Z
          </Link>
        </div>
      </div>
    </div>
  );
} 