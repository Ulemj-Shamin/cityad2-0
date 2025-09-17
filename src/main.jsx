import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n'; // Import i18n for translations
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AuthRedirectHandler from './AuthRedirectHandler';

const url = window.location.pathname;

let Page;
if (url === '/dashboard') Page = Dashboard;
else if (url === '/signup') Page = Signup;
else Page = Login;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Page />
    </App>
  </React.StrictMode>
);
