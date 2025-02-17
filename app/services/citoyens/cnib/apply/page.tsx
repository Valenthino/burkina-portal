'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Progress } from "@/components/ui/progress";
import { useRouter } from 'next/navigation';
import debounce from 'lodash/debounce';
import Image from 'next/image';

interface FormData {
  firstName: string;
  lastName: string;
  motherName: string;
  fatherName: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  profession: string;
  address: string;
  phone: string;
  email: string;
  gender: string;
}

export default function CNIBApplicationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    motherName: '',
    fatherName: '',
    birthDate: '',
    birthPlace: '',
    nationality: '',
    profession: '',
    address: '',
    phone: '',
    email: '',
    gender: 'M'
  });
  const [progress, setProgress] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    loadDraft();
  }, []);

  useEffect(() => {
    // Calculate progress
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(value => value !== '').length;
    const newProgress = Math.round((filledFields / totalFields) * 100);
    setProgress(newProgress);
  }, [formData]);

  const loadDraft = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('cnib_applications')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'draft')
        .single();

      if (error) {
        console.error('Error loading draft:', error);
        return;
      }

      if (data) {
        setFormData({
          firstName: data.first_name || '',
          lastName: data.last_name || '',
          motherName: data.mother_name || '',
          fatherName: data.father_name || '',
          birthDate: data.birth_date || '',
          birthPlace: data.birth_place || '',
          nationality: data.nationality || '',
          profession: data.profession || '',
          address: data.address || '',
          phone: data.phone || '',
          email: data.email || '',
          gender: data.gender || 'M'
        });
      }
    } catch (err) {
      console.error('Error in loadDraft:', err);
    }
  };

  const saveDraft = debounce(async (newFormData: FormData) => {
    try {
      setSaving(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('cnib_applications')
        .upsert({
          user_id: user.id,
          status: 'draft',
          first_name: newFormData.firstName,
          last_name: newFormData.lastName,
          mother_name: newFormData.motherName,
          father_name: newFormData.fatherName,
          birth_date: newFormData.birthDate,
          birth_place: newFormData.birthPlace,
          nationality: newFormData.nationality,
          profession: newFormData.profession,
          address: newFormData.address,
          phone: newFormData.phone,
          email: newFormData.email,
          gender: newFormData.gender,
          application_id: `DRAFT-${user.id}-${Date.now()}`
        });

      if (error) {
        console.error('Error saving draft:', error);
        setError('Error saving draft: ' + error.message);
      }
    } catch (err) {
      console.error('Error in saveDraft:', err);
      setError('Error saving draft. Please try again.');
    } finally {
      setSaving(false);
    }
  }, 1000);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    saveDraft(newFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setError('Please log in to submit your application');
        return;
      }

      const applicationId = `CNIB-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      const { error } = await supabase
        .from('cnib_applications')
        .upsert({
          application_id: applicationId,
          user_id: user.id,
          status: 'pending',
          first_name: formData.firstName,
          last_name: formData.lastName,
          mother_name: formData.motherName,
          father_name: formData.fatherName,
          birth_date: formData.birthDate,
          birth_place: formData.birthPlace,
          nationality: formData.nationality,
          profession: formData.profession,
          address: formData.address,
          phone: formData.phone,
          email: formData.email,
          gender: formData.gender
        });

      if (error) {
        console.error('Error submitting application:', error);
        setError('Error submitting application: ' + error.message);
        return;
      }

      router.push(`/services/citoyens/cnib/success?id=${applicationId}`);
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      setError('Error submitting application. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mx-auto" style={{ maxWidth: '210mm' }}> {/* A4 width */}
          <div className="bg-white shadow-lg rounded-lg" style={{ minHeight: '297mm' }}> {/* A4 height */}
            {/* Header with Logo */}
            <div className="p-8 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/ONI-v2.jpg"
                    alt="ONI Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">Office National d'Identification</h1>
                    <p className="text-gray-500">Demande de CNIB</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {saving ? 'Enregistrement...' : 'Toutes les modifications sont enregistrées'}
                </div>
              </div>
              <div className="mt-4">
                <Progress value={progress} className="h-2" />
                <p className="mt-2 text-sm text-gray-500">{progress}% complété</p>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form id="cnib-form" onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Entrez votre prénom"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Entrez votre nom"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="motherName">Nom de la mère</Label>
                      <Input
                        id="motherName"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        placeholder="Nom de la mère"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="fatherName">Nom du père</Label>
                      <Input
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        placeholder="Nom du père"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="birthDate">Date de naissance</Label>
                      <Input
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthPlace">Lieu de naissance</Label>
                      <Input
                        id="birthPlace"
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleInputChange}
                        placeholder="Lieu de naissance"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="nationality">Nationalité</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        placeholder="Votre nationalité"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="profession">Profession</Label>
                      <Input
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        placeholder="Votre profession"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Adresse actuelle</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Votre adresse actuelle"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <Label htmlFor="phone">Numéro de téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Votre numéro de téléphone"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Votre adresse email"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="border-t p-8">
              <div className="flex justify-between items-center">
                <Button variant="outline" type="button">Annuler</Button>
                <Button 
                  type="submit" 
                  form="cnib-form" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Soumettre la demande
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 