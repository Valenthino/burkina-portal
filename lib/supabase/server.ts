import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';

export const createClient = (cookieStore?: ReturnType<typeof cookies>) => {
  // Check if we're in a context where cookies are available
  const isBrowser = typeof window !== 'undefined';
  const isEdgeRuntime = process.env.NEXT_RUNTIME === 'edge';
  
  // If no cookieStore is provided and we're in a context where cookies() would fail, use a mock
  if (!cookieStore || cookieStore === undefined || (isBrowser || isEdgeRuntime)) {
    return createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return undefined;
          },
          set(name: string, value: string, options: any) {
            // No-op in contexts where cookies can't be set
          },
          remove(name: string, options: any) {
            // No-op in contexts where cookies can't be removed
          },
        },
      }
    );
  }
  
  // Use provided cookieStore or create a new one if not provided and we're in a context where cookies() works
  let store;
  try {
    // Only try to call cookies() if we're in a server context and not in edge runtime
    if (cookieStore) {
      store = cookieStore;
    } else if (!isBrowser && !isEdgeRuntime) {
      try {
        store = cookies();
      } catch (cookieError) {
        console.error('Error calling cookies():', cookieError);
        store = undefined;
      }
    } else {
      store = undefined;
    }
  } catch (error) {
    console.error('Error creating cookie store:', error);
    store = undefined;
  }

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          try {
            if (!store || typeof store.get !== 'function') return undefined;
            const cookie = store.get(name);
            return cookie && typeof cookie === 'object' && 'value' in cookie ? cookie.value : undefined;
          } catch (error) {
            console.error('Error getting cookie:', error);
            return undefined;
          }
        },
        set(name: string, value: string, options: any) {
          try {
            if (!store || typeof store.set !== 'function') return;
            store.set({ name, value, ...options });
          } catch (error) {
            console.error('Error setting cookie:', error);
          }
        },
        remove(name: string, options: any) {
          try {
            if (!store || typeof store.set !== 'function') return;
            store.set({ name, value: '', ...options });
          } catch (error) {
            console.error('Error removing cookie:', error);
          }
        },
      },
    }
  );
};