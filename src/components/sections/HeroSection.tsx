
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="pt-24 pb-16 px-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
          Manual da Abordagem Matadora
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-8">
          Aprenda o que dizer nos primeiros 30 segundos — e dobre suas chances de venda
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Sem parecer desesperado, sem enrolar cliente, sem papo furado. Apenas com perguntas que criam conexão imediata — mesmo se o cliente já estiver desconfiado.
        </p>
        
        <Button 
          variant="cta" 
          size="lg" 
          onClick={onScrollToOffer}
          className="mb-8 text-xl py-8 px-12 shadow-xl"
        >
          QUERO APRENDER AGORA
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
        
        <p className="text-orange-400 font-semibold text-lg animate-gentle-pulse">
          ⚡ Oferta especial por tempo limitado!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
