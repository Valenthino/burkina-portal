import { executeQuery } from '@/lib/db-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const ministries = await executeQuery({
      query: 'SELECT * FROM ministries'
    });

    return NextResponse.json({ 
      success: true, 
      data: ministries 
    });
  } catch (error) {
    console.error('Query error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch ministries' 
    }, { 
      status: 500 
    });
  }
} 