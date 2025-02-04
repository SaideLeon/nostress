// src/components/PriceCalculator/index.jsx
import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import CostForm from './CostForm';
import CostList from './CostList';
import CalculationSection from './CalculationSection';
import ResultsSection from './ResultsSection';
import Navbar from '../../components/Navbar';

const PriceCalculator = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('BRL');
  const [products, setProducts] = useState([]);
  const [costs, setCosts] = useState([]);
  const [profitMargin, setProfitMargin] = useState('');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  
  const [productForm, setProductForm] = useState({
    name: '',
    priceType: 'total',
    price: '',
    quantity: ''
  });
  
  const [costForm, setCostForm] = useState({
    description: '',
    value: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    try {
      const { name, priceType, price, quantity } = productForm;
      
      if (!name || !price || !quantity) {
        alert('Por favor, preencha todos os campos do produto');
        return;
      }
      
      const numPrice = parseFloat(price);
      const numQuantity = parseInt(quantity);
      
      if (isNaN(numPrice) || isNaN(numQuantity) || numPrice <= 0 || numQuantity <= 0) {
        alert('Preços e quantidades devem ser números válidos maiores que zero!');
        return;
      }
      
      const newProduct = {
        name,
        priceType,
        quantity: numQuantity,
        priceUnitario: priceType === 'total' ? numPrice / numQuantity : numPrice,
        custoTotal: priceType === 'total' ? numPrice : numPrice * numQuantity
      };
      
      setProducts(prev => [...prev, newProduct]);
      setProductForm({ name: '', priceType: 'total', price: '', quantity: '' });
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Ocorreu um erro ao adicionar o produto. Verifique os dados e tente novamente.');
    }
  };

  const handleAddCost = (e) => {
    e.preventDefault();
    try {
      const { description, value } = costForm;
      
      if (!description || !value) {
        alert('Por favor, preencha todos os campos do custo');
        return;
      }
      
      const numValue = parseFloat(value);
      if (isNaN(numValue) || numValue <= 0) {
        alert('O valor deve ser um número válido maior que zero!');
        return;
      }
      
      setCosts(prev => [...prev, { description, value: numValue }]);
      setCostForm({ description: '', value: '' });
    } catch (error) {
      console.error('Erro ao adicionar custo:', error);
      alert('Ocorreu um erro ao adicionar o custo. Verifique os dados e tente novamente.');
    }
  };

  const handleRemoveProduct = (index) => {
    setProducts(products.filter((_, idx) => idx !== index));
  };

  const handleRemoveCost = (index) => {
    setCosts(costs.filter((_, idx) => idx !== index));
  };
const calculatePrices = () => {
  try {
    if (!products.length) {
      alert('Adicione pelo menos um produto!');
      return;
    }

    const marginValue = parseFloat(profitMargin);
    if (!profitMargin || isNaN(marginValue) || marginValue <= 0) {
      alert('A margem de lucro deve ser um número válido maior que zero!');
      return;
    }
    
    const marginDecimal = marginValue / 100;
    const totalCustosProdutos = products.reduce((sum, p) => sum + p.custoTotal, 0);
    const totalCustosFixos = costs.reduce((sum, c) => sum + c.value, 0); // Pode ser 0 se não houver custos fixos
    
    const results = products.map(produto => {
      const custoFixoPorUnidade = costs.length > 0 ? totalCustosFixos / produto.quantity : 0;
      const custoTotalUnitario = produto.priceUnitario + custoFixoPorUnidade;
      const precoVenda1 = custoTotalUnitario * (1 + marginDecimal);
      
      const custoTotal = produto.custoTotal + (costs.length > 0 ? totalCustosFixos : 0);
      const precoVenda2 = (custoTotal / produto.quantity) * (1 + marginDecimal);
      
      return {
        produto: produto.name,
        quantidade: produto.quantity,
        custoUnitarioBase: produto.priceUnitario,
        custoFixoPorUnidade,
        precoVendaSugerido1: precoVenda1,
        valorTotalVendas1: precoVenda1 * produto.quantity,
        lucroTotalEsperado1: (precoVenda1 * produto.quantity) - custoTotal,
        precoVendaSugerido2: precoVenda2,
        valorTotalVendas2: precoVenda2 * produto.quantity,
        lucroTotalEsperado2: (precoVenda2 * produto.quantity) - custoTotal,
        custoTotal
      };
    });
    
    setResults({
      custosFixos: totalCustosFixos,
      custosProdutos: totalCustosProdutos,
      detalhes: results
    });
    setShowResults(true);
  } catch (error) {
    console.error('Erro ao calcular preços:', error);
    alert('Ocorreu um erro ao calcular os preços. Verifique os dados e tente novamente.');
  }
};
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 text-white overflow-hidden">
    	      
      <Navbar />
      <div className="max-w-4xl mx-auto space-y-6 mt-11">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-xl overflow-hidden border border-white/20">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
                Sistema de Cálculo de Preço
              </h1>
              <CurrencySelector
                selectedCurrency={selectedCurrency}
                onCurrencyChange={setSelectedCurrency}
              />
            </div>

            <div className="space-y-8">
              <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-medium text-blue-200 mb-4">Adicionar Produto</h3>
                <ProductForm
                  form={productForm}
                  onFormChange={setProductForm}
                  onSubmit={handleAddProduct}
                  selectedCurrency={selectedCurrency}
                />
                <ProductList
                  products={products}
                  onRemove={handleRemoveProduct}
                  selectedCurrency={selectedCurrency}
                />
              </div>

              <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-medium text-blue-200 mb-4">Custos Adicionais</h3>
                <CostForm
                  form={costForm}
                  onFormChange={setCostForm}
                  onSubmit={handleAddCost}
                  selectedCurrency={selectedCurrency}
                />
                <CostList
                  costs={costs}
                  onRemove={handleRemoveCost}
                  selectedCurrency={selectedCurrency}
                />
              </div>

              <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">

				<CalculationSection
				  profitMargin={profitMargin}
				  onProfitMarginChange={setProfitMargin}
				  onCalculate={calculatePrices}
				  disabled={!products.length} // Removida a dependência de costs.length
				/>

              </div>

              {showResults && results && (
                <ResultsSection
                  results={results}
                  selectedCurrency={selectedCurrency}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;