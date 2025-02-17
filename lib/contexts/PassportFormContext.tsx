import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAutoSave } from '@/lib/hooks/useAutoSave';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/components/ui/use-toast';

// Interface pour les données du formulaire de passeport
interface PassportFormData {
  [key: string]: any;
}

// Interface définissant les fonctionnalités du contexte
interface PassportFormContextType {
  formData: PassportFormData;
  updateFormField: (field: string, value: any) => void;
  updateFormSection: (section: string, data: any) => void;
  isLoading: boolean;
  isSaving: boolean;
  completionPercentage: number;
  lastSavedAt: Date | null;
}

// Création du contexte avec une valeur par défaut undefined
const PassportFormContext = createContext<PassportFormContextType | undefined>(undefined);

// Props du composant Provider
interface PassportFormProviderProps {
  children: React.ReactNode;
  applicationId?: string;
  type: 'new' | 'renewal';
}

export function PassportFormProvider({ children, applicationId, type }: PassportFormProviderProps) {
  // États du formulaire
  const [formData, setFormData] = useState<PassportFormData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const { toast } = useToast();
  const supabase = createClient();

  // Configuration de la sauvegarde automatique
  const { hasUnsavedChanges } = useAutoSave({
    formData,
    applicationId: applicationId || null,
    type,
    onSaveSuccess: () => {
      setIsSaving(false);
      setLastSavedAt(new Date());
      toast({
        title: "Sauvegarde réussie",
        description: "Vos modifications ont été enregistrées avec succès",
        duration: 2000,
      });
    },
    onSaveError: (error) => {
      setIsSaving(false);
      toast({
        title: "Erreur de sauvegarde",
        description: "Une erreur est survenue lors de l'enregistrement de vos modifications",
        variant: "destructive",
      });
    },
  });

  // Chargement des données existantes de la demande
  useEffect(() => {
    async function loadApplication() {
      if (!applicationId) {
        setIsLoading(false);
        return;
      }

      try {
        // Récupération des données depuis Supabase
        const { data, error } = await supabase
          .from('passport_applications')
          .select('*')
          .eq('application_id', applicationId)
          .single();

        if (error) {
          console.error('Erreur lors du chargement:', error);
          throw error;
        }

        if (data) {
          // Mise à jour des états avec les données récupérées
          setFormData(data.form_data || {});
          setCompletionPercentage(data.completion_percentage || 0);
          if (data.last_saved_at) {
            setLastSavedAt(new Date(data.last_saved_at));
          }
        }
      } catch (error) {
        console.error('Erreur lors du chargement de la demande:', error);
        toast({
          title: "Erreur de chargement",
          description: "Une erreur est survenue lors du chargement de votre demande",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }

    loadApplication();
  }, [applicationId, supabase, toast]);

  // Mise à jour d'un champ unique du formulaire
  const updateFormField = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setIsSaving(true);
  };

  // Mise à jour d'une section entière du formulaire
  const updateFormSection = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
    setIsSaving(true);
  };

  // Rendu du Provider avec les valeurs du contexte
  return (
    <PassportFormContext.Provider
      value={{
        formData,
        updateFormField,
        updateFormSection,
        isLoading,
        isSaving,
        completionPercentage,
        lastSavedAt,
      }}
    >
      {children}
    </PassportFormContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function usePassportForm() {
  const context = useContext(PassportFormContext);
  if (context === undefined) {
    throw new Error('usePassportForm doit être utilisé à l\'intérieur d\'un PassportFormProvider');
  }
  return context;
} 