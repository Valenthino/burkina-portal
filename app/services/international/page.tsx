'use client';

import { internationalServices, type ServiceItem } from './index';
import { FaPassport, FaGlobe, FaBuilding, FaHandshake, FaGraduationCap, FaUsers, FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

interface CategoryInfo {
    title: string;
    icon: any;
    description: string;
}

const categories: Record<string, CategoryInfo> = {
    documents: {
        title: "Documents et Formalités",
        icon: FaPassport,
        description: "Services de documentation officielle et formalités administratives"
    },
    assistance: {
        title: "Assistance et Protection",
        icon: FaGlobe,
        description: "Services d'aide et de protection pour les citoyens à l'étranger"
    },
    economie: {
        title: "Commerce et Économie",
        icon: FaHandshake,
        description: "Services pour les activités économiques et commerciales"
    },
    education: {
        title: "Éducation et Culture",
        icon: FaGraduationCap,
        description: "Services éducatifs et culturels internationaux"
    },
    social: {
        title: "Services sociaux",
        icon: FaUsers,
        description: "Services pour la diaspora et assistance sociale"
    }
};

export default function InternationalServicesPage() {
    const groupedServices = internationalServices.reduce((acc, service) => {
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {} as Record<string, ServiceItem[]>);

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Services Internationaux
                    </h1>
                    <p className="text-xl text-gray-600">
                        Tous les services internationaux du Burkina Faso
                    </p>
                </div>

                {/* Services prioritaires */}
                <div className="grid gap-8 md:grid-cols-2 mb-16">
                    {/* Section Visa */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <FaPassport className="w-8 h-8 text-[#009e49] mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900">Visas</h2>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Obtenez votre visa pour le Burkina Faso en ligne ou auprès d'une représentation diplomatique
                            </p>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 mt-0.5 text-[#009e49]">•</div>
                                    <div>
                                        <h3 className="font-semibold">Visa Court Séjour</h3>
                                        <p className="text-sm text-gray-600">Jusqu'à 90 jours - 50 000 FCFA</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 mt-0.5 text-[#009e49]">•</div>
                                    <div>
                                        <h3 className="font-semibold">Visa Long Séjour</h3>
                                        <p className="text-sm text-gray-600">1 an renouvelable - 100 000 FCFA</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 mt-0.5 text-[#009e49]">•</div>
                                    <div>
                                        <h3 className="font-semibold">Visa d'Affaires</h3>
                                        <p className="text-sm text-gray-600">Jusqu'à 180 jours - 75 000 FCFA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Link
                                    href="/services/international/visas"
                                    className="flex-1 text-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Plus d'informations
                                </Link>
                                <a
                                    href="https://applicant.visaburkina.bf/#/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-4 py-2 bg-[#009e49] text-white rounded-lg hover:bg-[#008a3f] transition-colors inline-flex items-center justify-center"
                                >
                                    Demande en ligne
                                    <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Section Consulats */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <FaBuilding className="w-8 h-8 text-[#009e49] mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900">Consulats et Ambassades</h2>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Trouvez les représentations diplomatiques du Burkina Faso à travers le monde
                            </p>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="w-5 h-5 mt-1 text-[#009e49]" />
                                    <div>
                                        <h3 className="font-semibold">Afrique</h3>
                                        <p className="text-sm text-gray-600">20+ représentations diplomatiques</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="w-5 h-5 mt-1 text-[#009e49]" />
                                    <div>
                                        <h3 className="font-semibold">Europe</h3>
                                        <p className="text-sm text-gray-600">10+ représentations diplomatiques</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="w-5 h-5 mt-1 text-[#009e49]" />
                                    <div>
                                        <h3 className="font-semibold">Autres continents</h3>
                                        <p className="text-sm text-gray-600">Amériques, Asie, Moyen-Orient</p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href="/services/international/consulats"
                                className="block w-full text-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Trouver une représentation
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Existing categories section */}
                <div className="space-y-16">
                    {Object.entries(categories).map(([categoryKey, categoryInfo]) => (
                        <div key={categoryKey} className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center mb-6">
                                <categoryInfo.icon className="w-8 h-8 text-[#009e49] mr-4" />
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {categoryInfo.title}
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        {categoryInfo.description}
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {groupedServices[categoryKey]?.map((service) => (
                                    <Link
                                        key={service.path}
                                        href={service.path}
                                        className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {service.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
} 