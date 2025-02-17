'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Users,
  Building2,
  FileText,
  Activity,
} from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  totalMinistries: number;
  totalApplications: number;
  pendingApplications: number;
}

interface RecentActivity {
  id: number;
  action: string;
  details: any;
  created_at: string;
  user?: {
    email: string;
  };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        // Fetch total users
        const { count: userCount } = await supabase
          .from('utilisateurs')
          .select('*', { count: 'exact', head: true });

        // Fetch total ministries
        const { count: ministryCount } = await supabase
          .from('ministeres')
          .select('*', { count: 'exact', head: true });

        // Fetch applications stats
        const { count: totalApplications } = await supabase
          .from('cnib_applications')
          .select('*', { count: 'exact', head: true });

        const { count: pendingApplications } = await supabase
          .from('cnib_applications')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'pending');

        setStats({
          totalUsers: userCount || 0,
          totalMinistries: ministryCount || 0,
          totalApplications: totalApplications || 0,
          pendingApplications: pendingApplications || 0,
        });

        // Fetch recent activity
        const { data: activities, error: activityError } = await supabase
          .from('admin_audit_log')
          .select(`
            *,
            user:user_id (
              email
            )
          `)
          .order('created_at', { ascending: false })
          .limit(5);

        if (activityError) throw activityError;
        setRecentActivity(activities || []);

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setError('Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, [supabase]);

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

  const statCards = [
    {
      title: 'Utilisateurs',
      value: stats?.totalUsers || 0,
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Ministères',
      value: stats?.totalMinistries || 0,
      icon: Building2,
      color: 'text-green-600',
    },
    {
      title: 'Demandes Totales',
      value: stats?.totalApplications || 0,
      icon: FileText,
      color: 'text-purple-600',
    },
    {
      title: 'Demandes en Attente',
      value: stats?.pendingApplications || 0,
      icon: Activity,
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tableau de Bord Administratif</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Activité Récente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">
                    {activity.user?.email || 'Système'}
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(activity.created_at).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            ))}
            {recentActivity.length === 0 && (
              <p className="text-center text-gray-500">
                Aucune activité récente
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 