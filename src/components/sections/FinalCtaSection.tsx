
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onScrollToOffer: () => void;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl sm:text-4xl font-bold text-slate-800 mb-8">
          Resumindo:
        </h3>
        
        <div className="bg-white border-2 border-primary rounded-xl p-4 sm:p-8 mb-8 shadow-xl">
          <p className="text-lg sm:text-xl text-slate-700 mb-6">
            Você não precisa de um milagre.
          </p>
          <p className="text-lg sm:text-xl text-slate-700 mb-6">
            Você precisa começar a conversa certa com o cliente certo.
          </p>
          <p className="text-lg sm:text-xl font-bold text-primary mb-8">
            E isso começa com palavras certeiras.
          </p>
          
          <p className="text-base sm:text-lg text-slate-600 mb-6">
            Com o Manual da Abordagem Matadora, você nunca mais vai abrir a boca sem saber o que dizer.
          </p>
          
          <p className="text-xl sm:text-2xl font-bold text-red-600 mb-8">
            Agora ou vergonha pra sempre.
          </p>
          
          <Button 
            variant="explosive" 
            size="lg" 
            onClick={onScrollToOffer}
            className="w-full text-base sm:text-xl py-6 sm:py-8 mb-4 shadow-xl flex items-center justify-center"
          >
            <span className="text-center leading-tight">COMEÇAR AGORA</span>
            <ArrowRight className="ml-2 h-5 w-5 sm:h-7 sm:w-7 flex-shrink-0" />
          </Button>
          
          <p className="text-green-600 font-semibold text-sm sm:text-base">
            ✅ Última chance de garantir por R$37
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
