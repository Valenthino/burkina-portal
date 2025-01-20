-- Table des ministères
CREATE TABLE IF NOT EXISTS ministeres (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  categorie VARCHAR(100),
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des missions des ministères
CREATE TABLE IF NOT EXISTS missions_ministere (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  ministere_id INTEGER REFERENCES ministeres(id) ON DELETE CASCADE,
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des services des ministères
CREATE TABLE IF NOT EXISTS services_ministere (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  ministere_id INTEGER REFERENCES ministeres(id) ON DELETE CASCADE,
  type VARCHAR(50) DEFAULT 'service', -- 'service' or 'direct'
  route_type VARCHAR(50) DEFAULT 'local', -- 'local', 'external', or 'info'
  external_url VARCHAR(255),
  slug VARCHAR(100) NOT NULL,
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger pour mettre à jour la date de modification
CREATE OR REPLACE FUNCTION maj_date_modification()
RETURNS TRIGGER AS $$
BEGIN
  NEW.date_modification = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER maj_ministeres_date_modification
  BEFORE UPDATE ON ministeres
  FOR EACH ROW
  EXECUTE FUNCTION maj_date_modification(); 