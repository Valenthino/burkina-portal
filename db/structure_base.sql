-- Suppression des tables existantes dans l'ordre inverse des dépendances
DROP TABLE IF EXISTS exigences_service CASCADE;
DROP TABLE IF EXISTS modeles_communication CASCADE;
DROP TABLE IF EXISTS flux_travail_demandes CASCADE;
DROP TABLE IF EXISTS documents_demande CASCADE;
DROP TABLE IF EXISTS modeles_document CASCADE;
DROP TABLE IF EXISTS etapes_flux_travail CASCADE;
DROP TABLE IF EXISTS modeles_flux_travail CASCADE;
DROP TABLE IF EXISTS journaux_acces_service CASCADE;
DROP TABLE IF EXISTS limites_requetes CASCADE;
DROP TABLE IF EXISTS etats_service CASCADE;
DROP TABLE IF EXISTS journaux_securite CASCADE;
DROP TABLE IF EXISTS services_agents CASCADE;
DROP TABLE IF EXISTS services_departements CASCADE;
DROP TABLE IF EXISTS regions_departement CASCADE;
DROP TABLE IF EXISTS journaux_activite CASCADE;
DROP TABLE IF EXISTS permissions_role CASCADE;
DROP TABLE IF EXISTS permissions CASCADE;
DROP TABLE IF EXISTS agents CASCADE;
DROP TABLE IF EXISTS departements CASCADE;
DROP TABLE IF EXISTS regions CASCADE;
DROP TABLE IF EXISTS sessions_utilisateur CASCADE;
DROP TABLE IF EXISTS avis CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS ministeres CASCADE;
DROP TABLE IF EXISTS utilisateurs CASCADE;

-- Création des tables de base
CREATE TABLE IF NOT EXISTS ministeres (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS departements (
    id SERIAL PRIMARY KEY,
    ministere_id INTEGER REFERENCES ministeres(id),
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    departement_id INTEGER REFERENCES departements(id),
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    cout DECIMAL(10,2),
    delai_traitement INTEGER, -- en jours
    documents_requis TEXT[],
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS utilisateurs (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telephone VARCHAR(20),
    mot_de_passe VARCHAR(255) NOT NULL,
    date_naissance DATE,
    genre VARCHAR(10),
    adresse TEXT,
    ville VARCHAR(100),
    pays VARCHAR(100) DEFAULT 'Burkina Faso',
    verification_email BOOLEAN DEFAULT FALSE,
    actif BOOLEAN DEFAULT TRUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50) UNIQUE NOT NULL,
    niveau niveau_role NOT NULL,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS permissions (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS roles_permissions (
    role_id INTEGER REFERENCES roles(id),
    permission_id INTEGER REFERENCES permissions(id),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE IF NOT EXISTS utilisateurs_roles (
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    role_id INTEGER REFERENCES roles(id),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (utilisateur_id, role_id)
);

CREATE TABLE IF NOT EXISTS agents (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    departement_id INTEGER REFERENCES departements(id),
    matricule VARCHAR(50) UNIQUE NOT NULL,
    poste VARCHAR(100),
    date_embauche DATE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS regions (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    code VARCHAR(10) UNIQUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS provinces (
    id SERIAL PRIMARY KEY,
    region_id INTEGER REFERENCES regions(id),
    nom VARCHAR(100) NOT NULL,
    code VARCHAR(10) UNIQUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS communes (
    id SERIAL PRIMARY KEY,
    province_id INTEGER REFERENCES provinces(id),
    nom VARCHAR(100) NOT NULL,
    type VARCHAR(50), -- urbaine ou rurale
    population INTEGER,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création du type énuméré pour les niveaux de rôle
CREATE TYPE niveau_role AS ENUM (
    'super_admin',
    'admin_ministeriel',
    'chef_departement',
    'chef_region',
    'superviseur',
    'reviseur',
    'agent'
);

-- Création des tables de structure organisationnelle
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    niveau niveau_role NOT NULL,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS permissions (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    code VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS permissions_role (
    role_id INTEGER REFERENCES roles(id),
    permission_id INTEGER REFERENCES permissions(id),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE IF NOT EXISTS regions_departement (
    id SERIAL PRIMARY KEY,
    departement_id INTEGER REFERENCES departements(id),
    region_id INTEGER REFERENCES regions(id),
    adresse TEXT,
    telephone VARCHAR(20),
    email VARCHAR(255),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(departement_id, region_id)
);

-- Création des tables de gestion du personnel et des services
CREATE TABLE IF NOT EXISTS agents (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    matricule VARCHAR(50) UNIQUE,
    ministere_id INTEGER REFERENCES ministeres(id),
    departement_id INTEGER REFERENCES departements(id),
    region_id INTEGER REFERENCES regions(id),
    role_id INTEGER REFERENCES roles(id),
    superviseur_id INTEGER REFERENCES agents(id),
    prenom VARCHAR(100) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telephone VARCHAR(20),
    statut VARCHAR(20) DEFAULT 'actif',
    date_embauche DATE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création des tables de gestion des workflows et documents
CREATE TABLE IF NOT EXISTS modeles_flux_travail (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    duree_estimee INTEGER, -- en jours
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS etapes_flux_travail (
    id SERIAL PRIMARY KEY,
    flux_travail_id INTEGER REFERENCES modeles_flux_travail(id),
    numero_etape INTEGER NOT NULL,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    role_requis niveau_role,
    duree_estimee INTEGER, -- en heures
    obligatoire BOOLEAN DEFAULT TRUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création des tables de sécurité et de suivi
CREATE TABLE IF NOT EXISTS journaux_securite (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    agent_id INTEGER REFERENCES agents(id),
    type_evenement VARCHAR(50) NOT NULL,
    details_evenement JSONB,
    adresse_ip VARCHAR(45),
    agent_utilisateur TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la fonction de mise à jour automatique
CREATE OR REPLACE FUNCTION maj_date_modification()
RETURNS TRIGGER AS $$
BEGIN
    NEW.date_modification = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Création des déclencheurs
CREATE TRIGGER maj_ministeres_date_modification
    BEFORE UPDATE ON ministeres
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

CREATE TRIGGER maj_utilisateurs_date_modification
    BEFORE UPDATE ON utilisateurs
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_agents_date_modification
    BEFORE UPDATE ON agents
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

-- Ajout des index pour l'optimisation
CREATE INDEX idx_departements_ministere ON departements(ministere_id);
CREATE INDEX idx_services_departement ON services(departement_id);
CREATE INDEX idx_utilisateurs_email ON utilisateurs(email);
CREATE INDEX idx_agents_utilisateur ON agents(utilisateur_id);
CREATE INDEX idx_agents_departement ON agents(departement_id);
CREATE INDEX idx_provinces_region ON provinces(region_id);
CREATE INDEX idx_communes_province ON communes(province_id);

-- Commentaires sur les tables
COMMENT ON TABLE ministeres IS 'Liste des ministères';
COMMENT ON TABLE departements IS 'Départements au sein des ministères';
COMMENT ON TABLE services IS 'Services offerts par les départements';
COMMENT ON TABLE utilisateurs IS 'Utilisateurs du système';
COMMENT ON TABLE roles IS 'Rôles disponibles dans le système';
COMMENT ON TABLE permissions IS 'Permissions disponibles dans le système';
COMMENT ON TABLE roles_permissions IS 'Association entre rôles et permissions';
COMMENT ON TABLE utilisateurs_roles IS 'Association entre utilisateurs et rôles';
COMMENT ON TABLE agents IS 'Agents des ministères et départements';
COMMENT ON TABLE regions IS 'Régions du Burkina Faso';
COMMENT ON TABLE provinces IS 'Provinces du Burkina Faso';
COMMENT ON TABLE communes IS 'Communes du Burkina Faso'; 