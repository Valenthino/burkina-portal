'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  FileText, 
  Save,
  ArrowLeft,
  Upload,
  Camera,
  Calendar
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { initSessionTimeout } from '@/lib/utils/sessionTimeout';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PassportFormProvider } from '@/lib/contexts/PassportFormContext';
import { AutoSaveStatus } from '@/components/passport/AutoSaveStatus';
import { PersonalInfoSection } from '@/components/passport/PersonalInfoSection';
import { Toaster } from '@/components/ui/toaster';
import { LoadingPage } from '@/components/ui/loading-page';

const formSchema = z.object({
  type: z.enum(['ordinaire', 'service', 'diplomatique'], {
    required_error: "Veuillez sélectionner le type de passeport"
  }),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  birthDate: z.string().min(1, 'La date de naissance est requise'),
  birthPlace: z.string().min(2, 'Le lieu de naissance est requis'),
  nationality: z.string().min(2, 'La nationalité est requise'),
  gender: z.enum(['M', 'F'], {
    required_error: "Veuillez sélectionner votre genre"
  }),
  profession: z.string().min(2, 'La profession est requise'),
  address: z.string().min(5, 'L\'adresse doit contenir au moins 5 caractères'),
  phone: z.string().min(8, 'Le numéro de téléphone est requis'),
  email: z.string().email('Email invalide'),
  fatherName: z.string().min(2, 'Le nom du père est requis'),
  motherName: z.string().min(2, 'Le nom de la mère est requis'),
  emergencyContact: z.string().min(8, 'Le contact d\'urgence est requis'),
  height: z.string().min(1, 'La taille est requise'),
  eyeColor: z.string().min(2, 'La couleur des yeux est requise'),
  maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed'], {
    required_error: "Veuillez sélectionner votre situation matrimoniale"
  }),
});

export default function PassportApplicationPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [signatureUrl, setSignatureUrl] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();
  const searchParams = useSearchParams();
  const applicationId = searchParams?.get('id') || undefined;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'ordinaire',
      firstName: '',
      lastName: '',
      birthDate: '',
      birthPlace: '',
      nationality: 'Burkinabè',
      gender: 'M',
      profession: '',
      address: '',
      phone: '',
      email: '',
      fatherName: '',
      motherName: '',
      emergencyContact: '',
      height: '',
      eyeColor: '',
      maritalStatus: 'single',
    },
  });

  useEffect(() => {
    async function checkAuth() {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        router.push('/auth?service=passeport&redirect=/services/citoyens/passeport/demande');
        return;
      }
      setLoading(false);
      loadDraft(user.id);
    }

    checkAuth();

    const cleanup = initSessionTimeout(
      () => setShowTimeoutWarning(true),
      () => router.push('/auth?service=passeport')
    );

    return cleanup;
  }, [router, supabase]);

  useEffect(() => {
    // Calculate form completion progress
    const values = form.getValues();
    const totalFields = Object.keys(values).length + 2; // +2 for photo and signature
    const filledFields = Object.values(values).filter(value => value !== '').length +
      (photoUrl ? 1 : 0) + (signatureUrl ? 1 : 0);
    const newProgress = Math.round((filledFields / totalFields) * 100);
    setProgress(newProgress);
  }, [form.watch(), photoUrl, signatureUrl]);

  async function loadDraft(userId: string) {
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) {
        console.error('Authentication error:', authError);
        setError('Erreur d\'authentification: ' + authError.message);
        return;
      }

      if (!user) {
        console.error('No authenticated user found');
        setError('Utilisateur non authentifié');
        router.push('/auth?service=passeport&redirect=/services/citoyens/passeport/demande');
        return;
      }

      const { data, error: draftError } = await supabase
        .from('passport_applications')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'draft')
        .single();

      if (draftError) {
        if (draftError.code === 'PGRST116') {
          // No draft found - this is normal for new applications
          return;
        }
        console.error('Error loading draft:', draftError);
        setError('Erreur lors du chargement du brouillon: ' + draftError.message);
        return;
      }

      if (data) {
        form.reset({
          type: data.type || 'ordinaire',
          firstName: data.first_name || '',
          lastName: data.last_name || '',
          birthDate: data.birth_date || '',
          birthPlace: data.birth_place || '',
          nationality: data.nationality || 'Burkinabè',
          gender: data.gender || 'M',
          profession: data.profession || '',
          address: data.address || '',
          phone: data.phone || '',
          email: data.email || '',
          fatherName: data.father_name || '',
          motherName: data.mother_name || '',
          emergencyContact: data.emergency_contact || '',
          height: data.height || '',
          eyeColor: data.eye_color || '',
          maritalStatus: data.marital_status || 'single',
        });
        setPhotoUrl(data.photo_url);
        setSignatureUrl(data.signature_url);
      }
    } catch (err) {
      console.error('Error in loadDraft:', err);
      setError('Une erreur est survenue lors du chargement du brouillon');
    }
  }

  async function saveDraft() {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setError('Veuillez vous connecter pour enregistrer le brouillon');
        return;
      }

      const values = form.getValues();
      const applicationId = `DRAFT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      const { error } = await supabase
        .from('passport_applications')
        .upsert({
          application_id: applicationId,
          user_id: user.id,
          status: 'draft',
          type: values.type,
          first_name: values.firstName,
          last_name: values.lastName,
          birth_date: values.birthDate,
          birth_place: values.birthPlace,
          nationality: values.nationality,
          gender: values.gender,
          profession: values.profession,
          address: values.address,
          phone: values.phone,
          email: values.email,
          father_name: values.fatherName,
          mother_name: values.motherName,
          emergency_contact: values.emergencyContact,
          height: values.height,
          eye_color: values.eyeColor,
          marital_status: values.maritalStatus,
          photo_url: photoUrl,
          signature_url: signatureUrl
        });

      if (error) throw error;

      setError(null);
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg';
      successMessage.textContent = 'Brouillon enregistré avec succès';
      document.body.appendChild(successMessage);
      setTimeout(() => successMessage.remove(), 3000);

    } catch (error) {
      console.error('Error saving draft:', error);
      setError('Erreur lors de l\'enregistrement du brouillon');
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      setError(null);

      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        setError('Veuillez vous connecter pour soumettre votre demande');
        return;
      }

      // Check for required files
      if (!photoUrl) {
        setError('La photo d\'identité est requise');
        return;
      }

      if (!signatureUrl) {
        setError('La signature est requise');
        return;
      }

      // Validate all form fields
      const validationResult = formSchema.safeParse(values);
      if (!validationResult.success) {
        const errors = validationResult.error.errors;
        setError(`Veuillez corriger les erreurs suivantes : ${errors.map(e => e.message).join(', ')}`);
        return;
      }

      const newApplicationId = `PASS-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      // Format the form data
      const formattedData = {
        application_id: newApplicationId,
        type: values.type,
        first_name: values.firstName,
        last_name: values.lastName,
        birth_date: values.birthDate,
        birth_place: values.birthPlace,
        nationality: values.nationality,
        gender: values.gender,
        profession: values.profession,
        address: values.address,
        phone: values.phone,
        email: values.email,
        father_name: values.fatherName,
        mother_name: values.motherName,
        emergency_contact: values.emergencyContact,
        height: values.height,
        eye_color: values.eyeColor,
        marital_status: values.maritalStatus,
        photo_url: photoUrl,
        signature_url: signatureUrl,
        form_data: values,
        status: 'pending',
        user_id: user.id,
        submitted_at: new Date().toISOString()
      };

      const { error: submitError } = await supabase
        .from('passport_applications')
        .insert(formattedData);

      if (submitError) {
        console.error('Database error:', submitError);
        setError(`Erreur lors de la soumission : ${submitError.message}`);
        return;
      }

      // Delete any existing drafts for this user
      await supabase
        .from('passport_applications')
        .delete()
        .eq('user_id', user.id)
        .eq('status', 'draft');

      router.push('/services/citoyens/passeport/success');
    } catch (error) {
      console.error('Error submitting application:', error);
      setError('Erreur lors de la soumission de la demande. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }

  async function handlePhotoUpload(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `photos/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('passport')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('passport')
        .getPublicUrl(filePath);

      setPhotoUrl(publicUrl);
    } catch (error) {
      console.error('Error uploading photo:', error);
      setError('Erreur lors du téléchargement de la photo');
    }
  }

  async function handleSignatureUpload(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `signatures/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('passport')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('passport')
        .getPublicUrl(filePath);

      setSignatureUrl(publicUrl);
    } catch (error) {
      console.error('Error uploading signature:', error);
      setError('Erreur lors du téléchargement de la signature');
    }
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <PassportFormProvider
      applicationId={applicationId}
      type="new"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Demande de Passeport
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Remplissez le formulaire ci-dessous. Vos informations seront automatiquement sauvegardées.
                </p>
              </div>
              <Link href="/services/citoyens/passeport/tableau-de-bord">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Retour au tableau de bord
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Progression</CardTitle>
                <CardDescription>
                  Complétez tous les champs requis pour soumettre votre demande
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-gray-600">{progress}% complété</p>
                </div>
              </CardContent>
            </Card>

            {/* Type de passeport */}
            <Card>
              <CardHeader>
                <CardTitle>Type de Passeport</CardTitle>
                <CardDescription>
                  Sélectionnez le type de passeport que vous souhaitez demander
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select
                  value={form.getValues().type}
                  onValueChange={(value) => form.setValue('type', value as any)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de passeport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ordinaire">Passeport Ordinaire</SelectItem>
                    <SelectItem value="service">Passeport de Service</SelectItem>
                    <SelectItem value="diplomatique">Passeport Diplomatique</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Informations personnelles */}
            <Card>
              <CardHeader>
                <CardTitle>Informations Personnelles</CardTitle>
                <CardDescription>
                  Vos informations personnelles telles qu'elles apparaîtront sur votre passeport
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Prénom(s)</Label>
                    <Input
                      id="firstName"
                      {...form.register('firstName')}
                      placeholder="Entrez votre prénom"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      {...form.register('lastName')}
                      placeholder="Entrez votre nom"
                    />
                  </div>

                  <div>
                    <Label htmlFor="birthDate">Date de naissance</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      {...form.register('birthDate')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="birthPlace">Lieu de naissance</Label>
                    <Input
                      id="birthPlace"
                      {...form.register('birthPlace')}
                      placeholder="Entrez votre lieu de naissance"
                    />
                  </div>

                  <div>
                    <Label htmlFor="nationality">Nationalité</Label>
                    <Input
                      id="nationality"
                      {...form.register('nationality')}
                      placeholder="Votre nationalité"
                    />
                  </div>

                  <div>
                    <Label htmlFor="gender">Genre</Label>
                    <Select
                      value={form.getValues().gender}
                      onValueChange={(value) => form.setValue('gender', value as any)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="M">Masculin</SelectItem>
                        <SelectItem value="F">Féminin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="maritalStatus">Situation matrimoniale</Label>
                    <Select
                      value={form.getValues().maritalStatus}
                      onValueChange={(value) => form.setValue('maritalStatus', value as any)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre situation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Célibataire</SelectItem>
                        <SelectItem value="married">Marié(e)</SelectItem>
                        <SelectItem value="divorced">Divorcé(e)</SelectItem>
                        <SelectItem value="widowed">Veuf/Veuve</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="profession">Profession</Label>
                    <Input
                      id="profession"
                      {...form.register('profession')}
                      placeholder="Votre profession"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coordonnées */}
            <Card>
              <CardHeader>
                <CardTitle>Coordonnées</CardTitle>
                <CardDescription>
                  Vos informations de contact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input
                      id="address"
                      {...form.register('address')}
                      placeholder="Votre adresse complète"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      {...form.register('phone')}
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register('email')}
                      placeholder="Votre adresse email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="emergencyContact">Contact d'urgence</Label>
                    <Input
                      id="emergencyContact"
                      {...form.register('emergencyContact')}
                      placeholder="Numéro de téléphone d'urgence"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informations parentales */}
            <Card>
              <CardHeader>
                <CardTitle>Informations Parentales</CardTitle>
                <CardDescription>
                  Informations sur vos parents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fatherName">Nom du père</Label>
                    <Input
                      id="fatherName"
                      {...form.register('fatherName')}
                      placeholder="Nom complet de votre père"
                    />
                  </div>

                  <div>
                    <Label htmlFor="motherName">Nom de la mère</Label>
                    <Input
                      id="motherName"
                      {...form.register('motherName')}
                      placeholder="Nom complet de votre mère"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Caractéristiques physiques */}
            <Card>
              <CardHeader>
                <CardTitle>Caractéristiques Physiques</CardTitle>
                <CardDescription>
                  Vos caractéristiques physiques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="height">Taille (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      {...form.register('height')}
                      placeholder="Votre taille en centimètres"
                    />
                  </div>

                  <div>
                    <Label htmlFor="eyeColor">Couleur des yeux</Label>
                    <Input
                      id="eyeColor"
                      {...form.register('eyeColor')}
                      placeholder="Couleur de vos yeux"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo et signature */}
            <Card>
              <CardHeader>
                <CardTitle>Photo et Signature</CardTitle>
                <CardDescription>
                  Téléchargez votre photo d'identité et votre signature
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Photo d'identité</Label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        {photoUrl ? (
                          <div className="relative w-32 h-32 mx-auto">
                            <Image
                              src={photoUrl}
                              alt="Photo d'identité"
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                        ) : (
                          <Camera className="mx-auto h-12 w-12 text-gray-300" />
                        )}
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="photo-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-[#1a5653] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#1a5653] focus-within:ring-offset-2 hover:text-[#134240]"
                          >
                            <span>Télécharger une photo</span>
                            <input
                              id="photo-upload"
                              name="photo-upload"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handlePhotoUpload}
                            />
                          </label>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG jusqu'à 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>Signature</Label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        {signatureUrl ? (
                          <div className="relative w-32 h-32 mx-auto">
                            <Image
                              src={signatureUrl}
                              alt="Signature"
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <FileText className="mx-auto h-12 w-12 text-gray-300" />
                        )}
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="signature-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-[#1a5653] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#1a5653] focus-within:ring-offset-2 hover:text-[#134240]"
                          >
                            <span>Télécharger une signature</span>
                            <input
                              id="signature-upload"
                              name="signature-upload"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleSignatureUpload}
                            />
                          </label>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG jusqu'à 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => saveDraft()}
                disabled={loading}
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Enregistrer le brouillon
              </Button>

              <Button
                onClick={async () => {
                  const isValid = await form.trigger();
                  if (isValid) {
                    form.handleSubmit(onSubmit)();
                  } else {
                    const errors = Object.values(form.formState.errors);
                    if (errors.length > 0) {
                      setError(`Veuillez corriger les erreurs suivantes : ${errors.map(e => e.message).join(', ')}`);
                    }
                  }
                }}
                disabled={loading}
                className="bg-[#1a5653] hover:bg-[#134240] text-white"
              >
                {loading ? 'Envoi en cours...' : 'Soumettre la demande'}
              </Button>
            </div>
          </div>
        </div>

        {/* Auto-save Status */}
        <AutoSaveStatus />

        {/* Toast notifications */}
        <Toaster />
      </div>
    </PassportFormProvider>
  );
} 