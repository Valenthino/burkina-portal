import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Portail du Gouvernement du Burkina Faso | Government of Burkina Faso Portal',
  description: 'Le portail officiel du Gouvernement du Burkina Faso. Accédez aux services gouvernementaux, informations et ressources.',
  keywords: ['Burkina Faso', 'gouvernement', 'services publics', 'administration', 'citoyens'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
