'use client';

import { useEffect, useState } from 'react';
import type { Ministry } from '@/types/database';

export default function MinistryList() {
  const [ministries, setMinistries] = useState<Ministry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMinistries() {
      try {
        const response = await fetch('/api/ministries');
        const data = await response.json();
        
        if (data.success) {
          setMinistries(data.data);
        } else {
          setError('Failed to fetch ministries');
        }
      } catch (err) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    }

    fetchMinistries();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-pulse text-gray-500">Chargement...</div>
    </div>
  );
  
  if (error) return (
    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
      Erreur: {error}
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
      {ministries.map((ministry) => (
        <div key={ministry.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="sm:flex sm:items-start sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{ministry.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{ministry.minister}</p>
            </div>
          </div>
          
          {ministry.missions && ministry.missions.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Missions</h4>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2">
                {ministry.missions.map((mission, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-700">{mission.description}</li>
                ))}
              </ul>
            </div>
          )}

          {ministry.services && ministry.services.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Services</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {ministry.services.map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-3 sm:p-4 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <h5 className="font-medium text-sm sm:text-base mb-1 sm:mb-2 text-gray-900">{service.nom}</h5>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Catégorie: {service.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 