import { Loader2 } from 'lucide-react';

export function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Loader2 className="h-8 w-8 animate-spin text-[#1a5653]" />
      <p className="mt-4 text-sm text-gray-600">Chargement en cours...</p>
    </div>
  );
}

export function LoadingSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="h-6 w-6 animate-spin text-[#1a5653]" />
      <p className="mt-2 text-sm text-gray-600">Chargement en cours...</p>
    </div>
  );
} 