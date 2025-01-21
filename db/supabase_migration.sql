-- Enable Row Level Security
ALTER TABLE ministeres ENABLE ROW LEVEL SECURITY;
ALTER TABLE missions_ministere ENABLE ROW LEVEL SECURITY;
ALTER TABLE services_ministere ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON ministeres
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON missions_ministere
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON services_ministere
    FOR SELECT USING (true);

-- Create tables if they don't exist
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

-- Create trigger function for updating modification date
CREATE OR REPLACE FUNCTION maj_date_modification()
RETURNS TRIGGER AS $$
BEGIN
    NEW.date_modification = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER maj_ministeres_date_modification
    BEFORE UPDATE ON ministeres
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ministeres_categorie ON ministeres(categorie);
CREATE INDEX IF NOT EXISTS idx_services_ministere_slug ON services_ministere(slug);
CREATE INDEX IF NOT EXISTS idx_services_ministere_ministere_id ON services_ministere(ministere_id);
CREATE INDEX IF NOT EXISTS idx_missions_ministere_ministere_id ON missions_ministere(ministere_id); 