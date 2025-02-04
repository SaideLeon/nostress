// src/components/PriceCalculator/ResultsSection.jsx
import React from 'react';
import { formatCurrency } from './utils';
import { CURRENCY_CONFIG } from './constants';
import PDFExportButton from './PDFExportButton';

const ResultsSection = ({ results, selectedCurrency }) => {
  if (!results) return null;

  return (
    
<div className="space-y-6">
  <div className="flex justify-between items-center">
    <h3 className="text-2xl font-medium text-blue-200">Resultados</h3>
    <PDFExportButton results={results} selectedCurrency={selectedCurrency} /> </div>
      
      <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
        <div className="text-white">
          <p className="text-xl font-medium text-blue-200 mb-3">Resumo Geral:</p>
          <p className="text-lg">Custos Fixos Totais: {formatCurrency(results.custosFixos, selectedCurrency)}</p>
          <p className="text-lg">Custo Total Produtos: {formatCurrency(results.custosProdutos, selectedCurrency)}</p>
        </div>
      </div>
      
      {results.detalhes.map((r, i) => (
        <div key={i} className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 space-y-6">
          <h4 className="text-xl font-medium text-blue-200">{r.produto}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 text-white/90">
              <p className="flex justify-between">
                <span>Quantidade:</span>
                <span className="font-medium">{r.quantidade} unidades</span>
              </p>
              <p className="flex justify-between">
                <span>Custo Unitário Base:</span>
                <span className="font-medium">{formatCurrency(r.custoUnitarioBase, selectedCurrency)}</span>
              </p>
              <p className="flex justify-between">
                <span>Custo Fixo por Unidade:</span>
                <span className="font-medium">{formatCurrency(r.custoFixoPorUnidade, selectedCurrency)}</span>
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="text-lg font-medium text-blue-200 mb-3">Abordagem por Custo Unitário</p>
              <div className="space-y-2 text-white/90">
                <p className="flex justify-between">
                  <span>Preço de Venda:</span>
                  <span className="font-medium">{formatCurrency(r.precoVendaSugerido1, selectedCurrency)}</span>
                </p>
                <p className="flex justify-between">
                  <span>Total de Vendas:</span>
                  <span className="font-medium">{formatCurrency(r.valorTotalVendas1, selectedCurrency)}</span>
                </p>
                <p className="flex justify-between text-emerald-300">
                  <span>Lucro Esperado:</span>
                  <span className="font-medium">{formatCurrency(r.lucroTotalEsperado1, selectedCurrency)}</span>
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 md:col-span-2">
              <p className="text-lg font-medium text-blue-200 mb-3">Abordagem por Custo Total</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
                <p className="flex justify-between md:block">
                  <span className="block mb-1">Preço de Venda:</span>
                  <span className="font-medium">{formatCurrency(r.precoVendaSugerido2, selectedCurrency)}</span>
                </p>
                <p className="flex justify-between md:block">
                  <span className="block mb-1">Total de Vendas:</span>
                  <span className="font-medium">{formatCurrency(r.valorTotalVendas2, selectedCurrency)}</span>
                </p>
                <p className="flex justify-between md:block text-emerald-300">
                  <span className="block mb-1">Lucro Esperado:</span>
                  <span className="font-medium">{formatCurrency(r.lucroTotalEsperado2, selectedCurrency)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ResultsSection;