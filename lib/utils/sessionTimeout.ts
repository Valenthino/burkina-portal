import { createClient } from '@/lib/supabase/client';

let timeoutId: NodeJS.Timeout;
let warningTimeoutId: NodeJS.Timeout;
let lastActivity = Date.now();

const TIMEOUT_DURATION = 5 * 60 * 1000; // 5 minutes
const WARNING_BEFORE = 30 * 1000; // Show warning 30 seconds before timeout

export const initSessionTimeout = (onWarning: () => void, onTimeout: () => void) => {
  const resetTimeout = () => {
    clearTimeout(timeoutId);
    clearTimeout(warningTimeoutId);
    lastActivity = Date.now();

    warningTimeoutId = setTimeout(() => {
      onWarning();
    }, TIMEOUT_DURATION - WARNING_BEFORE);

    timeoutId = setTimeout(async () => {
      const supabase = createClient();
      await supabase.auth.signOut();
      onTimeout();
    }, TIMEOUT_DURATION);
  };

  // Reset timeout on user activity
  const activityEvents = ['mousedown', 'keydown', 'touchstart', 'scroll'];
  activityEvents.forEach(event => {
    window.addEventListener(event, resetTimeout);
  });

  // Initial setup
  resetTimeout();

  // Cleanup function
  return () => {
    clearTimeout(timeoutId);
    clearTimeout(warningTimeoutId);
    activityEvents.forEach(event => {
      window.removeEventListener(event, resetTimeout);
    });
  };
}; 