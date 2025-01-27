-- Create ministeres table
CREATE TABLE IF NOT EXISTS ministeres (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  categorie VARCHAR(100),
  url_site VARCHAR(255),
  adresse TEXT,
  telephone VARCHAR(50),
  email VARCHAR(255),
  est_actif BOOLEAN DEFAULT true,
  date_creation TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  date_modification TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create missions_ministere table for ministry missions
CREATE TABLE IF NOT EXISTS missions_ministere (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  description TEXT NOT NULL,
  ministere_id UUID REFERENCES ministeres(id) ON DELETE CASCADE,
  ordre INTEGER DEFAULT 0,
  date_creation TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create services_ministere table for ministry services
CREATE TABLE IF NOT EXISTS services_ministere (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  ministere_id UUID REFERENCES ministeres(id) ON DELETE CASCADE,
  type VARCHAR(50) DEFAULT 'service',
  route_type VARCHAR(50) DEFAULT 'local',
  external_url VARCHAR(255),
  slug VARCHAR(255),
  date_creation TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes
CREATE INDEX IF NOT EXISTS ministeres_nom_idx ON ministeres (nom);
CREATE INDEX IF NOT EXISTS ministeres_categorie_idx ON ministeres (categorie);
CREATE INDEX IF NOT EXISTS missions_ministere_ministere_id_idx ON missions_ministere (ministere_id);
CREATE INDEX IF NOT EXISTS services_ministere_ministere_id_idx ON services_ministere (ministere_id);
CREATE INDEX IF NOT EXISTS services_ministere_slug_idx ON services_ministere (slug);

-- Function to generate slug for ministeres
CREATE OR REPLACE FUNCTION generer_slug_ministere()
RETURNS TRIGGER AS $$
DECLARE
  base_slug TEXT;
  nouveau_slug TEXT;
  compteur INTEGER := 1;
BEGIN
  -- Generate base slug from ministry name
  base_slug := lower(regexp_replace(
    translate(
      NEW.nom,
      'àáâãäçèéêëìíîïñòóôõöùúûüýÿ',
      'aaaaaceeeeiiiinooooouuuuyy'
    ),
    '[^a-z0-9]+', '-', 'g'
  ));
  
  -- Remove leading and trailing hyphens
  base_slug := trim(both '-' from base_slug);
  nouveau_slug := base_slug;
  
  -- Handle duplicates
  WHILE EXISTS (
    SELECT 1 FROM ministeres 
    WHERE slug = nouveau_slug 
    AND id != NEW.id
  ) LOOP
    compteur := compteur + 1;
    nouveau_slug := base_slug || '-' || compteur;
  END LOOP;
  
  NEW.slug := nouveau_slug;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic slug generation
CREATE TRIGGER ministeres_before_insert_update
  BEFORE INSERT OR UPDATE OF nom
  ON ministeres
  FOR EACH ROW
  EXECUTE FUNCTION generer_slug_ministere();

-- Insert sample data
INSERT INTO ministeres (nom, description, categorie) VALUES
('Ministère de l''Administration Territoriale', 'Administration territoriale et sécurité intérieure', 'Administration'),
('Ministère de la Justice', 'Justice et droits humains', 'Justice'),
('Ministère de la Défense', 'Défense nationale et sécurité', 'Défense');

-- Insert sample missions
INSERT INTO missions_ministere (description, ministere_id, ordre) 
SELECT 
  'Assurer la sécurité intérieure du territoire',
  id,
  1
FROM ministeres 
WHERE nom = 'Ministère de l''Administration Territoriale';

-- Insert sample services
INSERT INTO services_ministere (nom, description, ministere_id, type, route_type) 
SELECT 
  'Carte Nationale d''Identité',
  'Service de délivrance des cartes nationales d''identité',
  id,
  'service',
  'local'
FROM ministeres 
WHERE nom = 'Ministère de l''Administration Territoriale'; 