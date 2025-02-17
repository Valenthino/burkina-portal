-- Add new columns for better organization
ALTER TABLE services ADD COLUMN IF NOT EXISTS section VARCHAR(100);
ALTER TABLE services ADD COLUMN IF NOT EXISTS sous_section VARCHAR(100);
ALTER TABLE services ADD COLUMN IF NOT EXISTS url_existante VARCHAR(255);
ALTER TABLE services ADD COLUMN IF NOT EXISTS ordre INTEGER DEFAULT 0;

-- Create index for new columns
CREATE INDEX IF NOT EXISTS services_section_idx ON services (section);
CREATE INDEX IF NOT EXISTS services_sous_section_idx ON services (sous_section);

-- Drop existing functions and triggers
DROP FUNCTION IF EXISTS generer_slug(TEXT) CASCADE;
DROP FUNCTION IF EXISTS definir_slug_service() CASCADE;
DROP TRIGGER IF EXISTS services_definir_slug ON services;

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

CREATE TRIGGER services_definir_slug
  BEFORE INSERT OR UPDATE OF titre
  ON services
  FOR EACH ROW
  EXECUTE FUNCTION definir_slug_service();

-- Truncate and reinsert data with proper categorization
TRUNCATE TABLE services CASCADE;

-- Insert services with proper sections and existing URLs
INSERT INTO services (
    titre,
    description,
    contenu,
    ministere,
    categorie,
    section,
    sous_section,
    url_existante,
    ordre,
    est_actif
) VALUES
(
    'Passeport',
    'Procédure pour obtenir ou renouveler votre passeport Burkinabè',
    '<h2>Documents Requis</h2>
    <ul>
        <li>CNIB valide</li>
        <li>Extrait d''acte de naissance</li>
        <li>4 photos d''identité aux normes biométriques</li>
        <li>Justificatif de profession</li>
        <li>Ancien passeport (en cas de renouvellement)</li>
    </ul>
    <h2>Procédure</h2>
    <ol>
        <li>Prendre rendez-vous en ligne sur le site de la Police Nationale</li>
        <li>Se présenter au service des passeports avec les documents requis</li>
        <li>Effectuer la capture des données biométriques</li>
        <li>Payer les frais (25 000 FCFA pour le passeport ordinaire)</li>
        <li>Retirer le passeport sous 2 à 3 semaines</li>
    </ol>
    <h2>Informations Importantes</h2>
    <ul>
        <li>Validité : 5 ans</li>
        <li>Délai de traitement : 2 à 3 semaines</li>
        <li>Présence physique obligatoire</li>
    </ul>',
    'Ministère de la Sécurité',
    'Documents Officiels',
    'citoyens',
    'etat-civil',
    'citoyens/etat-civil/passeport',
    1,
    true
),
(
    'Carte Nationale d''Identité Burkinabè (CNIB)',
    'Procédure pour obtenir ou renouveler votre Carte Nationale d''Identité Burkinabè',
    '<h2>Documents Requis</h2>
    <ul>
        <li>Extrait d''acte de naissance original</li>
        <li>Certificat de nationalité burkinabè</li>
        <li>2 photos d''identité récentes</li>
        <li>Ancienne CNIB (en cas de renouvellement)</li>
    </ul>
    <h2>Procédure</h2>
    <ol>
        <li>Se présenter au centre d''établissement CNIB le plus proche</li>
        <li>Présenter les documents requis</li>
        <li>Effectuer la capture des données biométriques</li>
        <li>Payer les frais (1 000 FCFA)</li>
        <li>Retirer la CNIB dans un délai de 72 heures</li>
    </ol>
    <h2>Informations Importantes</h2>
    <ul>
        <li>Validité : 10 ans</li>
        <li>Délai de traitement : 72 heures</li>
        <li>Document obligatoire à partir de 15 ans</li>
    </ul>',
    'Ministère de l''Administration Territoriale',
    'Documents Officiels',
    'citoyens',
    'etat-civil',
    'citoyens/etat-civil/carte-identite',
    2,
    true
),
(
    'Certificat de Nationalité',
    'Obtention du certificat de nationalité burkinabè',
    '<h2>Documents Requis</h2>
    <ul>
        <li>Extrait d''acte de naissance</li>
        <li>Photocopie CNIB ou passeport des parents</li>
        <li>Certificat de résidence</li>
        <li>2 photos d''identité</li>
    </ul>
    <h2>Procédure</h2>
    <ol>
        <li>Déposer le dossier au tribunal</li>
        <li>Payer les frais de timbre</li>
        <li>Attendre la convocation pour l''audience</li>
        <li>Retirer le certificat après délibération</li>
    </ol>',
    'Ministère de la Justice',
    'Documents Officiels',
    'citoyens',
    'etat-civil',
    'citoyens/etat-civil/certificat-nationalite',
    3,
    true
),
(
    'Extrait d''Acte de Naissance',
    'Demande d''extrait d''acte de naissance',
    '<h2>Procédure</h2>
    <ol>
        <li>Se présenter à la mairie du lieu de naissance</li>
        <li>Fournir les informations sur l''acte (numéro, année)</li>
        <li>Payer les frais de timbre</li>
        <li>Retirer l''extrait</li>
    </ol>
    <h2>Informations Utiles</h2>
    <ul>
        <li>Coût : 200 FCFA</li>
        <li>Délai : Immédiat à 24h</li>
        <li>Validité : 3 mois</li>
    </ul>',
    'Ministère de l''Administration Territoriale',
    'Documents Officiels',
    'citoyens',
    'etat-civil',
    'citoyens/etat-civil/acte-naissance',
    4,
    true
); 