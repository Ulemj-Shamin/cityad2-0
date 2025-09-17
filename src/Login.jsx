import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage(t('login.successMessage'));
      window.location.href = '/dashboard';
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

      <input
        type="password"
        placeholder={t('login.passwordPlaceholder')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 rounded border border-cyan text-black w-64 mb-2"
      /><br/>

      <button
        className="bg-cyan text-black px-4 py-2 rounded"
        onClick={handleLogin}
      >
        {t('login.signIn')}
      </button>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
