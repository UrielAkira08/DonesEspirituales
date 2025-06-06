
import React from 'react';
import { GIFT_CATALOG_ITEMS } from '../constants';
import CatalogItem from './CatalogItem';

const SectionGiftCatalog: React.FC = () => {
  return (
    <div>
      <p className="mb-6 text-slate-700">Haz clic en cada don para ver su descripción y referencias bíblicas.</p>
      <div className="dones-catalog space-y-3">
        {GIFT_CATALOG_ITEMS.map(item => (
          <CatalogItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionGiftCatalog;
