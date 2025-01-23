import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import AuthProvider from './providers/AuthProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gouv.bf'),
  title: {
    default: 'Portail du Gouvernement du Burkina Faso | Government of Burkina Faso Portal',
    template: '%s | Gouvernement du Burkina Faso'
  },
  description: 'Le portail officiel du Gouvernement du Burkina Faso. Accédez aux services gouvernementaux, informations et ressources pour les citoyens, entreprises et visiteurs.',
  keywords: [
    'Burkina Faso',
    'gouvernement',
    'services publics',
    'administration',
    'citoyens',
    'démarches administratives',
    'documents officiels'
  ],
  authors: [{ name: 'Gouvernement du Burkina Faso' }],
  creator: 'Gouvernement du Burkina Faso',
  publisher: 'Gouvernement du Burkina Faso',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr-BF': '/',
      'en-BF': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BF',
    url: 'https://www.gouv.bf',
    title: 'Portail du Gouvernement du Burkina Faso',
    description: 'Le portail officiel du Gouvernement du Burkina Faso. Accédez aux services gouvernementaux, informations et ressources.',
    siteName: 'Gouvernement du Burkina Faso',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portail du Gouvernement du Burkina Faso',
    description: 'Le portail officiel du Gouvernement du Burkina Faso',
    creator: '@GouvBF',
    site: '@GouvBF',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body 
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <AuthProvider>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
