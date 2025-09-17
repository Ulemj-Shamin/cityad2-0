import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { supabase } from './supabaseClient'; // make sure this exists

export default function Signup() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage(t('signup.successMessage')); // Example: "Account created! You can log in."
    }
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-lightning text-3xl mb-4">{t('signup.title')}</h1>

      <input
        type="email"
        placeholder={t('signup.emailPlaceholder')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 rounded border border-cyan text-black w-64 mb-2"
      /><br/>

      <input
        type="password"
        placeholder={t('signup.passwordPlaceholder')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 rounded border border-cyan text-black w-64 mb-2"
      /><br/>

      <button
        className="bg-green-500 text-black px-4 py-2 rounded"
        onClick={handleSignup}
      >
        {t('signup.signUp')}
      </button>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
