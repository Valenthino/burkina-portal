const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const sourcePool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Christine314@',
  database: 'burkina_portal',
  port: 5432,
});

const supabaseUrl = 'https://agxtgjnwcfacuisflbft.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneHRnam53Y2ZhY3Vpc2ZsYmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0MjQ0OTAsImV4cCI6MjA1MzAwMDQ5MH0.X-AlwNy7m13iCE0Rm5vqdcsx9wtzOKwx5mAYZfiUBXc';
const supabase = createClient(supabaseUrl, supabaseKey);

// Tables in order of dependencies
const tables = [
  // Base tables without foreign keys
  'regions',
  'ministeres',
  'roles',
  'permissions',
  'types_document',
  
  // Tables with single foreign key dependencies
  'provinces',
  'departements',
  'utilisateurs',
  'missions_ministere',
  'services_ministere',
  
  // Tables with multiple or complex dependencies
  'communes',
  'regions_departement',
  'roles_permissions',
  'utilisateurs_roles',
  'agents',
  'services',
  'modeles_flux_travail',
  'etapes_flux_travail',
  'conditions_flux_travail',
  'actions_flux_travail',
  'documents_utilisateur',
  'modeles_document',
  'demandes',
  'documents_demande',
  'historique_etapes_flux_travail',
  'historique_statut_demande',
  'modeles_communication',
  'journaux_securite',
  'sessions_utilisateur',
  'tentatives_connexion',
  'limites_requetes',
  'journaux_activite',
  'journaux_erreur'
];

const BATCH_SIZE = 100; // Number of records to insert at once

async function migrateTable(tableName) {
  console.log(`\n=== Migrating table: ${tableName} ===`);
  
  try {
    // Get total count
    const { rows: [count] } = await sourcePool.query(`SELECT COUNT(*) FROM ${tableName}`);
    const totalRows = parseInt(count.count);
    
    if (totalRows === 0) {
      console.log(`No data in table: ${tableName}`);
      return;
    }

    console.log(`Total rows to migrate: ${totalRows}`);
    
    // Migrate in batches
    for (let offset = 0; offset < totalRows; offset += BATCH_SIZE) {
      const { rows } = await sourcePool.query(
        `SELECT * FROM ${tableName} ORDER BY id LIMIT $1 OFFSET $2`,
        [BATCH_SIZE, offset]
      );

      if (rows.length > 0) {
        // Clean the data
        const cleanedRows = rows.map(row => {
          const cleaned = {};
          for (const [key, value] of Object.entries(row)) {
            // Convert Date objects to ISO strings
            if (value instanceof Date) {
              cleaned[key] = value.toISOString();
            } else {
              cleaned[key] = value;
            }
          }
          return cleaned;
        });

        // Insert batch into Supabase
        const { data, error } = await supabase
          .from(tableName)
          .insert(cleanedRows)
          .select();

        if (error) {
          console.error(`Error migrating batch in ${tableName}:`, error);
          console.error('Failed rows:', cleanedRows);
        } else {
          console.log(`Migrated ${offset + rows.length}/${totalRows} rows from ${tableName}`);
        }
      }
    }

    console.log(`✅ Completed migration of ${tableName}`);
  } catch (error) {
    console.error(`❌ Error processing ${tableName}:`, error);
    throw error; // Rethrow to stop the migration
  }
}

async function migrateData() {
  try {
    console.log('Starting migration...');
    
    // Migrate tables in order
    for (const table of tables) {
      await migrateTable(table);
    }
    
    console.log('\n✨ Migration completed successfully');
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await sourcePool.end();
  }
}

// Handle script interruption
process.on('SIGINT', async () => {
  console.log('\nMigration interrupted');
  await sourcePool.end();
  process.exit();
});

migrateData(); 