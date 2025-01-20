import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import pool from '@/lib/db'

export async function POST() {
  try {
    const sqlPath = path.join(process.cwd(), 'db', 'insert_ministeres.sql')
    const sqlContent = fs.readFileSync(sqlPath, 'utf8')
    
    const client = await pool.connect()
    await client.query(sqlContent)
    client.release()

    return NextResponse.json({ 
      message: 'Données des ministères insérées avec succès' 
    })
  } catch (error) {
    console.error('Erreur lors de l''insertion des ministères:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l''insertion des données' },
      { status: 500 }
    )
  }
} 