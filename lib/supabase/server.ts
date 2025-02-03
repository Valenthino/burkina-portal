import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

export function createClient() {
  // During build time, return a mock client if environment variables are not available
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return {
      from: () => ({
        select: () => ({ data: [], error: null }),
        insert: () => ({ data: null, error: null }),
        update: () => ({ data: null, error: null }),
        delete: () => ({ data: null, error: null }),
        eq: () => ({ data: [], error: null }),
        single: () => ({ data: null, error: null })
      })
    }
  }

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