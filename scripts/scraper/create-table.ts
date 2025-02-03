import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from root .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createArticlesTable() {
  const { error } = await supabase.rpc('create_table_if_not_exists', {
    table_sql: `
      CREATE TABLE IF NOT EXISTS articles (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        image_url TEXT,
        source_url TEXT NOT NULL UNIQUE,
        published_at TIMESTAMP WITH TIME ZONE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      CREATE INDEX IF NOT EXISTS articles_published_at_idx ON articles(published_at DESC);
    `
  });

  if (error) {
    console.error('Error creating table:', error);
    process.exit(1);
  }

  console.log('Articles table created successfully');
}

createArticlesTable(); 