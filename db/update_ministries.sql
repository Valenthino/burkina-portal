-- First, update existing ministries
UPDATE ministries 
SET name = 'Ministre d''État, Ministre de la Défense et des Anciens Combattants',
    minister = 'Général de Brigade Célestin SIMPORE',
    description = 'Gestion de la défense nationale et des anciens combattants'
WHERE short_name = 'Défense';

UPDATE ministries 
SET name = 'Ministre d''État, Ministre de l''Agriculture, des Ressources animales et halieutiques',
    minister = 'Commandant Ismaël SOMBIE',
    description = 'Gestion de l''agriculture, de l''élevage et des ressources halieutiques'
WHERE short_name = 'Agriculture';

UPDATE ministries 
SET name = 'Ministre de l''Économie et des Finances',
    minister = 'Monsieur Aboubakar NACANABO',
    description = 'Gestion des finances publiques et de l''économie nationale'
WHERE short_name = 'Economie';

UPDATE ministries 
SET name = 'Ministre de la Santé',
    minister = 'Monsieur Robert Lucien Jean-Claude KARGOUGOU',
    description = 'Politique nationale de santé et gestion des services de santé'
WHERE short_name = 'Santé';

-- Insert new ministries
INSERT INTO ministries (name, short_name, minister, description, slug) VALUES
('Ministre d''État, Ministre de l''Administration territoriale et de la Mobilité', 'Administration', 'Monsieur Emile ZERBO', 'Gestion de l''administration territoriale et de la mobilité', 'administration'),

('Ministre de la Sécurité', 'Sécurité', 'Commissaire divisionnaire de Police Mahamadou SANA', 'Gestion de la sécurité intérieure', 'securite'),

('Ministre des Affaires étrangères', 'Affaires Étrangères', 'Monsieur Karamoko Jean Marie TRAORE', 'Gestion des relations internationales et de la diaspora', 'affaires-etrangeres'),

('Ministre de la Fonction publique', 'Fonction Publique', 'Monsieur Mathias TRAORE', 'Gestion de la fonction publique et de la protection sociale', 'fonction-publique'),

('Ministre de la Communication', 'Communication', 'Monsieur Pingdwendé Gilbert OUEDRAOGO', 'Gestion de la communication, culture, arts et tourisme', 'communication'),

('Ministre de l''Action humanitaire', 'Action Humanitaire', 'Commandant Passowendé Pélagie KABRE/KABORE', 'Gestion de l''action humanitaire et de la solidarité nationale', 'action-humanitaire'),

('Ministre de la Justice', 'Justice', 'Monsieur Edasso Rodrigue BAYALA', 'Administration de la justice et protection des droits humains', 'justice'),

('Ministre de la Transition digitale', 'Digital', 'Madame Aminata ZERBO/SABANE', 'Gestion de la transformation numérique et des communications', 'digital'),

('Ministre de l''Industrie', 'Industrie', 'Monsieur Serge Gnaniodem PODA', 'Développement industriel, commercial et artisanal', 'industrie'),

('Ministre des Infrastructures', 'Infrastructures', 'Monsieur Adama Luc SORGHO', 'Développement des infrastructures et désenclavement', 'infrastructures'),

('Ministre de l''Énergie', 'Énergie', 'Monsieur Yacouba Zabré GOUBA', 'Gestion des ressources énergétiques et minières', 'energie'),

('Ministre de l''Enseignement de base', 'Education de Base', 'Monsieur Jacques Sosthène DINGARA', 'Gestion de l''éducation de base et alphabétisation', 'education-base');

-- Add corresponding services for new ministries
INSERT INTO services (title, description, ministry_id, category, url) VALUES
-- Administration territoriale services
('Carte d''identité nationale', 'Demande et renouvellement de la carte d''identité', (SELECT id FROM ministries WHERE short_name = 'Administration'), 'Documentation', 'https://administration.gov.bf/cni'),
('Déclaration de résidence', 'Processus de déclaration de changement de résidence', (SELECT id FROM ministries WHERE short_name = 'Administration'), 'Administration', 'https://administration.gov.bf/residence'),

-- Sécurité services
('Déclaration d''incident', 'Système de déclaration d''incidents de sécurité', (SELECT id FROM ministries WHERE short_name = 'Sécurité'), 'Sécurité', 'https://securite.gov.bf/incident'),
('Permis de port d''arme', 'Demande de permis de port d''arme', (SELECT id FROM ministries WHERE short_name = 'Sécurité'), 'Autorisation', 'https://securite.gov.bf/armes'),

-- Affaires étrangères services
('Demande de passeport', 'Processus de demande de passeport', (SELECT id FROM ministries WHERE short_name = 'Affaires Étrangères'), 'Documentation', 'https://mae.gov.bf/passeport'),
('Visa en ligne', 'Demande de visa en ligne', (SELECT id FROM ministries WHERE short_name = 'Affaires Étrangères'), 'Immigration', 'https://mae.gov.bf/visa'),

-- Justice services
('Casier judiciaire', 'Demande de casier judiciaire', (SELECT id FROM ministries WHERE short_name = 'Justice'), 'Justice', 'https://justice.gov.bf/casier'),
('Assistance juridique', 'Demande d''assistance juridique', (SELECT id FROM ministries WHERE short_name = 'Justice'), 'Aide', 'https://justice.gov.bf/assistance'),

-- Digital services
('Certification électronique', 'Demande de certification électronique', (SELECT id FROM ministries WHERE short_name = 'Digital'), 'Digital', 'https://digital.gov.bf/certification'),
('Portail de données ouvertes', 'Accès aux données publiques', (SELECT id FROM ministries WHERE short_name = 'Digital'), 'Data', 'https://digital.gov.bf/donnees'),

-- Industrie services
('Licence commerciale', 'Demande de licence commerciale', (SELECT id FROM ministries WHERE short_name = 'Industrie'), 'Commerce', 'https://industrie.gov.bf/licence'),
('Certification qualité', 'Processus de certification qualité', (SELECT id FROM ministries WHERE short_name = 'Industrie'), 'Certification', 'https://industrie.gov.bf/qualite'),

-- Énergie services
('Raccordement électrique', 'Demande de raccordement au réseau électrique', (SELECT id FROM ministries WHERE short_name = 'Énergie'), 'Énergie', 'https://energie.gov.bf/raccordement'),
('Permis minier', 'Demande de permis d''exploitation minière', (SELECT id FROM ministries WHERE short_name = 'Énergie'), 'Mines', 'https://energie.gov.bf/mines'); 