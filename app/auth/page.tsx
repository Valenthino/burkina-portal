'use client';

import { useSearchParams } from 'next/navigation';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthForm from '@/components/auth/AuthForm';

interface ServiceConfig {
  title: string;
  description: string;
  defaultRedirect: string;
  requiresNewLogin: boolean;
}

const serviceConfig: Record<string, ServiceConfig> = {
  cnib: {
    title: "Carte Nationale d'Identité Burkinabè",
    description: "Connectez-vous pour gérer vos demandes de CNIB",
    defaultRedirect: "/services/citoyens/cnib/dashboard",
    requiresNewLogin: true
  },
  passeport: {
    title: "Passeport Burkinabè",
    description: "Connectez-vous pour gérer vos demandes de passeport",
    defaultRedirect: "/services/citoyens/passeport/tableau-de-bord",
    requiresNewLogin: true
  },
  admin: {
    title: "Administration",
    description: "Accès réservé aux administrateurs",
    defaultRedirect: "/admin",
    requiresNewLogin: true
  }
};

export default function AuthPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') || 'cnib';
  const redirectTo = searchParams.get('redirect') || serviceConfig[service as keyof typeof serviceConfig]?.defaultRedirect;
  const config = serviceConfig[service as keyof typeof serviceConfig] || serviceConfig.cnib;

  return (
    <AuthLayout
      title={config.title}
      description={config.description}
    >
      <AuthForm
        service={service}
        title="Burkina Portail"
        description={config.description}
        redirectTo={redirectTo}
      />
    </AuthLayout>
  );
} 