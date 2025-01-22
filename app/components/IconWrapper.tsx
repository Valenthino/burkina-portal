'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface IconWrapperProps {
  icon: React.ReactNode;
  fallback?: React.ReactNode;
}

export function IconWrapper({ icon, fallback }: IconWrapperProps) {
  const defaultFallback = <span className="w-5 h-5 inline-block" />;

  return (
    <ErrorBoundary fallback={fallback || defaultFallback}>
      <Suspense fallback={fallback || defaultFallback}>
        {icon}
      </Suspense>
    </ErrorBoundary>
  );
} 