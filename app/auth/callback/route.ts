import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const serviceRedirects = {
  cnib: '/services/citoyens/cnib/dashboard',
  passeport: '/services/citoyens/passeport/tableau-de-bord',
  admin: '/admin'
};

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const service = requestUrl.searchParams.get('service') || 'cnib';
  const redirect = requestUrl.searchParams.get('redirect') || serviceRedirects[service as keyof typeof serviceRedirects];

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      try {
        // Log successful authentication callback
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase.from('journaux_securite').insert([
            {
              utilisateur_id: user.id,
              action: 'verification_email',
              description: `Email vérifié - Service: ${service}`,
              service: service
            }
          ]);

          // Set the service-specific cookie
          const cookieStore = cookies();
          cookieStore.set({
            name: 'last_auth_service',
            value: service,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/'
          });
        }
        
        // Redirect to the requested URL or service dashboard
        return NextResponse.redirect(`${requestUrl.origin}${redirect}`);
      } catch (error) {
        console.error('Erreur lors de la journalisation ou redirection:', error);
        // Continue to error page
      }
    } else {
      console.error('Erreur d\'échange de code pour session:', error);
    }
  }

  // Return the user to an error page with some instructions
  const errorUrl = new URL(`/auth/error`, requestUrl.origin);
  errorUrl.searchParams.set('service', service);
  errorUrl.searchParams.set('error', 'authentication_failed');
  return NextResponse.redirect(errorUrl);
}