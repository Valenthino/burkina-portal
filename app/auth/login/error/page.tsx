'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function LoginErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const service = searchParams.get('service') || 'cnib';
  
  // Traduire les messages d'erreur
  const getErrorMessage = (errorCode: string | null) => {
    switch(errorCode) {
      case 'invalid_credentials':
        return 'Identifiants invalides. Veuillez vérifier votre email et mot de passe.';
      case 'email_not_confirmed':
        return 'Votre email n\'a pas été confirmé. Veuillez vérifier votre boîte de réception.';
      case 'session_expired':
        return 'Votre session a expiré. Veuillez vous reconnecter.';
      case 'service_mismatch':
        return 'Vous tentez d\'accéder à un service différent. Veuillez vous reconnecter.';
      default:
        return 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Erreur de connexion
          </h2>
          <div className="mt-4 bg-red-50 text-red-600 p-4 rounded-md">
            {getErrorMessage(error)}
          </div>
        </div>

        <div className="flex flex-col space-y-4 items-center">
          <Link
            href={`/auth/login?service=${service}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Réessayer
          </Link>
          
          <Link
            href="/"
            className="text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}