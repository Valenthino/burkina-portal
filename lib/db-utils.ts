import pool from './db';

export async function executeQuery<T>({ query, values }: { query: string; values?: any[] }) {
  try {
    const result = await pool.query(query, values);
    return result.rows as T;
  } catch (error) {
    throw new Error(error as any);
  }
} 