import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/types/supabase'

export const createClient = () => {
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
      }),
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        signOut: () => Promise.resolve({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } }, error: null })
      }
    }
  }

  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
} 