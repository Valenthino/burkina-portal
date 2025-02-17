'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Building2, Users, FileText } from 'lucide-react';

interface Role {
  id: number;
  nom: string;
  level: number;
}

interface RoleResponse {
  roles: Role;
}

interface Ministry {
  id: number;
  nom: string;
  description: string;
  categorie: string;
  created_at: string;
  updated_at: string;
  stats?: MinistryStats;
}

interface MinistryStats {
  services: number;
  agents: number;
  applications: number;
}

export default function MinistriesPage() {
  const [ministries, setMinistries] = useState<Ministry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function checkAccess() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: roleData } = await supabase
        .from('utilisateurs_roles')
        .select(`
          roles (
            id,
            nom,
            level
          )
        `)
        .eq('utilisateur_id', user.id)
        .single();

      const typedRoleData = roleData as unknown as RoleResponse;

      if (!typedRoleData?.roles || typedRoleData.roles.level < 80) {
        setError('Accès non autorisé');
        return;
      }

      fetchMinistries();
    }

    async function fetchMinistries() {
      try {
        // Fetch ministries
        const { data: ministryData, error: ministryError } = await supabase
          .from('ministeres')
          .select('*')
          .order('nom');

        if (ministryError) throw ministryError;

        // Fetch stats for each ministry
        const ministriesWithStats = await Promise.all(
          (ministryData || []).map(async (ministry) => {
            const stats = await fetchMinistryStats(ministry.id);
            return {
              ...ministry,
              stats,
            };
          })
        );

        setMinistries(ministriesWithStats);
      } catch (error) {
        console.error('Error fetching ministries:', error);
        setError('Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    }

    checkAccess();
  }, [supabase]);

  async function fetchMinistryStats(ministryId: number): Promise<MinistryStats> {
    const { count: servicesCount } = await supabase
      .from('services_ministere')
      .select('*', { count: 'exact', head: true })
      .eq('ministere_id', ministryId);

    const { count: agentsCount } = await supabase
      .from('agents')
      .select('*', { count: 'exact', head: true })
      .eq('ministere_id', ministryId);

    const { count: applicationsCount } = await supabase
      .from('demandes')
      .select('*', { count: 'exact', head: true })
      .eq('ministere_id', ministryId);

    return {
      services: servicesCount || 0,
      agents: agentsCount || 0,
      applications: applicationsCount || 0,
    };
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestion des Ministères</h1>
        <Button>
          <Building2 className="mr-2 h-4 w-4" />
          Nouveau Ministère
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ministries.map((ministry) => (
          <Card key={ministry.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span className="text-lg">{ministry.nom}</span>
              </CardTitle>
              {ministry.description && (
                <p className="text-sm text-gray-500 mt-1">
                  {ministry.description}
                </p>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{ministry.stats?.services || 0}</div>
                    <div className="text-sm text-gray-500">Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{ministry.stats?.agents || 0}</div>
                    <div className="text-sm text-gray-500">Agents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{ministry.stats?.applications || 0}</div>
                    <div className="text-sm text-gray-500">Demandes</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <Users className="mr-2 h-4 w-4" />
                    Agents
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Services
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 