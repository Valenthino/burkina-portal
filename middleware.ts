import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const { data: { session }, error } = await supabase.auth.getSession()

  // Protected routes that require authentication
  const protectedRoutes = [
    '/admin',
    '/profile',
    '/services/create',
    '/demandes'
  ]

  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  if (isProtectedRoute && !session) {
    // Redirect to login if accessing protected route without session
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // Admin routes protection
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const { data: { user } } = await supabase.auth.getUser()
    const { data: roles } = await supabase
      .from('utilisateurs_roles')
      .select('role_id')
      .eq('utilisateur_id', user?.id)
      .single()

    if (!roles || roles.role_id !== 1) { // Assuming role_id 1 is admin
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
} 