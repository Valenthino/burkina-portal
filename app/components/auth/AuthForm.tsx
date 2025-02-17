import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from '@/lib/supabase/client';

interface AuthFormProps {
  service: string;
  title: string;
  description: string;
  redirectTo: string;
}

function generateUsername(firstName: string, lastName: string): string {
  // Remove accents and special characters
  const normalizedFirstName = firstName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const normalizedLastName = lastName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Get first letter of first name + full last name
  const baseUsername = (normalizedFirstName.charAt(0) + normalizedLastName)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ''); // Remove any remaining special characters

  return baseUsername;
}

export default function AuthForm({ service, title, description, redirectTo }: AuthFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [showUsernameConfirm, setShowUsernameConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const supabase = createClient();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Always sign out first to ensure clean session
      await supabase.auth.signOut();
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Log the authentication for the specific service
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('journaux_securite').insert([{
          utilisateur_id: user.id,
          action: 'connexion',
          description: `Connexion réussie - Service: ${service}`,
          adresse_ip: '',
          user_agent: navigator.userAgent,
          service: service
        }]);

        // Set the service cookie
        document.cookie = `last_auth_service=${service}; path=/; secure; samesite=lax`;
      }

      // Use the provided redirect URL or fall back to the service dashboard
      router.push(redirectTo);
    } catch (error: any) {
      setError(error.message);
      await supabase.from('tentatives_connexion').insert([{
        email,
        statut: 'echec',
        adresse_ip: '',
        date_creation: new Date().toISOString(),
        service: service
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: 'google' | 'facebook') => {
    try {
      // Always sign out first to ensure clean session
      await supabase.auth.signOut();
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback?service=${service}&redirect=${redirectTo}`,
          queryParams: {
            service: service // Pass service to maintain context after OAuth
          }
        },
      });
      if (error) throw error;
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      setLoading(false);
      return;
    }

    try {
      // Generate initial username
      const baseUsername = generateUsername(firstName, lastName);
      
      // Check if username exists
      const { data: existingUsers, error: checkError } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', baseUsername);

      if (checkError) throw checkError;

      // If username exists, add a number
      let finalUsername = baseUsername;
      if (existingUsers && existingUsers.length > 0) {
        let counter = 1;
        while (true) {
          const tempUsername = `${baseUsername}${counter}`;
          const { data: exists, error: checkError } = await supabase
            .from('profiles')
            .select('username')
            .eq('username', tempUsername);

          if (checkError) throw checkError;
          if (!exists || exists.length === 0) {
            finalUsername = tempUsername;
            break;
          }
          counter++;
        }
      }

      setUsername(finalUsername);
      setShowUsernameConfirm(true);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleUsernameConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Check if new username is unique
      if (username !== generateUsername(firstName, lastName)) {
        const { data: exists, error: checkError } = await supabase
          .from('profiles')
          .select('username')
          .eq('username', username);

        if (checkError) throw checkError;
        if (exists && exists.length > 0) {
          setError('Ce nom d\'utilisateur est déjà pris');
          setLoading(false);
          return;
        }
      }

      // Create user account
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            username: username,
          },
        },
      });

      if (error) throw error;

      router.push('/auth/verify-email');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formVariants = {
    enter: {
      x: '100%',
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: '-100%',
      opacity: 0
    }
  };

  return (
    <div className="w-full">
      <Tabs
        defaultValue="signin"
        value={isSignUp ? "signup" : "signin"}
        className="w-full"
        onValueChange={(value) => setIsSignUp(value === "signup")}
      >
        <TabsList className="grid w-full grid-cols-2 h-auto bg-transparent relative">
          <TabsTrigger
            value="signin"
            className="relative py-6 rounded-none border-b-2 data-[state=active]:border-[#1a5653] data-[state=active]:bg-[#1a5653] border-transparent transition-all duration-300 ease-in-out overflow-visible group hover:bg-gray-50 data-[state=active]:hover:bg-[#1a5653]"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-lg font-semibold text-gray-700 group-data-[state=active]:text-white transition-colors duration-300">
                Se connecter à votre compte
              </span>
              <span className="text-sm text-gray-500 group-data-[state=active]:text-white/90 transition-colors duration-300">
                Accédez à votre espace
              </span>
            </div>
            {/* Active indicator - Diamond shape */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 opacity-0 data-[state=active]:opacity-100 transition-all duration-300 z-10">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#1a5653] rotate-45 border-2 border-[#1a5653] shadow-sm"></div>
              </div>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="relative py-6 rounded-none border-b-2 data-[state=active]:border-[#1a5653] data-[state=active]:bg-[#1a5653] border-transparent transition-all duration-300 ease-in-out overflow-visible group hover:bg-gray-50 data-[state=active]:hover:bg-[#1a5653]"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-lg font-semibold text-gray-700 group-data-[state=active]:text-white transition-colors duration-300">
                Vous n'avez pas de compte
              </span>
              <span className="text-sm text-gray-500 group-data-[state=active]:text-white/90 transition-colors duration-300">
                Créez votre compte
              </span>
            </div>
            {/* Active indicator - Diamond shape */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 opacity-0 data-[state=active]:opacity-100 transition-all duration-300 z-10">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#1a5653] rotate-45 border-2 border-[#1a5653] shadow-sm"></div>
              </div>
            </div>
          </TabsTrigger>
          {/* Background line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200"></div>
        </TabsList>

        <div className={`p-8 lg:p-12 ${isSignUp ? 'bg-white' : 'bg-[#e6f0ef]'} relative z-0 transition-colors duration-300`}>
          <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {title}
              </h1>
              <p className="text-gray-600 text-lg">
                {description}
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={isSignUp ? 'signup' : 'login'}
                variants={formVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.3 }}
              >
                {isSignUp ? (
                  showUsernameConfirm ? (
                    <form onSubmit={handleUsernameConfirm} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nom d'utilisateur proposé
                        </label>
                        <Input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full h-12 text-base placeholder:text-gray-500"
                        />
                        <p className="mt-1 text-sm text-gray-500">
                          Vous pouvez modifier ce nom d'utilisateur ou le conserver
                        </p>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 text-base bg-[#1a5653] hover:bg-[#134240] text-white"
                        disabled={loading}
                      >
                        {loading ? 'Création...' : 'Confirmer et créer le compte'}
                      </Button>

                      {error && (
                        <div className="bg-red-50 text-red-500 p-4 rounded-lg text-base">
                          {error}
                        </div>
                      )}
                    </form>
                  ) : (
                    <form onSubmit={handleSignUp} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Input
                            type="text"
                            placeholder="Nom"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full h-12 text-base placeholder:text-gray-500"
                          />
                        </div>
                        <div>
                          <Input
                            type="text"
                            placeholder="Prénom(s)"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full h-12 text-base placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-12 text-base placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <Input
                          type="password"
                          placeholder="Mot de passe"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full h-12 text-base placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <Input
                          type="password"
                          placeholder="Confirmer le mot de passe"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full h-12 text-base placeholder:text-gray-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 text-base bg-[#1a5653] hover:bg-[#134240] text-white"
                        disabled={loading}
                      >
                        {loading ? 'Vérification...' : 'Continuer'}
                      </Button>

                      {error && (
                        <div className="bg-red-50 text-red-500 p-4 rounded-lg text-base">
                          {error}
                        </div>
                      )}
                    </form>
                  )
                ) : (
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        onClick={() => handleSocialSignIn('google')}
                        className="w-full h-12 text-base"
                      >
                        <FaGoogle className="mr-2 h-5 w-5" />
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleSocialSignIn('facebook')}
                        className="w-full h-12 text-base"
                      >
                        <FaFacebook className="mr-2 h-5 w-5" />
                        Facebook
                      </Button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-4 text-gray-500">
                          Ou continuez avec
                        </span>
                      </div>
                    </div>

                    <form onSubmit={handleEmailSignIn} className="space-y-6">
                      <div>
                        <Input
                          type="email"
                          placeholder="Nom d'utilisateur"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-12 text-base placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <Input
                          type="password"
                          placeholder="Mot de passe"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full h-12 text-base placeholder:text-gray-500"
                        />
                      </div>

                      <div className="flex items-center justify-between text-base">
                        <label className="flex items-center text-gray-600">
                          <input type="checkbox" className="mr-2 h-4 w-4" />
                          Se souvenir de moi
                        </label>
                        <a href="#" className="text-[#1a5653] hover:text-[#134240] font-medium">
                          Mot de passe oublié ?
                        </a>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 text-base bg-[#1a5653] hover:bg-[#134240] text-white"
                        disabled={loading}
                      >
                        {loading ? 'Connexion...' : 'Se connecter'}
                      </Button>

                      {error && (
                        <div className="bg-red-50 text-red-500 p-4 rounded-lg text-base">
                          {error}
                        </div>
                      )}
                    </form>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Tabs>
    </div>
  );
} 