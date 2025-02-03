import { createClient } from '@/lib/supabase/server'
import type { Article } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, ArrowTopRightOnSquareIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'

const ARTICLES_PER_PAGE = 6

async function getArticles(page: number = 1) {
    try {
        const supabase = createClient()
        
        // Get total count for pagination
        const { count } = await supabase
            .from('articles')
            .select('*', { count: 'exact', head: true });

        // Fetch articles for current page
        const { data: articles, error } = await supabase
            .from('articles')
            .select('*')
            .order('published_at', { ascending: false })
            .range((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE - 1);

        if (error) {
            console.error('Error fetching articles:', error);
            return { articles: [], totalPages: 0 };
        }

        const totalPages = Math.ceil((count || 0) / ARTICLES_PER_PAGE);
        return { articles: articles as Article[], totalPages };
    } catch (error) {
        console.error('Unexpected error in getArticles:', error);
        return { articles: [], totalPages: 0 };
    }
}

function isValidImageUrl(url: string | null): boolean {
    if (!url) return false;
    try {
        const imageUrl = new URL(url);
        return !imageUrl.pathname.match(/\.(svg|gif)$/i) && // Exclude SVG and GIF
               !url.includes('placeholder') &&
               !url.includes('default') &&
               !url.startsWith('data:');
    } catch {
        return false;
    }
}

export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
    title: 'Actualités | Présidence du Faso',
    description: 'Les dernières actualités et communiqués de la Présidence du Burkina Faso',
    openGraph: {
        title: 'Actualités | Présidence du Faso',
        description: 'Les dernières actualités et communiqués de la Présidence du Burkina Faso',
        images: ['/og-image.jpg'],
    },
};

export default async function ActualitesPage({
    searchParams,
}: {
    searchParams: { page?: string }
}) {
    const currentPage = Number(searchParams.page) || 1;
    const { articles, totalPages } = await getArticles(currentPage);

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Actualités</h1>
                <p className="text-gray-600 mb-8">Les dernières actualités de la Présidence du Faso</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => {
                        const hasValidImage = isValidImageUrl(article.image_url);
                        
                        return (
                            <article 
                                key={article.id} 
                                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
                            >
                                {hasValidImage && (
                                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                                        <Image
                                            src={article.image_url!}
                                            alt={article.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                )}
                                <div className={`p-6 flex-1 flex flex-col ${!hasValidImage ? 'pt-4' : ''}`}>
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <CalendarIcon className="h-4 w-4 mr-1" />
                                        <time dateTime={article.published_at}>
                                            {new Date(article.published_at).toLocaleDateString('fr-FR', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                        </time>
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                        <Link href={article.source_url} target="_blank" className="hover:text-blue-600">
                                            {article.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                                        {article.content}
                                    </p>
                                    <Link
                                        href={article.source_url}
                                        target="_blank"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Lire plus
                                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex justify-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <Link
                                key={pageNum}
                                href={`/actualites?page=${pageNum}`}
                                className={`px-4 py-2 rounded-lg ${
                                    pageNum === currentPage
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                } font-medium shadow-sm`}
                            >
                                {pageNum}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
} 