import { usePassportForm } from '@/lib/contexts/PassportFormContext';
import { Loader2, Check, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export function AutoSaveStatus() {
  const { isSaving, lastSavedAt, completionPercentage } = usePassportForm();

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 z-50">
      <div className="flex items-center space-x-2">
        {isSaving ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-[#1a5653]" />
            <span className="text-sm text-gray-600">Sauvegarde en cours...</span>
          </>
        ) : lastSavedAt ? (
          <>
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-600">
              Dernière sauvegarde le{' '}
              {format(lastSavedAt, 'dd MMMM yyyy à HH:mm', { locale: fr })}
            </span>
          </>
        ) : (
          <>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-600">Pas encore sauvegardé</span>
          </>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1a5653] transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <span className="text-sm text-gray-600">{completionPercentage}%</span>
      </div>
    </div>
  );
} 