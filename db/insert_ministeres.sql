-- Nettoyage des données existantes
TRUNCATE TABLE ministeres RESTART IDENTITY CASCADE;

-- Insertion des nouveaux ministères
INSERT INTO ministeres (nom, description) VALUES
('Ministère de la Défense et des Anciens Combattants', 'Ministre: Général de Brigade Célestin SIMPORE'),
('Ministère de l''Administration territoriale et de la Mobilité', 'Ministre: Monsieur Emile ZERBO'),
('Ministère de l''Agriculture, des Ressources animales et halieutiques', 'Ministre: Commandant Ismaël SOMBIE'),
('Ministère de l''Économie et des Finances', 'Ministre: Monsieur Aboubakar NACANABO'),
('Ministère de la Sécurité', 'Ministre: Commissaire divisionnaire de Police Mahamadou SANA'),
('Ministère des Affaires étrangères', 'Ministre: Monsieur Karamoko Jean Marie TRAORE'),
('Ministère de la Fonction publique', 'Ministre: Monsieur Mathias TRAORE'),
('Ministère de la Communication', 'Ministre: Monsieur Pingdwendé Gilbert OUEDRAOGO'),
('Ministère de l''Action humanitaire', 'Ministre: Commandant Passowendé Pélagie KABRE/KABORE'),
('Ministère de la Justice', 'Ministre: Monsieur Edasso Rodrigue BAYALA'),
('Ministère de la Santé', 'Ministre: Monsieur Robert Lucien Jean-Claude KARGOUGOU'),
('Ministère de la Transition digitale', 'Ministre: Madame Aminata ZERBO/SABANE'),
('Ministère de l''Industrie', 'Ministre: Monsieur Serge Gnaniodem PODA'),
('Ministère des Infrastructures', 'Ministre: Monsieur Adama Luc SORGHO'),
('Ministère de l''Énergie', 'Ministre: Monsieur Yacouba Zabré GOUBA'),
('Ministère de l''Enseignement de base', 'Ministre: Monsieur Jacques Sosthène DINGARA'); 