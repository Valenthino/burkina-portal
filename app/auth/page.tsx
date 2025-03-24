'use client';

import { useSearchParams } from 'next/navigation';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthForm from '@/components/auth/AuthForm';
import { getServiceConfig, getRedirectUrl } from '@/lib/auth/serviceConfig';
import { useEffect } from 'react';

export default function AuthPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') || 'cnib';
  const redirectTo = getRedirectUrl(service, searchParams.get('redirect'));
  const config = getServiceConfig(service);

  // Set service cookie when auth page is loaded
  useEffect(() => {
    const setServiceCookie = async () => {
      try {
        const response = await fetch('/api/auth/set-service-cookie', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ service }),
        });
        
        if (!response.ok) {
          console.error('Erreur lors de la définition du cookie de service:', await response.text());
        }
      } catch (error) {
        console.error('Erreur lors de la définition du cookie de service:', error);
      }
    };
    
    setServiceCookie();
  }, [service]);

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