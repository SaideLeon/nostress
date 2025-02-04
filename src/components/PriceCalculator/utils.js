// src/components/PriceCalculator/utils.js
import { CURRENCY_CONFIG } from './constants';

export const formatCurrency = (value, currency) => {
  if (!value || !currency || !CURRENCY_CONFIG[currency]) {
    return '0.00'; // valor padrão em caso de erro
  }

  try {
    return new Intl.NumberFormat(CURRENCY_CONFIG[currency].locale, {
      style: 'currency',
      currency: currency
    }).format(value);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return '0.00';
  }
};