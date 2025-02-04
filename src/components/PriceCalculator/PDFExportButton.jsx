import React from 'react';
import { FileDown } from 'lucide-react';
import { formatCurrency } from './utils';

const PDFExportButton = ({ results, selectedCurrency }) => {
  const generatePDF = async () => {
    try {
      // Importação dinâmica do jsPDF para melhor performance
      const jsPDF = (await import('jspdf')).default;
      const doc = new jsPDF();
      
      // Configurações iniciais
      let yPos = 20;
      const margin = 20;
      const lineHeight = 10;
      
      // Título
      doc.setFontSize(20);
      doc.text('Relatório de Precificação', margin, yPos);
      yPos += lineHeight * 2;
      
      // Resumo Geral
      doc.setFontSize(16);
      doc.text('Resumo Geral', margin, yPos);
      yPos += lineHeight * 1.5;
      
      doc.setFontSize(12);
      doc.text(`Custos Fixos Totais: ${formatCurrency(results.custosFixos, selectedCurrency)}`, margin, yPos);
      yPos += lineHeight;
      doc.text(`Custo Total Produtos: ${formatCurrency(results.custosProdutos, selectedCurrency)}`, margin, yPos);
      yPos += lineHeight * 2;
      
      // Detalhes por Produto
      results.detalhes.forEach(produto => {
        // Verifica se precisa criar nova página
        if (yPos > 250) {
          doc.addPage();
          yPos = 20;
        }
        
        doc.setFontSize(14);
        doc.text(produto.produto, margin, yPos);
        yPos += lineHeight;
        
        doc.setFontSize(12);
        doc.text(`Quantidade: ${produto.quantidade} unidades`, margin, yPos);
        yPos += lineHeight;
        doc.text(`Custo Unitário Base: ${formatCurrency(produto.custoUnitarioBase, selectedCurrency)}`, margin, yPos);
        yPos += lineHeight;
        
        // Abordagem por Custo Unitário
        doc.text('Abordagem por Custo Unitário:', margin, yPos);
        yPos += lineHeight;
        doc.text(`- Preço de Venda: ${formatCurrency(produto.precoVendaSugerido1, selectedCurrency)}`, margin + 5, yPos);
        yPos += lineHeight;
        doc.text(`- Total de Vendas: ${formatCurrency(produto.valorTotalVendas1, selectedCurrency)}`, margin + 5, yPos);
        yPos += lineHeight;
        doc.text(`- Lucro Esperado: ${formatCurrency(produto.lucroTotalEsperado1, selectedCurrency)}`, margin + 5, yPos);
        yPos += lineHeight * 1.5;
        
        // Abordagem por Custo Total
        doc.text('Abordagem por Custo Total:', margin, yPos);
        yPos += lineHeight;
        doc.text(`- Preço de Venda: ${formatCurrency(produto.precoVendaSugerido2, selectedCurrency)}`, margin + 5, yPos);
        yPos += lineHeight;
        doc.text(`- Total de Vendas: ${formatCurrency(produto.valorTotalVendas2, selectedCurrency)}`, margin + 5, yPos);
        yPos += lineHeight;
        doc.text(`- Lucro Esperado: ${formatCurrency(produto.lucroTotalEsperado2, selectedCurrency)}`, margin + 5, yPos);
        yPos += lineHeight * 2;
      });
      
      // Salvar o PDF
      doc.save('relatorio-precificacao.pdf');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.');
    }
  };

  return (
    <button
      onClick={generatePDF}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
    >
      <FileDown className="w-5 h-5" />
      Exportar PDF
    </button>
  );
};

export default PDFExportButton;