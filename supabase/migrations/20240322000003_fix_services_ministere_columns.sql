-- Drop and recreate services_ministere table with all required columns
DROP TABLE IF EXISTS services_ministere CASCADE;

CREATE TABLE services_ministere (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    ministere_id UUID NOT NULL,
    type VARCHAR(50) DEFAULT 'service',
    route_type VARCHAR(50) DEFAULT 'local',
    external_url VARCHAR(255),
    slug VARCHAR(255),
    categorie VARCHAR(100),
    sous_categorie VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ministere_id) REFERENCES ministeres(id) ON DELETE CASCADE
);

-- Add indexes
CREATE INDEX IF NOT EXISTS services_ministere_ministere_id_idx ON services_ministere(ministere_id);
CREATE INDEX IF NOT EXISTS services_ministere_slug_idx ON services_ministere(slug);
CREATE INDEX IF NOT EXISTS services_ministere_categorie_idx ON services_ministere(categorie);
CREATE INDEX IF NOT EXISTS services_ministere_sous_categorie_idx ON services_ministere(sous_categorie);

-- Insert sample services data
INSERT INTO services_ministere (nom, description, ministere_id, type, route_type, categorie, sous_categorie) 
SELECT 
    'Service National',
    'Gestion du service national',
    id,
    'service',
    'local',
    'Défense',
    'Services Généraux'
FROM ministeres 
WHERE nom = 'Ministère de la Défense';

INSERT INTO services_ministere (nom, description, ministere_id, type, route_type, categorie, sous_categorie)
SELECT 
    'État Civil',
    'Services d''état civil et documentation',
    id,
    'service',
    'local',
    'Administration',
    'Services aux Citoyens'
FROM ministeres 
WHERE nom = 'Ministère de l''Administration Territoriale'; 