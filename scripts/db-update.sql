-- Vérification des champs requis dans la table ministeres
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'ministeres' AND column_name = 'est_actif'
    ) THEN
        ALTER TABLE ministeres ADD COLUMN est_actif boolean DEFAULT true;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'ministeres' AND column_name = 'nom_court'
    ) THEN
        ALTER TABLE ministeres ADD COLUMN nom_court text;
    END IF;
END $$;

-- Suppression des tables existantes
DROP TABLE IF EXISTS missions_ministere CASCADE;
DROP TABLE IF EXISTS services_ministere CASCADE;

-- Création de la table missions_ministere
CREATE TABLE missions_ministere (
    id SERIAL PRIMARY KEY,
    ministere_id integer REFERENCES ministeres(id) ON DELETE CASCADE,
    description text NOT NULL,
    ordre integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Création de la table services_ministere
CREATE TABLE services_ministere (
    id SERIAL PRIMARY KEY,
    ministere_id integer REFERENCES ministeres(id) ON DELETE CASCADE,
    nom text NOT NULL,
    description text,
    type text DEFAULT 'direct',
    route_type text DEFAULT 'direct',
    external_url text,
    slug text,
    categorie text,
    sous_categorie text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Ajout des index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_missions_ministere_id ON missions_ministere(ministere_id);
CREATE INDEX IF NOT EXISTS idx_services_ministere_id ON services_ministere(ministere_id);
CREATE INDEX IF NOT EXISTS idx_ministeres_slug ON ministeres(slug);

-- Mise à jour de la liste des ministères
UPDATE ministeres SET est_actif = false WHERE true;

INSERT INTO ministeres (nom, nom_court, ministre, slug, est_actif)
VALUES 
    ('Ministère de la Défense et des Anciens Combattants', 'Défense', 'Général de Brigade Célestin SIMPORE', 'defense', true),
    ('Ministère de l''Administration territoriale et de la Mobilité', 'Administration territoriale', 'Monsieur Emile ZERBO', 'administration-territoriale', true),
    ('Ministère de l''Agriculture, des Ressources animales et halieutiques', 'Agriculture', 'Commandant Ismaël SOMBIE', 'agriculture', true),
    ('Ministère de l''Économie et des Finances', 'Économie', 'Monsieur Aboubakar NACANABO', 'economie', true),
    ('Ministère de la Sécurité', 'Sécurité', 'Commissaire divisionnaire de Police Mahamadou SANA', 'securite', true),
    ('Ministère des Affaires étrangères, de la Coopération régionale et des Burkinabè de l''extérieur', 'Affaires étrangères', 'Monsieur Karamoko Jean Marie TRAORE', 'affaires-etrangeres', true),
    ('Ministère de la Fonction publique, du Travail et de la Protection sociale', 'Fonction publique', 'Monsieur Mathias TRAORE', 'fonction-publique', true),
    ('Ministère de la Communication, de la Culture, des Arts et du Tourisme', 'Communication', 'Monsieur Pingdwendé Gilbert OUEDRAOGO', 'communication', true),
    ('Ministère de l''Action humanitaire et de la Solidarité nationale', 'Action humanitaire', 'Commandant Passowendé Pélagie KABRE/KABORE', 'action-humanitaire', true),
    ('Ministère de la Justice et des Droits humains', 'Justice', 'Monsieur Edasso Rodrigue BAYALA', 'justice', true),
    ('Ministère de la Santé', 'Santé', 'Monsieur Robert Lucien Jean-Claude KARGOUGOU', 'sante', true),
    ('Ministère de la Transition digitale, des Postes et des Communications électroniques', 'Transition digitale', 'Madame Aminata ZERBO/SABANE', 'transition-digitale', true),
    ('Ministère de l''Industrie, du Commerce et de l''Artisanat', 'Industrie', 'Monsieur Serge Gnaniodem PODA', 'industrie', true),
    ('Ministère des Infrastructures et du Désenclavement', 'Infrastructures', 'Monsieur Adama Luc SORGHO', 'infrastructures', true),
    ('Ministère de l''Énergie, des Mines et des Carrières', 'Énergie', 'Monsieur Yacouba Zabré GOUBA', 'energie', true),
    ('Ministère de l''Enseignement de base, de l''Alphabétisation et de la Promotion des Langues nationales', 'Enseignement de base', 'Monsieur Jacques Sosthène DINGARA', 'enseignement-base', true)
ON CONFLICT (slug) DO UPDATE 
SET nom = EXCLUDED.nom,
    nom_court = EXCLUDED.nom_court,
    ministre = EXCLUDED.ministre,
    est_actif = true;

-- Ajout des missions pour le Ministère de la Défense
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Élaboration et mise en œuvre de la politique de défense nationale',
    'Gestion et modernisation des forces armées',
    'Protection du territoire national',
    'Coordination des opérations militaires',
    'Gestion des anciens combattants et de leurs droits'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'defense'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de la Défense
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Forces Armées Nationales',
    'Gendarmerie Nationale',
    'Service National',
    'Anciens Combattants'
]), 'direct', 'direct', unnest(ARRAY[
    'forces-armees',
    'gendarmerie',
    'service-national',
    'anciens-combattants'
])
FROM ministeres m WHERE m.slug = 'defense'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de la Santé
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Gestion du système de santé publique',
    'Promotion de la santé et prévention',
    'Développement des infrastructures sanitaires',
    'Formation du personnel médical',
    'Coordination des urgences sanitaires'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'sante'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de la Santé
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Hôpitaux et Centres de Santé',
    'Services de Prévention',
    'Formation Médicale',
    'Urgences Sanitaires'
]), 'direct', 'direct', unnest(ARRAY[
    'hopitaux',
    'prevention',
    'formation-medicale',
    'urgences-sanitaires'
])
FROM ministeres m WHERE m.slug = 'sante'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de l'Agriculture
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Développement de l''agriculture durable',
    'Gestion des ressources animales et halieutiques',
    'Sécurité alimentaire et nutritionnelle',
    'Modernisation des techniques agricoles',
    'Soutien aux agriculteurs et éleveurs'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'agriculture'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de l'Agriculture
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Production Agricole',
    'Élevage et Pêche',
    'Recherche Agronomique',
    'Sécurité Alimentaire'
]), 'direct', 'direct', unnest(ARRAY[
    'production-agricole',
    'elevage-peche',
    'recherche-agronomique',
    'securite-alimentaire'
])
FROM ministeres m WHERE m.slug = 'agriculture'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de l'Éducation
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Gestion du système éducatif de base',
    'Promotion de l''alphabétisation',
    'Développement des langues nationales',
    'Formation des enseignants',
    'Amélioration de la qualité de l''éducation'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'enseignement-base'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de l'Éducation
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Enseignement Primaire',
    'Alphabétisation',
    'Langues Nationales',
    'Formation des Enseignants'
]), 'direct', 'direct', unnest(ARRAY[
    'enseignement-primaire',
    'alphabetisation',
    'langues-nationales',
    'formation-enseignants'
])
FROM ministeres m WHERE m.slug = 'enseignement-base'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de la Communication
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Gestion de la communication gouvernementale',
    'Promotion de la culture et des arts',
    'Développement du tourisme',
    'Préservation du patrimoine culturel',
    'Coordination des médias publics'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'communication'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de la Communication
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Médias Publics',
    'Promotion Culturelle',
    'Tourisme',
    'Patrimoine'
]), 'direct', 'direct', unnest(ARRAY[
    'medias-publics',
    'promotion-culturelle',
    'tourisme',
    'patrimoine'
])
FROM ministeres m WHERE m.slug = 'communication'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de la Sécurité
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Maintien de l''ordre public',
    'Protection des personnes et des biens',
    'Lutte contre le terrorisme',
    'Sécurité des frontières',
    'Coordination des forces de sécurité'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'securite'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de la Sécurité
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Police Nationale',
    'Protection Civile',
    'Surveillance du Territoire',
    'Sécurité Frontalière'
]), 'direct', 'direct', unnest(ARRAY[
    'police-nationale',
    'protection-civile',
    'surveillance-territoire',
    'securite-frontaliere'
])
FROM ministeres m WHERE m.slug = 'securite'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de l'Action Humanitaire
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Coordination de l''aide humanitaire',
    'Gestion des situations d''urgence',
    'Protection des populations vulnérables',
    'Coordination des ONG humanitaires',
    'Développement de la solidarité nationale'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'action-humanitaire'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de l'Action Humanitaire
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Aide d''Urgence',
    'Protection Sociale',
    'Coordination Humanitaire',
    'Solidarité Nationale'
]), 'direct', 'direct', unnest(ARRAY[
    'aide-urgence',
    'protection-sociale',
    'coordination-humanitaire',
    'solidarite-nationale'
])
FROM ministeres m WHERE m.slug = 'action-humanitaire'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de l'Énergie
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Développement du secteur énergétique',
    'Gestion des ressources minières',
    'Promotion des énergies renouvelables',
    'Supervision des industries extractives',
    'Régulation du secteur minier'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'energie'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de l'Énergie
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Production Énergétique',
    'Mines et Carrières',
    'Énergies Renouvelables',
    'Contrôle Minier'
]), 'direct', 'direct', unnest(ARRAY[
    'production-energetique',
    'mines-carrieres',
    'energies-renouvelables',
    'controle-minier'
])
FROM ministeres m WHERE m.slug = 'energie'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de l'Industrie
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Développement du secteur industriel',
    'Promotion du commerce national et international',
    'Soutien à l''artisanat',
    'Développement des PME/PMI',
    'Régulation des activités commerciales'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'industrie'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de l'Industrie
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Développement Industriel',
    'Commerce',
    'Artisanat',
    'Soutien aux PME'
]), 'direct', 'direct', unnest(ARRAY[
    'developpement-industriel',
    'commerce',
    'artisanat',
    'soutien-pme'
])
FROM ministeres m WHERE m.slug = 'industrie'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère des Infrastructures
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Développement des infrastructures routières',
    'Désenclavement des zones rurales',
    'Gestion des grands travaux',
    'Entretien du réseau routier',
    'Supervision des projets d''infrastructure'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'infrastructures'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère des Infrastructures
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Routes et Autoroutes',
    'Travaux Publics',
    'Désenclavement Rural',
    'Maintenance Routière'
]), 'direct', 'direct', unnest(ARRAY[
    'routes-autoroutes',
    'travaux-publics',
    'desenclavement-rural',
    'maintenance-routiere'
])
FROM ministeres m WHERE m.slug = 'infrastructures'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de la Fonction Publique
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Gestion des ressources humaines de l''État',
    'Protection sociale des travailleurs',
    'Formation des fonctionnaires',
    'Relations avec les syndicats',
    'Modernisation de l''administration'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'fonction-publique'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de la Fonction Publique
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Gestion du Personnel',
    'Protection Sociale',
    'Formation Continue',
    'Relations Syndicales'
]), 'direct', 'direct', unnest(ARRAY[
    'gestion-personnel',
    'protection-sociale-travail',
    'formation-continue',
    'relations-syndicales'
])
FROM ministeres m WHERE m.slug = 'fonction-publique'
ON CONFLICT DO NOTHING;

-- Ajout des missions pour le Ministère de l'Administration Territoriale
INSERT INTO missions_ministere (ministere_id, description, ordre)
SELECT m.id, unnest(ARRAY[
    'Administration du territoire national',
    'Gestion des collectivités territoriales',
    'Organisation des élections',
    'Coordination des services déconcentrés',
    'Gestion de la mobilité urbaine'
]), generate_series(1,5)
FROM ministeres m WHERE m.slug = 'administration-territoriale'
ON CONFLICT DO NOTHING;

-- Ajout des services pour le Ministère de l'Administration Territoriale
INSERT INTO services_ministere (ministere_id, nom, type, route_type, slug)
SELECT m.id, unnest(ARRAY[
    'Collectivités Territoriales',
    'Services Électoraux',
    'Administration Locale',
    'Mobilité Urbaine'
]), 'direct', 'direct', unnest(ARRAY[
    'collectivites-territoriales',
    'services-electoraux',
    'administration-locale',
    'mobilite-urbaine'
])
FROM ministeres m WHERE m.slug = 'administration-territoriale'
ON CONFLICT DO NOTHING; 