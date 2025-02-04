// src/components/PriceCalculator/ProductList.jsx
import React from 'react';
import { Trash2 } from 'lucide-react';
import { formatCurrency } from './utils';

const ProductList = ({ products, onRemove, selectedCurrency }) => {
  if (!products.length) return null;

  return (
    <div className="mt-6">
      <h4 className="text-lg font-medium text-blue-200 mb-3">Produtos Cadastrados:</h4>
      <div className="space-y-2">
        {products.map((p, i) => (
          <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-white">
              {p.name} - {p.quantity} unidades a {formatCurrency(p.priceUnitario, selectedCurrency)}/un
            </span>
            <button
              onClick={() => onRemove(i)}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;