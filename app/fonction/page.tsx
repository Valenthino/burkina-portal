'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonction', href: '/fonction' }
];

export default function FonctionPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Fonction Publique
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
            <p className="mb-4">
              Bienvenue sur le portail de la Fonction Publique du Burkina Faso. 
              Retrouvez ici toutes les informations concernant les concours, 
              les carrières, l'administration et les services en ligne.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Actualité :</strong> Les inscriptions aux concours directs 
                session 2024 sont ouvertes du 15 février au 15 mars 2024.
              </p>
            </div>
          </div>

          {/* Services principaux - Carrière */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Carrière</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/fonction-publique/carriere/concours" 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Concours de la fonction publique</h3>
                <p className="text-gray-600">Calendrier et inscription aux concours administratifs</p>
              </Link>

              <Link href="/fonction-publique/carriere/recrutements"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Recrutements directs</h3>
                <p className="text-gray-600">Offres de recrutement sans concours</p>
              </Link>

              <Link href="/fonction-publique/carriere/avancements"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Avancements</h3>
                <p className="text-gray-600">Procédures et conditions d'avancement</p>
              </Link>

              <Link href="/fonction-publique/carriere/mutations"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Mutations</h3>
                <p className="text-gray-600">Demandes et procédures de mutation</p>
              </Link>
            </div>
          </div>

          {/* Services principaux - Formation */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Formation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/fonction-publique/formation/continue"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Formation continue</h3>
                <p className="text-gray-600">Programmes de perfectionnement professionnel</p>
              </Link>

              <Link href="/fonction-publique/formation/ecoles"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Écoles de formation</h3>
                <p className="text-gray-600">Établissements de formation administrative</p>
              </Link>

              <Link href="/fonction-publique/formation/stages"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Stages</h3>
                <p className="text-gray-600">Opportunités de stage dans l'administration</p>
              </Link>

              <Link href="/fonction-publique/formation/examens"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Examens professionnels</h3>
                <p className="text-gray-600">Préparation aux examens de qualification</p>
              </Link>
            </div>
          </div>

          {/* Services principaux - Administration */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Administration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/fonction-publique/administration/statut"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Statut général</h3>
                <p className="text-gray-600">Droits et obligations des fonctionnaires</p>
              </Link>

              <Link href="/fonction-publique/administration/remuneration"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Rémunération</h3>
                <p className="text-gray-600">Grilles salariales et primes</p>
              </Link>

              <Link href="/fonction-publique/administration/conges"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Congés et absences</h3>
                <p className="text-gray-600">Gestion des congés administratifs</p>
              </Link>

              <Link href="/fonction-publique/administration/retraite"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Retraite</h3>
                <p className="text-gray-600">Préparation et gestion de la retraite</p>
              </Link>
            </div>
          </div>

          {/* Services principaux - Services en ligne */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Services en ligne</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/fonction-publique/services/espace-agent"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Espace agent</h3>
                <p className="text-gray-600">Accès personnel aux services administratifs</p>
              </Link>

              <Link href="/fonction-publique/services/documents"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Documents administratifs</h3>
                <p className="text-gray-600">Téléchargement de formulaires officiels</p>
              </Link>

              <Link href="/fonction-publique/services/reclamations"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Réclamations</h3>
                <p className="text-gray-600">Suivi des demandes et réclamations</p>
              </Link>

              <Link href="/fonction-publique/services/assistance"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Assistance en ligne</h3>
                <p className="text-gray-600">Support et aide aux démarches</p>
              </Link>
            </div>
          </div>

          {/* Ministère responsable */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ministère de Tutelle</h2>
            <div className="space-y-4">
              <p>
                La Fonction Publique est sous la tutelle du Ministère de la Fonction 
                Publique, du Travail et de la Protection Sociale.
              </p>
              <div className="flex justify-start">
                <Link 
                  href="/burkina/gouvernement/ministeres/fonction-publique" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Voir les détails du ministère
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Actualités */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Actualités</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Concours directs 2024</h3>
                <p className="text-gray-600">Ouverture des inscriptions aux concours directs session 2024.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Réforme administrative</h3>
                <p className="text-gray-600">Modernisation des services et digitalisation des procédures.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">Formation continue</h3>
                <p className="text-gray-600">Nouveau programme de renforcement des capacités des agents.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Cette page vous a-t-elle été utile ?</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">
              Oui
            </button>
            <button className="bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700">
              Non
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </main>
  );
} 