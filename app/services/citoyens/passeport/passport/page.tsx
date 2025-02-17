'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';
import { FileText, RefreshCw } from 'lucide-react';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Passeport', href: '/services/citoyens/passport' }
];

export default function PassportPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-4xl font-bold">
            Passeport Burkinabè
          </h1>
        </div>

        {/* New CTA Section */}
        <div className="bg-blue-50 p-8 rounded-lg mb-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Demandez votre passeport en ligne
          </h2>
          <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
            Initiez votre demande de passeport en ligne et gagnez du temps. 
            Après la soumission, vous recevrez un récépissé avec un code QR 
            à présenter lors de votre visite au centre d'établissement.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/auth?service=passport&redirect=/services/citoyens/passport/apply">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <FileText className="mr-2 h-5 w-5" />
                Nouvelle Demande
              </Button>
            </Link>
            <Link href="/auth?service=passport&redirect=/services/citoyens/passport/renew">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <RefreshCw className="mr-2 h-5 w-5" />
                Renouvellement
              </Button>
            </Link>
          </div>
        </div>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">À propos du Passeport</h2>
            <p className="mb-4">
              Le passeport burkinabè est un document de voyage officiel qui permet aux citoyens 
              du Burkina Faso de voyager à l'international. Il est biométrique et répond aux 
              normes internationales de l'OACI.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Le passeport biométrique est désormais 
                le standard. Les anciens passeports restent valables jusqu'à leur date 
                d'expiration.
              </p>
            </div>
          </div>

          {/* Procédure de demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Documents Requis</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Première Demande</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CNIB ou carte consulaire en cours de validité</li>
                  <li>Extrait d'acte de naissance</li>
                  <li>Certificat de nationalité burkinabè</li>
                  <li>Certificat de résidence</li>
                  <li>Quatre (04) photos d'identité récentes</li>
                  <li>Timbre fiscal</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Renouvellement</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ancien passeport</li>
                  <li>CNIB en cours de validité</li>
                  <li>Deux (02) photos d'identité récentes</li>
                  <li>Timbre fiscal</li>
                  <li>Justificatif de voyage (facultatif pour procédure accélérée)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarifs */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tarifs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left">Type de demande</th>
                    <th className="px-6 py-3 text-left">Délai normal</th>
                    <th className="px-6 py-3 text-left">Procédure accélérée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4">Première demande</td>
                    <td className="px-6 py-4">50 000 FCFA</td>
                    <td className="px-6 py-4">100 000 FCFA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Renouvellement</td>
                    <td className="px-6 py-4">50 000 FCFA</td>
                    <td className="px-6 py-4">100 000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Remplacement (perte/vol)</td>
                    <td className="px-6 py-4">75 000 FCFA</td>
                    <td className="px-6 py-4">150 000 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Quelle est la durée de validité du passeport ?</h3>
                <p className="text-gray-600">Le passeport est valable pour une durée de 5 ans.</p>
              </div>
              <div>
                <h3 className="font-semibold">Quel est le délai d'obtention ?</h3>
                <p className="text-gray-600">
                  - Procédure normale : 2 à 3 semaines<br />
                  - Procédure accélérée : 3 à 5 jours ouvrables
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Peut-on faire la demande en ligne ?</h3>
                <p className="text-gray-600">
                  Oui, vous pouvez désormais initier votre demande en ligne. Cependant, 
                  une visite au centre d'établissement sera nécessaire pour la prise des 
                  données biométriques.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact et Assistance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Service d'assistance</h3>
                <p className="text-gray-600">
                  Numéro vert : 80 00 11 11<br />
                  Email : passeport@citoyens.gov.bf
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horaires d'ouverture</h3>
                <p className="text-gray-600">
                  Du lundi au vendredi<br />
                  7h30 - 12h30 et 15h00 - 17h30
                </p>
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