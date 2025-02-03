import { createClient } from '@/lib/supabase/server'
import { Actualite } from '@/lib/types'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface ActualiteDetailPageProps {
    params: {
        slug: string
    }
}

async function getActualite(slug: string) {
    const supabase = createClient()
    const { data } = await supabase
        .from('actualites')
        .select('*')
        .eq('slug', slug)
        .single()
    return data as Actualite
}

export default async function ActualiteDetailPage({ params }: ActualiteDetailPageProps) {
    const actualite = await getActualite(params.slug)

    if (!actualite) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <article className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{actualite.titre}</h1>
                <p className="text-gray-600 mb-8">
                    {new Date(actualite.date_publication).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </p>
                
                {actualite.image_url && (
                    <div className="relative h-96 mb-8">
                        <Image
                            src={actualite.image_url}
                            alt={actualite.titre}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none">
                    {actualite.contenu.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t">
                    <p className="text-gray-600">
                        Source : {' '}
                        <a
                            href={actualite.source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-dark"
                        >
                            Article original
                        </a>
                    </p>
                </div>
            </article>
        </div>
    )
} 