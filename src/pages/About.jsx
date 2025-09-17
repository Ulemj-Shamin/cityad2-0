import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="p-4 text-center">
      <h1 className="text-lightning text-3xl mb-4">{t('about.title')}</h1>
      <p className="text-white">{t('about.description')}</p>
    </div>
  );
}
