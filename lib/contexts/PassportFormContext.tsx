import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAutoSave } from '@/lib/hooks/useAutoSave';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface PassportFormData {
  [key: string]: any;
}

interface PassportFormContextType {
  formData: PassportFormData;
  updateFormField: (field: string, value: any) => void;
  updateFormSection: (section: string, data: any) => void;
  isLoading: boolean;
  isSaving: boolean;
  completionPercentage: number;
  lastSavedAt: Date | null;
}

const PassportFormContext = createContext<PassportFormContextType | undefined>(undefined);

interface PassportFormProviderProps {
  children: React.ReactNode;
  applicationId?: string;
  type: 'new' | 'renewal';
}

export function PassportFormProvider({ children, applicationId, type }: PassportFormProviderProps) {
  const [formData, setFormData] = useState<PassportFormData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const { toast } = useToast();
  const supabase = createClient();

  // Initialize auto-save
  const { hasUnsavedChanges } = useAutoSave({
    formData,
    applicationId: applicationId || null,
    type,
    onSaveSuccess: () => {
      setIsSaving(false);
      setLastSavedAt(new Date());
      toast({
        title: "Sauvegarde automatique",
        description: "Vos modifications ont été enregistrées",
        duration: 2000,
      });
    },
    onSaveError: (error) => {
      setIsSaving(false);
      toast({
        title: "Erreur de sauvegarde",
        description: "Impossible d'enregistrer vos modifications",
        variant: "destructive",
      });
    },
  });

  // Load existing application data
  useEffect(() => {
    async function loadApplication() {
      if (!applicationId) {
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('passport_applications')
          .select('*')
          .eq('id', applicationId)
          .single();

        if (error) throw error;

        if (data) {
          setFormData(data.form_data || {});
          setCompletionPercentage(data.completion_percentage || 0);
          setLastSavedAt(new Date(data.last_saved_at));
        }
      } catch (error) {
        console.error('Error loading application:', error);
        toast({
          title: "Erreur de chargement",
          description: "Impossible de charger les données du formulaire",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }

    loadApplication();
  }, [applicationId, supabase, toast]);

  // Update a single form field
  const updateFormField = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setIsSaving(true);
  };

  // Update an entire form section
  const updateFormSection = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
    setIsSaving(true);
  };

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

export function usePassportForm() {
  const context = useContext(PassportFormContext);
  if (context === undefined) {
    throw new Error('usePassportForm must be used within a PassportFormProvider');
  }
  return context;
} 