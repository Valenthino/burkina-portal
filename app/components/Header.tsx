'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MainMenu from './MainMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Official banner */}
      <div className="bg-primary text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            Site officiel du gouvernement du Burkina Faso
          </div>
          <div className="flex space-x-4">
            <button className="text-sm hover:text-gray-300 transition-colors">Français</button>
            <button className="text-sm hover:text-gray-300 transition-colors">English</button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative w-20 h-12">
                <Image
                  src="/images/flag-bf.png"
                  alt="Drapeau du Burkina Faso"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground-dark">Le Portail du Burkina Faso</span>
                <span className="text-sm text-foreground-light">La Patrie ou la Mort, Nous Vaincrons</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/actualites" className="nav-link">Actualités</Link>
              <Link 
                href="/services/index-a-z" 
                className="btn-primary flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                Index A-Z
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu principal"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-0.5 bg-foreground-dark mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground-dark mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground-dark"></div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pt-4">
                <Link 
                  href="/actualites" 
                  className="px-4 py-2 rounded hover:bg-gray-100 text-foreground-dark"
                >
                  Actualités
                </Link>
                <Link 
                  href="/services/index-a-z" 
                  className="btn-primary text-center mt-2 flex items-center justify-center"
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

      {/* Main Menu */}
      <MainMenu />

      {/* Search bar */}
      <div className="border-t border-gray-200 bg-background-light">
        <div className="container mx-auto px-4 py-3">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="search"
              placeholder="Rechercher des services, informations..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              aria-label="Rechercher sur le site"
            />
          </div>
        </div>
      </div>
    </header>
  );
} 