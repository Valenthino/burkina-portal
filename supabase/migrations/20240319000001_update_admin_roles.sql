-- Create roles table if it doesn't exist
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    nom TEXT NOT NULL UNIQUE,
    description TEXT,
    level INTEGER DEFAULT 0,
    parent_role_id INTEGER REFERENCES roles(id)
);

-- Create permissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS permissions (
    id SERIAL PRIMARY KEY,
    nom TEXT NOT NULL UNIQUE,
    description TEXT
);

-- Create roles_permissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS roles_permissions (
    role_id INTEGER REFERENCES roles(id),
    permission_id INTEGER REFERENCES permissions(id),
    PRIMARY KEY (role_id, permission_id)
);

-- Create utilisateurs_roles table if it doesn't exist
CREATE TABLE IF NOT EXISTS utilisateurs_roles (
    utilisateur_id UUID REFERENCES auth.users(id),
    role_id INTEGER REFERENCES roles(id),
    PRIMARY KEY (utilisateur_id, role_id)
);

-- Update roles table with hierarchy
ALTER TABLE roles ADD COLUMN IF NOT EXISTS level INTEGER DEFAULT 0;
ALTER TABLE roles ADD COLUMN IF NOT EXISTS parent_role_id INTEGER REFERENCES roles(id);

-- Predefined roles
INSERT INTO roles (nom, description, level) VALUES
('super_admin', 'Administrateur principal avec tous les droits', 100),
('admin_ministeriel', 'Chef de ministère', 80),
('agent', 'Agent de service', 50)
ON CONFLICT (nom) DO NOTHING;

-- Add specific permissions
INSERT INTO permissions (nom, description) VALUES
('manage_users', 'Gérer les utilisateurs'),
('assign_roles', 'Assigner des rôles'),
('manage_ministries', 'Gérer les ministères'),
('manage_services', 'Gérer les services'),
('view_analytics', 'Voir les analyses'),
('manage_applications', 'Gérer les demandes'),
('manage_agents', 'Gérer les agents')
ON CONFLICT (nom) DO NOTHING;

-- Assign permissions to roles
INSERT INTO roles_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r, permissions p
WHERE r.nom = 'super_admin'
ON CONFLICT DO NOTHING;

INSERT INTO roles_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r, permissions p
WHERE r.nom = 'admin_ministeriel'
  AND p.nom IN ('manage_services', 'manage_agents', 'view_analytics', 'manage_applications')
ON CONFLICT DO NOTHING;

INSERT INTO roles_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r, permissions p
WHERE r.nom = 'agent'
  AND p.nom IN ('manage_applications')
ON CONFLICT DO NOTHING;

-- Create admin_settings table
CREATE TABLE IF NOT EXISTS admin_settings (
    id SERIAL PRIMARY KEY,
    key TEXT NOT NULL UNIQUE,
    value JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create admin_audit_log table
CREATE TABLE IF NOT EXISTS admin_audit_log (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    action TEXT NOT NULL,
    details JSONB,
    ip_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add RLS policies
ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Super admins can manage settings"
    ON admin_settings
    FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM utilisateurs_roles ur
            JOIN roles r ON ur.role_id = r.id
            WHERE ur.utilisateur_id = auth.uid()::uuid
            AND r.nom = 'super_admin'
        )
    );

CREATE POLICY "Admins can view audit logs"
    ON admin_audit_log
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM utilisateurs_roles ur
            JOIN roles r ON ur.role_id = r.id
            WHERE ur.utilisateur_id = auth.uid()::uuid
            AND r.level >= 80
        )
    );

-- Function to check user role level
CREATE OR REPLACE FUNCTION check_user_role_level(user_id UUID, required_level INTEGER)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM utilisateurs_roles ur
        JOIN roles r ON ur.role_id = r.id
        WHERE ur.utilisateur_id = user_id
        AND r.level >= required_level
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 