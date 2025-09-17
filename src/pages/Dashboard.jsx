import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Dashboard() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) window.location.href = '/login';
      else setSession(data.session);
    };
    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') window.location.href = '/login';
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (!session) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {session.user.email}</h1>
      <button
        className="mt-4 bg-red-500 text-white p-2 rounded"
        onClick={async () => await supabase.auth.signOut()}
      >
        Logout
      </button>
    </div>
  );
}
