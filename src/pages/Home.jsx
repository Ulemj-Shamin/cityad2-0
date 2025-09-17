import { useEffect, useState } from 'react';
import ListingCard from '../components/ListingCard';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings([
      { id:1, title:"LED Board A", price:1200, image:"/images/board1.jpg" },
      { id:2, title:"LED Board B", price:950, image:"/images/board2.jpg" },
      { id:3, title:"LED Board C", price:1100, image:"/images/board3.jpg" },
    ]);
  }, []);

  return (
    <div className="p-4 flex flex-wrap justify-center">
      <h1 className="w-full text-lightning text-3xl text-center mb-4">{t('home.title')}</h1>
      {listings.map(listing => <ListingCard key={listing.id} listing={listing} />)}
    </div>
  );
}
