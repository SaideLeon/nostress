// src/components/PriceCalculator/CostList.jsx
import React from 'react';
import { Trash2 } from 'lucide-react';
import { formatCurrency } from './utils';

const CostList = ({ costs, onRemove, selectedCurrency }) => {
  if (!costs.length) return null;

  return (
    <div className="mt-6">
      <h4 className="text-lg font-medium text-blue-200 mb-3">Custos Cadastrados:</h4>
      <div className="space-y-2">
        {costs.map((c, i) => (
          <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-white">
              {c.description}: {formatCurrency(c.value, selectedCurrency)}
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
export default CostList;