-- Seed Roles
INSERT INTO roles (name, level, description) VALUES
('Super Administrateur', 'super_admin', 'Administrateur principal du portail gouvernemental'),
('Administrateur Ministériel', 'ministry_admin', 'Administrateur au niveau ministériel'),
('Chef de Département', 'department_head', 'Responsable d''un département ministériel'),
('Chef Régional', 'region_head', 'Responsable régional d''un département'),
('Superviseur', 'supervisor', 'Superviseur des agents et des services'),
('Agent Réviseur', 'reviewer', 'Agent chargé de la révision des dossiers'),
('Agent de Service', 'agent', 'Agent chargé du traitement des dossiers');

-- Seed Permissions
INSERT INTO permissions (name, code, description) VALUES
-- Super Admin Permissions
('Gestion Complète', 'full_access', 'Accès complet à toutes les fonctionnalités'),
('Gestion des Administrateurs', 'manage_admins', 'Créer et gérer les administrateurs ministériels'),
('Audit Système', 'system_audit', 'Accès aux logs et audits système'),

-- Ministry Admin Permissions
('Gestion Ministérielle', 'ministry_manage', 'Gestion des services du ministère'),
('Gestion du Personnel', 'staff_manage', 'Gestion du personnel ministériel'),
('Gestion des Services', 'service_manage', 'Gestion des services publics'),

-- Department Head Permissions
('Gestion Départementale', 'department_manage', 'Gestion d''un département'),
('Validation Finale', 'final_approval', 'Validation finale des dossiers'),
('Rapports Départementaux', 'department_reports', 'Accès aux rapports départementaux'),

-- Region Head Permissions
('Gestion Régionale', 'region_manage', 'Gestion d''une région'),
('Validation Régionale', 'region_approval', 'Validation au niveau régional'),
('Rapports Régionaux', 'region_reports', 'Accès aux rapports régionaux'),

-- Supervisor Permissions
('Supervision des Agents', 'agent_supervise', 'Supervision des agents'),
('Validation Intermédiaire', 'intermediate_approval', 'Validation intermédiaire des dossiers'),
('Rapports d''Équipe', 'team_reports', 'Accès aux rapports d''équipe'),

-- Reviewer Permissions
('Révision des Dossiers', 'application_review', 'Révision des dossiers'),
('Demande d''Information', 'request_info', 'Demander des informations supplémentaires'),
('Recommandation', 'make_recommendation', 'Faire des recommandations'),

-- Agent Permissions
('Traitement des Dossiers', 'application_process', 'Traiter les dossiers'),
('Mise à Jour des Dossiers', 'application_update', 'Mettre à jour les dossiers'),
('Communication Client', 'client_communicate', 'Communiquer avec les clients');

-- Assign Permissions to Roles
-- Super Admin gets all permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT 
    (SELECT id FROM roles WHERE level = 'super_admin'),
    id
FROM permissions;

-- Ministry Admin permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT 
    (SELECT id FROM roles WHERE level = 'ministry_admin'),
    id
FROM permissions 
WHERE code IN ('ministry_manage', 'staff_manage', 'service_manage', 'department_reports', 'system_audit');

-- Department Head permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT 
    (SELECT id FROM roles WHERE level = 'department_head'),
    id
FROM permissions 
WHERE code IN ('department_manage', 'final_approval', 'department_reports', 'agent_supervise');

-- Seed Regions (13 regions of Burkina Faso)
INSERT INTO regions (name, code, capital) VALUES
('Boucle du Mouhoun', 'BM', 'Dédougou'),
('Cascades', 'CSC', 'Banfora'),
('Centre', 'CTR', 'Ouagadougou'),
('Centre-Est', 'CE', 'Tenkodogo'),
('Centre-Nord', 'CN', 'Kaya'),
('Centre-Ouest', 'CO', 'Koudougou'),
('Centre-Sud', 'CS', 'Manga'),
('Est', 'EST', 'Fada N''Gourma'),
('Hauts-Bassins', 'HB', 'Bobo-Dioulasso'),
('Nord', 'NRD', 'Ouahigouya'),
('Plateau-Central', 'PC', 'Ziniaré'),
('Sahel', 'SHL', 'Dori'),
('Sud-Ouest', 'SO', 'Gaoua');

-- Seed some example departments for ministries
INSERT INTO departments (ministry_id, name, short_name, description) VALUES
-- Défense
((SELECT id FROM ministries WHERE short_name = 'Défense'), 'Direction Générale des Ressources Humaines', 'DGRH', 'Gestion des ressources humaines des forces armées'),
((SELECT id FROM ministries WHERE short_name = 'Défense'), 'Direction de la Logistique', 'DL', 'Gestion de la logistique militaire'),

-- Santé
((SELECT id FROM ministries WHERE short_name = 'Santé'), 'Direction des Ressources Humaines', 'DRH', 'Gestion du personnel de santé'),
((SELECT id FROM ministries WHERE short_name = 'Santé'), 'Direction des Infrastructures', 'DI', 'Gestion des infrastructures sanitaires'),

-- Education
((SELECT id FROM ministries WHERE short_name = 'Education'), 'Direction des Examens', 'DE', 'Organisation des examens nationaux'),
((SELECT id FROM ministries WHERE short_name = 'Education'), 'Direction du Personnel', 'DP', 'Gestion du personnel enseignant');

-- Create some department-region associations
INSERT INTO department_regions (department_id, region_id, address, phone, email)
SELECT 
    d.id,
    r.id,
    'Adresse principale ' || r.capital,
    '+226 ' || FLOOR(RANDOM() * 90000000 + 10000000)::TEXT,
    LOWER(d.short_name || '.' || r.code || '@gov.bf')
FROM departments d
CROSS JOIN regions r
WHERE d.id IN (SELECT id FROM departments LIMIT 3)
AND r.id IN (SELECT id FROM regions LIMIT 5);

-- Create some initial staff members (including super admins)
INSERT INTO staff (
    user_id,
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
) VALUES
-- Super Admins
(1, 'SA001', NULL, NULL, NULL, 
 (SELECT id FROM roles WHERE level = 'super_admin'),
 'Admin', 'Principal', 'admin.principal@gov.bf', '+22670000001', '2023-01-01'),

-- Ministry Admins (one for each major ministry)
(NULL, 'MA001', 
 (SELECT id FROM ministries WHERE short_name = 'Défense'),
 NULL, NULL,
 (SELECT id FROM roles WHERE level = 'ministry_admin'),
 'Admin', 'Défense', 'admin.defense@gov.bf', '+22670000002', '2023-01-01'),

(NULL, 'MA002',
 (SELECT id FROM ministries WHERE short_name = 'Santé'),
 NULL, NULL,
 (SELECT id FROM roles WHERE level = 'ministry_admin'),
 'Admin', 'Santé', 'admin.sante@gov.bf', '+22670000003', '2023-01-01'),

-- Department Heads
(NULL, 'DH001',
 (SELECT id FROM ministries WHERE short_name = 'Défense'),
 (SELECT id FROM departments WHERE short_name = 'DGRH'),
 NULL,
 (SELECT id FROM roles WHERE level = 'department_head'),
 'Chef', 'DGRH', 'chef.dgrh@defense.gov.bf', '+22670000004', '2023-01-01'); 