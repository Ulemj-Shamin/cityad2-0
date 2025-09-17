import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Login() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    alert(`Login OTP sent to ${phone}`);
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-lightning text-3xl mb-4">{t('login.title')}</h1>
      <input
        type="text"
        placeholder="+976 9911 2233"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        className="p-2 rounded border border-cyan text-black w-64 mb-2"
      /><br/>
      <button className="bg-cyan text-black px-4 py-2 rounded" onClick={handleLogin}>Send OTP</button>
    </div>
  );
}
