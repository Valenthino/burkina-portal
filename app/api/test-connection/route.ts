import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // Test connection by making a simple query
    const { data, error } = await supabase
      .from('ministeres')
      .select('id')
      .limit(1)

    if (error) throw error

    return NextResponse.json({ 
      success: true, 
      message: 'Connected to Supabase successfully',
      data
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to connect to database',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { 
      status: 500 
    })
  }
} 