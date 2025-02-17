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
    const totalFields = Object.keys(data).length;
    const filledFields = Object.values(data).filter(value => value !== null && value !== '').length;
    return Math.min(100, Math.floor((filledFields * 100) / totalFields));
  };

  // Function to save form data
  const saveFormData = useCallback(async (data: any) => {
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) {
        console.error('Authentication error:', authError);
        onSaveError?.(new Error('Authentication error: ' + authError.message));
        return;
      }
      
      if (!user) {
        console.error('No authenticated user found');
        onSaveError?.(new Error('No authenticated user found'));
        return;
      }

      const currentDataString = JSON.stringify(data);
      if (currentDataString === lastSavedData.current) {
        return; // No changes to save
      }

      const completionPercentage = calculateCompletionPercentage(data);
      
      if (applicationId) {
        // Update existing application
        const { error: updateError } = await supabase
          .from('passport_applications')
          .update({
            form_data: data,
            last_saved_at: new Date().toISOString(),
            completion_percentage: completionPercentage
          })
          .eq('id', applicationId);

        if (updateError) {
          console.error('Error updating form:', updateError);
          onSaveError?.(new Error('Error updating form: ' + updateError.message));
          return;
        }
      } else {
        // Create new application
        const { data: newApplication, error: insertError } = await supabase
          .from('passport_applications')
          .insert({
            user_id: user.id,
            form_data: data,
            type,
            status: 'draft',
            completion_percentage: completionPercentage
          })
          .select()
          .single();

        if (insertError) {
          console.error('Error creating form:', insertError);
          onSaveError?.(new Error('Error creating form: ' + insertError.message));
          return;
        }

        // Update URL with application ID without page reload
        if (newApplication) {
          router.replace(`?id=${newApplication.id}`, { scroll: false });
        }
      }

      lastSavedData.current = currentDataString;
      hasUnsavedChanges.current = false;
      onSaveSuccess?.();
    } catch (error) {
      console.error('Error saving form:', error);
      onSaveError?.(error instanceof Error ? error : new Error('Unknown error saving form'));
    }
  }, [applicationId, supabase, type, router, onSaveSuccess, onSaveError]);

  // Debounced save function
  const debouncedSave = useCallback(
    debounce((data: any) => {
      saveFormData(data);
    }, 2000),
    [saveFormData]
  );

  // Effect for periodic saving
  useEffect(() => {
    const interval = setInterval(() => {
      if (hasUnsavedChanges.current) {
        saveFormData(formData);
      }
    }, 30000); // Save every 30 seconds if there are changes

    return () => clearInterval(interval);
  }, [formData, saveFormData]);

  // Effect for form data changes
  useEffect(() => {
    hasUnsavedChanges.current = true;
    debouncedSave(formData);
  }, [formData, debouncedSave]);

  // Effect for saving on page leave
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges.current) {
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