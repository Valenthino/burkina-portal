import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // Test database connection first
    const { error: connectionError } = await supabase
      .from('ministeres')
      .select('id')
      .limit(1)

    if (connectionError) {
      console.error('Database connection error:', connectionError)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed',
          details: connectionError.message,
          code: connectionError.code
        },
        { status: 500 }
      )
    }

    const { data: ministries, error } = await supabase
      .from('ministeres')
      .select(`
        id,
        nom,
        nom_court,
        ministre,
        description,
        slug,
        created_at,
        updated_at,
        services:services_ministere(
          id,
          nom,
          type,
          route_type,
          slug,
          categorie,
          sous_categorie
        ),
        missions:missions_ministere(
          id,
          description
        )
      `)
      .eq('est_actif', true)
      .order('nom')

    if (error) {
      console.error('Error fetching ministries:', error)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to fetch ministries',
          details: error.message,
          code: error.code
        },
        { status: 500 }
      )
    }

    if (!ministries || ministries.length === 0) {
      return NextResponse.json(
        { 
          success: true, 
          data: [],
          message: 'No active ministries found'
        },
        { status: 200 }
      )
    }

    return NextResponse.json({ success: true, data: ministries })
  } catch (error) {
    console.error('Unexpected error in ministries API:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const body = await request.json()
    const { nom, nom_court, ministre, description, slug } = body

    const { data: ministry, error } = await supabase
      .from('ministeres')
      .insert([
        { 
          nom, 
          nom_court, 
          ministre, 
          description, 
          slug,
          est_actif: true
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Error creating ministry:', error)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to create ministry',
          details: error.message,
          code: error.code
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data: ministry })
  } catch (error) {
    console.error('Unexpected error in ministry creation:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create ministry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 