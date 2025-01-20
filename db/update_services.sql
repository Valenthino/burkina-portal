-- Add services for Function publique
INSERT INTO services (title, description, ministry_id, category, url) VALUES
('Concours de la fonction publique', 'Inscription aux concours de la fonction publique', (SELECT id FROM ministries WHERE short_name = 'Fonction Publique'), 'Recrutement', 'https://fonction-publique.gov.bf/concours'),
('Déclaration CARFO', 'Gestion des déclarations à la CARFO', (SELECT id FROM ministries WHERE short_name = 'Fonction Publique'), 'Protection sociale', 'https://fonction-publique.gov.bf/carfo'),
('Retraite en ligne', 'Gestion des dossiers de retraite', (SELECT id FROM ministries WHERE short_name = 'Fonction Publique'), 'Retraite', 'https://fonction-publique.gov.bf/retraite');

-- Add services for Communication
INSERT INTO services (title, description, ministry_id, category, url) VALUES
('Autorisation de tournage', 'Demande d''autorisation de tournage', (SELECT id FROM ministries WHERE short_name = 'Communication'), 'Culture', 'https://communication.gov.bf/tournage'),
('Accréditation presse', 'Demande d''accréditation pour les journalistes', (SELECT id FROM ministries WHERE short_name = 'Communication'), 'Presse', 'https://communication.gov.bf/presse'),
('Promotion touristique', 'Services de promotion touristique', (SELECT id FROM ministries WHERE short_name = 'Communication'), 'Tourisme', 'https://communication.gov.bf/tourisme');

-- Add services for Action humanitaire
INSERT INTO services (title, description, ministry_id, category, url) VALUES
('Aide d''urgence', 'Demande d''aide humanitaire d''urgence', (SELECT id FROM ministries WHERE short_name = 'Action Humanitaire'), 'Urgence', 'https://action-humanitaire.gov.bf/urgence'),
('Don en ligne', 'Plateforme de dons pour les causes humanitaires', (SELECT id FROM ministries WHERE short_name = 'Action Humanitaire'), 'Solidarité', 'https://action-humanitaire.gov.bf/dons'),
('Assistance sociale', 'Demande d''assistance sociale', (SELECT id FROM ministries WHERE short_name = 'Action Humanitaire'), 'Social', 'https://action-humanitaire.gov.bf/assistance');

-- Add services for Infrastructures
INSERT INTO services (title, description, ministry_id, category, url) VALUES
('Signalement routier', 'Signalement de problèmes sur les routes', (SELECT id FROM ministries WHERE short_name = 'Infrastructures'), 'Routes', 'https://infrastructures.gov.bf/signalement'),
('Permis de construire', 'Demande de permis de construire', (SELECT id FROM ministries WHERE short_name = 'Infrastructures'), 'Construction', 'https://infrastructures.gov.bf/permis'),
('Marchés publics', 'Consultation des marchés publics d''infrastructure', (SELECT id FROM ministries WHERE short_name = 'Infrastructures'), 'Marchés', 'https://infrastructures.gov.bf/marches');

-- Add services for Education de Base
INSERT INTO services (title, description, ministry_id, category, url) VALUES
('Inscription scolaire', 'Inscription des élèves dans les écoles primaires', (SELECT id FROM ministries WHERE short_name = 'Education de Base'), 'Education', 'https://education-base.gov.bf/inscription'),
('Résultats CEP', 'Consultation des résultats du CEP', (SELECT id FROM ministries WHERE short_name = 'Education de Base'), 'Examens', 'https://education-base.gov.bf/resultats'),
('Formation enseignants', 'Plateforme de formation continue des enseignants', (SELECT id FROM ministries WHERE short_name = 'Education de Base'), 'Formation', 'https://education-base.gov.bf/formation');

-- Add more services for existing ministries
-- Defense
INSERT INTO services (title, description, ministry_id, category, url) VALUES
('Anciens combattants', 'Services pour les anciens combattants', (SELECT id FROM ministries WHERE short_name = 'Défense'), 'Anciens Combattants', 'https://defense.gov.bf/anciens-combattants'),
('Réserviste', 'Inscription comme réserviste', (SELECT id FROM ministries WHERE short_name = 'Défense'), 'Réserve', 'https://defense.gov.bf/reserve');

-- Agriculture
INSERT INTO services (title, description, ministry_id, category, url) VALUES
('Licence de pêche', 'Demande de licence de pêche', (SELECT id FROM ministries WHERE short_name = 'Agriculture'), 'Pêche', 'https://agriculture.gov.bf/peche'),
('Certification élevage', 'Certification pour l''élevage', (SELECT id FROM ministries WHERE short_name = 'Agriculture'), 'Élevage', 'https://agriculture.gov.bf/elevage');

-- Santé
INSERT INTO services (title, description, ministry_id, category, url) VALUES
('Carte CNAM', 'Demande de carte d''assurance maladie', (SELECT id FROM ministries WHERE short_name = 'Santé'), 'Assurance', 'https://sante.gov.bf/cnam'),
('Licence pharmacie', 'Demande de licence pour pharmacie', (SELECT id FROM ministries WHERE short_name = 'Santé'), 'Pharmacie', 'https://sante.gov.bf/pharmacie'); 