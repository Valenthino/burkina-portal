'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function RenouvellementPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function checkAuth() {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        router.push('/auth?service=passeport&redirect=/services/citoyens/passeport/renouvellement');
        return;
      }
    }

    checkAuth();
  }, [router, supabase.auth]);

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