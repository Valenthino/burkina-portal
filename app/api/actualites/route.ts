import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
    try {
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
        
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