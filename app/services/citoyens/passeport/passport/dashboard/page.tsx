'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { initSessionTimeout } from '@/lib/utils/sessionTimeout';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { createClient } from '@/lib/supabase/client';

interface PassportApplication {
  id: string;
  application_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
}

export default function PassportDashboard() {
  const [applications, setApplications] = useState<PassportApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function checkAuth() {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        router.push('/auth?service=passport&redirect=/services/citoyens/passport/dashboard');
        return;
      }
      fetchApplications(user.id);
    }

    async function fetchApplications(userId: string) {
      try {
        const { data, error } = await supabase
          .from('passport_applications')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setApplications(data || []);
      } catch (error) {
        console.error('Error fetching applications:', error);
        setError('Erreur lors du chargement de vos demandes');
      } finally {
        setLoading(false);
      }
    }

    checkAuth();

    // Initialize session timeout
    const cleanup = initSessionTimeout(
      () => setShowTimeoutWarning(true),
      () => router.push('/auth?service=passport')
    );

    return cleanup;
  }, [router, supabase]);

  function getStatusBadge(status: string) {
    const statusConfig = {
      draft: { color: 'bg-gray-100 text-gray-800', label: 'Brouillon' },
      pending: { color: 'bg-yellow-100 text-yellow-800', label: 'En attente' },
      processing: { color: 'bg-blue-100 text-blue-800', label: 'En traitement' },
      approved: { color: 'bg-green-100 text-green-800', label: 'Approuvée' },
      rejected: { color: 'bg-red-100 text-red-800', label: 'Rejetée' },
      completed: { color: 'bg-purple-100 text-purple-800', label: 'Complétée' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Tableau de Bord Passeport
          </h1>
          <p className="mt-2 text-gray-600">
            Gérez vos demandes de Passeport Burkinabè
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Demandes en cours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {applications.filter(app => ['pending', 'processing'].includes(app.status)).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Demandes approuvées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {applications.filter(app => app.status === 'approved').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Demandes complétées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {applications.filter(app => app.status === 'completed').length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Mes Demandes</CardTitle>
              <CardDescription>
                Historique de vos demandes de passeport
              </CardDescription>
            </div>
            <Link href="/services/citoyens/passport/apply">
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Nouvelle Demande
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {applications.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-gray-500">
                  Vous n'avez pas encore fait de demande de passeport.
                </p>
                <Link href="/services/citoyens/passport/apply">
                  <Button className="mt-4">
                    Commencer une demande
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map((application) => (
                  <div
                    key={application.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">
                        {application.first_name} {application.last_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Demande #{application.application_id}
                      </p>
                      <p className="text-sm text-gray-500">
                        Soumise le {new Date(application.created_at).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      {getStatusBadge(application.status)}
                      <Link href={`/services/citoyens/passport/applications/${application.application_id}`}>
                        <Button variant="outline" size="sm">
                          Voir les détails
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Subtle admin link in footer */}
        <div className="mt-16 text-center text-xs text-gray-400 hover:text-gray-600">
          <Link href="/auth?service=admin" className="opacity-50 hover:opacity-100 transition-opacity">
            Portail Administratif
          </Link>
        </div>
      </div>

      {/* Session timeout warning */}
      <AlertDialog open={showTimeoutWarning}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Session Expirée</AlertDialogTitle>
            <AlertDialogDescription>
              Votre session va expirer dans 30 secondes pour des raisons de sécurité. 
              Voulez-vous rester connecté ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => {
              const supabase = createClient();
              supabase.auth.signOut();
              router.push('/auth?service=passport');
            }}>
              Se déconnecter
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => setShowTimeoutWarning(false)}>
              Rester connecté
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 