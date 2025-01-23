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
      width: 150,
      height: 50,
      className: "w-[150px] h-[50px]"
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
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Main Links Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 text-sm mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <Link href="/politique-cookies" className="hover:text-primary transition-colors">
            Politique de cookies
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="/fonction-publique" className="hover:text-primary transition-colors">
            Fonction publique
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="/profil-confiance" className="hover:text-primary transition-colors">
            Profil de confiance
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="https://www.insd.bf" className="hover:text-primary transition-colors">
            INSD
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="/droit-auteur" className="hover:text-primary transition-colors">
            Droit d'auteur
          </Link>
        </div>

        {/* Secondary Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 text-sm mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <Link href="/conditions-utilisation" className="hover:text-primary transition-colors">
            Conditions d'utilisation
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="/geoportail" className="hover:text-primary transition-colors">
            Géoportail
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="/declaration-accessibilite" className="hover:text-primary transition-colors">
            Déclaration d'accessibilité
          </Link>
        </div>

        {/* Notice Section */}
        <div className="text-center text-sm text-gray-500 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          <p className="mb-4">
            Les pages disponibles dans le siteweb ne sont que des prototypes de services, et ne represente pas le gouvernement du Burkina Faso.
          </p>
        </div>

        {/* Attribution Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 text-sm mb-6 sm:mb-8 px-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
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
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
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
        <div className="text-center text-sm px-4">
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
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
          <Image
            src="/images/Sitarail_bobo.jpg"
            alt="Gare de Sitarail à Bobo-Dioulasso"
            fill
            className="object-cover object-center sm:object-right opacity-25"
            priority
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="relative z-20">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Toutes les coordonnées</h2>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Emplois</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Immigration et citoyenneté</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Voyage et tourisme</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Entreprises</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Prestations</Link></li>
              </ul>
            </div>
            <div className="relative z-20">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Ministères et organismes</h2>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Impôts</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Environnement et ressources naturelles</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Défense nationale et Forces armées</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Culture et sport</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Services de police et urgences</Link></li>
              </ul>
            </div>
            <div className="relative z-20">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">À propos du gouvernement</h2>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Le Burkina et le monde</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Argent et finances</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Science et innovation</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Autochtones</Link></li>
                <li><Link href="/contact" className="hover:underline text-sm sm:text-base">Vétérans et militaires</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 