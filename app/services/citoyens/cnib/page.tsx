'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

const formSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  motherName: z.string().min(2, 'Le nom de la mère doit contenir au moins 2 caractères'),
  fatherName: z.string().min(2, 'Le nom du père doit contenir au moins 2 caractères'),
  birthDate: z.string(),
  birthPlace: z.string().min(2, 'Le lieu de naissance est requis'),
  nationality: z.string().min(2, 'La nationalité est requise'),
  profession: z.string().min(2, 'La profession est requise'),
  address: z.string().min(5, 'L\'adresse doit contenir au moins 5 caractères'),
  phone: z.string().min(8, 'Le numéro de téléphone est requis'),
  email: z.string().email('Email invalide'),
  gender: z.enum(['M', 'F']),
});

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Services aux Citoyens', href: '/services/citoyens' },
  { label: 'CNIB', href: '/services/citoyens/cnib' }
];

export default function CNIBApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      motherName: '',
      fatherName: '',
      birthDate: '',
      birthPlace: '',
      nationality: '',
      profession: '',
      address: '',
      phone: '',
      email: '',
      gender: 'M',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/cnib/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la soumission');
      }

      setSubmitSuccess(true);
      // Redirect to success page or show success message
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-4xl font-bold">
            Carte Nationale d'Identité Burkinabè (CNIB)
          </h1>
        </div>

        {/* New CTA Section */}
        <div className="bg-blue-50 p-8 rounded-lg mb-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Faites votre demande de CNIB en ligne
          </h2>
          <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
            Initiez votre demande de CNIB en ligne et gagnez du temps. 
            Après la soumission, vous recevrez un récépissé avec un code QR 
            à présenter lors de votre visite au centre d'établissement.
          </p>
          <Link href="/services/citoyens/cnib/apply">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Commencer ma demande
            </Button>
          </Link>
        </div>

        <div className="prose max-w-none mb-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">À propos de la CNIB</h2>
            <p className="mb-4">
              La Carte Nationale d'Identité Burkinabè (CNIB) est le document officiel 
              d'identification des citoyens du Burkina Faso. Elle est obligatoire pour 
              toute personne âgée de 15 ans et plus.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> La nouvelle CNIB biométrique est désormais 
                le standard. Les anciennes cartes restent valables jusqu'à leur date 
                d'expiration.
              </p>
            </div>
          </div>

          {/* Procédure de demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Procédure de Demande</h2>

            <h3 className="text-xl font-semibold mb-4">Documents Requis</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Extrait d'acte de naissance ou jugement supplétif</li>
              <li>Certificat de nationalité burkinabè</li>
              <li>Certificat de résidence</li>
              <li>Deux (02) photos d'identité récentes</li>
              <li>Timbre fiscal de 1000 FCFA</li>
              <li>Ancienne CNIB (en cas de renouvellement)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Étapes de la Demande</h3>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-3">Rassemblez tous les documents requis</li>
              <li className="mb-3">Rendez-vous au centre d'établissement le plus proche</li>
              <li className="mb-3">Remplissez le formulaire de demande</li>
              <li className="mb-3">Effectuez la prise de photos et d'empreintes digitales</li>
              <li className="mb-3">Payez les frais d'établissement</li>
              <li>Récupérez votre CNIB dans les délais indiqués</li>
            </ol>
          </div>

          {/* Centres d'établissement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Centres d'Établissement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ouagadougou</h3>
                <ul className="list-disc pl-6">
                  <li>Centre principal - Ouaga 2000</li>
                  <li>Annexe de Gounghin</li>
                  <li>Annexe de Pissy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bobo-Dioulasso</h3>
                <ul className="list-disc pl-6">
                  <li>Centre principal - Centre-ville</li>
                  <li>Annexe de Dafra</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Des centres d'établissement sont également disponibles dans tous les 
              chefs-lieux de province.
            </p>
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
                    <td className="px-6 py-4">5 000 FCFA</td>
                    <td className="px-6 py-4">10 000 FCFA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Renouvellement</td>
                    <td className="px-6 py-4">5 000 FCFA</td>
                    <td className="px-6 py-4">10 000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Duplicata</td>
                    <td className="px-6 py-4">10 000 FCFA</td>
                    <td className="px-6 py-4">15 000 FCFA</td>
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
                <h3 className="font-semibold">Quelle est la durée de validité de la CNIB ?</h3>
                <p className="text-gray-600">La CNIB est valable pour une durée de 10 ans.</p>
              </div>
              <div>
                <h3 className="font-semibold">Quel est le délai d'obtention ?</h3>
                <p className="text-gray-600">
                  - Procédure normale : 1 à 2 mois<br />
                  - Procédure accélérée : 1 à 2 semaines
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
                  Email : cnib@citoyens.gov.bf
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