import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { service } = await request.json();
    
    // Set the service cookie
    const cookieStore = cookies();
    await cookieStore.set({
      name: 'last_auth_service',
      value: service,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error setting service cookie:', error);
    return NextResponse.json({ error: 'Failed to set service cookie' }, { status: 500 });
  }
}