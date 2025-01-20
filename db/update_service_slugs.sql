-- Update slugs for direct services to be shorter and more consistent
UPDATE services_ministere
SET slug = CASE
  -- Defense services
  WHEN nom = 'Forces Armées Nationales' THEN 'forces-armees'
  WHEN nom = 'Gendarmerie Nationale' THEN 'gendarmerie'
  WHEN nom = 'Service National' THEN 'service-national'
  WHEN nom = 'Anciens Combattants' THEN 'anciens-combattants'
  
  -- Affaires étrangères services
  WHEN nom = 'Services Consulaires' THEN 'services-consulaires'
  WHEN nom = 'Coopération Internationale' THEN 'cooperation'
  WHEN nom = 'Diaspora' THEN 'diaspora'
  WHEN nom = 'Relations Bilatérales' THEN 'relations-bilaterales'
  
  -- Justice services
  WHEN nom = 'Tribunaux et Cours' THEN 'tribunaux'
  WHEN nom = 'Droits Humains' THEN 'droits-humains'
  WHEN nom = 'Services Pénitentiaires' THEN 'penitentiaire'
  WHEN nom = 'Aide Juridictionnelle' THEN 'aide-juridique'
  
  -- Économie services
  WHEN nom = 'Budget et Trésor Public' THEN 'tresor'
  WHEN nom = 'Impôts et Taxes' THEN 'impots'
  WHEN nom = 'Douanes' THEN 'douanes'
  WHEN nom = 'Marchés Publics' THEN 'marches-publics'
  
  -- Agriculture services
  WHEN nom = 'Production Agricole' THEN 'production'
  WHEN nom = 'Élevage' THEN 'elevage'
  WHEN nom = 'Pêche' THEN 'peche'
  WHEN nom = 'Recherche Agricole' THEN 'recherche'
  
  -- Santé services
  WHEN nom = 'Hôpitaux et Cliniques' THEN 'hopitaux'
  WHEN nom = 'Prévention' THEN 'prevention'
  WHEN nom = 'Hygiène Publique' THEN 'hygiene'
  WHEN nom = 'Formation Médicale' THEN 'formation-medicale'
  
  -- Administration territoriale services
  WHEN nom = 'Services Territoriaux' THEN 'territoires'
  WHEN nom = 'Collectivités Locales' THEN 'collectivites'
  WHEN nom = 'État Civil' THEN 'etat-civil'
  WHEN nom = 'Protection Civile' THEN 'protection-civile'
  
  ELSE LOWER(REPLACE(REPLACE(nom, ' ', '-'), '''', ''))
END
WHERE type IN ('service', 'direct');

-- Update route_type for services that should be direct
UPDATE services_ministere
SET route_type = 'direct'
WHERE nom IN (
  'Gendarmerie Nationale',
  'Service National',
  'Anciens Combattants',
  'Coopération Internationale',
  'Diaspora',
  'Relations Bilatérales',
  'Droits Humains',
  'Aide Juridictionnelle',
  'Marchés Publics',
  'Pêche',
  'Recherche Agricole',
  'Prévention',
  'Hygiène Publique',
  'Formation Médicale',
  'Collectivités Locales'
); 