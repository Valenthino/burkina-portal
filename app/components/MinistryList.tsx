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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ministries.map((ministry) => (
        <div key={ministry.id} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">{ministry.name}</h3>
          <p className="text-gray-600 mb-4">{ministry.description}</p>
          <p className="text-sm text-gray-500">Minister: {ministry.minister}</p>
        </div>
      ))}
    </div>
  );
} 