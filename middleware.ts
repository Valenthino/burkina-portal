import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type ServiceConfig = {
  routes: string[];
  authPath: string;
  dashboardPath: string;
};

type ServiceRoutes = {
  [key: string]: ServiceConfig;
};

// Service configuration for protected routes
const serviceRoutes: ServiceRoutes = {
  cnib: {
    routes: ['/services/citoyens/cnib/apply', '/services/citoyens/cnib/success', '/services/citoyens/cnib/dashboard'],
    authPath: '/auth?service=cnib',
    dashboardPath: '/services/citoyens/cnib/dashboard'
  },
  passeport: {
    routes: ['/services/citoyens/passeport/demande', '/services/citoyens/passeport/renouvellement', '/services/citoyens/passeport/tableau-de-bord'],
    authPath: '/auth?service=passeport',
    dashboardPath: '/services/citoyens/passeport/tableau-de-bord'
  },
  admin: {
    routes: ['/admin'],
    authPath: '/auth?service=admin',
    dashboardPath: '/admin'
  }
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name) => {
          const cookies = req.cookies.getAll()
          const cookie = cookies.find((cookie) => cookie.name === name)
          return cookie?.value
        },
        set: (name, value, options) => {
          res.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove: (name, options) => {
          res.cookies.delete({
            name,
            ...options,
          })
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Determine which service is being accessed
  const path = req.nextUrl.pathname;
  let targetService: string | null = null;
  let requiresAuth = false;

  for (const [service, config] of Object.entries(serviceRoutes)) {
    if (config.routes.some(route => path.startsWith(route))) {
      targetService = service;
      requiresAuth = true;
      break;
    }
  }

  // Get the last authenticated service from cookies - simplified approach
  let lastAuthService;
  try {
    // Use the Next.js cookies API directly
    const cookie = req.cookies.get('last_auth_service');
    lastAuthService = cookie?.value;
  } catch (error) {
    console.error('Error accessing cookies:', error);
    lastAuthService = undefined;
  }

  // If accessing a protected route
  if (requiresAuth) {
    const service = targetService || 'cnib';
    
    // Check if user is authenticated and using the same service
    if (!session || lastAuthService !== service) {
      // Clear the session if switching services
      if (session && lastAuthService !== service) {
        await supabase.auth.signOut();
      }

      const redirectUrl = new URL(serviceRoutes[service].authPath, req.url);
      redirectUrl.searchParams.set('redirect', req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // If accessing auth page
  if (path === '/auth') {
    const service = req.nextUrl.searchParams.get('service') || 'cnib';
    const requestedRedirect = req.nextUrl.searchParams.get('redirect');
    
    // If authenticated but for a different service, sign out
    if (session && lastAuthService !== undefined && lastAuthService !== service) {
      try {
        await supabase.auth.signOut();
        const response = NextResponse.next();
        response.cookies.delete('last_auth_service');
        return response;
      } catch (error) {
        console.error('Erreur lors de la déconnexion dans le middleware:', error);
        // Continue to auth page even if sign out fails
      }
    }

    // If authenticated for the same service, redirect to the requested page or dashboard
    if (session) {
      try {
        const serviceConfig = serviceRoutes[service as keyof typeof serviceRoutes];
        if (!serviceConfig) {
          return NextResponse.redirect(new URL('/', req.url));
        }
        const redirectTo = requestedRedirect || serviceConfig.dashboardPath;
        const response = NextResponse.redirect(new URL(redirectTo, req.url));
        response.cookies.set('last_auth_service', service, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/'
        });
        return response;
      } catch (error) {
        console.error('Erreur lors de la redirection dans le middleware:', error);
        // Continue to auth page if redirection fails
      }
    }
  }

  // Set the last authenticated service cookie after successful authentication
  if (session && targetService) {
    res.cookies.set({
      name: 'last_auth_service',
      value: targetService,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });
  }

  return res;
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/:path*',
    '/services/citoyens/cnib/:path*',
    '/services/citoyens/passeport/:path*',
    '/admin/:path*',
  ],
};