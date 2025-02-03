'use client';

import { useEffect } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Ministers page error:', error);
    }, [error]);

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center px-4">
                <ExclamationTriangleIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Une erreur s'est produite
                </h1>
                <p className="text-gray-600 mb-6">
                    Nous n'avons pas pu charger la liste des ministres. Veuillez réessayer plus tard.
                </p>
                <button
                    onClick={reset}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Réessayer
                </button>
            </div>
        </main>
    );
} 