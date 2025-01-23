'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import MainMenu from './MainMenu';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header suppressHydrationWarning>
      {/* Bannière supérieure avec notice du site gouvernemental et options de langue */}
      <div className="bg-primary text-white px-4 py-2">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* Notice du site officiel */}
          <div className="text-sm text-center sm:text-left mb-2 sm:mb-0">
            Site officiel du gouvernement du Burkina Faso
          </div>
          {/* Sélecteur de langue Google Translate */}
          <LanguageSelector />
        </div>
      </div>

      {/* Section principale de l'en-tête avec logo et navigation */}
      <div className="bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 sm:py-4">
            {/* Logo et titre du site */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
              {/* Image du drapeau avec dimensionnement responsive */}
              <div className="relative w-16 h-10 sm:w-20 sm:h-12">
                <Image
                  src="/images/flag-bf.png"
                  alt="Drapeau du Burkina Faso"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Titre du site et devise */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-foreground-dark">Le Portail du Burkina Faso</span>
                <span className="text-xs sm:text-sm text-foreground-light hidden sm:block">La Patrie ou la Mort, Nous Vaincrons</span>
              </div>
            </Link>

            {/* Navigation desktop avec barre de recherche - visible uniquement sur grands écrans */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              <div className="w-48 xl:w-64">
                <SearchBar />
              </div>
              <Link href="/actualites" className="nav-link hover:text-primary transition-colors">Actualités</Link>
              <Link 
                href="/services/index-a-z" 
                className="btn-primary flex items-center text-sm whitespace-nowrap"
              >
                {/* Bouton Index A-Z avec icône */}
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                Index A-Z
              </Link>
            </nav>

            {/* Bouton menu mobile - visible uniquement sur petits écrans */}
            <button
              className="lg:hidden p-2 rounded hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu principal"
              aria-expanded={isMenuOpen}
            >
              <div className={`w-6 h-0.5 bg-foreground-dark mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-foreground-dark mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-foreground-dark transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>

          {/* Navigation mobile - visible uniquement quand le menu est ouvert et le composant est monté */}
          {mounted && isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <div className="px-2">
                  <SearchBar />
                </div>
                {/* Liens du menu mobile */}
                <Link 
                  href="/actualites" 
                  className="px-4 py-3 rounded hover:bg-gray-100 text-foreground-dark transition-colors"
                >
                  Actualités
                </Link>
                <Link 
                  href="/services/index-a-z" 
                  className="mx-4 btn-primary text-center flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                  Index A-Z
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Composant du menu principal de navigation */}
      <MainMenu />
    </header>
  );
} 