-- Add slug column if it doesn't exist
ALTER TABLE ministeres ADD COLUMN IF NOT EXISTS slug VARCHAR(255);

-- Create unique index for slug
CREATE UNIQUE INDEX IF NOT EXISTS ministeres_slug_idx ON ministeres (slug);

-- Update the trigger function to handle slug generation
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

-- Update existing records to generate slugs
UPDATE ministeres SET slug = lower(regexp_replace(
  translate(
    nom,
    'àáâãäçèéêëìíîïñòóôõöùúûüýÿ',
    'aaaaaceeeeiiiinooooouuuuyy'
  ),
  '[^a-z0-9]+', '-', 'g'
)) WHERE slug IS NULL; 