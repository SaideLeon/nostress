// src/components/PriceCalculator/CurrencySelector.jsx
import React from 'react';
import { CURRENCY_CONFIG } from './constants';

const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
  return (
    <select
      value={selectedCurrency}
      onChange={(e) => onCurrencyChange(e.target.value)}
      className="p-2 bg-white/5 border border-white/20 rounded-lg text-white backdrop-blur-sm"
    >
      {Object.entries(CURRENCY_CONFIG).map(([code, config]) => (
        <option key={code} value={code} className="bg-blue-900 text-white">
          {config.name} ({code})
        </option>
      ))}
    </select>
  );
};
export default CurrencySelector;