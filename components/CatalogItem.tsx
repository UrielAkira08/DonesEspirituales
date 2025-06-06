
import React from 'react';
import { CatalogItemType } from '../types';
import { PlusIcon } from '../constants';


interface CatalogItemProps {
  item: CatalogItemType;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ item }) => {
  return (
    <details className="group bg-white border border-slate-200 rounded-lg mb-3 transition-shadow duration-200 open:shadow-md hover:shadow-sm">
      <summary className="p-4 font-semibold text-lg text-sky-700 cursor-pointer list-none flex justify-between items-center hover:bg-slate-50 rounded-t-lg transition-colors">
        {item.title}
        <PlusIcon className="text-cyan-400 group-open:rotate-45 transition-transform duration-200" />
      </summary>
      <div className="don-content p-5 border-t border-slate-200 text-slate-700">
        <p className="mb-2">{item.description}</p>
        <p className="text-sm">
          <strong className="text-slate-800 font-medium">Referencias:</strong> {item.references}
        </p>
      </div>
    </details>
  );
};

export default CatalogItem;
