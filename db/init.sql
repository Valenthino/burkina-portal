-- Script d'initialisation de la base de données
-- Ce script doit être exécuté en tant qu'utilisateur avec les privilèges appropriés

-- Suppression des tables existantes
\i db/drop_all.sql

-- Création de la fonction de mise à jour des dates de modification
CREATE OR REPLACE FUNCTION maj_date_modification()
RETURNS TRIGGER AS $$
BEGIN
    NEW.date_modification = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Création du type ENUM pour les niveaux de rôle
DO $$ BEGIN
    CREATE TYPE niveau_role AS ENUM (
        'administrateur',
        'superviseur',
        'agent',
        'utilisateur'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Exécution des scripts de structure dans l'ordre
\i db/structure_base.sql
\i db/structure_documents.sql
\i db/structure_flux_travail.sql
\i db/structure_securite.sql

-- Vérification de la création des tables
DO $$ 
DECLARE
    tables_attendues text[] := ARRAY[
        'ministeres',
        'departements',
        'services',
        'utilisateurs',
        'roles',
        'permissions',
        'roles_permissions',
        'utilisateurs_roles',
        'agents',
        'regions',
        'provinces',
        'communes',
        'types_document',
        'documents_utilisateur',
        'modeles_document',
        'demandes',
        'documents_demande',
        'historique_statut_demande',
        'modeles_communication',
        'notifications',
        'journaux_acces_service',
        'etats_service',
        'modeles_flux_travail',
        'etapes_flux_travail',
        'flux_travail_demande',
        'historique_etapes_flux_travail',
        'conditions_flux_travail',
        'actions_flux_travail',
        'journaux_securite',
        'sessions_utilisateur',
        'tentatives_connexion',
        'limites_requetes',
        'journaux_activite',
        'journaux_erreur',
        'politiques_securite'
    ];
    table_manquante text;
BEGIN
    FOR table_manquante IN 
        SELECT t.table_name 
        FROM unnest(tables_attendues) AS t(table_name)
        WHERE NOT EXISTS (
            SELECT 1 
            FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = t.table_name
        )
    LOOP
        RAISE EXCEPTION 'Table % non trouvée', table_manquante;
    END LOOP;
    
    RAISE NOTICE 'Toutes les tables ont été créées avec succès';
END $$; 