-- Insert test service
INSERT INTO services (
  titre,
  description,
  contenu,
  ministere,
  categorie,
  est_actif
) VALUES (
  'Carte Nationale d''Identité',
  'Procédure pour obtenir ou renouveler votre Carte Nationale d''Identité Burkinabè (CNIB)',
  '<h2>Documents nécessaires</h2>
   <ul>
     <li>Extrait d''acte de naissance</li>
     <li>Certificat de nationalité</li>
     <li>2 photos d''identité</li>
     <li>Ancien CNIB (en cas de renouvellement)</li>
   </ul>
   <h2>Procédure</h2>
   <ol>
     <li>Se présenter au service d''identification</li>
     <li>Fournir les documents requis</li>
     <li>Payer les frais</li>
     <li>Prise de photo et empreintes</li>
     <li>Retrait sous 1 semaine</li>
   </ol>',
  'Ministère de l''Administration Territoriale',
  'Documents & État Civil',
  true
); 