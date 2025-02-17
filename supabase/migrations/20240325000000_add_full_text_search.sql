-- Enable trigram extension for better text search
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Add full text search for services table
ALTER TABLE services ADD COLUMN IF NOT EXISTS titre_description_fts tsvector 
GENERATED ALWAYS AS (to_tsvector('french', coalesce(titre, '') || ' ' || coalesce(description, ''))) STORED;
CREATE INDEX IF NOT EXISTS services_fts_idx ON services USING GIN (titre_description_fts);

-- Add full text search for actualites table
ALTER TABLE actualites ADD COLUMN IF NOT EXISTS titre_contenu_fts tsvector 
GENERATED ALWAYS AS (to_tsvector('french', coalesce(titre, '') || ' ' || coalesce(contenu, ''))) STORED;
CREATE INDEX IF NOT EXISTS actualites_fts_idx ON actualites USING GIN (titre_contenu_fts);

-- Add full text search for articles table
ALTER TABLE articles ADD COLUMN IF NOT EXISTS titre_contenu_fts tsvector 
GENERATED ALWAYS AS (to_tsvector('french', coalesce(titre, '') || ' ' || coalesce(contenu, ''))) STORED;
CREATE INDEX IF NOT EXISTS articles_fts_idx ON articles USING GIN (titre_contenu_fts);

-- Add full text search columns
ALTER TABLE actualites ADD COLUMN IF NOT EXISTS titre_resume_fts tsvector GENERATED ALWAYS AS (to_tsvector('french', coalesce(titre, '') || ' ' || coalesce(resume, ''))) STORED;
CREATE INDEX IF NOT EXISTS actualites_fts_idx ON actualites USING GIN (titre_resume_fts);
ALTER TABLE documents ADD COLUMN IF NOT EXISTS titre_description_fts tsvector GENERATED ALWAYS AS (to_tsvector('french', coalesce(titre, '') || ' ' || coalesce(description, ''))) STORED;
CREATE INDEX IF NOT EXISTS documents_fts_idx ON documents USING GIN (titre_description_fts);
