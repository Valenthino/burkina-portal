'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';
import { FileText, RefreshCw, Clock, AlertTriangle, AlertCircle } from 'lucide-react';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'Passeport', href: '/services/citoyens/passeport' }
];

export default function PasseportPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1a5653] text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Passeport AES
            </h1>
            <p className="text-xl mb-8">
              Passeport biométrique de la Confédération des États du Sahel
            </p>
            <div className="flex gap-4">
              <Link href="/auth?service=passeport&redirect=/services/citoyens/passeport/demande">
                <Button 
                  size="lg" 
                  className="bg-white text-[#1a5653] hover:bg-gray-100 border-2 border-white hover:border-gray-100"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Nouvelle Demande
                </Button>
              </Link>
              <Link href="/auth?service=passeport&redirect=/services/citoyens/passeport/renouvellement">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a5653]"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Renouvellement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-12">
          <div className="flex items-start">
            <AlertTriangle className="text-yellow-400 w-6 h-6 mt-1 mr-4" />
            <div>
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                Information importante
              </h2>
              <p className="text-yellow-700">
                À partir du 29 janvier 2025, le nouveau passeport biométrique AES (Alliance des États du Sahel) remplacera l'ancien passeport CEDEAO. Cette transition fait suite à la sortie du Burkina Faso de la CEDEAO et à son intégration dans l'AES avec le Mali et le Niger.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Validity Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Clock className="w-5 h-5 mr-2 text-[#1a5653]" />
                Validité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Passeport ordinaire : 5 ans</li>
                <li>• Passeport diplomatique : durée de la mission</li>
                <li>• Passeport de service : durée de la mission</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cost Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileText className="w-5 h-5 mr-2 text-[#1a5653]" />
                Coût
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Procédure normale : 50.000 FCFA</li>
                <li>• Procédure accélérée : 100.000 FCFA</li>
                <li>• Duplicata : 75.000 FCFA</li>
              </ul>
            </CardContent>
          </Card>

          {/* Processing Time Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Clock className="w-5 h-5 mr-2 text-[#1a5653]" />
                Délais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Procédure normale : 1 mois</li>
                <li>• Procédure accélérée : 1 semaine</li>
                <li>• Cas d'urgence : 72 heures</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Required Documents Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Documents requis</CardTitle>
            <CardDescription>Documents nécessaires pour votre demande de passeport</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Première demande</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>CNIB ou carte d'identité nationale en cours de validité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>Extrait d'acte de naissance original</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>Certificat de nationalité burkinabè</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>Certificat de résidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>4 photos d'identité récentes sur fond blanc</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>Reçu de paiement des frais</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Renouvellement</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>Ancien passeport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>CNIB en cours de validité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>2 photos d'identité récentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a5653] mt-1">•</span>
                    <span>Reçu de paiement des frais</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Procédure de demande</CardTitle>
            <CardDescription>Les étapes à suivre pour obtenir votre passeport</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1a5653] text-white flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Prise de rendez-vous</h3>
                  <p className="text-gray-600">Prenez rendez-vous en ligne ou auprès d'un centre d'enrôlement</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1a5653] text-white flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Préparation du dossier</h3>
                  <p className="text-gray-600">Rassemblez tous les documents requis selon votre situation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1a5653] text-white flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Enrôlement biométrique</h3>
                  <p className="text-gray-600">Présentez-vous au centre d'enrôlement avec votre dossier complet pour la capture des données biométriques</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1a5653] text-white flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Retrait du passeport</h3>
                  <p className="text-gray-600">Retirez votre passeport au centre d'enrôlement après le délai de traitement</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Start Application CTA */}
        <div className="mt-12 text-center bg-gray-50 py-12 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-gray-600 mb-6">
            Initiez votre demande de passeport en ligne et gagnez du temps
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/auth?service=passeport&redirect=/services/citoyens/passeport/demande">
              <Button 
                size="lg" 
                className="bg-[#1a5653] hover:bg-[#134240] text-white border-2 border-[#1a5653]"
              >
                <FileText className="mr-2 h-5 w-5" />
                Nouvelle Demande
              </Button>
            </Link>
            <Link href="/auth?service=passeport&redirect=/services/citoyens/passeport/renouvellement">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#1a5653] text-[#1a5653] hover:bg-[#1a5653] hover:text-white"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Renouvellement
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Section with updated styling */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Besoin d'aide ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-[#1a5653]">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Tél : +226 25 30 63 25</li>
                <li>Email : passeports@securite.gov.bf</li>
                <li>Horaires : 7h30 - 12h30 et 15h00 - 17h30</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#1a5653]">Centres d'enrôlement</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Direction de la Police des Frontières - Ouagadougou</li>
                <li>• Direction Régionale de la Police - Bobo-Dioulasso</li>
                <li>• Centres provinciaux (voir la liste complète)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 