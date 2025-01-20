-- Seed Document Types
INSERT INTO document_types (name, description, required_fields) VALUES
('Carte Nationale d''Identité', 'Carte d''identité burkinabè', '{"first_name": "text", "last_name": "text", "birth_date": "date", "birth_place": "text", "photo": "file"}'),
('Passeport', 'Passeport burkinabè', '{"first_name": "text", "last_name": "text", "birth_date": "date", "birth_place": "text", "photo": "file", "signature": "file"}'),
('Acte de Naissance', 'Extrait d''acte de naissance', '{"first_name": "text", "last_name": "text", "birth_date": "date", "birth_place": "text", "parent_names": "text"}'),
('Carte CNIB', 'Carte Nationale d''Identité Burkinabè', '{"first_name": "text", "last_name": "text", "birth_date": "date", "birth_place": "text", "photo": "file", "fingerprints": "file"}');

-- Seed Notification Types
INSERT INTO notification_types (name, template, channels) VALUES
('Application Status Update', 'Votre demande {reference_number} est maintenant {status}', ARRAY['email', 'sms']),
('Appointment Reminder', 'Rappel: Votre rendez-vous est prévu pour le {scheduled_time}', ARRAY['email', 'sms']),
('Document Expiration', 'Votre document {document_type} expire le {expiry_date}', ARRAY['email']),
('Service Interruption', 'Le service {service_name} est temporairement indisponible', ARRAY['email', 'sms']),
('New Service Available', 'Un nouveau service est disponible: {service_name}', ARRAY['email']);

-- Seed Service Schedules (Example for some services)
INSERT INTO service_schedules (service_id, day_of_week, start_time, end_time, max_appointments, location) VALUES
-- Carte d'identité nationale (Administration)
((SELECT id FROM services WHERE title = 'Carte d''identité nationale'), 1, '08:00', '16:00', 50, 'Centre principal de Ouagadougou'),
((SELECT id FROM services WHERE title = 'Carte d''identité nationale'), 2, '08:00', '16:00', 50, 'Centre principal de Ouagadougou'),
((SELECT id FROM services WHERE title = 'Carte d''identité nationale'), 3, '08:00', '16:00', 50, 'Centre principal de Ouagadougou'),
((SELECT id FROM services WHERE title = 'Carte d''identité nationale'), 4, '08:00', '16:00', 50, 'Centre principal de Ouagadougou'),
((SELECT id FROM services WHERE title = 'Carte d''identité nationale'), 5, '08:00', '16:00', 50, 'Centre principal de Ouagadougou'),

-- Passeport (Affaires étrangères)
((SELECT id FROM services WHERE title = 'Demande de passeport'), 1, '08:00', '16:00', 30, 'Direction des passeports'),
((SELECT id FROM services WHERE title = 'Demande de passeport'), 2, '08:00', '16:00', 30, 'Direction des passeports'),
((SELECT id FROM services WHERE title = 'Demande de passeport'), 3, '08:00', '16:00', 30, 'Direction des passeports'),
((SELECT id FROM services WHERE title = 'Demande de passeport'), 4, '08:00', '16:00', 30, 'Direction des passeports'),
((SELECT id FROM services WHERE title = 'Demande de passeport'), 5, '08:00', '16:00', 30, 'Direction des passeports'),

-- Carte CNAM (Santé)
((SELECT id FROM services WHERE title = 'Carte CNAM'), 1, '08:00', '17:00', 100, 'Centre CNAM'),
((SELECT id FROM services WHERE title = 'Carte CNAM'), 2, '08:00', '17:00', 100, 'Centre CNAM'),
((SELECT id FROM services WHERE title = 'Carte CNAM'), 3, '08:00', '17:00', 100, 'Centre CNAM'),
((SELECT id FROM services WHERE title = 'Carte CNAM'), 4, '08:00', '17:00', 100, 'Centre CNAM'),
((SELECT id FROM services WHERE title = 'Carte CNAM'), 5, '08:00', '17:00', 100, 'Centre CNAM');

-- Add some example user verifications for our test users
INSERT INTO user_verification (user_id, verification_type, verified, verification_data, verified_at) VALUES
(1, 'email', TRUE, 'admin@burkina-portal.gov.bf', CURRENT_TIMESTAMP),
(1, 'phone', TRUE, '+22670000000', CURRENT_TIMESTAMP),
(2, 'email', TRUE, 'user@example.com', CURRENT_TIMESTAMP),
(2, 'phone', FALSE, '+22675000000', NULL); 