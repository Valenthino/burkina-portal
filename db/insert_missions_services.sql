-- Missions du Ministère de la Défense
INSERT INTO missions_ministere (description, ministere_id) 
SELECT description, id FROM (
  VALUES 
    ('Élaboration et mise en œuvre de la politique de défense nationale', 
     (SELECT id FROM ministeres WHERE nom LIKE '%Défense%')),
    ('Gestion et modernisation des forces armées',
     (SELECT id FROM ministeres WHERE nom LIKE '%Défense%')),
    ('Protection du territoire national',
     (SELECT id FROM ministeres WHERE nom LIKE '%Défense%')),
    ('Coordination des opérations militaires',
     (SELECT id FROM ministeres WHERE nom LIKE '%Défense%')),
    ('Gestion des anciens combattants et de leurs droits',
     (SELECT id FROM ministeres WHERE nom LIKE '%Défense%'))
) AS m(description, id);

-- Services du Ministère de la Défense
INSERT INTO services_ministere (nom, ministere_id) 
SELECT nom, id FROM (
  VALUES 
    ('Forces Armées Nationales',
     (SELECT id FROM ministeres WHERE nom LIKE '%Défense%')),
    ('Gendarmerie Nationale',
     (SELECT id FROM ministeres WHERE nom LIKE '%Défense%')),
    ('Service National',
     (SELECT id FROM ministeres WHERE nom LIKE '%Défense%')),
    ('Anciens Combattants',
     (SELECT id FROM ministeres WHERE nom LIKE '%Défense%'))
) AS s(nom, id);

-- Missions du Ministère des Affaires Étrangères
INSERT INTO missions_ministere (description, ministere_id)
SELECT description, id FROM (
  VALUES 
    ('Conduite de la politique étrangère',
     (SELECT id FROM ministeres WHERE nom LIKE '%Affaires étrangères%')),
    ('Gestion des relations diplomatiques',
     (SELECT id FROM ministeres WHERE nom LIKE '%Affaires étrangères%')),
    ('Promotion de la coopération internationale',
     (SELECT id FROM ministeres WHERE nom LIKE '%Affaires étrangères%')),
    ('Protection des intérêts burkinabè à l''étranger',
     (SELECT id FROM ministeres WHERE nom LIKE '%Affaires étrangères%')),
    ('Coordination des actions internationales',
     (SELECT id FROM ministeres WHERE nom LIKE '%Affaires étrangères%'))
) AS m(description, id);

-- Services du Ministère des Affaires Étrangères
INSERT INTO services_ministere (nom, ministere_id)
SELECT nom, id FROM (
  VALUES 
    ('Services Consulaires',
     (SELECT id FROM ministeres WHERE nom LIKE '%Affaires étrangères%')),
    ('Coopération Internationale',
     (SELECT id FROM ministeres WHERE nom LIKE '%Affaires étrangères%')),
    ('Diaspora',
     (SELECT id FROM ministeres WHERE nom LIKE '%Affaires étrangères%')),
    ('Relations Bilatérales',
     (SELECT id FROM ministeres WHERE nom LIKE '%Affaires étrangères%'))
) AS s(nom, id);

-- Missions du Ministère de la Justice
INSERT INTO missions_ministere (description, ministere_id)
SELECT description, id FROM (
  VALUES 
    ('Administration de la justice',
     (SELECT id FROM ministeres WHERE nom LIKE '%Justice%')),
    ('Protection des droits humains',
     (SELECT id FROM ministeres WHERE nom LIKE '%Justice%')),
    ('Modernisation du système judiciaire',
     (SELECT id FROM ministeres WHERE nom LIKE '%Justice%'))
) AS m(description, id);

-- Services du Ministère de la Justice
INSERT INTO services_ministere (nom, ministere_id)
SELECT nom, id FROM (
  VALUES 
    ('Tribunaux et Cours',
     (SELECT id FROM ministeres WHERE nom LIKE '%Justice%')),
    ('Droits Humains',
     (SELECT id FROM ministeres WHERE nom LIKE '%Justice%')),
    ('Services Pénitentiaires',
     (SELECT id FROM ministeres WHERE nom LIKE '%Justice%'))
) AS s(nom, id); 