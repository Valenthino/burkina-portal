import { useEffect } from 'react';
import { FormSection } from './FormSection';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePassportForm } from '@/lib/contexts/PassportFormContext';

export function PersonalInfoSection() {
  const { formData, updateFormField } = usePassportForm();

  // Load initial data from formData if it exists
  useEffect(() => {
    if (formData.personalInfo) {
      Object.entries(formData.personalInfo).forEach(([field, value]) => {
        const input = document.querySelector(`[name="personalInfo.${field}"]`) as HTMLInputElement;
        if (input) {
          input.value = value as string;
        }
      });
    }
  }, [formData.personalInfo]);

  const handleInputChange = (field: string, value: string) => {
    updateFormField('personalInfo', {
      ...(formData.personalInfo || {}),
      [field]: value
    });
  };

  return (
    <FormSection
      title="Informations Personnelles"
      description="Vos informations personnelles telles qu'elles apparaîtront sur votre passeport"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">Prénom(s)</Label>
          <Input
            id="firstName"
            name="personalInfo.firstName"
            placeholder="Entrez votre prénom"
            defaultValue={formData.personalInfo?.firstName || ''}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="lastName">Nom</Label>
          <Input
            id="lastName"
            name="personalInfo.lastName"
            placeholder="Entrez votre nom"
            defaultValue={formData.personalInfo?.lastName || ''}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="birthDate">Date de naissance</Label>
          <Input
            id="birthDate"
            name="personalInfo.birthDate"
            type="date"
            defaultValue={formData.personalInfo?.birthDate || ''}
            onChange={(e) => handleInputChange('birthDate', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="birthPlace">Lieu de naissance</Label>
          <Input
            id="birthPlace"
            name="personalInfo.birthPlace"
            placeholder="Entrez votre lieu de naissance"
            defaultValue={formData.personalInfo?.birthPlace || ''}
            onChange={(e) => handleInputChange('birthPlace', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="nationality">Nationalité</Label>
          <Input
            id="nationality"
            name="personalInfo.nationality"
            placeholder="Votre nationalité"
            defaultValue={formData.personalInfo?.nationality || ''}
            onChange={(e) => handleInputChange('nationality', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="gender">Genre</Label>
          <Select
            value={formData.personalInfo?.gender || ''}
            onValueChange={(value) => handleInputChange('gender', value)}
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
            value={formData.personalInfo?.maritalStatus || ''}
            onValueChange={(value) => handleInputChange('maritalStatus', value)}
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
          <Label htmlFor="height">Taille (cm)</Label>
          <Input
            id="height"
            name="personalInfo.height"
            type="number"
            placeholder="Votre taille en centimètres"
            defaultValue={formData.personalInfo?.height || ''}
            onChange={(e) => handleInputChange('height', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="eyeColor">Couleur des yeux</Label>
          <Input
            id="eyeColor"
            name="personalInfo.eyeColor"
            placeholder="Couleur de vos yeux"
            defaultValue={formData.personalInfo?.eyeColor || ''}
            onChange={(e) => handleInputChange('eyeColor', e.target.value)}
          />
        </div>
      </div>
    </FormSection>
  );
} 