-- Seed Users
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@burkina-portal.gov.bf', '$2b$10$xxxxxxxxxxx', 'admin'),
('Regular User', 'user@example.com', '$2b$10$xxxxxxxxxxx', 'user');

-- Seed Ministries
INSERT INTO ministries (name, short_name, minister, description, slug) VALUES
('Ministère de la Défense', 'Défense', 'Colonel-Major Kassoum COULIBALY', 'Sécurité nationale et gestion des forces armées', 'defense'),
('Ministère de l''Education Nationale', 'Education', 'Joseph André OUEDRAOGO', 'Gestion du système éducatif national', 'education'),
('Ministère de la Santé', 'Santé', 'Dr Robert KARGOUGOU', 'Politique nationale de santé et gestion des services de santé', 'sante'),
('Ministère de l''Agriculture', 'Agriculture', 'Dr Dénis OUEDRAOGO', 'Développement agricole et sécurité alimentaire', 'agriculture'),
('Ministère de l''Economie', 'Economie', 'Dr Aboubakar NACANABO', 'Gestion économique et financière du pays', 'economie');

-- Seed Services
INSERT INTO services (title, description, ministry_id, category, url) VALUES
('Recrutement Militaire', 'Processus de recrutement pour les forces armées', 1, 'Recrutement', 'https://defense.gov.bf/recrutement'),
('Carte d''Identité Militaire', 'Demande et renouvellement de carte d''identité militaire', 1, 'Documentation', 'https://defense.gov.bf/carte-identite'),

('Inscription Scolaire', 'Processus d''inscription dans les écoles publiques', 2, 'Education', 'https://education.gov.bf/inscription'),
('Résultats Examens', 'Consultation des résultats d''examens nationaux', 2, 'Education', 'https://education.gov.bf/resultats'),

('Carte Sanitaire', 'Demande de carte sanitaire', 3, 'Santé', 'https://sante.gov.bf/carte-sanitaire'),
('Vaccination COVID-19', 'Programme de vaccination contre la COVID-19', 3, 'Santé', 'https://sante.gov.bf/covid19'),

('Subventions Agricoles', 'Demande de subventions pour les agriculteurs', 4, 'Agriculture', 'https://agriculture.gov.bf/subventions'),
('Certification Bio', 'Processus de certification biologique', 4, 'Agriculture', 'https://agriculture.gov.bf/certification'),

('Déclaration Fiscale', 'Système de déclaration fiscale en ligne', 5, 'Finance', 'https://economie.gov.bf/impots'),
('Création d''Entreprise', 'Processus de création d''entreprise', 5, 'Entreprise', 'https://economie.gov.bf/entreprise');

-- Seed Feedback
INSERT INTO feedback (user_id, service_id, rating, comment) VALUES
(2, 1, 5, 'Processus très clair et efficace'),
(2, 3, 4, 'Bon service mais un peu lent'),
(2, 5, 5, 'Excellent service, personnel très professionnel'),
(2, 7, 3, 'Le processus pourrait être plus simple'),
(2, 9, 4, 'Service utile et bien organisé');

-- Script d'insertion des données de test

-- Insertion des ministères
INSERT INTO ministeres (nom, description) VALUES
('Ministère de l''Administration Territoriale', 'Gestion de l''administration territoriale et de la décentralisation'),
('Ministère de la Fonction Publique', 'Gestion des fonctionnaires et agents de l''État'),
('Ministère de la Justice', 'Administration de la justice et des affaires juridiques');

-- Insertion des départements
INSERT INTO departements (ministere_id, nom, description) VALUES
(1, 'Direction Générale de l''Administration Territoriale', 'Coordination des services territoriaux'),
(1, 'Direction des Collectivités Territoriales', 'Gestion des collectivités locales'),
(2, 'Direction des Ressources Humaines', 'Gestion du personnel de l''État'),
(2, 'Direction de la Formation', 'Formation des agents publics'),
(3, 'Direction des Affaires Civiles', 'Gestion des affaires civiles et du sceau'),
(3, 'Direction des Affaires Pénales', 'Traitement des affaires pénales');

-- Insertion des services
INSERT INTO services (departement_id, nom, description, cout, delai_traitement, documents_requis) VALUES
(1, 'Demande de Carte Nationale d''Identité', 'Service de délivrance de la CNI', 5000.00, 5, ARRAY['Acte de naissance', 'Certificat de nationalité', 'Photo d''identité']),
(1, 'Déclaration de Perte de Documents', 'Déclaration de perte de documents officiels', 2000.00, 1, ARRAY['Photo d''identité', 'Copie du document perdu']),
(2, 'Certification de Documents', 'Service de certification de documents administratifs', 1000.00, 2, ARRAY['Document original', 'Copie du document']),
(5, 'Demande de Casier Judiciaire', 'Délivrance du bulletin n°3 du casier judiciaire', 3000.00, 3, ARRAY['Acte de naissance', 'Photo d''identité']);

-- Insertion des régions
INSERT INTO regions (nom, code) VALUES
('Boucle du Mouhoun', 'BM'),
('Cascades', 'CAS'),
('Centre', 'CEN'),
('Centre-Est', 'CE'),
('Centre-Nord', 'CN'),
('Centre-Ouest', 'CO'),
('Centre-Sud', 'CS'),
('Est', 'EST'),
('Hauts-Bassins', 'HB'),
('Nord', 'NO'),
('Plateau Central', 'PC'),
('Sahel', 'SAH'),
('Sud-Ouest', 'SO');

-- Insertion des provinces (exemple pour quelques régions)
INSERT INTO provinces (region_id, nom, code) VALUES
(1, 'Balé', 'BAL'),
(1, 'Banwa', 'BAN'),
(1, 'Kossi', 'KOS'),
(2, 'Comoé', 'COM'),
(2, 'Léraba', 'LER'),
(3, 'Kadiogo', 'KAD');

-- Insertion des communes (exemple pour quelques provinces)
INSERT INTO communes (province_id, nom, type, population) VALUES
(1, 'Boromo', 'urbaine', 26000),
(1, 'Fara', 'rurale', 15000),
(2, 'Solenzo', 'urbaine', 30000),
(4, 'Banfora', 'urbaine', 93000),
(6, 'Ouagadougou', 'urbaine', 2000000);

-- Insertion des rôles
INSERT INTO roles (nom, niveau, description) VALUES
('Super Administrateur', 'administrateur', 'Accès complet au système'),
('Superviseur Ministériel', 'superviseur', 'Supervision au niveau ministériel'),
('Agent de Service', 'agent', 'Agent traitant les demandes'),
('Utilisateur Standard', 'utilisateur', 'Utilisateur normal du système');

-- Insertion des permissions
INSERT INTO permissions (nom, description) VALUES
('gestion_utilisateurs', 'Gestion des utilisateurs du système'),
('gestion_services', 'Gestion des services offerts'),
('traitement_demandes', 'Traitement des demandes des utilisateurs'),
('consultation_statistiques', 'Consultation des statistiques'),
('gestion_documents', 'Gestion des documents'),
('configuration_systeme', 'Configuration du système');

-- Association des permissions aux rôles
INSERT INTO roles_permissions (role_id, permission_id) VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), -- Super Admin a toutes les permissions
(2, 2), (2, 3), (2, 4), -- Superviseur
(3, 3), (3, 5), -- Agent
(4, 3); -- Utilisateur Standard

-- Insertion des utilisateurs (mots de passe hashés à implémenter)
INSERT INTO utilisateurs (nom, prenom, email, telephone, mot_de_passe, date_naissance, genre, adresse, ville) VALUES
('Admin', 'System', 'admin@burkina-portal.gov.bf', '+22670000000', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPjaDtXIn3ZgK', '1980-01-01', 'M', 'Avenue de l''Indépendance', 'Ouagadougou'),
('Ouedraogo', 'Fatima', 'f.ouedraogo@burkina-portal.gov.bf', '+22675000001', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPjaDtXIn3ZgK', '1985-05-15', 'F', 'Rue 15.32', 'Ouagadougou'),
('Kabore', 'Paul', 'p.kabore@burkina-portal.gov.bf', '+22676000002', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPjaDtXIn3ZgK', '1990-08-20', 'M', 'Avenue Kwame Nkrumah', 'Bobo-Dioulasso');

-- Association des rôles aux utilisateurs
INSERT INTO utilisateurs_roles (utilisateur_id, role_id) VALUES
(1, 1), -- Admin est Super Administrateur
(2, 2), -- Fatima est Superviseur
(3, 3); -- Paul est Agent

-- Insertion des agents
INSERT INTO agents (utilisateur_id, departement_id, matricule, poste, date_embauche) VALUES
(2, 1, 'AG001', 'Chef de service', '2010-01-15'),
(3, 5, 'AG002', 'Agent de guichet', '2015-06-01');

-- Insertion des types de document
INSERT INTO types_document (nom, description, champs_requis) VALUES
('CNI', 'Carte Nationale d''Identité', '{"nom": "string", "prenom": "string", "date_naissance": "date", "lieu_naissance": "string", "photo": "file"}'),
('PASS', 'Passeport', '{"nom": "string", "prenom": "string", "date_naissance": "date", "lieu_naissance": "string", "photo": "file", "profession": "string"}'),
('CJ', 'Casier Judiciaire', '{"nom": "string", "prenom": "string", "date_naissance": "date", "lieu_naissance": "string"}');

-- Insertion des modèles de document
INSERT INTO modeles_document (service_id, nom, description, donnees_modele) VALUES
(1, 'Formulaire CNI', 'Formulaire de demande de Carte Nationale d''Identité', '{"champs": ["nom", "prenom", "date_naissance", "lieu_naissance", "adresse", "photo"]}'),
(4, 'Formulaire Casier Judiciaire', 'Formulaire de demande de Casier Judiciaire', '{"champs": ["nom", "prenom", "date_naissance", "lieu_naissance", "filiation"]}');

-- Insertion des modèles de flux de travail
INSERT INTO modeles_flux_travail (service_id, nom, description, duree_estimee) VALUES
(1, 'Processus CNI', 'Processus de délivrance de la CNI', 5),
(4, 'Processus Casier Judiciaire', 'Processus de délivrance du casier judiciaire', 3);

-- Insertion des étapes de flux de travail
INSERT INTO etapes_flux_travail (flux_travail_id, numero_etape, nom, description, role_requis, duree_estimee, obligatoire) VALUES
(1, 1, 'Réception', 'Réception et vérification des documents', 'agent', 1, true),
(1, 2, 'Validation', 'Validation des informations', 'superviseur', 2, true),
(1, 3, 'Production', 'Production de la carte', 'agent', 1, true),
(2, 1, 'Réception', 'Réception de la demande', 'agent', 1, true),
(2, 2, 'Vérification', 'Vérification des antécédents', 'agent', 1, true),
(2, 3, 'Signature', 'Signature par l''autorité compétente', 'superviseur', 1, true);

-- Insertion des modèles de communication
INSERT INTO modeles_communication (service_id, type, nom, sujet, contenu, variables) VALUES
(1, 'email', 'Confirmation CNI', 'Confirmation de demande de CNI', 'Votre demande de CNI a été reçue et est en cours de traitement.', '{"nom": "string", "numero_demande": "string"}'),
(1, 'sms', 'Notification CNI', 'Votre CNI est prête', 'Votre CNI est disponible pour retrait.', '{"nom": "string"}'),
(4, 'email', 'Confirmation CJ', 'Confirmation de demande de Casier Judiciaire', 'Votre demande de casier judiciaire a été reçue.', '{"nom": "string", "numero_demande": "string"}');

-- Insertion des politiques de sécurité
INSERT INTO politiques_securite (type_politique, parametres, actif) VALUES
('mot_de_passe', '{"longueur_min": 8, "caracteres_speciaux": true, "majuscules": true, "chiffres": true}', true),
('session', '{"duree_max": 3600, "tentatives_max": 3, "delai_verouillage": 300}', true),
('authentification', '{"deux_facteurs": false, "delai_expiration": 90}', true); 