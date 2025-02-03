export default function Loading() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#009e49]/5 to-[#ef2b2d]/5">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
                    <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-12"></div>

                    {/* Prime Minister Skeleton */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-8">
                        <div className="w-64 h-64 rounded-full bg-gray-200 animate-pulse mx-auto mb-6"></div>
                        <div className="space-y-4">
                            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto"></div>
                            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>
                            <div className="h-4 w-96 bg-gray-200 rounded animate-pulse mx-auto"></div>
                        </div>
                    </div>
                </div>

                {/* Other Ministers Skeletons */}
                <div className="max-w-2xl mx-auto space-y-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-sm overflow-hidden p-6 flex items-center"
                        >
                            <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse flex-shrink-0"></div>
                            <div className="ml-6 flex-grow space-y-3">
                                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
} 