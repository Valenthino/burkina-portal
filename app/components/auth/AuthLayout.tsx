import { ReactNode } from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function AuthLayout({
  children,
  title = "Accès sécurisé et simple",
  description = "Une façon simple d'accéder aux services en ligne au Portail du Gouvernment Burkinabè."
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-6xl flex bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Side - Image and Text */}
        <div className="hidden lg:flex lg:w-[45%] bg-[#1a5653] text-white relative">
          {/* Background Image with Blur */}
          <div className="absolute inset-0">
            <Image
              src="/images/flag-bf.png"
              alt="Drapeau du Burkina Faso"
              fill
              style={{ objectFit: 'cover', opacity: '0.15', filter: 'blur(8px)' }}
            />
          </div>
          
          {/* Content Overlay */}
          <div className="relative w-full flex flex-col p-12">
            {/* Logo/Flag */}
            <div className="mb-12">
              <Image
                src="/images/flag-bf.png"
                alt="Drapeau du Burkina Faso"
                width={120}
                height={80}
                className="rounded-md shadow-lg"
              />
            </div>

            {/* Main Text */}
            <div className="flex-grow flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">
                {title}
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                {description}
              </p>
              <div className="space-y-4 text-lg">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <p>Un nom d'utilisateur.</p>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <p>Un mot de passe.</p>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-auto">
              <p className="text-sm leading-relaxed opacity-90">
                Votre FasoAccess peut être utilisée pour accéder à plusieurs services adaptés en ligne du gouvernement du Burkina Faso.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form Content */}
        <div className="flex-1 lg:w-[55%] flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
} 