
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductValueSectionProps {
  onScrollToOffer: () => void;
}

const ProductValueSection: React.FC<ProductValueSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-slate-800 mb-8">
          Você está comprando:
        </h3>
        <div className="bg-white border-2 border-yellow-200 rounded-xl p-8 mb-12 shadow-xl">
          <p className="text-2xl font-bold text-slate-800 mb-8">
            Um kit de sobrevivência verbal para os 30 segundos mais importantes da sua venda.
          </p>
          
          <h4 className="text-2xl font-bold text-slate-800 mb-6">O que você pode esperar:</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-6 border border-slate-200 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">1️⃣</div>
              <p className="text-slate-700 font-semibold">Abordar qualquer cliente com confiança — mesmo que você nunca tenha vendido antes</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-6 border border-slate-200 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">2️⃣</div>
              <p className="text-slate-700 font-semibold">Criar conexão real em menos de 1 minuto — e deixar o cliente mais aberto</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-6 border border-slate-200 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">3️⃣</div>
              <p className="text-slate-700 font-semibold">Evitar os erros que fazem o cliente fugir — e manter a conversa viva até o final</p>
            </div>
          </div>
        </div>

        <Button 
          variant="explosive" 
          size="lg" 
          onClick={onScrollToOffer}
          className="text-xl py-8 px-12 shadow-xl"
        >
          GARANTIR MINHA VAGA AGORA
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default ProductValueSection;
