import { useEffect, useRef, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import debounce from 'lodash/debounce';

interface AutoSaveOptions {
  formData: any;
  applicationId: string | null;
  type: 'new' | 'renewal';
  onSaveSuccess?: () => void;
  onSaveError?: (error: any) => void;
}

export function useAutoSave({
  formData,
  applicationId,
  type,
  onSaveSuccess,
  onSaveError
}: AutoSaveOptions) {
  const supabase = createClient();
  const router = useRouter();
  const lastSavedData = useRef<string>('');
  const hasUnsavedChanges = useRef(false);

  // Function to calculate completion percentage
  const calculateCompletionPercentage = (data: any) => {
    if (!data) return 0;
    const totalFields = Object.keys(data).length;
    if (totalFields === 0) return 0;
    const filledFields = Object.values(data).filter(value => 
      value !== null && 
      value !== '' && 
      value !== undefined
    ).length;
    return Math.min(100, Math.floor((filledFields * 100) / totalFields));
  };

  // Function to save form data
  const saveFormData = useCallback(async (data: any) => {
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) {
        console.error('Authentication error:', authError);
        onSaveError?.(new Error('Erreur d\'authentification. Veuillez vous reconnecter.'));
        return;
      }
      
      if (!user) {
        console.error('No authenticated user found');
        onSaveError?.(new Error('Session expirée. Veuillez vous reconnecter.'));
        return;
      }

      // Don't save if data is empty or undefined
      if (!data || Object.keys(data).length === 0) {
        return;
      }

      const currentDataString = JSON.stringify(data);
      if (currentDataString === lastSavedData.current) {
        return; // No changes to save
      }

      const completionPercentage = calculateCompletionPercentage(data);
      const now = new Date().toISOString();
      
      try {
        if (applicationId) {
          // Update existing application
          const { error: updateError } = await supabase
            .from('passport_applications')
            .update({
              form_data: data,
              last_saved_at: now,
              completion_percentage: completionPercentage,
              updated_at: now
            })
            .match({ id: applicationId });

          if (updateError) {
            console.error('Error updating form:', updateError);
            onSaveError?.(new Error('Erreur lors de la sauvegarde. Veuillez réessayer.'));
            return;
          }
        } else {
          // Create new application with a unique ID
          const newApplicationId = `DRAFT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          const { error: insertError } = await supabase
            .from('passport_applications')
            .insert({
              id: newApplicationId,
              user_id: user.id,
              form_data: data,
              type,
              status: 'draft',
              completion_percentage: completionPercentage,
              created_at: now,
              updated_at: now,
              last_saved_at: now
            });

          if (insertError) {
            console.error('Error creating form:', insertError);
            onSaveError?.(new Error('Erreur lors de la création du brouillon. Veuillez réessayer.'));
            return;
          }

          // Update URL with application ID without page reload
          router.replace(`?id=${newApplicationId}`, { scroll: false });
        }

        lastSavedData.current = currentDataString;
        hasUnsavedChanges.current = false;
        onSaveSuccess?.();
      } catch (error) {
        console.error('Database operation error:', error);
        onSaveError?.(new Error('Erreur lors de l\'opération sur la base de données. Veuillez réessayer.'));
      }
    } catch (error) {
      console.error('Error saving form:', error);
      onSaveError?.(new Error('Erreur inattendue lors de la sauvegarde. Veuillez réessayer.'));
    }
  }, [applicationId, supabase, type, router, onSaveSuccess, onSaveError]);

  // Debounced save function with longer delay
  const debouncedSave = useCallback(
    debounce((data: any) => {
      if (data && Object.keys(data).length > 0) {
        saveFormData(data);
      }
    }, 3000), // Increased to 3 seconds
    [saveFormData]
  );

  // Effect for periodic saving
  useEffect(() => {
    const interval = setInterval(() => {
      if (hasUnsavedChanges.current && formData && Object.keys(formData).length > 0) {
        saveFormData(formData);
      }
    }, 60000); // Changed to every minute

    return () => clearInterval(interval);
  }, [formData, saveFormData]);

  // Effect for form data changes
  useEffect(() => {
    if (formData && Object.keys(formData).length > 0) {
      hasUnsavedChanges.current = true;
      debouncedSave(formData);
    }
  }, [formData, debouncedSave]);

  // Effect for saving on page leave
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges.current && formData && Object.keys(formData).length > 0) {
        saveFormData(formData);
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData, saveFormData]);

  return {
    hasUnsavedChanges: hasUnsavedChanges.current,
    saveFormData
  };
} 