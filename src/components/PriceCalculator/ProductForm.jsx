// src/components/PriceCalculator/ProductForm.jsx
import React from 'react';
import { Plus } from 'lucide-react';
import { CURRENCY_CONFIG } from './constants';

const ProductForm = ({ form, onFormChange, onSubmit, selectedCurrency }) => {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Nome do produto"
        value={form.name}
        onChange={e => onFormChange({...form, name: e.target.value})}
        className="p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-200/70"
      />
      <select
        value={form.priceType}
        onChange={e => onFormChange({...form, priceType: e.target.value})}
        className="p-3 bg-white/5 border border-white/20 rounded-lg text-white"
      >
        <option value="total" className="bg-blue-900">Preço Total</option>
        <option value="unit" className="bg-blue-900">Preço Unitário</option>
      </select>
      <input
        type="number"
        placeholder={`Preço (${CURRENCY_CONFIG[selectedCurrency].symbol})`}
        value={form.price}
        onChange={e => onFormChange({...form, price: e.target.value})}
        className="p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-200/70"
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={form.quantity}
        onChange={e => onFormChange({...form, quantity: e.target.value})}
        className="p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-200/70"
      />
      <button 
        type="submit" 
        className="col-span-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Adicionar Produto
      </button>
    </form>
  );
};
export default ProductForm;