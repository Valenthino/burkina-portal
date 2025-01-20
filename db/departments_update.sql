-- Add departments for all ministries
INSERT INTO departments (ministry_id, name, short_name, description) VALUES
-- Ministère de la Sécurité
((SELECT id FROM ministries WHERE short_name = 'Sécurité'), 'Direction Générale de la Police Nationale', 'DGPN', 'Coordination des services de police nationale'),
((SELECT id FROM ministries WHERE short_name = 'Sécurité'), 'Direction de la Sécurité Publique', 'DSP', 'Gestion de la sécurité publique'),
((SELECT id FROM ministries WHERE short_name = 'Sécurité'), 'Direction des Renseignements', 'DR', 'Service de renseignement et d''investigation'),

-- Ministère des Affaires Étrangères
((SELECT id FROM ministries WHERE short_name = 'Affaires Étrangères'), 'Direction des Affaires Diplomatiques', 'DAD', 'Gestion des relations diplomatiques'),
((SELECT id FROM ministries WHERE short_name = 'Affaires Étrangères'), 'Direction des Burkinabè de l''Extérieur', 'DBE', 'Services aux Burkinabè de la diaspora'),
((SELECT id FROM ministries WHERE short_name = 'Affaires Étrangères'), 'Direction de la Coopération', 'DC', 'Gestion des accords de coopération'),

-- Ministère de la Justice
((SELECT id FROM ministries WHERE short_name = 'Justice'), 'Direction des Affaires Civiles', 'DAC', 'Gestion des affaires civiles et juridiques'),
((SELECT id FROM ministries WHERE short_name = 'Justice'), 'Direction des Affaires Pénales', 'DAP', 'Gestion des affaires pénales'),
((SELECT id FROM ministries WHERE short_name = 'Justice'), 'Direction de l''Administration Pénitentiaire', 'DAP', 'Administration des établissements pénitentiaires'),

-- Ministère de la Fonction Publique
((SELECT id FROM ministries WHERE short_name = 'Fonction Publique'), 'Direction du Recrutement', 'DR', 'Gestion des concours et recrutements'),
((SELECT id FROM ministries WHERE short_name = 'Fonction Publique'), 'Direction de la Formation', 'DF', 'Formation continue des fonctionnaires'),
((SELECT id FROM ministries WHERE short_name = 'Fonction Publique'), 'Direction des Carrières', 'DC', 'Gestion des carrières des fonctionnaires'),

-- Ministère de la Communication
((SELECT id FROM ministries WHERE short_name = 'Communication'), 'Direction des Médias', 'DM', 'Régulation et développement des médias'),
((SELECT id FROM ministries WHERE short_name = 'Communication'), 'Direction du Tourisme', 'DT', 'Promotion et développement du tourisme'),
((SELECT id FROM ministries WHERE short_name = 'Communication'), 'Direction des Arts', 'DA', 'Promotion des arts et de la culture'),

-- Ministère de l'Action Humanitaire
((SELECT id FROM ministries WHERE short_name = 'Action Humanitaire'), 'Direction des Urgences', 'DU', 'Gestion des situations d''urgence'),
((SELECT id FROM ministries WHERE short_name = 'Action Humanitaire'), 'Direction de l''Aide Sociale', 'DAS', 'Coordination de l''aide sociale'),
((SELECT id FROM ministries WHERE short_name = 'Action Humanitaire'), 'Direction des Partenariats', 'DP', 'Gestion des partenariats humanitaires'),

-- Ministère de la Transition Digitale
((SELECT id FROM ministries WHERE short_name = 'Digital'), 'Direction de l''Innovation', 'DI', 'Promotion de l''innovation numérique'),
((SELECT id FROM ministries WHERE short_name = 'Digital'), 'Direction des Infrastructures Numériques', 'DIN', 'Développement des infrastructures IT'),
((SELECT id FROM ministries WHERE short_name = 'Digital'), 'Direction de la Cybersécurité', 'DC', 'Sécurité des systèmes d''information'),

-- Ministère de l'Industrie
((SELECT id FROM ministries WHERE short_name = 'Industrie'), 'Direction du Développement Industriel', 'DDI', 'Promotion du développement industriel'),
((SELECT id FROM ministries WHERE short_name = 'Industrie'), 'Direction de l''Artisanat', 'DA', 'Promotion de l''artisanat'),
((SELECT id FROM ministries WHERE short_name = 'Industrie'), 'Direction du Commerce', 'DC', 'Régulation des activités commerciales'),

-- Ministère des Infrastructures
((SELECT id FROM ministries WHERE short_name = 'Infrastructures'), 'Direction des Travaux Publics', 'DTP', 'Gestion des travaux publics'),
((SELECT id FROM ministries WHERE short_name = 'Infrastructures'), 'Direction de l''Urbanisme', 'DU', 'Planification urbaine'),
((SELECT id FROM ministries WHERE short_name = 'Infrastructures'), 'Direction des Transports', 'DT', 'Gestion des infrastructures de transport'),

-- Ministère de l'Énergie
((SELECT id FROM ministries WHERE short_name = 'Énergie'), 'Direction de l''Énergie', 'DE', 'Gestion des ressources énergétiques'),
((SELECT id FROM ministries WHERE short_name = 'Énergie'), 'Direction des Mines', 'DM', 'Gestion des ressources minières'),
((SELECT id FROM ministries WHERE short_name = 'Énergie'), 'Direction des Énergies Renouvelables', 'DER', 'Développement des énergies renouvelables');

-- Create regional offices for all departments
INSERT INTO department_regions (department_id, region_id, address, phone, email)
SELECT 
    d.id,
    r.id,
    CASE 
        WHEN r.code = 'CTR' THEN 'Siège Principal, ' || r.capital
        ELSE 'Direction Régionale, ' || r.capital
    END,
    '+226 ' || 
    CASE 
        WHEN r.code = 'CTR' THEN '25' 
        ELSE '20' 
    END || 
    FLOOR(RANDOM() * 900000 + 100000)::TEXT,
    LOWER(d.short_name || '.' || r.code || '@gov.bf')
FROM departments d
CROSS JOIN regions r
WHERE d.id IN (SELECT id FROM departments);

-- Add regional heads for key departments
INSERT INTO staff (
    employee_id,
    ministry_id,
    department_id,
    region_id,
    role_id,
    first_name,
    last_name,
    email,
    phone,
    hire_date
)
SELECT 
    'RH' || LPAD(ROW_NUMBER() OVER (ORDER BY d.id, r.id)::TEXT, 3, '0'),
    d.ministry_id,
    d.id,
    r.id,
    (SELECT id FROM roles WHERE level = 'region_head'),
    'Directeur',
    'Regional ' || r.code,
    LOWER('dr.' || d.short_name || '.' || r.code || '@gov.bf'),
    '+226 ' || FLOOR(RANDOM() * 90000000 + 10000000)::TEXT,
    '2023-01-01'
FROM departments d
CROSS JOIN regions r
WHERE d.id IN (
    SELECT id FROM departments 
    WHERE short_name IN ('DGPN', 'DAD', 'DAC', 'DR', 'DM', 'DU', 'DTP', 'DE')
);

-- Add supervisors for each department
INSERT INTO staff (
    employee_id,
    ministry_id,
    department_id,
    role_id,
    first_name,
    last_name,
    email,
    phone,
    hire_date
)
SELECT 
    'SV' || LPAD(ROW_NUMBER() OVER (ORDER BY d.id)::TEXT, 3, '0'),
    d.ministry_id,
    d.id,
    (SELECT id FROM roles WHERE level = 'supervisor'),
    'Superviseur',
    d.short_name,
    LOWER('sup.' || d.short_name || '@gov.bf'),
    '+226 ' || FLOOR(RANDOM() * 90000000 + 10000000)::TEXT,
    '2023-01-01'
FROM departments d; 