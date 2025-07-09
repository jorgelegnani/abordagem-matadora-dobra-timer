
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight text-center">
          Manual da Abordagem Matadora
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 mb-8 text-center">
          Aprenda o que dizer nos primeiros 30 segundos — e dobre suas chances de venda
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed text-center">
          Sem parecer desesperado, sem enrolar cliente, sem papo furado. Apenas com perguntas que criam conexão imediata — mesmo se o cliente já estiver desconfiado.
        </p>
        
        <div className="flex justify-center mb-8">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onScrollToOffer}
            className="text-base sm:text-xl py-6 sm:py-8 px-6 sm:px-12 shadow-xl w-full sm:w-auto max-w-md flex items-center justify-center"
          >
            <span className="text-center">QUERO APRENDER</span>
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          </Button>
        </div>
        
        <p className="text-orange-400 font-semibold text-base sm:text-lg animate-gentle-pulse text-center">
          ⚡ Oferta especial por tempo limitado!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
