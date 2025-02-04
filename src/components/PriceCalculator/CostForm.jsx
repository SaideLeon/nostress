// src/components/PriceCalculator/CostForm.jsx
import React from 'react';
import { Plus } from 'lucide-react';
import { CURRENCY_CONFIG } from './constants';

const CostForm = ({ form, onFormChange, onSubmit, selectedCurrency }) => {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder={CURRENCY_CONFIG[selectedCurrency].pt}
        value={form.description}
        onChange={e => onFormChange({...form, description: e.target.value})}
        className="p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-200/70"
      />
      <input
        type="number"
        placeholder={`Valor (${CURRENCY_CONFIG[selectedCurrency].symbol})`}
        value={form.value}
        onChange={e => onFormChange({...form, value: e.target.value})}
        className="p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-200/70"
      />
      <button 
        type="submit" 
        className="col-span-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Adicionar Custo
      </button>
    </form>
  );
};
export default CostForm;