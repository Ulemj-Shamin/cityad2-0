import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { supabase } from '../supabaseClient'; // make sure this exists

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ 
      email,
      options: {
        emailRedirectTo: 'https://cityad2-0.vercel.app/' // your deployed URL
      } 
    });
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage(`Magic link sent to ${email}. Check your inbox!`);
    }
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-lightning text-3xl mb-4">{t('login.title')}</h1>
      <input
        type="email"
        placeholder={t('login.emailPlaceholder')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 rounded border border-cyan text-black w-64 mb-2"
      /><br/>
      <button
        className="bg-cyan text-black px-4 py-2 rounded"
        onClick={handleLogin}
      >
        {t('login.sendLink')}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
