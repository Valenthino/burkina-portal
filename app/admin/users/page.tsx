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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { UserPlus, Edit2, Trash2 } from 'lucide-react';

interface Role {
  id: number;
  nom: string;
  description: string;
  level: number;
}

interface UserRole {
  roles: Role;
}

interface User {
  id: string;
  email: string;
  created_at: string;
  roles: UserRole[];
}

interface RoleResponse {
  roles: Role;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<Role | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function checkSuperAdminAccess() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: roleData } = await supabase
        .from('utilisateurs_roles')
        .select(`
          roles (
            id,
            nom,
            description,
            level
          )
        `)
        .eq('utilisateur_id', user.id)
        .single();

      const typedRoleData = roleData as unknown as RoleResponse;

      if (!typedRoleData?.roles || typedRoleData.roles.level < 100) {
        setError('Accès non autorisé');
        return;
      }

      setUserRole(typedRoleData.roles);
      fetchData();
    }

    async function fetchData() {
      try {
        // Fetch users with their roles
        const { data: userData, error: userError } = await supabase
          .from('utilisateurs')
          .select(`
            *,
            roles:utilisateurs_roles (
              roles (
                id,
                nom,
                description,
                level
              )
            )
          `);

        if (userError) throw userError;

        // Fetch available roles
        const { data: roleData, error: roleError } = await supabase
          .from('roles')
          .select('*')
          .order('level', { ascending: false });

        if (roleError) throw roleError;

        setUsers(userData as User[] || []);
        setRoles(roleData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    }

    checkSuperAdminAccess();
  }, [supabase]);

  const handleRoleChange = async (userId: string, roleId: string) => {
    try {
      // Remove existing roles
      await supabase
        .from('utilisateurs_roles')
        .delete()
        .eq('utilisateur_id', userId);

      // Add new role
      const { error } = await supabase
        .from('utilisateurs_roles')
        .insert({
          utilisateur_id: userId,
          role_id: parseInt(roleId),
        });

      if (error) throw error;

      // Log the action
      await supabase
        .from('admin_audit_log')
        .insert({
          user_id: (await supabase.auth.getUser()).data.user?.id,
          action: 'update_user_role',
          details: { user_id: userId, role_id: roleId },
        });

      // Refresh the data
      window.location.reload();
    } catch (error) {
      console.error('Error updating role:', error);
      setError('Erreur lors de la mise à jour du rôle');
    }
  };

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
        <h1 className="text-3xl font-bold">Gestion des Utilisateurs</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Nouvel Utilisateur
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Utilisateurs du Système</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Date de création</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Select
                      defaultValue={user.roles?.[0]?.roles?.id?.toString()}
                      onValueChange={(value) => handleRoleChange(user.id, value)}
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue>
                          {user.roles?.[0]?.roles?.nom || 'Aucun rôle'}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem
                            key={role.id}
                            value={role.id.toString()}
                            disabled={role.level > (userRole?.level || 0)}
                          >
                            {role.nom}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    {new Date(user.created_at).toLocaleDateString('fr-FR')}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 