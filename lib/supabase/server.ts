import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

export function createClient() {
  // Use service role key for server operations
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  
  return createSupabaseClient<Database>(
    supabaseUrl,
    supabaseKey,
    {
      auth: {
        persistSession: false,
      }
    }
  )
} 