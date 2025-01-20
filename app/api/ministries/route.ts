import { executeQuery } from '@/lib/db-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const ministries = await executeQuery({
      query: 'SELECT * FROM ministries',
    });

    return NextResponse.json({ success: true, data: ministries });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch ministries' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, shortName, minister, description, slug } = body;

    const result = await executeQuery({
      query: `
        INSERT INTO ministries (name, short_name, minister, description, slug)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `,
      values: [name, shortName, minister, description, slug],
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create ministry' },
      { status: 500 }
    );
  }
} 