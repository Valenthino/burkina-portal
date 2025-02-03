'use client';

import { useState } from 'react';
import { FaSearch, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { embassies, type Embassy } from '@/lib/data/embassies';

export default function ConsulatsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<string>('all');

    const regions = ['all', 'Afrique', 'Europe', 'Amériques', 'Asie', 'Moyen-Orient'];

    const filteredEmbassies = embassies.filter(embassy => {
        const matchesSearch = 
            embassy.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            embassy.city.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = selectedRegion === 'all' || embassy.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Consulats et Ambassades
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Trouvez les représentations diplomatiques du Burkina Faso à travers le monde
                    </p>

                    {/* Search and Filter */}
                    <div className="max-w-4xl mx-auto mb-12 space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Rechercher par pays ou ville..."
                                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#009e49] focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {regions.map((region) => (
                                <button
                                    key={region}
                                    onClick={() => setSelectedRegion(region)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                                        ${selectedRegion === region
                                            ? 'bg-[#009e49] text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {region === 'all' ? 'Toutes les régions' : region}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEmbassies.map((embassy) => (
                            <div
                                key={`${embassy.country}-${embassy.city}`}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            {embassy.country}
                                        </h2>
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#009e49]/10 text-[#009e49]">
                                            {embassy.type}
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <FaMapMarkerAlt className="w-5 h-5 text-gray-400 mt-1" />
                                            <div>
                                                <p className="font-medium text-gray-700">{embassy.city}</p>
                                                <p className="text-sm text-gray-600">{embassy.address}</p>
                                            </div>
                                        </div>
                                        {embassy.phone && (
                                            <div className="flex items-center gap-3">
                                                <FaPhone className="w-4 h-4 text-gray-400" />
                                                <a 
                                                    href={`tel:${embassy.phone}`}
                                                    className="text-sm text-gray-600 hover:text-[#009e49]"
                                                >
                                                    {embassy.phone}
                                                </a>
                                            </div>
                                        )}
                                        {embassy.email && (
                                            <div className="flex items-center gap-3">
                                                <FaEnvelope className="w-4 h-4 text-gray-400" />
                                                <a 
                                                    href={`mailto:${embassy.email}`}
                                                    className="text-sm text-gray-600 hover:text-[#009e49]"
                                                >
                                                    {embassy.email}
                                                </a>
                                            </div>
                                        )}
                                        {embassy.website && (
                                            <div className="flex items-center gap-3">
                                                <FaGlobe className="w-4 h-4 text-gray-400" />
                                                <a 
                                                    href={embassy.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-gray-600 hover:text-[#009e49]"
                                                >
                                                    Site web
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    {embassy.services && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <h3 className="text-sm font-medium text-gray-900 mb-2">
                                                Services disponibles
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {embassy.services.map((service) => (
                                                    <span
                                                        key={service}
                                                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                                                    >
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredEmbassies.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600">
                                Aucune représentation diplomatique trouvée pour votre recherche.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
} 