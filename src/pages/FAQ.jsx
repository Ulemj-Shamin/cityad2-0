import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <div className="p-4 text-center">
      <h1 className="text-lightning text-3xl mb-4">{t('faq.title')}</h1>
      <p className="text-white">Q: How do I buy a LED board?</p>
      <p className="text-white">A: Click on 'Buy Now' on the listing or map popup.</p>
      <p className="text-white">Q: How do I apply for a loan?</p>
      <p className="text-white">A: Click 'Apply Loan' and follow the instructions.</p>
    </div>
  );
}
