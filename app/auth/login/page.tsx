import LoginForm from '@/app/components/auth/LoginForm'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Connexion
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou{' '}
            <Link
              href="/auth/register"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              créer un nouveau compte
            </Link>
          </p>
        </div>

        <LoginForm />

        <div className="text-center">
          <Link
            href="/auth/forgot-password"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Mot de passe oublié ?
          </Link>
        </div>
      </div>
    </div>
  )
} 