import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) setMessage(`Error: ${error.message}`);
    else setMessage('Account created! You can now log in.');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button className="w-full bg-green-500 text-white p-2 rounded" type="submit">
          Sign Up
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
