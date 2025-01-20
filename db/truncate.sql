-- Script pour vider toutes les tables
DO $$ 
DECLARE
    tables_a_vider text[] := ARRAY[
        'politiques_securite',
        'journaux_erreur',
        'journaux_activite',
        'limites_requetes',
        'tentatives_connexion',
        'sessions_utilisateur',
        'journaux_securite',
        'actions_flux_travail',
        'conditions_flux_travail',
        'historique_etapes_flux_travail',
        'flux_travail_demande',
        'etapes_flux_travail',
        'modeles_flux_travail',
        'etats_service',
        'journaux_acces_service',
        'notifications',
        'modeles_communication',
        'historique_statut_demande',
        'documents_demande',
        'demandes',
        'modeles_document',
        'documents_utilisateur',
        'types_document',
        'communes',
        'provinces',
        'regions',
        'agents',
        'utilisateurs_roles',
        'roles_permissions',
        'permissions',
        'roles',
        'utilisateurs',
        'services',
        'departements',
        'ministeres'
    ];
    r record;
BEGIN
    -- Désactiver temporairement les contraintes de clé étrangère
    EXECUTE 'SET CONSTRAINTS ALL DEFERRED';
    
    -- Vider toutes les tables listées
    FOR r IN 
        SELECT table_name 
        FROM unnest(tables_a_vider) AS t(table_name)
        WHERE EXISTS (
            SELECT 1 
            FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = t.table_name
        )
    LOOP
        EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.table_name) || ' CASCADE';
        RAISE NOTICE 'Table % vidée', r.table_name;
    END LOOP;
    
    -- Réactiver les contraintes de clé étrangère
    EXECUTE 'SET CONSTRAINTS ALL IMMEDIATE';
    
    RAISE NOTICE 'Toutes les tables ont été vidées avec succès';
END $$; 