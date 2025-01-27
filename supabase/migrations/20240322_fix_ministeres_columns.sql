-- Drop and recreate the ministeres table with all required columns
DROP TABLE IF EXISTS ministeres CASCADE;

CREATE TABLE ministeres (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    nom_court VARCHAR(255),
    ministre VARCHAR(255),
    description TEXT,
    slug VARCHAR(255) UNIQUE,
    est_actif BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create missions_ministere table
CREATE TABLE IF NOT EXISTS missions_ministere (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    description TEXT NOT NULL,
    ministere_id UUID REFERENCES ministeres(id) ON DELETE CASCADE,
    ordre INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create services_ministere table
CREATE TABLE IF NOT EXISTS services_ministere (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    ministere_id UUID REFERENCES ministeres(id) ON DELETE CASCADE,
    type VARCHAR(50) DEFAULT 'service',
    route_type VARCHAR(50) DEFAULT 'local',
    external_url VARCHAR(255),
    slug VARCHAR(255),
    categorie VARCHAR(100),
    sous_categorie VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes
CREATE INDEX IF NOT EXISTS ministeres_nom_idx ON ministeres(nom);
CREATE INDEX IF NOT EXISTS ministeres_slug_idx ON ministeres(slug);
CREATE INDEX IF NOT EXISTS missions_ministere_ministere_id_idx ON missions_ministere(ministere_id);
CREATE INDEX IF NOT EXISTS services_ministere_ministere_id_idx ON services_ministere(ministere_id);

-- Insert sample data
INSERT INTO ministeres (nom, nom_court, ministre, description, est_actif) VALUES
('Ministère de la Défense', 'MINDEFENSE', 'Général de Brigade Célestin SIMPORE', 'Ministère chargé de la défense nationale et de la sécurité du territoire', true),
('Ministère de l''Administration Territoriale', 'MINAT', 'Emile ZERBO', 'Ministère chargé de l''administration du territoire et de la décentralisation', true),
('Ministère de l''Économie et des Finances', 'MINEFIN', 'Aboubakar NACANABO', 'Ministère chargé de l''économie et des finances publiques', true);

-- Insert sample missions
INSERT INTO missions_ministere (description, ministere_id, ordre) 
SELECT 'Assurer la défense nationale', id, 1
FROM ministeres 
WHERE nom = 'Ministère de la Défense';

INSERT INTO missions_ministere (description, ministere_id, ordre)
SELECT 'Gérer l''administration territoriale', id, 1
FROM ministeres
WHERE nom = 'Ministère de l''Administration Territoriale';

-- Insert sample services
INSERT INTO services_ministere (nom, description, ministere_id, type, route_type)
SELECT 
    'Service National',
    'Gestion du service national',
    id,
    'service',
    'local'
FROM ministeres
WHERE nom = 'Ministère de la Défense'; 