-- Drop only if exists and create services table
DO $$ 
BEGIN
    -- Drop only services-related objects if they exist
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'services') THEN
        DROP TABLE public.services CASCADE;
    END IF;
END $$;

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  contenu TEXT,
  ministere VARCHAR(255),
  categorie VARCHAR(100),
  est_actif BOOLEAN DEFAULT true,
  date_creation TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  date_modification TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster searches (IF NOT EXISTS to avoid errors)
CREATE INDEX IF NOT EXISTS services_titre_idx ON services (titre);
CREATE INDEX IF NOT EXISTS services_slug_idx ON services (slug);
CREATE INDEX IF NOT EXISTS services_ministere_idx ON services (ministere);
CREATE INDEX IF NOT EXISTS services_categorie_idx ON services (categorie);

-- Drop existing functions if they exist
DROP FUNCTION IF EXISTS generer_slug(TEXT) CASCADE;
DROP FUNCTION IF EXISTS definir_slug_service() CASCADE;

-- Function to generate slug from titre
CREATE OR REPLACE FUNCTION generer_slug(titre TEXT)
RETURNS TEXT AS $$
BEGIN
  -- Convert to lowercase
  titre := lower(titre);
  -- Replace accented characters
  titre := translate(titre, 'àáâãäçèéêëìíîïñòóôõöùúûüýÿ', 'aaaaaceeeeiiiinooooouuuuyy');
  -- Replace spaces and special characters with hyphens
  titre := regexp_replace(titre, '[^a-z0-9]+', '-', 'g');
  -- Remove leading and trailing hyphens
  titre := trim(both '-' from titre);
  RETURN titre;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically generate slug before insert
CREATE OR REPLACE FUNCTION definir_slug_service()
RETURNS TRIGGER AS $$
DECLARE
  base_slug TEXT;
  nouveau_slug TEXT;
  compteur INTEGER := 1;
BEGIN
  -- Generate the base slug
  base_slug := generer_slug(NEW.titre);
  nouveau_slug := base_slug;
  
  -- Check for existing slugs and append number if needed
  WHILE EXISTS (SELECT 1 FROM services WHERE slug = nouveau_slug AND id != NEW.id) LOOP
    compteur := compteur + 1;
    nouveau_slug := base_slug || '-' || compteur;
  END LOOP;
  
  NEW.slug := nouveau_slug;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop and recreate trigger to avoid duplicate triggers
DROP TRIGGER IF EXISTS services_definir_slug ON services;

CREATE TRIGGER services_definir_slug
  BEFORE INSERT OR UPDATE OF titre
  ON services
  FOR EACH ROW
  EXECUTE FUNCTION definir_slug_service();

-- Delete existing data from services table without dropping the table
TRUNCATE TABLE services CASCADE;

-- Insert test data
INSERT INTO services (titre, description, contenu, ministere, categorie, est_actif) VALUES
(
  'Carte Nationale d''Identité',
  'Procédure pour obtenir ou renouveler votre Carte Nationale d''Identité Burkinabè (CNIB)',
  '<h2>Documents nécessaires</h2><ul><li>Extrait d''acte de naissance</li><li>Certificat de nationalité</li><li>Photos d''identité</li></ul>',
  'Ministère de l''Administration Territoriale',
  'Documents & État Civil',
  true
),
(
  'Passeport',
  'Demande et renouvellement de passeport Burkinabè',
  '<h2>Conditions requises</h2><ul><li>CNIB valide</li><li>Acte de naissance</li><li>Photos aux normes</li></ul>',
  'Ministère de l''Administration Territoriale',
  'Documents & État Civil',
  true
),
(
  'Permis de Conduire',
  'Obtention et renouvellement du permis de conduire',
  '<h2>Procédure</h2><ul><li>Inscription à l''auto-école</li><li>Examen théorique</li><li>Examen pratique</li></ul>',
  'Ministère des Transports',
  'Transport',
  true
); 