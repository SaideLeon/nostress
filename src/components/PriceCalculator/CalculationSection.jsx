// src/components/PriceCalculator/CalculationSection.jsx
import React from 'react';
import { Calculator } from 'lucide-react';

const CalculationSection = ({ profitMargin, onProfitMarginChange, onCalculate, disabled }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="number"
        placeholder="Margem de Lucro (%)"
        value={profitMargin}
        onChange={e => onProfitMarginChange(e.target.value)}
        className="p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-200/70"
      />
      <button
        onClick={onCalculate}
        disabled={disabled}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Calcular Preços
      </button>
    </div>
  );
};
export default CalculationSection;