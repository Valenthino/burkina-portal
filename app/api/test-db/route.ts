import { executeQuery } from '@/lib/db-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Try to connect and run a simple query
    const result = await executeQuery({
      query: 'SELECT 1 + 1 as test'
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful!',
      data: result 
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to connect to database' 
    }, { 
      status: 500 
    });
  }
} 