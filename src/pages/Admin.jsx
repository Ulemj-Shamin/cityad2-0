import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Admin() {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleUpload = () => {
    alert(`${t('admin.title')}: ${title} - $${price}`);
    setTitle(''); setPrice(''); setImage('');
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-lightning text-3xl mb-4">{t('admin.title')}</h1>
      <input type="text" placeholder="Listing Title" value={title} onChange={(e)=>setTitle(e.target.value)}
             className="p-2 rounded border border-cyan text-black w-64 mb-2"/><br/>
      <input type="number" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)}
             className="p-2 rounded border border-cyan text-black w-64 mb-2"/><br/>
      <input type="text" placeholder="Image URL" value={image} onChange={(e)=>setImage(e.target.value)}
             className="p-2 rounded border border-cyan text-black w-64 mb-2"/><br/>
      <button className="bg-cyan text-black px-4 py-2 rounded" onClick={handleUpload}>Upload Listing</button>
    </div>
  );
}
