-- Tables de gestion des flux de travail
CREATE TABLE IF NOT EXISTS modeles_flux_travail (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    duree_estimee INTEGER, -- en jours
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS etapes_flux_travail (
    id SERIAL PRIMARY KEY,
    flux_travail_id INTEGER REFERENCES modeles_flux_travail(id),
    numero_etape INTEGER NOT NULL,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    role_requis niveau_role NOT NULL,
    duree_estimee INTEGER, -- en heures
    obligatoire BOOLEAN DEFAULT TRUE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS flux_travail_demande (
    id SERIAL PRIMARY KEY,
    demande_id INTEGER REFERENCES demandes(id),
    flux_travail_id INTEGER REFERENCES modeles_flux_travail(id),
    etape_courante INTEGER,
    statut VARCHAR(50) DEFAULT 'en_cours',
    date_debut TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_fin TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS historique_etapes_flux_travail (
    id SERIAL PRIMARY KEY,
    flux_travail_demande_id INTEGER REFERENCES flux_travail_demande(id),
    etape_id INTEGER REFERENCES etapes_flux_travail(id),
    agent_id INTEGER REFERENCES agents(id),
    statut VARCHAR(50),
    commentaires TEXT,
    date_debut TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_fin TIMESTAMP
);

CREATE TABLE IF NOT EXISTS conditions_flux_travail (
    id SERIAL PRIMARY KEY,
    etape_id INTEGER REFERENCES etapes_flux_travail(id),
    type_condition VARCHAR(50) NOT NULL,
    criteres JSONB,
    etape_suivante_si_vrai INTEGER REFERENCES etapes_flux_travail(id),
    etape_suivante_si_faux INTEGER REFERENCES etapes_flux_travail(id),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS actions_flux_travail (
    id SERIAL PRIMARY KEY,
    etape_id INTEGER REFERENCES etapes_flux_travail(id),
    type_action VARCHAR(50) NOT NULL,
    parametres JSONB,
    ordre INTEGER,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création des déclencheurs
CREATE TRIGGER maj_modeles_flux_travail_date_modification
    BEFORE UPDATE ON modeles_flux_travail
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

CREATE TRIGGER maj_flux_travail_demande_date_modification
    BEFORE UPDATE ON flux_travail_demande
    FOR EACH ROW
    EXECUTE FUNCTION maj_date_modification();

-- Ajout des index pour l'optimisation
CREATE INDEX idx_etapes_flux_travail ON etapes_flux_travail(flux_travail_id);
CREATE INDEX idx_flux_travail_demande_statut ON flux_travail_demande(statut);
CREATE INDEX idx_historique_etapes_flux_travail ON historique_etapes_flux_travail(flux_travail_demande_id);
CREATE INDEX idx_conditions_flux_travail ON conditions_flux_travail(etape_id);
CREATE INDEX idx_actions_flux_travail ON actions_flux_travail(etape_id);

-- Commentaires sur les tables
COMMENT ON TABLE modeles_flux_travail IS 'Modèles de flux de travail pour les services';
COMMENT ON TABLE etapes_flux_travail IS 'Étapes définies dans les flux de travail';
COMMENT ON TABLE flux_travail_demande IS 'Suivi des demandes dans les flux de travail';
COMMENT ON TABLE historique_etapes_flux_travail IS 'Historique du traitement des étapes';
COMMENT ON TABLE conditions_flux_travail IS 'Conditions de transition entre les étapes';
COMMENT ON TABLE actions_flux_travail IS 'Actions à exécuter dans les étapes'; 