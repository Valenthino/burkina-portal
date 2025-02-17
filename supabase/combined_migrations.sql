-- Combined migrations file for manual execution

-- Create auth schema and related tables
\ir migrations/20240318000000_create_auth_schema.sql

-- Create profiles table
\ir migrations/20240318500000_create_profiles_table.sql

-- Add username to profiles
\ir migrations/20240319000000_add_username_to_profiles.sql

-- Create services related tables
\ir migrations/20240120000000_create_services.sql
\ir migrations/20240120000001_update_services.sql
\ir migrations/20240120000002_reset_services.sql

-- Create passport related tables
\ir migrations/20240320000000_add_passport_drafts.sql
\ir migrations/20240321000000_create_passport_schema.sql
\ir migrations/20240326000000_create_passport_applications.sql

-- Create admin related tables and roles
\ir migrations/20240319000001_update_admin_roles.sql
\ir migrations/20240320000001_fix_admin_tables.sql
\ir migrations/20240320000002_create_super_admin.sql

-- Create ministeres related tables
\ir migrations/20240320000003_create_ministeres.sql
\ir migrations/20240321000001_add_slug_to_ministeres.sql
\ir migrations/20240322000000_fix_ministeres_est_actif.sql
\ir migrations/20240322000001_fix_ministeres_columns.sql
\ir migrations/20240322000002_add_ordre_to_missions.sql
\ir migrations/20240322000003_fix_services_ministere_columns.sql

-- Create actualites and articles tables
\ir migrations/20240324000000_create_actualites_table.sql
\ir migrations/20240324000001_create_articles_table.sql
\ir migrations/20240324000002_create_articles_function.sql

-- Add full text search capabilities
\ir migrations/20240325000000_add_full_text_search.sql 