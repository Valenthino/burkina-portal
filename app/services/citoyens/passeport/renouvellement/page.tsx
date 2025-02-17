'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { LoadingPage } from '@/components/ui/loading-page';

export default function RenouvellementPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function checkAuth() {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        router.push('/auth?service=passeport&redirect=/services/citoyens/passeport/renouvellement');
        return;
      }
      setLoading(false);
    }

    checkAuth();
  }, [router, supabase.auth]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Renouvellement de Passeport
        </h1>
        <p className="text-gray-600">
          Formulaire en cours de développement...
        </p>
      </div>
    </div>
  );
} 