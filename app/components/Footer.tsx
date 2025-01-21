'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Composant Footer qui apparaît au bas de chaque page
export default function Footer() {
  // Création d'une variable d'état pour l'année, initialement vide
  const [year, setYear] = useState('');

  // Cet effet s'exécute une fois lors du chargement du composant
  // Il définit l'année actuelle pour la notice de copyright
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  // Configuration des images des organisations avec dimensions ajustées
  const organizations = [
    {
      src: '/images/AES_logo.jpg',
      alt: 'Logo AES',
      width: 90,
      height: 30,
      className: "w-[90px] h-[30px]"
    },
    {
      src: '/images/Burkina_official Flag.png',
      alt: 'Drapeau du Burkina Faso',
      width: 45,
      height: 30,
      className: "w-[45px] h-[30px]"
    },
    {
      src: '/images/African_Union.png',
      alt: 'Logo Union Africaine',
      width: 150,
      height: 30,
      className: "w-[150px] h-[30px]"
    }
  ];

  return (
    <footer className="bg-white text-gray-600 border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Main Links Section */}
        <div className="flex justify-center space-x-6 text-sm mb-8">
          <Link href="/politique-cookies" className="hover:text-primary transition-colors">
            Politique de cookies
          </Link>
          <span>•</span>
          <Link href="/fonction-publique" className="hover:text-primary transition-colors">
            Fonction publique
          </Link>
          <span>•</span>
          <Link href="/profil-confiance" className="hover:text-primary transition-colors">
            Profil de confiance
          </Link>
          <span>•</span>
          <Link href="/bip" className="hover:text-primary transition-colors">
            BIP
          </Link>
          <span>•</span>
          <Link href="/droit-auteur" className="hover:text-primary transition-colors">
            Droit d'auteur
          </Link>
        </div>

        {/* Secondary Links */}
        <div className="flex justify-center space-x-6 text-sm mb-8">
          <Link href="/conditions-utilisation" className="hover:text-primary transition-colors">
            Conditions d'utilisation
          </Link>
          <span>•</span>
          <Link href="/geoportail" className="hover:text-primary transition-colors">
            Géoportail
          </Link>
          <span>•</span>
          <Link href="/declaration-accessibilite" className="hover:text-primary transition-colors">
            Déclaration d'accessibilité
          </Link>
        </div>

        {/* Notice Section */}
        <div className="text-center text-sm text-gray-500 max-w-3xl mx-auto mb-8">
          <p className="mb-4">
            Les pages disponibles dans le domaine www.gov.bf peuvent contenir des adresses e-mail. L'utilisateur utilisant le lien qui est une adresse e-mail accepte le traitement de ses données (adresse e-mail et données fournies volontairement dans le message) afin d'envoyer des réponses aux questions posées.
          </p>
        </div>

        {/* Attribution Section */}
        <div className="flex justify-center items-center space-x-4 text-sm mb-8">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/cc-by.png"
              alt="Creative Commons License"
              width={20}
              height={20}
              quality={100}
            />
            <span>
              Tout le contenu publié sur le site est disponible sous licence Creative Commons - attribution - utilisation non commerciale
            </span>
          </div>
        </div>

        {/* Organizations Section - Miniature Style */}
        <div className="flex justify-center items-center gap-6 mb-8">
          {organizations.map((org, index) => (
            <div key={index} className="relative flex items-center justify-center">
              <Image
                src={org.src}
                alt={org.alt}
                width={org.width}
                height={org.height}
                className={`${org.className} object-contain`}
                priority={true}
                quality={100}
                unoptimized={true}
              />
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>© {year} - Un projet de l'Agence Nationale des Services et Systèmes d'Information (ANSSI)</p>
        </div>
      </div>

      {/* Sitarail Section - Dark Theme */}
      <div className="relative w-full bg-primary text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Base overlay */}
          <div className="absolute inset-0 bg-primary/90" />
          {/* Gradient overlay - stronger on left, fading to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-transparent" 
               style={{ clipPath: 'polygon(0 0, 66% 0, 66% 100%, 0 100%)' }} />
          <Image
            src="/images/Sitarail_bobo.jpg"
            alt="Gare de Sitarail à Bobo-Dioulasso"
            fill
            className="object-cover object-right opacity-25"
            priority
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative z-20">
              <h2 className="text-2xl font-bold mb-6">Toutes les coordonnées</h2>
              <ul className="space-y-3">
                <li><Link href="/contact" className="hover:underline">Emplois</Link></li>
                <li><Link href="/contact" className="hover:underline">Immigration et citoyenneté</Link></li>
                <li><Link href="/contact" className="hover:underline">Voyage et tourisme</Link></li>
                <li><Link href="/contact" className="hover:underline">Entreprises</Link></li>
                <li><Link href="/contact" className="hover:underline">Prestations</Link></li>
              </ul>
            </div>
            <div className="relative z-20">
              <h2 className="text-2xl font-bold mb-6">Ministères et organismes</h2>
              <ul className="space-y-3">
                <li><Link href="/contact" className="hover:underline">Impôts</Link></li>
                <li><Link href="/contact" className="hover:underline">Environnement et ressources naturelles</Link></li>
                <li><Link href="/contact" className="hover:underline">Défense nationale et Forces armées</Link></li>
                <li><Link href="/contact" className="hover:underline">Culture et sport</Link></li>
                <li><Link href="/contact" className="hover:underline">Services de police et urgences</Link></li>
              </ul>
            </div>
            <div className="relative z-20">
              <h2 className="text-2xl font-bold mb-6">À propos du gouvernement</h2>
              <ul className="space-y-3">
                <li><Link href="/contact" className="hover:underline">Le Burkina et le monde</Link></li>
                <li><Link href="/contact" className="hover:underline">Argent et finances</Link></li>
                <li><Link href="/contact" className="hover:underline">Science et innovation</Link></li>
                <li><Link href="/contact" className="hover:underline">Autochtones</Link></li>
                <li><Link href="/contact" className="hover:underline">Vétérans et militaires</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 