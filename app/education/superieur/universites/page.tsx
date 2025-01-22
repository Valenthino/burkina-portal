'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Éducation', href: '/education' },
  { label: 'Enseignement Supérieur', href: '/education/superieur' },
  { label: 'Universités', href: '/education/superieur/universites' }
];

export default function UniversitesPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">
          Universités au Burkina Faso
        </h1>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Présentation Générale</h2>
            <p className="mb-4">
              Le Burkina Faso dispose d'un réseau d'établissements d'enseignement supérieur 
              comprenant des universités publiques et privées. Ces institutions offrent une 
              formation de qualité dans divers domaines d'études.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> L'année universitaire 2024-2025 débutera 
                le 1er octobre 2024. Les inscriptions seront ouvertes à partir du 1er juillet 2024.
              </p>
            </div>
          </div>

          {/* Universités publiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Universités Publiques</h2>
            <div className="space-y-6">
              {/* Université Joseph Ki-Zerbo */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Université Joseph Ki-Zerbo (UJKZ)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations générales</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Localisation : Ouagadougou</li>
                      <li>Année de création : 1974</li>
                      <li>Capacité : 60 000 étudiants</li>
                      <li>Site web : www.ujkz.bf</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Domaines d'études</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Sciences et Technologies</li>
                      <li>Sciences de la Santé</li>
                      <li>Sciences Humaines et Sociales</li>
                      <li>Sciences Économiques et Gestion</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Université Nazi Boni */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Université Nazi Boni (UNB)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations générales</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Localisation : Bobo-Dioulasso</li>
                      <li>Année de création : 1995</li>
                      <li>Capacité : 20 000 étudiants</li>
                      <li>Site web : www.unb.bf</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Domaines d'études</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Sciences Agronomiques</li>
                      <li>Sciences de la Santé</li>
                      <li>Sciences Techniques</li>
                      <li>Sciences Économiques</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Université de Fada N'Gourma */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Université de Fada N'Gourma</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations générales</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Localisation : Fada N'Gourma</li>
                      <li>Année de création : 2018</li>
                      <li>Capacité : 5 000 étudiants</li>
                      <li>Site web : www.ufg.bf</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Domaines d'études</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Sciences et Technologies</li>
                      <li>Agriculture et Élevage</li>
                      <li>Environnement</li>
                      <li>Énergies Renouvelables</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Universités privées */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Universités Privées</h2>
            <div className="space-y-6">
              {/* Université Saint Thomas d'Aquin */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Université Saint Thomas d'Aquin (USTA)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations générales</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Localisation : Ouagadougou</li>
                      <li>Année de création : 2004</li>
                      <li>Statut : Privé catholique</li>
                      <li>Site web : www.usta.bf</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Domaines d'études</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Sciences de la Santé</li>
                      <li>Sciences Juridiques</li>
                      <li>Sciences Économiques</li>
                      <li>Sciences de l'Éducation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Université Aube Nouvelle */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Université Aube Nouvelle</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations générales</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Localisation : Ouagadougou</li>
                      <li>Année de création : 2000</li>
                      <li>Statut : Privé</li>
                      <li>Site web : www.u-aubenouvelle.org</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Domaines d'études</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Management et Gestion</li>
                      <li>Informatique</li>
                      <li>Communication</li>
                      <li>Relations Internationales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Chiffres Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">Universités publiques</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Universités privées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100 000+</div>
                <div className="text-sm text-gray-600">Étudiants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2 000+</div>
                <div className="text-sm text-gray-600">Enseignants-chercheurs</div>
              </div>
            </div>
          </div>

          {/* Procédures d'admission */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Procédures d'Admission</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Conditions générales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Baccalauréat ou équivalent requis</li>
                <li>Dossier de candidature complet</li>
                <li>Respect des délais d'inscription</li>
                <li>Paiement des frais d'inscription</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Documents requis</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copie légalisée du baccalauréat</li>
                <li>Relevés de notes des trois dernières années</li>
                <li>Acte de naissance</li>
                <li>Certificat de nationalité</li>
                <li>Photos d'identité</li>
              </ul>
            </div>
          </div>

          {/* Points d'attention */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Points d'attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vérifier l'accréditation des établissements</li>
              <li>Respecter les dates limites d'inscription</li>
              <li>S'informer sur les conditions d'hébergement</li>
              <li>Se renseigner sur les bourses disponibles</li>
              <li>Participer aux journées portes ouvertes</li>
            </ul>
          </div>
        </div>

        {/* Voir aussi */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Voir aussi</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/education/superieur/filieres" className="text-blue-600 hover:underline">
                Filières d'études
              </Link>
            </li>
            <li>
              <Link href="/education/superieur/inscription" className="text-blue-600 hover:underline">
                Procédures d'inscription
              </Link>
            </li>
            <li>
              <Link href="/education/superieur/vie-etudiante" className="text-blue-600 hover:underline">
                Vie étudiante
              </Link>
            </li>
          </ul>
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