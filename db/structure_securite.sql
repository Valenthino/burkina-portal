-- Tables de gestion de la sécurité
CREATE TABLE IF NOT EXISTS journaux_securite (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    type_evenement VARCHAR(50) NOT NULL,
    description TEXT,
    adresse_ip VARCHAR(45),
    agent_utilisateur TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions_utilisateur (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    jeton_session VARCHAR(255) UNIQUE NOT NULL,
    adresse_ip VARCHAR(45),
    agent_utilisateur TEXT,
    date_derniere_activite TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_expiration TIMESTAMP NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tentatives_connexion (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    adresse_ip VARCHAR(45) NOT NULL,
    reussie BOOLEAN DEFAULT FALSE,
    date_tentative TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS limites_requetes (
    id SERIAL PRIMARY KEY,
    adresse_ip VARCHAR(45) NOT NULL,
    point_acces VARCHAR(255) NOT NULL,
    nombre_requetes INTEGER DEFAULT 1,
    derniere_requete TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_reinitialisation TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS journaux_activite (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    type_activite VARCHAR(50) NOT NULL,
    description TEXT,
    details JSONB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS journaux_erreur (
    id SERIAL PRIMARY KEY,
    niveau VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    trace_pile TEXT,
    contexte JSONB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS politiques_securite (
    id SERIAL PRIMARY KEY,
    type_politique VARCHAR(50) UNIQUE NOT NULL,
    parametres JSONB NOT NULL,
    actif BOOLEAN DEFAULT TRUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création des déclencheurs
CREATE TRIGGER maj_sessions_utilisateur_derniere_activite
    BEFORE UPDATE ON sessions_utilisateur
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_politiques_securite_date_modification
    BEFORE UPDATE ON politiques_securite
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

-- Ajout des index pour l'optimisation
CREATE INDEX idx_journaux_securite_utilisateur ON journaux_securite(utilisateur_id);
CREATE INDEX idx_journaux_securite_type ON journaux_securite(type_evenement);
CREATE INDEX idx_sessions_utilisateur_jeton ON sessions_utilisateur(jeton_session);
CREATE INDEX idx_tentatives_connexion_ip ON tentatives_connexion(adresse_ip);
CREATE INDEX idx_limites_requetes_ip_point_acces ON limites_requetes(adresse_ip, point_acces);
CREATE INDEX idx_journaux_activite_utilisateur ON journaux_activite(utilisateur_id);
CREATE INDEX idx_journaux_activite_type ON journaux_activite(type_activite);
CREATE INDEX idx_journaux_erreur_niveau ON journaux_erreur(niveau);

-- Commentaires sur les tables
COMMENT ON TABLE journaux_securite IS 'Journal des événements de sécurité';
COMMENT ON TABLE sessions_utilisateur IS 'Sessions actives des utilisateurs';
COMMENT ON TABLE tentatives_connexion IS 'Historique des tentatives de connexion';
COMMENT ON TABLE limites_requetes IS 'Limites de taux pour les requêtes API';
COMMENT ON TABLE journaux_activite IS 'Journal des activités des utilisateurs';
COMMENT ON TABLE journaux_erreur IS 'Journal des erreurs système';
COMMENT ON TABLE politiques_securite IS 'Configuration des politiques de sécurité'; 