import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    try {
        const supabase = createClient()
        
        const { data: actualites, error } = await supabase
            .from('actualites')
            .select('*')
            .order('date_publication', { ascending: false })
            .limit(10)

        if (error) {
            throw error
        }

        return NextResponse.json(actualites)
    } catch (error) {
        console.error('Error fetching actualites:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
} 