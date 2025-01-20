import { executeQuery } from '@/lib/db-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Insert a test ministry
    const result = await executeQuery({
      query: `
        INSERT INTO ministries (name, short_name, minister, description, slug)
        VALUES (?, ?, ?, ?, ?)
      `,
      values: [
        'Ministère de la Défense',
        'Défense',
        'Colonel-Major Kassoum COULIBALY',
        'Sécurité nationale et gestion des forces armées',
        'defense'
      ]
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Ministry added successfully!',
      data: result 
    });
  } catch (error) {
    console.error('Insert error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to insert ministry' 
    }, { 
      status: 500 
    });
  }
} 