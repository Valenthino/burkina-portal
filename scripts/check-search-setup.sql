-- Check if pg_trgm extension is installed
SELECT * FROM pg_extension WHERE extname = 'pg_trgm';

-- Check services table structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'services';

-- Check actualites table structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'actualites';

-- Check documents table structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'documents';

-- Check if FTS columns exist
SELECT tablename, indexname, indexdef
FROM pg_indexes
WHERE indexname IN (
  'services_fts_idx',
  'actualites_fts_idx',
  'documents_fts_idx'
); 