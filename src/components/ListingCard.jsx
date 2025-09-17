import { useTranslation } from 'react-i18next';

export default function ListingCard({ listing }) {
  const { t } = useTranslation();

  const buyNow = () => alert(`${t('home.buy')}: ${listing.title} - $${listing.price}`);
  const applyLoan = () => alert(`${t('home.loan')}: ${listing.title}`);

  return (
    <div className="border-2 border-cyan rounded-lg m-2 p-4 w-60 text-center">
      <h2 className="text-white text-xl">{listing.title}</h2>
      <p>Price: ${listing.price}</p>
      <img src={listing.image} alt={listing.title} className="rounded-lg w-full"/>
      <button className="mt-2 bg-cyan text-black px-2 py-1 rounded" onClick={buyNow}>{t('home.buy')}</button>
      <button className="mt-2 bg-black border border-cyan text-cyan px-2 py-1 rounded" onClick={applyLoan}>{t('home.loan')}</button>
    </div>
  );
}
