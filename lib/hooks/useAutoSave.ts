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
      const currentDataString = JSON.stringify(data);
      if (currentDataString === lastSavedData.current) {
        return; // No changes to save
      }

      const completionPercentage = calculateCompletionPercentage(data);
      
      if (applicationId) {
        // Update existing application
        const { error } = await supabase
          .from('passport_applications')
          .update({
            form_data: data,
            completion_percentage: completionPercentage,
            last_saved_at: new Date().toISOString()
          })
          .eq('id', applicationId);

        if (error) throw error;
      } else {
        // Create new application
        const { data: newApplication, error } = await supabase
          .from('passport_applications')
          .insert([{
            user_id: (await supabase.auth.getUser()).data.user?.id,
            form_data: data,
            completion_percentage: completionPercentage,
            type: type,
            status: 'draft'
          }])
          .select()
          .single();

        if (error) throw error;
        
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
      onSaveError?.(error);
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