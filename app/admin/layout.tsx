'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  FileText,
  Activity,
  LogOut,
} from 'lucide-react';

interface AdminRole {
  id: number;
  nom: string;
  level: number;
}

interface RoleResponse {
  roles: AdminRole;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [userRole, setUserRole] = useState<AdminRole | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function checkAdminAccess() {
      try {
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
          router.push('/auth');
          return;
        }

        const { data: roleData, error: roleError } = await supabase
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

        if (roleError || !roleData) {
          router.push('/dashboard');
          return;
        }

        const typedRoleData = roleData as RoleResponse;
        
        if (!typedRoleData.roles || typedRoleData.roles.level < 50) {
          router.push('/dashboard');
          return;
        }

        setUserRole(typedRoleData.roles);
      } catch (error) {
        console.error('Error checking admin access:', error);
        router.push('/dashboard');
      } finally {
        setLoading(false);
      }
    }

    checkAdminAccess();
  }, [router, supabase]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const menuItems = [
    {
      href: '/admin',
      label: 'Tableau de bord',
      icon: LayoutDashboard,
      minLevel: 50,
    },
    {
      href: '/admin/users',
      label: 'Utilisateurs',
      icon: Users,
      minLevel: 100,
    },
    {
      href: '/admin/ministries',
      label: 'Ministères',
      icon: Building2,
      minLevel: 80,
    },
    {
      href: '/admin/applications',
      label: 'Demandes',
      icon: FileText,
      minLevel: 50,
    },
    {
      href: '/admin/analytics',
      label: 'Analyses',
      icon: Activity,
      minLevel: 80,
    },
    {
      href: '/admin/settings',
      label: 'Paramètres',
      icon: Settings,
      minLevel: 100,
    },
  ];

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-4">
            <h1 className="text-xl font-bold text-gray-800">
              Administration
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {userRole?.nom}
            </p>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems
                .filter(item => userRole && userRole.level >= item.minLevel)
                .map(item => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
} 