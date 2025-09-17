import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="p-4 text-center">
      <h1 className="text-lightning text-3xl mb-4">{t('contact.title')}</h1>
      <p className="text-white">Email: support@ledmarketplace.com</p>
      <p className="text-white">Phone: +976 9900 1234</p>
    </div>
  );
}
