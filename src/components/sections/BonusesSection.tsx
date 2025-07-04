
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BonusesSectionProps {
  onScrollToOffer: () => void;
}

const BonusesSection: React.FC<BonusesSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="bonus" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-slate-800 mb-12">
          🎁 Bônus Exclusivos que Turbinam a Transformação
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 hover:shadow-xl transition-all duration-300 shadow-lg">
            <div className="text-yellow-600 text-3xl font-bold mb-4">🎁 Bônus #1:</div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">17 Frases de Impacto para Quebrar Gelo</h4>
            <p className="text-slate-600">Sabe aquele "e aí, tudo bem?" que não gera nada? Aqui você ganha frases que obrigam o cliente a responder e se envolver — sem parecer ensaiado.</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 hover:shadow-xl transition-all duration-300 shadow-lg">
            <div className="text-yellow-600 text-3xl font-bold mb-4">🎁 Bônus #2:</div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">5 Modelos de Abordagem por Nicho</h4>
            <p className="text-slate-600">Vende cosmético? Imóvel? Produto na rua? Loja de roupa? Aqui tem abordagem pronta pra cada cenário — só aplicar e vender.</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 hover:shadow-xl transition-all duration-300 shadow-lg">
            <div className="text-yellow-600 text-3xl font-bold mb-4">🎁 Bônus #3:</div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">Simulador de Reação do Cliente</h4>
            <p className="text-slate-600">Você vai treinar sua abordagem contra 7 perfis de clientes reais. É como ensaiar com o próprio mercado antes de entrar no jogo de verdade.</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onScrollToOffer}
            className="text-base sm:text-xl py-6 sm:py-8 px-8 sm:px-12 shadow-lg"
          >
            QUERO TODOS OS BÔNUS
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
