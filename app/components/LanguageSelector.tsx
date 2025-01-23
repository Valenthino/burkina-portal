'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import '../styles/LanguageSelector.css';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

type LanguageCode = 'mos' | 'bam' | 'fuf' | 'fr' | 'en' | 'es';

// Map our language codes to Google Translate codes
const LANGUAGE_MAPPING: Record<LanguageCode, string> = {
  // Local languages (some may not be available in Google Translate)
  mos: 'fr', // Fallback to French for Mooré
  bam: 'bm', // Bambara code in Google Translate
  fuf: 'ff', // Fula/Fulfulde code in Google Translate
  
  // Priority languages
  fr: 'fr',
  en: 'en',
  es: 'es',
};

const LOCAL_LANGUAGES = [
  { code: 'mos' as LanguageCode, name: 'Mooré' },
  { code: 'bam' as LanguageCode, name: 'Dioula' },
  { code: 'fuf' as LanguageCode, name: 'Fulfulde' },
];

const PRIORITY_LANGUAGES = [
  { code: 'fr' as LanguageCode, name: 'Français' },
  { code: 'en' as LanguageCode, name: 'English' },
  { code: 'es' as LanguageCode, name: 'Español' },
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('fr');
  const [isOpen, setIsOpen] = useState(false);

  // Function to trigger Google Translate
  const changeLanguage = (languageCode: LanguageCode) => {
    const googleCode = LANGUAGE_MAPPING[languageCode];
    
    // Update selected language in state
    setSelectedLanguage(languageCode);
    setIsOpen(false);
    
    // Trigger Google Translate
    if (window.google && window.google.translate) {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = googleCode;
        select.dispatchEvent(new Event('change'));
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    // Initialize Google Translate once the script is loaded
    const initGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'fr',
            includedLanguages: 'en,fr,es,bm,ff',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
        
        if (selectedLanguage !== 'fr') {
          setTimeout(() => {
            changeLanguage(selectedLanguage);
          }, 1000);
        }
      }
    };

    window.googleTranslateElementInit = initGoogleTranslate;
  }, [selectedLanguage]);

  // Find current language name
  const currentLanguage = [...LOCAL_LANGUAGES, ...PRIORITY_LANGUAGES].find(
    lang => lang.code === selectedLanguage
  )?.name || 'Français';

  return (
    <div className="relative language-selector">
      {/* Mobile Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm hover:text-gray-300 transition-colors lg:hidden"
      >
        <span>{currentLanguage}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-50 lg:hidden">
          <div className="px-3 py-2 text-xs font-medium text-gray-500">Langues locales</div>
          {LOCAL_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                selectedLanguage === lang.code ? 'text-primary font-medium' : 'text-gray-700'
              }`}
            >
              {lang.name}
            </button>
          ))}
          
          <div className="border-t border-gray-100 my-2" />
          
          <div className="px-3 py-2 text-xs font-medium text-gray-500">Autres langues</div>
          {PRIORITY_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                selectedLanguage === lang.code ? 'text-primary font-medium' : 'text-gray-700'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center space-x-6">
        {/* Local Languages */}
        <div className="flex space-x-4">
          {LOCAL_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`text-sm hover:text-gray-300 transition-colors ${
                selectedLanguage === lang.code ? 'underline font-medium' : ''
              }`}
              title={lang.code === 'mos' ? 'Mooré (Bientôt disponible)' : ''}
            >
              {lang.name}
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="h-4 w-px bg-white/30" />

        {/* Priority Languages */}
        <div className="flex space-x-4">
          {PRIORITY_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`text-sm hover:text-gray-300 transition-colors ${
                selectedLanguage === lang.code ? 'underline font-medium' : ''
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      {/* Hidden Google Translate Element */}
      <div className="relative hidden">
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="lazyOnload"
        />
        <div 
          id="google_translate_element"
          className="relative z-50"
        />
      </div>
    </div>
  );
} 