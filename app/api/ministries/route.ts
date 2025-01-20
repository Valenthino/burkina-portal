import { executeQuery } from '@/lib/db-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const ministries = await executeQuery({
      query: `
        SELECT 
          m.id,
          m.nom as name,
          m.nom_court as short_name,
          m.ministre as minister,
          m.description,
          m.slug,
          m.created_at,
          m.updated_at,
          COALESCE(
            json_agg(
              DISTINCT jsonb_build_object(
                'id', s.id,
                'nom', s.nom,
                'type', s.type,
                'route_type', s.route_type,
                'slug', s.slug,
                'category', s.category,
                'parent_slug', s.parent_slug
              )
            ) FILTER (WHERE s.id IS NOT NULL), 
            '[]'
          ) as services,
          COALESCE(
            json_agg(
              DISTINCT jsonb_build_object(
                'id', mi.id,
                'description', mi.description
              )
            ) FILTER (WHERE mi.id IS NOT NULL), 
            '[]'
          ) as missions
        FROM ministeres m
        LEFT JOIN services_ministere s ON m.id = s.ministere_id
        LEFT JOIN missions_ministere mi ON m.id = mi.ministere_id
        GROUP BY m.id
      `,
    });

    return NextResponse.json({ success: true, data: ministries });
  } catch (error) {
    console.error('Error fetching ministries:', error);
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
        INSERT INTO ministeres (nom, nom_court, ministre, description, slug)
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