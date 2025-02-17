require('dotenv').config();
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const SUPABASE_PROJECT_ID = 'agxtgjnwcfacuisflbft';
const SUPABASE_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneHRnam53Y2ZhY3Vpc2ZsYmZ0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzQyNDQ5MCwiZXhwIjoyMDUzMDAwNDkwfQ.4eF7tlvsS-hbJiOjeIbhoqO8WPnKbidDdFjWtl6550Y';

async function executeSql(sql) {
  // Split the SQL into individual statements
  const statements = sql
    .split(';')
    .map(stmt => stmt.trim())
    .filter(stmt => stmt.length > 0);

  for (const statement of statements) {
    // Skip DROP statements to preserve existing objects
    if (statement.toLowerCase().includes('drop ')) {
      console.log('Skipping DROP statement for safety');
      continue;
    }

    // Modify CREATE statements to use IF NOT EXISTS
    let modifiedStatement = statement;
    if (statement.toLowerCase().includes('create table')) {
      modifiedStatement = statement.replace(/create table/i, 'CREATE TABLE IF NOT EXISTS');
    }
    if (statement.toLowerCase().includes('create function')) {
      modifiedStatement = statement.replace(/create function/i, 'CREATE OR REPLACE FUNCTION');
    }
    if (statement.toLowerCase().includes('create trigger')) {
      modifiedStatement = statement.replace(/create trigger/i, 'CREATE OR REPLACE TRIGGER');
    }

    try {
      const response = await fetch(`https://api.supabase.com/v1/projects/${SUPABASE_PROJECT_ID}/sql`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: modifiedStatement + ';' }),
      });

      if (!response.ok) {
        const error = await response.text();
        // If the error is about an existing object, we'll skip it
        if (error.includes('already exists')) {
          console.log('Object already exists, skipping...');
          continue;
        }
        throw new Error(`Failed to execute SQL: ${error}`);
      }

      await response.json();
    } catch (error) {
      // If the error is about an existing object, we'll skip it
      if (error.message.includes('already exists')) {
        console.log('Object already exists, skipping...');
        continue;
      }
      throw error;
    }
  }
}

async function applyMigrations() {
  const migrationsDir = path.join(__dirname, '../supabase/migrations');
  const files = fs.readdirSync(migrationsDir)
    .filter(file => file.endsWith('.sql'))
    .sort();

  // First, apply structure-only migrations (tables, etc.)
  for (const file of files) {
    if (file.includes('create_') || file.includes('add_')) {
      console.log(`Applying structure migration: ${file}`);
      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      try {
        await executeSql(sql);
        console.log(`Successfully applied ${file}`);
      } catch (error) {
        console.error(`Error applying ${file}:`, error);
        // Continue with next file instead of exiting
        continue;
      }
    }
  }

  // Then, apply data migrations and updates
  for (const file of files) {
    if (!file.includes('create_') && !file.includes('add_')) {
      console.log(`Applying data/update migration: ${file}`);
      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      try {
        await executeSql(sql);
        console.log(`Successfully applied ${file}`);
      } catch (error) {
        console.error(`Error applying ${file}:`, error);
        // Continue with next file instead of exiting
        continue;
      }
    }
  }
}

applyMigrations().catch(error => {
  console.error('Migration error:', error);
  process.exit(1);
}); 