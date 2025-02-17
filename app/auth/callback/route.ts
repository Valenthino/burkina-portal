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
        cookieStore.set('last_auth_service', service, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/'
        });
      }
      
      // Redirect to the requested URL or service dashboard
      return NextResponse.redirect(`${requestUrl.origin}${redirect}`);
    }
  }

  // Return the user to an error page with some instructions
  return NextResponse.redirect(`${requestUrl.origin}/auth/error`);
} 