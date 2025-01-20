-- Add category column to services
ALTER TABLE services_ministere 
ADD COLUMN category VARCHAR(50),
ADD COLUMN parent_slug VARCHAR(100),
ADD COLUMN canonical_url VARCHAR(255);

-- Update categories and URLs
UPDATE services_ministere
SET 
  category = CASE
    -- Citoyens
    WHEN nom IN (
      'État Civil',
      'Services Territoriaux',
      'Hôpitaux et Cliniques',
      'Prévention',
      'Formation Médicale',
      'Services Pénitentiaires',
      'Aide Juridictionnelle'
    ) THEN 'citoyens'
    
    -- Entreprises
    WHEN nom IN (
      'Marchés Publics',
      'Budget et Trésor Public',
      'Impôts et Taxes',
      'Douanes',
      'Production Agricole',
      'Élevage'
    ) THEN 'entreprises'
    
    -- International
    WHEN nom IN (
      'Services Consulaires',
      'Coopération Internationale',
      'Diaspora',
      'Relations Bilatérales'
    ) THEN 'international'
    
    -- Securite
    WHEN nom IN (
      'Forces Armées Nationales',
      'Gendarmerie Nationale',
      'Protection Civile',
      'Service National'
    ) THEN 'securite'
    
    ELSE 'ministeres'
  END,
  
  -- Set parent slugs for hierarchical organization
  parent_slug = CASE
    -- Citoyens subcategories
    WHEN nom IN ('État Civil', 'Services Territoriaux') THEN 'administration'
    WHEN nom IN ('Hôpitaux et Cliniques', 'Prévention', 'Formation Médicale') THEN 'sante'
    WHEN nom IN ('Services Pénitentiaires', 'Aide Juridictionnelle', 'Tribunaux et Cours') THEN 'justice'
    
    -- Entreprises subcategories
    WHEN nom IN ('Marchés Publics', 'Budget et Trésor Public') THEN 'finances'
    WHEN nom IN ('Impôts et Taxes', 'Douanes') THEN 'fiscalite'
    WHEN nom IN ('Production Agricole', 'Élevage', 'Pêche') THEN 'agriculture'
    
    -- International subcategories
    WHEN nom IN ('Services Consulaires', 'Diaspora') THEN 'services'
    WHEN nom IN ('Coopération Internationale', 'Relations Bilatérales') THEN 'cooperation'
    
    -- Securite subcategories
    WHEN nom IN ('Forces Armées Nationales', 'Service National') THEN 'defense'
    WHEN nom IN ('Gendarmerie Nationale', 'Protection Civile') THEN 'protection'
    
    ELSE NULL
  END,
  
  -- Update slugs to be more concise
  slug = CASE
    WHEN nom = 'État Civil' THEN 'etat-civil'
    WHEN nom = 'Services Territoriaux' THEN 'services-territoriaux'
    WHEN nom = 'Hôpitaux et Cliniques' THEN 'hopitaux'
    WHEN nom = 'Prévention' THEN 'prevention'
    WHEN nom = 'Formation Médicale' THEN 'formation'
    WHEN nom = 'Services Pénitentiaires' THEN 'penitentiaire'
    WHEN nom = 'Aide Juridictionnelle' THEN 'aide-juridique'
    WHEN nom = 'Marchés Publics' THEN 'marches-publics'
    WHEN nom = 'Budget et Trésor Public' THEN 'tresor'
    WHEN nom = 'Impôts et Taxes' THEN 'impots'
    WHEN nom = 'Douanes' THEN 'douanes'
    WHEN nom = 'Production Agricole' THEN 'production'
    WHEN nom = 'Élevage' THEN 'elevage'
    WHEN nom = 'Services Consulaires' THEN 'consulaires'
    WHEN nom = 'Coopération Internationale' THEN 'cooperation'
    WHEN nom = 'Diaspora' THEN 'diaspora'
    WHEN nom = 'Relations Bilatérales' THEN 'bilaterales'
    WHEN nom = 'Forces Armées Nationales' THEN 'forces-armees'
    WHEN nom = 'Gendarmerie Nationale' THEN 'gendarmerie'
    WHEN nom = 'Protection Civile' THEN 'protection-civile'
    WHEN nom = 'Service National' THEN 'service-national'
    ELSE LOWER(REPLACE(REPLACE(nom, ' ', '-'), '''', ''))
  END;

-- Set canonical URLs for services that can be accessed through multiple paths
UPDATE services_ministere
SET canonical_url = CASE
  -- Example: État Civil can be accessed via both ministry and citizens routes
  WHEN nom = 'État Civil' THEN '/citoyens/administration/etat-civil'
  WHEN nom = 'Hôpitaux et Cliniques' THEN '/citoyens/sante/hopitaux'
  WHEN nom = 'Marchés Publics' THEN '/entreprises/finances/marches-publics'
  WHEN nom = 'Services Consulaires' THEN '/international/services/consulaires'
  WHEN nom = 'Gendarmerie Nationale' THEN '/securite/protection/gendarmerie'
  ELSE NULL
END; 