-- Clear existing data
TRUNCATE missions_ministere RESTART IDENTITY CASCADE;
TRUNCATE services_ministere RESTART IDENTITY CASCADE;

-- Ministère de la Défense
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Élaboration et mise en œuvre de la politique de défense nationale', 
 (SELECT id FROM ministeres WHERE slug = 'defense')),
('Gestion et modernisation des forces armées',
 (SELECT id FROM ministeres WHERE slug = 'defense')),
('Protection du territoire national',
 (SELECT id FROM ministeres WHERE slug = 'defense')),
('Coordination des opérations militaires',
 (SELECT id FROM ministeres WHERE slug = 'defense')),
('Gestion des anciens combattants et de leurs droits',
 (SELECT id FROM ministeres WHERE slug = 'defense'));

INSERT INTO services_ministere (nom, ministere_id, type, slug) VALUES
('Forces Armées Nationales',
 (SELECT id FROM ministeres WHERE slug = 'defense'),
 'service', 'forces-armees-nationales'),
('Gendarmerie Nationale',
 (SELECT id FROM ministeres WHERE slug = 'defense'),
 'service', 'gendarmerie-nationale'),
('Service National',
 (SELECT id FROM ministeres WHERE slug = 'defense'),
 'direct', 'service-national'),
('Anciens Combattants',
 (SELECT id FROM ministeres WHERE slug = 'defense'),
 'direct', 'anciens-combattants');

-- Ministère des Affaires étrangères
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Conduite de la politique étrangère',
 (SELECT id FROM ministeres WHERE slug = 'affaires-etrangeres')),
('Gestion des relations diplomatiques',
 (SELECT id FROM ministeres WHERE slug = 'affaires-etrangeres')),
('Promotion de la coopération internationale',
 (SELECT id FROM ministeres WHERE slug = 'affaires-etrangeres')),
('Protection des intérêts burkinabè à l''étranger',
 (SELECT id FROM ministeres WHERE slug = 'affaires-etrangeres')),
('Coordination des actions internationales',
 (SELECT id FROM ministeres WHERE slug = 'affaires-etrangeres'));

INSERT INTO services_ministere (nom, ministere_id, type, slug) VALUES
('Services Consulaires',
 (SELECT id FROM ministeres WHERE slug = 'affaires-etrangeres'),
 'service', 'services-consulaires'),
('Coopération Internationale',
 (SELECT id FROM ministeres WHERE slug = 'affaires-etrangeres'),
 'direct', 'cooperation-internationale'),
('Diaspora',
 (SELECT id FROM ministeres WHERE slug = 'affaires-etrangeres'),
 'direct', 'diaspora'),
('Relations Bilatérales',
 (SELECT id FROM ministeres WHERE slug = 'affaires-etrangeres'),
 'direct', 'relations-bilaterales');

-- Ministère de la Justice
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Administration de la justice',
 (SELECT id FROM ministeres WHERE slug = 'justice')),
('Protection des droits humains',
 (SELECT id FROM ministeres WHERE slug = 'justice')),
('Modernisation du système judiciaire',
 (SELECT id FROM ministeres WHERE slug = 'justice')),
('Supervision des établissements pénitentiaires',
 (SELECT id FROM ministeres WHERE slug = 'justice')),
('Promotion de l''accès au droit',
 (SELECT id FROM ministeres WHERE slug = 'justice'));

INSERT INTO services_ministere (nom, ministere_id, type, slug) VALUES
('Tribunaux et Cours',
 (SELECT id FROM ministeres WHERE slug = 'justice'),
 'service', 'tribunaux-cours'),
('Droits Humains',
 (SELECT id FROM ministeres WHERE slug = 'justice'),
 'direct', 'droits-humains'),
('Services Pénitentiaires',
 (SELECT id FROM ministeres WHERE slug = 'justice'),
 'service', 'services-penitentiaires'),
('Aide Juridictionnelle',
 (SELECT id FROM ministeres WHERE slug = 'justice'),
 'direct', 'aide-juridictionnelle');

-- Ministère de l'Économie et des Finances
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Élaboration et mise en œuvre de la politique économique',
 (SELECT id FROM ministeres WHERE slug = 'economie-finances')),
('Gestion des finances publiques',
 (SELECT id FROM ministeres WHERE slug = 'economie-finances')),
('Planification et prospective économique',
 (SELECT id FROM ministeres WHERE slug = 'economie-finances')),
('Coordination des politiques budgétaires',
 (SELECT id FROM ministeres WHERE slug = 'economie-finances')),
('Supervision du système financier',
 (SELECT id FROM ministeres WHERE slug = 'economie-finances'));

INSERT INTO services_ministere (nom, ministere_id, type, slug) VALUES
('Budget et Trésor Public',
 (SELECT id FROM ministeres WHERE slug = 'economie-finances'),
 'service', 'budget-tresor'),
('Impôts et Taxes',
 (SELECT id FROM ministeres WHERE slug = 'economie-finances'),
 'service', 'impots-taxes'),
('Douanes',
 (SELECT id FROM ministeres WHERE slug = 'economie-finances'),
 'service', 'douanes'),
('Marchés Publics',
 (SELECT id FROM ministeres WHERE slug = 'economie-finances'),
 'direct', 'marches-publics');

-- Ministère de la Transition digitale
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Développement de l''infrastructure numérique',
 (SELECT id FROM ministeres WHERE slug = 'transition-digitale')),
('Modernisation des services postaux',
 (SELECT id FROM ministeres WHERE slug = 'transition-digitale')),
('Promotion de l''innovation digitale',
 (SELECT id FROM ministeres WHERE slug = 'transition-digitale')),
('Gestion des télécommunications',
 (SELECT id FROM ministeres WHERE slug = 'transition-digitale')),
('Cybersécurité et protection des données',
 (SELECT id FROM ministeres WHERE slug = 'transition-digitale'));

INSERT INTO services_ministere (nom, ministere_id, type, slug) VALUES
('Services Numériques',
 (SELECT id FROM ministeres WHERE slug = 'transition-digitale'),
 'service', 'services-numeriques'),
('La Poste',
 (SELECT id FROM ministeres WHERE slug = 'transition-digitale'),
 'direct', 'poste'),
('Télécommunications',
 (SELECT id FROM ministeres WHERE slug = 'transition-digitale'),
 'direct', 'telecommunications'),
('E-gouvernement',
 (SELECT id FROM ministeres WHERE slug = 'transition-digitale'),
 'direct', 'e-gouvernement');

-- Ministère de l'Enseignement de base
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Gestion du système éducatif',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-base')),
('Promotion de l''alphabétisation',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-base')),
('Développement des langues nationales',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-base')),
('Formation des enseignants',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-base')),
('Gestion des programmes scolaires',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-base'));

INSERT INTO services_ministere (nom, ministere_id, type, slug) VALUES
('Enseignement Primaire',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-base'),
 'service', 'enseignement-primaire'),
('Enseignement Secondaire',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-base'),
 'service', 'enseignement-secondaire'),
('Alphabétisation',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-base'),
 'direct', 'alphabetisation'),
('Langues Nationales',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-base'),
 'direct', 'langues-nationales');

-- Ministère de l'Agriculture
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Développement de l''agriculture',
 (SELECT id FROM ministeres WHERE slug = 'agriculture')),
('Gestion des ressources animales',
 (SELECT id FROM ministeres WHERE slug = 'agriculture')),
('Développement de la pêche',
 (SELECT id FROM ministeres WHERE slug = 'agriculture')),
('Sécurité alimentaire',
 (SELECT id FROM ministeres WHERE slug = 'agriculture')),
('Modernisation agricole',
 (SELECT id FROM ministeres WHERE slug = 'agriculture'));

INSERT INTO services_ministere (nom, ministere_id, type, slug) VALUES
('Production Agricole',
 (SELECT id FROM ministeres WHERE slug = 'agriculture'),
 'service', 'production-agricole'),
('Élevage',
 (SELECT id FROM ministeres WHERE slug = 'agriculture'),
 'service', 'elevage'),
('Pêche',
 (SELECT id FROM ministeres WHERE slug = 'agriculture'),
 'direct', 'peche'),
('Recherche Agricole',
 (SELECT id FROM ministeres WHERE slug = 'agriculture'),
 'direct', 'recherche-agricole');

-- Ministère de la Santé
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Gestion du système de santé',
 (SELECT id FROM ministeres WHERE slug = 'sante')),
('Promotion de l''hygiène publique',
 (SELECT id FROM ministeres WHERE slug = 'sante')),
('Prévention des maladies',
 (SELECT id FROM ministeres WHERE slug = 'sante')),
('Formation médicale',
 (SELECT id FROM ministeres WHERE slug = 'sante')),
('Gestion des hôpitaux',
 (SELECT id FROM ministeres WHERE slug = 'sante'));

INSERT INTO services_ministere (nom, ministere_id, type, slug) VALUES
('Hôpitaux et Cliniques',
 (SELECT id FROM ministeres WHERE slug = 'sante'),
 'service', 'hopitaux-cliniques'),
('Prévention',
 (SELECT id FROM ministeres WHERE slug = 'sante'),
 'direct', 'prevention'),
('Hygiène Publique',
 (SELECT id FROM ministeres WHERE slug = 'sante'),
 'direct', 'hygiene-publique'),
('Formation Médicale',
 (SELECT id FROM ministeres WHERE slug = 'sante'),
 'direct', 'formation-medicale');

-- Ministère de l'Administration territoriale
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Administration du territoire',
 (SELECT id FROM ministeres WHERE slug = 'administration-territoriale')),
('Gestion des collectivités territoriales',
 (SELECT id FROM ministeres WHERE slug = 'administration-territoriale')),
('Organisation des élections',
 (SELECT id FROM ministeres WHERE slug = 'administration-territoriale')),
('Sécurité civile',
 (SELECT id FROM ministeres WHERE slug = 'administration-territoriale')),
('Coordination administrative',
 (SELECT id FROM ministeres WHERE slug = 'administration-territoriale'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Services Territoriaux',
 (SELECT id FROM ministeres WHERE slug = 'administration-territoriale'),
 'service', 'local', 'services-territoriaux', 'citoyens', 'administration'),
('Collectivités Locales',
 (SELECT id FROM ministeres WHERE slug = 'administration-territoriale'),
 'service', 'local', 'collectivites-locales', 'citoyens', 'administration'),
('État Civil',
 (SELECT id FROM ministeres WHERE slug = 'administration-territoriale'),
 'service', 'local', 'etat-civil', 'citoyens', 'administration'),
('Protection Civile',
 (SELECT id FROM ministeres WHERE slug = 'administration-territoriale'),
 'service', 'local', 'protection-civile', 'citoyens', 'securite');

-- Ministère de la Fonction publique
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Gestion des ressources humaines de l''État',
 (SELECT id FROM ministeres WHERE slug = 'fonction-publique')),
('Modernisation de l''administration publique',
 (SELECT id FROM ministeres WHERE slug = 'fonction-publique')),
('Formation des agents publics',
 (SELECT id FROM ministeres WHERE slug = 'fonction-publique')),
('Gestion des carrières et retraites',
 (SELECT id FROM ministeres WHERE slug = 'fonction-publique')),
('Dialogue social dans la fonction publique',
 (SELECT id FROM ministeres WHERE slug = 'fonction-publique'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Concours de la fonction publique',
 (SELECT id FROM ministeres WHERE slug = 'fonction-publique'),
 'service', 'local', 'concours', 'citoyens', 'administration'),
('Gestion des carrières',
 (SELECT id FROM ministeres WHERE slug = 'fonction-publique'),
 'service', 'local', 'carrieres', 'citoyens', 'administration'),
('Formation continue',
 (SELECT id FROM ministeres WHERE slug = 'fonction-publique'),
 'service', 'local', 'formation-continue', 'citoyens', 'education'),
('Retraite des fonctionnaires',
 (SELECT id FROM ministeres WHERE slug = 'fonction-publique'),
 'service', 'local', 'retraite', 'citoyens', 'social');

-- Ministère de la Communication
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Développement des médias publics',
 (SELECT id FROM ministeres WHERE slug = 'communication')),
('Régulation de la communication',
 (SELECT id FROM ministeres WHERE slug = 'communication')),
('Promotion de la presse nationale',
 (SELECT id FROM ministeres WHERE slug = 'communication')),
('Gestion de l''information gouvernementale',
 (SELECT id FROM ministeres WHERE slug = 'communication')),
('Développement du numérique',
 (SELECT id FROM ministeres WHERE slug = 'communication'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Médias publics',
 (SELECT id FROM ministeres WHERE slug = 'communication'),
 'service', 'local', 'medias-publics', 'citoyens', 'information'),
('Accréditation presse',
 (SELECT id FROM ministeres WHERE slug = 'communication'),
 'service', 'local', 'accreditation', 'citoyens', 'information'),
('Communication gouvernementale',
 (SELECT id FROM ministeres WHERE slug = 'communication'),
 'service', 'info', 'communication-gouvernementale', 'citoyens', 'information'),
('Licences de diffusion',
 (SELECT id FROM ministeres WHERE slug = 'communication'),
 'service', 'local', 'licences', 'entreprises', 'medias');

-- Ministère de l'Action humanitaire
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Coordination de l''aide humanitaire',
 (SELECT id FROM ministeres WHERE slug = 'action-humanitaire')),
('Gestion des catastrophes naturelles',
 (SELECT id FROM ministeres WHERE slug = 'action-humanitaire')),
('Protection des personnes vulnérables',
 (SELECT id FROM ministeres WHERE slug = 'action-humanitaire')),
('Coordination des ONG humanitaires',
 (SELECT id FROM ministeres WHERE slug = 'action-humanitaire')),
('Gestion des déplacés internes',
 (SELECT id FROM ministeres WHERE slug = 'action-humanitaire'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Aide d''urgence',
 (SELECT id FROM ministeres WHERE slug = 'action-humanitaire'),
 'service', 'local', 'aide-urgence', 'citoyens', 'social'),
('Assistance aux déplacés',
 (SELECT id FROM ministeres WHERE slug = 'action-humanitaire'),
 'service', 'local', 'assistance-deplaces', 'citoyens', 'social'),
('Coordination ONG',
 (SELECT id FROM ministeres WHERE slug = 'action-humanitaire'),
 'service', 'local', 'coordination-ong', 'international', 'cooperation'),
('Alerte catastrophes',
 (SELECT id FROM ministeres WHERE slug = 'action-humanitaire'),
 'service', 'local', 'alerte-catastrophes', 'securite', 'urgences');

-- Ministère de l'Industrie
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Développement industriel',
 (SELECT id FROM ministeres WHERE slug = 'industrie')),
('Promotion des investissements',
 (SELECT id FROM ministeres WHERE slug = 'industrie')),
('Normalisation et qualité',
 (SELECT id FROM ministeres WHERE slug = 'industrie')),
('Innovation technologique',
 (SELECT id FROM ministeres WHERE slug = 'industrie')),
('Développement des PME/PMI',
 (SELECT id FROM ministeres WHERE slug = 'industrie'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Création d''entreprise',
 (SELECT id FROM ministeres WHERE slug = 'industrie'),
 'service', 'local', 'creation-entreprise', 'entreprises', 'commerce'),
('Normes et certification',
 (SELECT id FROM ministeres WHERE slug = 'industrie'),
 'service', 'local', 'normes-certification', 'entreprises', 'industrie'),
('Appui aux PME',
 (SELECT id FROM ministeres WHERE slug = 'industrie'),
 'service', 'local', 'appui-pme', 'entreprises', 'commerce'),
('Investissements industriels',
 (SELECT id FROM ministeres WHERE slug = 'industrie'),
 'service', 'local', 'investissements', 'entreprises', 'industrie');

-- Ministère des Infrastructures
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Développement des infrastructures routières',
 (SELECT id FROM ministeres WHERE slug = 'infrastructures')),
('Gestion des travaux publics',
 (SELECT id FROM ministeres WHERE slug = 'infrastructures')),
('Développement urbain',
 (SELECT id FROM ministeres WHERE slug = 'infrastructures')),
('Maintenance des infrastructures',
 (SELECT id FROM ministeres WHERE slug = 'infrastructures')),
('Contrôle des constructions',
 (SELECT id FROM ministeres WHERE slug = 'infrastructures'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Permis de construire',
 (SELECT id FROM ministeres WHERE slug = 'infrastructures'),
 'service', 'local', 'permis-construire', 'citoyens', 'urbanisme'),
('Marchés publics infrastructure',
 (SELECT id FROM ministeres WHERE slug = 'infrastructures'),
 'service', 'local', 'marches-infrastructure', 'entreprises', 'construction'),
('Signalement routier',
 (SELECT id FROM ministeres WHERE slug = 'infrastructures'),
 'service', 'local', 'signalement-routier', 'citoyens', 'transport'),
('Urbanisme et habitat',
 (SELECT id FROM ministeres WHERE slug = 'infrastructures'),
 'service', 'local', 'urbanisme-habitat', 'citoyens', 'urbanisme');

-- Ministère de l'Énergie
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Développement du secteur énergétique',
 (SELECT id FROM ministeres WHERE slug = 'energie')),
('Gestion des ressources minières',
 (SELECT id FROM ministeres WHERE slug = 'energie')),
('Promotion des énergies renouvelables',
 (SELECT id FROM ministeres WHERE slug = 'energie')),
('Électrification rurale',
 (SELECT id FROM ministeres WHERE slug = 'energie')),
('Régulation du secteur minier',
 (SELECT id FROM ministeres WHERE slug = 'energie'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Raccordement électrique',
 (SELECT id FROM ministeres WHERE slug = 'energie'),
 'service', 'local', 'raccordement', 'citoyens', 'energie-public'),
('Permis miniers',
 (SELECT id FROM ministeres WHERE slug = 'energie'),
 'service', 'local', 'permis-miniers', 'entreprises', 'mines'),
('Énergies renouvelables',
 (SELECT id FROM ministeres WHERE slug = 'energie'),
 'service', 'local', 'energies-renouvelables', 'entreprises', 'energie-entreprises'),
('Contrôle minier',
 (SELECT id FROM ministeres WHERE slug = 'energie'),
 'service', 'local', 'controle-minier', 'entreprises', 'mines');

-- Update services with new subcategory slugs
UPDATE services_ministere 
SET parent_slug = 'energie-public'
WHERE parent_slug = 'energie' 
AND category = 'citoyens';

UPDATE services_ministere 
SET parent_slug = 'energie-entreprises'
WHERE parent_slug = 'energie' 
AND category = 'entreprises';

-- Ministère de l'Environnement
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Protection de l''environnement et des ressources naturelles',
 (SELECT id FROM ministeres WHERE slug = 'environnement')),
('Gestion des changements climatiques',
 (SELECT id FROM ministeres WHERE slug = 'environnement')),
('Conservation de la biodiversité',
 (SELECT id FROM ministeres WHERE slug = 'environnement')),
('Lutte contre la désertification',
 (SELECT id FROM ministeres WHERE slug = 'environnement')),
('Promotion du développement durable',
 (SELECT id FROM ministeres WHERE slug = 'environnement'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Protection environnementale',
 (SELECT id FROM ministeres WHERE slug = 'environnement'),
 'service', 'local', 'protection-environnementale', 'citoyens', 'environnement'),
('Permis environnementaux',
 (SELECT id FROM ministeres WHERE slug = 'environnement'),
 'service', 'local', 'permis-environnementaux', 'entreprises', 'environnement'),
('Changement climatique',
 (SELECT id FROM ministeres WHERE slug = 'environnement'),
 'service', 'info', 'changement-climatique', 'citoyens', 'environnement'),
('Biodiversité',
 (SELECT id FROM ministeres WHERE slug = 'environnement'),
 'service', 'info', 'biodiversite', 'citoyens', 'environnement');

-- Ministère des Sports
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Développement du sport',
 (SELECT id FROM ministeres WHERE slug = 'sports')),
('Formation des athlètes',
 (SELECT id FROM ministeres WHERE slug = 'sports')),
('Organisation des compétitions',
 (SELECT id FROM ministeres WHERE slug = 'sports')),
('Gestion des infrastructures sportives',
 (SELECT id FROM ministeres WHERE slug = 'sports')),
('Promotion du sport scolaire',
 (SELECT id FROM ministeres WHERE slug = 'sports'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Associations sportives',
 (SELECT id FROM ministeres WHERE slug = 'sports'),
 'service', 'local', 'associations-sportives', 'citoyens', 'sport'),
('Équipements sportifs',
 (SELECT id FROM ministeres WHERE slug = 'sports'),
 'service', 'local', 'equipements-sportifs', 'citoyens', 'sport'),
('Compétitions nationales',
 (SELECT id FROM ministeres WHERE slug = 'sports'),
 'service', 'info', 'competitions-nationales', 'citoyens', 'sport'),
('Sport scolaire',
 (SELECT id FROM ministeres WHERE slug = 'sports'),
 'service', 'info', 'sport-scolaire', 'citoyens', 'education');

-- Ministère de la Culture
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Promotion de la culture burkinabè',
 (SELECT id FROM ministeres WHERE slug = 'culture')),
('Protection du patrimoine culturel',
 (SELECT id FROM ministeres WHERE slug = 'culture')),
('Développement des industries culturelles',
 (SELECT id FROM ministeres WHERE slug = 'culture')),
('Organisation des événements culturels',
 (SELECT id FROM ministeres WHERE slug = 'culture')),
('Formation artistique et culturelle',
 (SELECT id FROM ministeres WHERE slug = 'culture'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Patrimoine culturel',
 (SELECT id FROM ministeres WHERE slug = 'culture'),
 'service', 'local', 'patrimoine-culturel', 'citoyens', 'culture'),
('Événements culturels',
 (SELECT id FROM ministeres WHERE slug = 'culture'),
 'service', 'info', 'evenements-culturels', 'citoyens', 'culture'),
('Industries culturelles',
 (SELECT id FROM ministeres WHERE slug = 'culture'),
 'service', 'local', 'industries-culturelles', 'entreprises', 'culture'),
('Formation artistique',
 (SELECT id FROM ministeres WHERE slug = 'culture'),
 'service', 'local', 'formation-artistique', 'citoyens', 'education');

-- Ministère de l'Urbanisme
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Planification urbaine',
 (SELECT id FROM ministeres WHERE slug = 'urbanisme')),
('Gestion du foncier urbain',
 (SELECT id FROM ministeres WHERE slug = 'urbanisme')),
('Développement des villes',
 (SELECT id FROM ministeres WHERE slug = 'urbanisme')),
('Contrôle des constructions',
 (SELECT id FROM ministeres WHERE slug = 'urbanisme')),
('Amélioration de l''habitat',
 (SELECT id FROM ministeres WHERE slug = 'urbanisme'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Permis de construire',
 (SELECT id FROM ministeres WHERE slug = 'urbanisme'),
 'service', 'local', 'permis-construire', 'citoyens', 'urbanisme'),
('Titres fonciers',
 (SELECT id FROM ministeres WHERE slug = 'urbanisme'),
 'service', 'local', 'titres-fonciers', 'citoyens', 'urbanisme'),
('Aménagement urbain',
 (SELECT id FROM ministeres WHERE slug = 'urbanisme'),
 'service', 'local', 'amenagement-urbain', 'entreprises', 'construction'),
('Logement social',
 (SELECT id FROM ministeres WHERE slug = 'urbanisme'),
 'service', 'local', 'logement-social', 'citoyens', 'urbanisme');

-- Ministère du Commerce
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Développement du commerce intérieur',
 (SELECT id FROM ministeres WHERE slug = 'commerce')),
('Promotion du commerce extérieur',
 (SELECT id FROM ministeres WHERE slug = 'commerce')),
('Protection des consommateurs',
 (SELECT id FROM ministeres WHERE slug = 'commerce')),
('Régulation des prix',
 (SELECT id FROM ministeres WHERE slug = 'commerce')),
('Développement des échanges commerciaux',
 (SELECT id FROM ministeres WHERE slug = 'commerce'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Licences commerciales',
 (SELECT id FROM ministeres WHERE slug = 'commerce'),
 'service', 'local', 'licences-commerciales', 'entreprises', 'commerce'),
('Protection consommateur',
 (SELECT id FROM ministeres WHERE slug = 'commerce'),
 'service', 'local', 'protection-consommateur', 'citoyens', 'commerce'),
('Commerce international',
 (SELECT id FROM ministeres WHERE slug = 'commerce'),
 'service', 'local', 'commerce-international', 'entreprises', 'commerce-international'),
('Contrôle des prix',
 (SELECT id FROM ministeres WHERE slug = 'commerce'),
 'service', 'info', 'controle-prix', 'citoyens', 'commerce');

-- Ministère de l'Enseignement supérieur
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Développement de l''enseignement supérieur',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-superieur')),
('Gestion des universités publiques',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-superieur')),
('Promotion de la recherche scientifique',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-superieur')),
('Formation professionnelle supérieure',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-superieur')),
('Coopération universitaire internationale',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-superieur'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Inscriptions universitaires',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-superieur'),
 'service', 'local', 'inscriptions-universitaires', 'citoyens', 'education'),
('Bourses d''études',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-superieur'),
 'service', 'local', 'bourses-etudes', 'citoyens', 'education'),
('Recherche scientifique',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-superieur'),
 'service', 'local', 'recherche-scientifique', 'citoyens', 'education'),
('Équivalences diplômes',
 (SELECT id FROM ministeres WHERE slug = 'enseignement-superieur'),
 'service', 'local', 'equivalences-diplomes', 'citoyens', 'education');

-- Ministère de la Sécurité
INSERT INTO missions_ministere (description, ministere_id) VALUES
('Maintien de l''ordre public',
 (SELECT id FROM ministeres WHERE slug = 'securite')),
('Lutte contre la criminalité',
 (SELECT id FROM ministeres WHERE slug = 'securite')),
('Protection des personnes et des biens',
 (SELECT id FROM ministeres WHERE slug = 'securite')),
('Gestion de la police nationale',
 (SELECT id FROM ministeres WHERE slug = 'securite')),
('Coordination des services de sécurité',
 (SELECT id FROM ministeres WHERE slug = 'securite'));

INSERT INTO services_ministere (nom, ministere_id, type, route_type, slug, category, parent_slug) VALUES
('Police Nationale',
 (SELECT id FROM ministeres WHERE slug = 'securite'),
 'service', 'local', 'police-nationale', 'securite', 'police'),
('Sécurité Publique',
 (SELECT id FROM ministeres WHERE slug = 'securite'),
 'service', 'local', 'securite-publique', 'securite', 'protection'),
('Police des Frontières',
 (SELECT id FROM ministeres WHERE slug = 'securite'),
 'service', 'local', 'police-frontieres', 'securite', 'police'),
('Services d''Urgence',
 (SELECT id FROM ministeres WHERE slug = 'securite'),
 'service', 'local', 'services-urgence', 'securite', 'urgences');

-- Mise à jour des services de l'Administration territoriale
UPDATE services_ministere 
SET type = 'service',
    route_type = 'local',
    category = 'citoyens',
    parent_slug = 'administration'
WHERE ministere_id = (SELECT id FROM ministeres WHERE slug = 'administration-territoriale')
AND slug IN ('services-territoriaux', 'etat-civil');

UPDATE services_ministere 
SET type = 'service',
    route_type = 'local',
    category = 'citoyens',
    parent_slug = 'administration'
WHERE ministere_id = (SELECT id FROM ministeres WHERE slug = 'administration-territoriale')
AND slug = 'collectivites-locales';

UPDATE services_ministere 
SET type = 'service',
    route_type = 'local',
    category = 'securite',
    parent_slug = 'protection'
WHERE ministere_id = (SELECT id FROM ministeres WHERE slug = 'administration-territoriale')
AND slug = 'protection-civile'; 