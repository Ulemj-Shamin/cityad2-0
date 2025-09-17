import { useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function AuthRedirectHandler() {
  useEffect(() => {
    async function handleAuthRedirect() {
      const { data, error } = await supabase.auth.getSessionFromUrl({ storeSession: true });
      if (error) console.error('Login error:', error.message);
      if (data.session) window.location.href = '/dashboard';
    }
    handleAuthRedirect();
  }, []);

  return <p>Logging you in...</p>;
}
