'use client';

import { useState } from 'react';

interface FeedbackSectionProps {
  className?: string;
  titleClassName?: string;
  buttonClassName?: string;
  showLastUpdate?: boolean;
  variant?: 'default' | 'compact';
}

/**
 * FeedbackSection component that displays a feedback section asking if the page was useful
 * with Yes/No buttons and optionally shows the last update date.
 */
export default function FeedbackSection({
  className = '',
  titleClassName = '',
  buttonClassName = '',
  showLastUpdate = true,
  variant = 'default',
}: FeedbackSectionProps) {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState<'yes' | 'no' | null>(null);

  const handleFeedback = (value: 'yes' | 'no') => {
    setFeedbackValue(value);
    setFeedbackSubmitted(true);
    // Here you could add API call to submit feedback
    console.log(`Feedback submitted: ${value}`);
  };

  const isCompact = variant === 'compact';

  return (
    <div className={`bg-gray-50 p-6 rounded-lg mt-12 ${className}`}>
      {isCompact ? (
        <h2 className={`text-xl font-bold mb-4 ${titleClassName}`}>Votre avis nous intéresse</h2>
      ) : (
        <h2 className={`text-2xl font-semibold mb-4 ${titleClassName}`}>Cette page vous a-t-elle été utile ?</h2>
      )}
      
      {isCompact && <p className="mb-4">Cette page vous a-t-elle été utile ?</p>}

      {!feedbackSubmitted ? (
        <div className="flex gap-4">
          <button 
            onClick={() => handleFeedback('yes')} 
            className={buttonClassName || 
              (isCompact 
                ? "bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600" 
                : "bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700")
            }
          >
            Oui
          </button>
          <button 
            onClick={() => handleFeedback('no')} 
            className={buttonClassName || 
              (isCompact 
                ? "bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600" 
                : "bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700")
            }
          >
            Non
          </button>
        </div>
      ) : (
        <div className="text-green-600 font-medium">
          Merci pour votre retour !
        </div>
      )}

      {showLastUpdate && (
        <p className="text-sm text-gray-500 mt-4">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
      )}
    </div>
  );
}