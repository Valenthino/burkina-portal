-- Insert test services
INSERT INTO services (titre, description, contenu, ministere, categorie, est_actif) VALUES
(
  'Carte Nationale d''Identité',
  'Procédure pour obtenir ou renouveler votre Carte Nationale d''Identité Burkinabè (CNIB)',
  '<h2>Documents nécessaires</h2><ul><li>Extrait d''acte de naissance</li><li>Certificat de nationalité</li><li>Photos d''identité</li></ul>',
  'Ministère de l''Administration Territoriale',
  'Documents & État Civil',
  true
),
(
  'Passeport',
  'Demande et renouvellement de passeport Burkinabè',
  '<h2>Conditions requises</h2><ul><li>CNIB valide</li><li>Acte de naissance</li><li>Photos aux normes</li></ul>',
  'Ministère de l''Administration Territoriale',
  'Documents & État Civil',
  true
),
(
  'Permis de Conduire',
  'Obtention et renouvellement du permis de conduire',
  '<h2>Procédure</h2><ul><li>Inscription à l''auto-école</li><li>Examen théorique</li><li>Examen pratique</li></ul>',
  'Ministère des Transports',
  'Transport',
  true
); 