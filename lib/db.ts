import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

console.log('Connection string available:', !!connectionString);

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const pool = new Pool({
  connectionString,
});

export default pool;

