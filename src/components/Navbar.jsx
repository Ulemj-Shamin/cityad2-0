import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <nav className="text-cyan text-center py-4">
      <Link className="mx-2 hover:text-white" to="/">{t('navbar.home')}</Link> |
      <Link className="mx-2 hover:text-white" to="/about">{t('navbar.about')}</Link> |
      <Link className="mx-2 hover:text-white" to="/contact">{t('navbar.contact')}</Link> |
      <Link className="mx-2 hover:text-white" to="/faq">{t('navbar.faq')}</Link> |
      <Link className="mx-2 hover:text-white" to="/login">{t('navbar.login')}</Link>
      <button className="ml-4 px-2 py-1 border border-cyan rounded" onClick={()=>changeLanguage('en')}>EN</button>
      <button className="ml-2 px-2 py-1 border border-cyan rounded" onClick={()=>changeLanguage('mn')}>MN</button>
    </nav>
  );
}
