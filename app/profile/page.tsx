'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/app/providers/AuthProvider'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

interface UserProfile {
  nom: string
  prenom: string
  email: string
  telephone: string | null
  est_verifie: boolean
}

export default function ProfilePage() {
  const { user, loading } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    }
  }, [loading, user, router])

  useEffect(() => {
    const getProfile = async () => {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from('utilisateurs')
          .select('*')
          .eq('id', user.id)
          .single()

        if (error) throw error
        setProfile(data)
      } catch (error: any) {
        console.error('Error loading user profile:', error.message)
      }
    }

    getProfile()
  }, [user, supabase])

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!user || !profile) return

    setUpdating(true)
    setError(null)

    try {
      const { error } = await supabase
        .from('utilisateurs')
        .update({
          telephone: profile.telephone,
        })
        .eq('id', user.id)

      if (error) throw error

      // Log profile update
      await supabase.from('journaux_activite').insert([
        {
          utilisateur_id: user.id,
          type_activite: 'mise_a_jour_profil',
          description: 'Mise à jour du profil utilisateur'
        }
      ])
    } catch (error: any) {
      setError(error.message)
    } finally {
      setUpdating(false)
    }
  }

  if (loading) return <div>Chargement...</div>
  if (!user || !profile) return null

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mon Profil</h1>

      <form onSubmit={handleUpdateProfile} className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              value={profile.nom}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Prénom
            </label>
            <input
              type="text"
              value={profile.prenom}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={profile.email}
            disabled
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            type="tel"
            value={profile.telephone || ''}
            onChange={(e) => setProfile({ ...profile, telephone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <span className={`w-2 h-2 rounded-full ${profile.est_verifie ? 'bg-green-500' : 'bg-yellow-500'}`} />
          <span className="text-sm text-gray-600">
            {profile.est_verifie ? 'Email vérifié' : 'Email non vérifié'}
          </span>
        </div>

        <button
          type="submit"
          disabled={updating}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
        >
          {updating ? 'Mise à jour...' : 'Mettre à jour'}
        </button>
      </form>
    </div>
  )
} 