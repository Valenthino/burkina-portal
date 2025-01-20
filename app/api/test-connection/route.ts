import { executeQuery } from '@/lib/db-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await executeQuery({
      query: 'SELECT DATABASE() as current_database'
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Connected to database successfully',
      data: result 
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to connect to database',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { 
      status: 500 
    });
  }
} 