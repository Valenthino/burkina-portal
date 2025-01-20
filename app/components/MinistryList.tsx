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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 gap-8">
      {ministries.map((ministry) => (
        <div key={ministry.id} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">{ministry.name}</h3>
          <p className="text-gray-600 mb-6">{ministry.minister}</p>
          
          {ministry.missions && ministry.missions.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Missions</h4>
              <ul className="list-disc pl-6 space-y-2">
                {ministry.missions.map((mission, index) => (
                  <li key={index} className="text-gray-700">{mission.description}</li>
                ))}
              </ul>
            </div>
          )}

          {ministry.services && ministry.services.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-3">Services</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ministry.services.map((service, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md">
                    <h5 className="font-medium mb-2">{service.nom}</h5>
                    <p className="text-sm text-gray-600">
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