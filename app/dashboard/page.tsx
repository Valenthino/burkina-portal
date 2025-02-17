'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Application {
  application_id: string;
  status: string;
  created_at: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    async function getUser() {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        router.push('/auth');
        return;
      }
      setUser(user);
      fetchApplications(user.id);
    }

    getUser();
  }, [router, supabase.auth]);

  async function fetchApplications(userId: string) {
    try {
      setError(null);
      const { data, error } = await supabase
        .from('cnib_applications')
        .select('*')
        .eq('user_id', userId);

      if (error) {
        throw error;
      }
      setApplications(data || []);
    } catch (error: any) {
      console.error('Error fetching applications:', error);
      setError(error.message || 'Erreur lors de la récupération des demandes');
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push('/auth');
  }

  if (loading) {
    return (
      <div className="flex h-screen bg-gray-50">
        <div className="flex-1 p-8">
          <Card>
            <CardContent className="p-6">
              <p>Chargement...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Menu</h2>
          <nav className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => router.push('/services/citoyens/cnib/apply')}
            >
              Nouvelle demande
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={handleSignOut}
            >
              Se déconnecter
            </Button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Tableau de bord</CardTitle>
            <CardDescription>
              Bienvenue, {user?.email}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mes demandes</CardTitle>
            <CardDescription>
              Historique de vos demandes de CNIB
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-4">
                <p className="text-sm">{error}</p>
              </div>
            )}
            
            {applications.length === 0 ? (
              <p className="text-gray-500">
                Vous n'avez pas encore fait de demande de CNIB.
              </p>
            ) : (
              <div className="space-y-4">
                {applications.map((application) => (
                  <div
                    key={application.application_id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">Demande #{application.application_id}</p>
                      <p className="text-sm text-gray-500">
                        Soumise le {new Date(application.created_at).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        application.status === 'approved' ? 'bg-green-100 text-green-800' :
                        application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {application.status === 'pending' ? 'En attente' :
                         application.status === 'approved' ? 'Approuvée' :
                         application.status === 'rejected' ? 'Rejetée' :
                         'Complétée'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 