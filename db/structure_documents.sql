-- Tables de gestion des documents
CREATE TABLE IF NOT EXISTS types_document (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    champs_requis JSONB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS documents_utilisateur (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    type_document_id INTEGER REFERENCES types_document(id),
    numero_document VARCHAR(100),
    statut VARCHAR(50) DEFAULT 'en_attente',
    metadonnees JSONB,
    date_expiration TIMESTAMP,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS modeles_document (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    donnees_modele JSONB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tables de gestion des demandes
CREATE TABLE IF NOT EXISTS demandes (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    service_id INTEGER REFERENCES services(id),
    statut VARCHAR(50) DEFAULT 'soumise',
    numero_reference VARCHAR(50) UNIQUE,
    donnees_soumises JSONB,
    agent_assigne INTEGER REFERENCES agents(id),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS documents_demande (
    id SERIAL PRIMARY KEY,
    demande_id INTEGER REFERENCES demandes(id),
    type_document_id INTEGER REFERENCES types_document(id),
    url_document TEXT,
    statut VARCHAR(50) DEFAULT 'en_attente',
    verifie_par INTEGER REFERENCES agents(id),
    date_verification TIMESTAMP,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS historique_statut_demande (
    id SERIAL PRIMARY KEY,
    demande_id INTEGER REFERENCES demandes(id),
    statut VARCHAR(50) NOT NULL,
    notes TEXT,
    modifie_par INTEGER REFERENCES agents(id),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tables de communication
CREATE TABLE IF NOT EXISTS modeles_communication (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    type VARCHAR(50),
    nom VARCHAR(255) NOT NULL,
    sujet TEXT,
    contenu TEXT,
    variables JSONB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS notifications (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    type VARCHAR(50) NOT NULL,
    titre VARCHAR(255) NOT NULL,
    contenu TEXT NOT NULL,
    lu BOOLEAN DEFAULT FALSE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tables de suivi et performance
CREATE TABLE IF NOT EXISTS journaux_acces_service (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    agent_id INTEGER REFERENCES agents(id),
    type_acces VARCHAR(50),
    statut VARCHAR(50),
    temps_reponse INTEGER, -- en millisecondes
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS etats_service (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    statut VARCHAR(50) DEFAULT 'actif',
    message TEXT,
    derniere_verification TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    prochaine_maintenance TIMESTAMP,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création des déclencheurs
CREATE TRIGGER maj_documents_utilisateur_date_modification
    BEFORE UPDATE ON documents_utilisateur
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_modeles_document_date_modification
    BEFORE UPDATE ON modeles_document
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_demandes_date_modification
    BEFORE UPDATE ON demandes
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_etats_service_date_modification
    BEFORE UPDATE ON etats_service
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

-- Ajout des index pour l'optimisation
CREATE INDEX idx_documents_utilisateur_type ON documents_utilisateur(type_document_id);
CREATE INDEX idx_demandes_utilisateur ON demandes(utilisateur_id);
CREATE INDEX idx_demandes_service ON demandes(service_id);
CREATE INDEX idx_demandes_statut ON demandes(statut);
CREATE INDEX idx_documents_demande_type ON documents_demande(type_document_id);
CREATE INDEX idx_notifications_utilisateur ON notifications(utilisateur_id);
CREATE INDEX idx_journaux_acces_service ON journaux_acces_service(service_id);

-- Commentaires sur les tables
COMMENT ON TABLE types_document IS 'Types de documents acceptés par le système';
COMMENT ON TABLE documents_utilisateur IS 'Documents téléversés par les utilisateurs';
COMMENT ON TABLE demandes IS 'Demandes de services soumises par les utilisateurs';
COMMENT ON TABLE documents_demande IS 'Documents associés aux demandes';
COMMENT ON TABLE historique_statut_demande IS 'Historique des changements de statut des demandes';
COMMENT ON TABLE modeles_communication IS 'Modèles de messages pour la communication';
COMMENT ON TABLE notifications IS 'Notifications envoyées aux utilisateurs';
COMMENT ON TABLE journaux_acces_service IS 'Journal des accès aux services';
COMMENT ON TABLE etats_service IS 'État actuel des services'; 