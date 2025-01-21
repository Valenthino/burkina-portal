-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User Management Tables
CREATE TABLE IF NOT EXISTS utilisateurs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    telephone VARCHAR(20),
    est_verifie BOOLEAN DEFAULT FALSE,
    est_actif BOOLEAN DEFAULT TRUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS permissions (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS roles_permissions (
    role_id INTEGER REFERENCES roles(id) ON DELETE CASCADE,
    permission_id INTEGER REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE IF NOT EXISTS utilisateurs_roles (
    utilisateur_id UUID REFERENCES utilisateurs(id) ON DELETE CASCADE,
    role_id INTEGER REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (utilisateur_id, role_id)
);

-- Geographic and Administrative Tables
CREATE TABLE IF NOT EXISTS regions (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(10) UNIQUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS provinces (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    region_id INTEGER REFERENCES regions(id) ON DELETE CASCADE,
    code VARCHAR(10) UNIQUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS communes (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    province_id INTEGER REFERENCES provinces(id) ON DELETE CASCADE,
    type_commune VARCHAR(50),
    code VARCHAR(10) UNIQUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS departements (
    id SERIAL PRIMARY KEY,
    ministere_id INTEGER,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS regions_departement (
    id SERIAL PRIMARY KEY,
    departement_id INTEGER REFERENCES departements(id) ON DELETE CASCADE,
    region_id INTEGER REFERENCES regions(id) ON DELETE CASCADE,
    adresse TEXT,
    telephone VARCHAR(20),
    email VARCHAR(255),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ministry and Service Tables
CREATE TABLE IF NOT EXISTS ministeres (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    categorie VARCHAR(100),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS missions_ministere (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    ministere_id INTEGER REFERENCES ministeres(id) ON DELETE CASCADE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services_ministere (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    ministere_id INTEGER REFERENCES ministeres(id) ON DELETE CASCADE,
    type VARCHAR(50) DEFAULT 'service',
    route_type VARCHAR(50) DEFAULT 'local',
    external_url VARCHAR(255),
    slug VARCHAR(100) NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Staff and Service Assignment Tables
CREATE TABLE IF NOT EXISTS agents (
    id SERIAL PRIMARY KEY,
    utilisateur_id UUID REFERENCES utilisateurs(id) ON DELETE CASCADE,
    departement_id INTEGER REFERENCES departements(id),
    poste VARCHAR(100),
    date_embauche DATE,
    est_actif BOOLEAN DEFAULT TRUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    departement_id INTEGER REFERENCES departements(id) ON DELETE CASCADE,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    cout DECIMAL(10,2),
    delai_traitement INTEGER,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Workflow Management Tables
CREATE TABLE IF NOT EXISTS modeles_flux_travail (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
    est_actif BOOLEAN DEFAULT TRUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS etapes_flux_travail (
    id SERIAL PRIMARY KEY,
    modele_id INTEGER REFERENCES modeles_flux_travail(id) ON DELETE CASCADE,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    ordre INTEGER NOT NULL,
    delai_execution INTEGER,
    est_obligatoire BOOLEAN DEFAULT TRUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS conditions_flux_travail (
    id SERIAL PRIMARY KEY,
    etape_id INTEGER REFERENCES etapes_flux_travail(id) ON DELETE CASCADE,
    type_condition VARCHAR(50),
    parametres JSONB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS actions_flux_travail (
    id SERIAL PRIMARY KEY,
    etape_id INTEGER REFERENCES etapes_flux_travail(id) ON DELETE CASCADE,
    type_action VARCHAR(50),
    parametres JSONB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS historique_etapes_flux_travail (
    id SERIAL PRIMARY KEY,
    demande_id INTEGER,
    etape_id INTEGER REFERENCES etapes_flux_travail(id),
    statut VARCHAR(50),
    commentaires TEXT,
    date_debut TIMESTAMP,
    date_fin TIMESTAMP,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Document Management Tables
CREATE TABLE IF NOT EXISTS types_document (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS documents_utilisateur (
    id SERIAL PRIMARY KEY,
    utilisateur_id UUID REFERENCES utilisateurs(id) ON DELETE CASCADE,
    type_document_id INTEGER REFERENCES types_document(id) ON DELETE CASCADE,
    url_document VARCHAR(255) NOT NULL,
    est_verifie BOOLEAN DEFAULT FALSE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS modeles_document (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    contenu TEXT,
    variables JSONB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS documents_demande (
    id SERIAL PRIMARY KEY,
    demande_id INTEGER,
    type_document_id INTEGER REFERENCES types_document(id),
    url_document VARCHAR(255),
    statut VARCHAR(50),
    date_verification TIMESTAMP,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Application and Request Tables
CREATE TABLE IF NOT EXISTS demandes (
    id SERIAL PRIMARY KEY,
    utilisateur_id UUID REFERENCES utilisateurs(id),
    service_id INTEGER REFERENCES services(id),
    type_paiement VARCHAR(50),
    statut_paiement VARCHAR(50),
    montant_paye DECIMAL(10,2),
    agent_assignee UUID REFERENCES utilisateurs(id),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS historique_statut_demande (
    id SERIAL PRIMARY KEY,
    demande_id INTEGER REFERENCES demandes(id) ON DELETE CASCADE,
    statut VARCHAR(50),
    commentaires TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Communication Templates
CREATE TABLE IF NOT EXISTS modeles_communication (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
    nom VARCHAR(100) NOT NULL,
    type VARCHAR(50),
    contenu TEXT,
    variables JSONB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Security and Logging Tables
CREATE TABLE IF NOT EXISTS journaux_securite (
    id SERIAL PRIMARY KEY,
    utilisateur_id UUID REFERENCES utilisateurs(id) ON DELETE SET NULL,
    action VARCHAR(50) NOT NULL,
    description TEXT,
    adresse_ip VARCHAR(45),
    user_agent TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions_utilisateur (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    utilisateur_id UUID REFERENCES utilisateurs(id) ON DELETE CASCADE,
    token TEXT NOT NULL,
    date_expiration TIMESTAMP NOT NULL,
    est_active BOOLEAN DEFAULT TRUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tentatives_connexion (
    id SERIAL PRIMARY KEY,
    utilisateur_id UUID REFERENCES utilisateurs(id),
    statut VARCHAR(50),
    adresse_ip VARCHAR(45),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS limites_requetes (
    id SERIAL PRIMARY KEY,
    adresse_ip VARCHAR(45),
    endpoint VARCHAR(255),
    compte INTEGER DEFAULT 1,
    derniere_requete TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS journaux_activite (
    id SERIAL PRIMARY KEY,
    utilisateur_id UUID REFERENCES utilisateurs(id),
    type_activite VARCHAR(50),
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS journaux_erreur (
    id SERIAL PRIMARY KEY,
    utilisateur_id UUID REFERENCES utilisateurs(id),
    type_erreur VARCHAR(50),
    message TEXT,
    trace_pile TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_utilisateurs_email ON utilisateurs(email);
CREATE INDEX IF NOT EXISTS idx_services_ministere_slug ON services_ministere(slug);
CREATE INDEX IF NOT EXISTS idx_services_ministere_ministere_id ON services_ministere(ministere_id);
CREATE INDEX IF NOT EXISTS idx_missions_ministere_ministere_id ON missions_ministere(ministere_id);
CREATE INDEX IF NOT EXISTS idx_documents_utilisateur_utilisateur_id ON documents_utilisateur(utilisateur_id);
CREATE INDEX IF NOT EXISTS idx_journaux_securite_utilisateur_id ON journaux_securite(utilisateur_id);
CREATE INDEX IF NOT EXISTS idx_sessions_utilisateur_token ON sessions_utilisateur(token);
CREATE INDEX IF NOT EXISTS idx_demandes_utilisateur_id ON demandes(utilisateur_id);
CREATE INDEX IF NOT EXISTS idx_demandes_service_id ON demandes(service_id);
CREATE INDEX IF NOT EXISTS idx_agents_departement_id ON agents(departement_id);
CREATE INDEX IF NOT EXISTS idx_services_departement_id ON services(departement_id);

-- Enable Row Level Security
ALTER TABLE utilisateurs ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ministeres ENABLE ROW LEVEL SECURITY;
ALTER TABLE services_ministere ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents_utilisateur ENABLE ROW LEVEL SECURITY;
ALTER TABLE journaux_securite ENABLE ROW LEVEL SECURITY;
ALTER TABLE demandes ENABLE ROW LEVEL SECURITY;
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
-- Public read access for ministries and services
CREATE POLICY "Enable read access for all users" ON ministeres FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON services_ministere FOR SELECT USING (true);

-- User can only see their own data
CREATE POLICY "Users can view own data" ON utilisateurs
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON utilisateurs
    FOR UPDATE USING (auth.uid() = id);

-- Document policies
CREATE POLICY "Users can view own documents" ON documents_utilisateur
    FOR SELECT USING (auth.uid() = utilisateur_id);

CREATE POLICY "Users can manage own documents" ON documents_utilisateur
    FOR ALL USING (auth.uid() = utilisateur_id);

-- Application policies
CREATE POLICY "Users can view own applications" ON demandes
    FOR SELECT USING (auth.uid() = utilisateur_id);

CREATE POLICY "Users can create applications" ON demandes
    FOR INSERT WITH CHECK (auth.uid() = utilisateur_id);

-- Create trigger function for updating modification dates
CREATE OR REPLACE FUNCTION maj_date_modification()
RETURNS TRIGGER AS $$
BEGIN
    NEW.date_modification = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER maj_ministeres_date_modification
    BEFORE UPDATE ON ministeres
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_utilisateurs_date_modification
    BEFORE UPDATE ON utilisateurs
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_departements_date_modification
    BEFORE UPDATE ON departements
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_services_date_modification
    BEFORE UPDATE ON services
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_agents_date_modification
    BEFORE UPDATE ON agents
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification(); 