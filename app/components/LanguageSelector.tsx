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

  // Function to trigger Google Translate
  const changeLanguage = (languageCode: LanguageCode) => {
    const googleCode = LANGUAGE_MAPPING[languageCode];
    
    // Update selected language in state
    setSelectedLanguage(languageCode);
    
    // Trigger Google Translate
    if (window.google && window.google.translate) {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = googleCode;
        select.dispatchEvent(new Event('change'));
      }
    }
  };

  useEffect(() => {
    // Initialize Google Translate once the script is loaded
    const initGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'fr', // Default language is French
            includedLanguages: 'en,fr,es,bm,ff', // Only include available languages
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
        
        // Set initial language if not French
        if (selectedLanguage !== 'fr') {
          setTimeout(() => {
            changeLanguage(selectedLanguage);
          }, 1000);
        }
      }
    };

    window.googleTranslateElementInit = initGoogleTranslate;
  }, [selectedLanguage]);

  return (
    <div className="flex items-center space-x-6">
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