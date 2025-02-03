export default function Loading() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-96 bg-gray-200 rounded animate-pulse mb-8"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="aspect-[16/9] bg-gray-200 animate-pulse"></div>
                            <div className="p-6">
                                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-3"></div>
                                <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-3"></div>
                                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-4"></div>
                                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
} 