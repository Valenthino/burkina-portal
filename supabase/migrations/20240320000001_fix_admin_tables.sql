-- Create utilisateurs table if it doesn't exist
CREATE TABLE IF NOT EXISTS utilisateurs (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create admin_audit_log table if it doesn't exist
CREATE TABLE IF NOT EXISTS admin_audit_log (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    action TEXT NOT NULL,
    details JSONB,
    ip_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create ministeres table if it doesn't exist
CREATE TABLE IF NOT EXISTS ministeres (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nom TEXT NOT NULL,
    description TEXT,
    categorie TEXT,
    slug TEXT UNIQUE,
    url_site TEXT,
    adresse TEXT,
    telephone TEXT,
    email TEXT,
    est_actif BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create agents table if it doesn't exist
CREATE TABLE IF NOT EXISTS agents (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    ministere_id UUID REFERENCES ministeres(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create demandes table if it doesn't exist
CREATE TABLE IF NOT EXISTS demandes (
    id SERIAL PRIMARY KEY,
    ministere_id UUID REFERENCES ministeres(id),
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE utilisateurs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE ministeres ENABLE ROW LEVEL SECURITY;
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE demandes ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own data" ON utilisateurs;
DROP POLICY IF EXISTS "Super admins can view all users" ON utilisateurs;
DROP POLICY IF EXISTS "Admins can view audit logs" ON admin_audit_log;
DROP POLICY IF EXISTS "Public can view ministeres" ON ministeres;
DROP POLICY IF EXISTS "Admins can manage ministeres" ON ministeres;
DROP POLICY IF EXISTS "Admins can view agents" ON agents;
DROP POLICY IF EXISTS "Admins can view all demandes" ON demandes;

-- Create policies for utilisateurs
CREATE POLICY "Users can view their own data"
    ON utilisateurs FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Super admins can view all users"
    ON utilisateurs FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM utilisateurs_roles ur
            JOIN roles r ON ur.role_id = r.id
            WHERE ur.utilisateur_id = auth.uid()
            AND r.level >= 100
        )
    );

-- Create policies for admin_audit_log
CREATE POLICY "Admins can view audit logs"
    ON admin_audit_log FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM utilisateurs_roles ur
            JOIN roles r ON ur.role_id = r.id
            WHERE ur.utilisateur_id = auth.uid()
            AND r.level >= 80
        )
    );

-- Create policies for ministeres
CREATE POLICY "Public can view ministeres"
    ON ministeres FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Admins can manage ministeres"
    ON ministeres FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM utilisateurs_roles ur
            JOIN roles r ON ur.role_id = r.id
            WHERE ur.utilisateur_id = auth.uid()
            AND r.level >= 80
        )
    );

-- Create policies for agents
CREATE POLICY "Admins can view agents"
    ON agents FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM utilisateurs_roles ur
            JOIN roles r ON ur.role_id = r.id
            WHERE ur.utilisateur_id = auth.uid()
            AND r.level >= 80
        )
    );

-- Create policies for demandes
CREATE POLICY "Admins can view all demandes"
    ON demandes FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM utilisateurs_roles ur
            JOIN roles r ON ur.role_id = r.id
            WHERE ur.utilisateur_id = auth.uid()
            AND r.level >= 80
        )
    );

-- Insert a test ministry if none exists
INSERT INTO ministeres (nom, description, categorie)
SELECT 'Ministère de l''Administration Territoriale', 'Administration territoriale et sécurité', 'administration'
WHERE NOT EXISTS (SELECT 1 FROM ministeres LIMIT 1);

-- Function to sync auth users to utilisateurs
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.utilisateurs (id, email)
    VALUES (NEW.id, NEW.email)
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Sync existing auth users
INSERT INTO utilisateurs (id, email)
SELECT id, email FROM auth.users
ON CONFLICT (id) DO NOTHING; 