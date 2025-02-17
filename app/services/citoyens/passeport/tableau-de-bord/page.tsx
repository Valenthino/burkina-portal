'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Calendar,
  User,
  FileCheck,
  AlertTriangle,
  ChevronRight,
  Download,
  Printer,
  RefreshCw
} from 'lucide-react';
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
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PasseportApplication {
  id: string;
  application_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  type: string;
  expiry_date?: string;
  appointment_date?: string;
}

export default function TableauDeBordPasseport() {
  const [applications, setApplications] = useState<PasseportApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function checkAuth() {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        router.push('/auth?service=passeport&redirect=/services/citoyens/passeport/tableau-de-bord');
        return;
      }
      fetchApplications(user.id);
      fetchUserProfile(user.id);
    }

    async function fetchUserProfile(userId: string) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (!error && data) {
        setUserProfile(data);
      }
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

    const cleanup = initSessionTimeout(
      () => setShowTimeoutWarning(true),
      () => router.push('/auth?service=passeport')
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

  const activeApplication = applications.find(app => 
    ['pending', 'processing', 'approved'].includes(app.status)
  );

  const hasValidPassport = applications.some(app => 
    app.status === 'completed' && app.expiry_date && new Date(app.expiry_date) > new Date()
  );

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      {/* Top Banner */}
      <div className="bg-[#1a5653] text-white py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">
                Tableau de Bord Passeport
              </h1>
              <p className="mt-2 text-gray-200">
                {userProfile?.full_name || 'Bienvenue'}
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="secondary" 
                className="bg-white text-[#1a5653] hover:bg-gray-100"
              >
                <User className="mr-2 h-4 w-4" />
                Mon Profil
              </Button>
              <Button 
                variant="secondary" 
                className="bg-white text-[#1a5653] hover:bg-gray-100"
              >
                <AlertCircle className="mr-2 h-4 w-4" />
                Aide
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-6">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Nouvelle Demande
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Initiez une nouvelle demande de passeport
              </p>
              <Link 
                href={userProfile ? "/services/citoyens/passeport/demande" : "/auth?service=passeport&redirect=/services/citoyens/passeport/tableau-de-bord"}
                className="w-full"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Commencer
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <RefreshCw className="h-5 w-5 mr-2 text-green-600" />
                Renouvellement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Renouvelez votre passeport existant
              </p>
              <Link 
                href={userProfile ? "/services/citoyens/passeport/renouvellement" : "/auth?service=passeport&redirect=/services/citoyens/passeport/tableau-de-bord"}
                className="w-full"
              >
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  Renouveler
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                Rendez-vous
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                {activeApplication?.appointment_date 
                  ? `Prévu le ${new Date(activeApplication.appointment_date).toLocaleDateString('fr-FR')}`
                  : 'Aucun rendez-vous prévu'}
              </p>
              <Button 
                variant="outline" 
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50" 
                disabled={!activeApplication}
              >
                Gérer
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FileCheck className="h-5 w-5 mr-2 text-orange-600" />
                Statut Actuel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                {hasValidPassport 
                  ? 'Passeport valide'
                  : activeApplication 
                    ? getStatusBadge(activeApplication.status)
                    : 'Aucune demande en cours'}
              </p>
              <Button 
                variant="outline" 
                className="w-full border-orange-600 text-orange-600 hover:bg-orange-50" 
                disabled={!activeApplication}
              >
                Détails
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Applications List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Mes Demandes</CardTitle>
                <CardDescription>
                  Historique et suivi de vos demandes de passeport
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">Toutes</TabsTrigger>
                    <TabsTrigger value="active">En cours</TabsTrigger>
                    <TabsTrigger value="completed">Complétées</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all">
                    {applications.length === 0 ? (
                      <div className="text-center py-12">
                        <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Aucune demande
                        </h3>
                        <p className="text-gray-500 mb-4">
                          Vous n'avez pas encore fait de demande de passeport.
                        </p>
                        <div className="flex justify-center gap-4">
                          <Link href="/services/citoyens/passeport/demande">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                              Nouvelle Demande
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {applications.map((application) => (
                          <div
                            key={application.id}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                          >
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <p className="font-medium">
                                  {application.first_name} {application.last_name}
                                </p>
                                {getStatusBadge(application.status)}
                              </div>
                              <p className="text-sm text-gray-500">
                                Demande #{application.application_id}
                              </p>
                              <p className="text-sm text-gray-500">
                                Soumise le {new Date(application.created_at).toLocaleDateString('fr-FR')}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" className="text-gray-700 hover:text-gray-900">
                                <Printer className="h-4 w-4 mr-2" />
                                Imprimer
                              </Button>
                              <Button variant="outline" size="sm" className="text-gray-700 hover:text-gray-900">
                                <Download className="h-4 w-4 mr-2" />
                                Récépissé
                              </Button>
                              <Link href={`/services/citoyens/passeport/demandes/${application.application_id}`}>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                  Voir les détails
                                </Button>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="active">
                    <div className="space-y-4">
                      {applications
                        .filter(app => ['pending', 'processing', 'approved'].includes(app.status))
                        .map((application) => (
                          <div
                            key={application.id}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                          >
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <p className="font-medium">
                                  {application.first_name} {application.last_name}
                                </p>
                                {getStatusBadge(application.status)}
                              </div>
                              <p className="text-sm text-gray-500">
                                Demande #{application.application_id}
                              </p>
                              <p className="text-sm text-gray-500">
                                Soumise le {new Date(application.created_at).toLocaleDateString('fr-FR')}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" className="text-gray-700 hover:text-gray-900">
                                <Printer className="h-4 w-4 mr-2" />
                                Imprimer
                              </Button>
                              <Link href={`/services/citoyens/passeport/demandes/${application.application_id}`}>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                  Voir les détails
                                </Button>
                              </Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="completed">
                    <div className="space-y-4">
                      {applications
                        .filter(app => app.status === 'completed')
                        .map((application) => (
                          <div
                            key={application.id}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                          >
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <p className="font-medium">
                                  {application.first_name} {application.last_name}
                                </p>
                                {getStatusBadge(application.status)}
                              </div>
                              <p className="text-sm text-gray-500">
                                Demande #{application.application_id}
                              </p>
                              <p className="text-sm text-gray-500">
                                Complétée le {new Date(application.updated_at).toLocaleDateString('fr-FR')}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" className="text-gray-700 hover:text-gray-900">
                                <Download className="h-4 w-4 mr-2" />
                                Attestation
                              </Button>
                              <Link href={`/services/citoyens/passeport/demandes/${application.application_id}`}>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                  Voir les détails
                                </Button>
                              </Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Status and Info */}
          <div className="space-y-6">
            {/* Active Application Status */}
            {activeApplication && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Demande en cours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Statut</span>
                      {getStatusBadge(activeApplication.status)}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">N° de demande</span>
                      <span className="font-medium">{activeApplication.application_id}</span>
                    </div>
                    {activeApplication.appointment_date && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Rendez-vous</span>
                        <span className="font-medium">
                          {new Date(activeApplication.appointment_date).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    )}
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Suivre la demande
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Liens utiles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    <FileText className="mr-2 h-4 w-4" />
                    Documents requis
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    <Calendar className="mr-2 h-4 w-4" />
                    Prendre rendez-vous
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
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
              router.push('/auth?service=passeport');
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