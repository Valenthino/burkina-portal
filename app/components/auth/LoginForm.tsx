'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // Toujours se déconnecter d'abord pour assurer une session propre
      await supabase.auth.signOut()
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      // Log successful login
      try {
        if (data.user) {
          await supabase.from('journaux_securite').insert([
            {
              utilisateur_id: data.user.id,
              action: 'connexion',
              description: 'Connexion réussie',
              adresse_ip: '', // You can add IP tracking if needed
              user_agent: navigator.userAgent,
              service: 'default' // Default service if not specified
            }
          ])
          
          // Set default service cookie
          const response = await fetch('/api/auth/set-service-cookie', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ service: 'default' }),
          })
          
          if (!response.ok) {
            console.error('Erreur lors de la définition du cookie de service:', await response.text())
          }
        }
      } catch (logError) {
        console.error('Erreur lors de la journalisation de connexion:', logError)
        // Continue with redirection even if logging fails
      }

      router.push('/dashboard')
      router.refresh()
    } catch (error: any) {
      console.error('Erreur de connexion:', error)
      setError(error.message)
      
      // Log failed login attempt
      try {
        await supabase.from('tentatives_connexion').insert([
          {
            email,
            statut: 'echec',
            adresse_ip: '', // You can add IP tracking if needed
            date_creation: new Date().toISOString(),
            service: 'default' // Default service if not specified
          }
        ])
      } catch (logError) {
        console.error('Erreur lors de la journalisation de tentative échouée:', logError)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
      >
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  )
}