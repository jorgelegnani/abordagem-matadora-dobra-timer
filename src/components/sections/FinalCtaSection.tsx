
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onScrollToOffer: () => void;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-slate-800 mb-8">
          Resumindo:
        </h3>
        
        <div className="bg-white border-2 border-primary rounded-xl p-8 mb-8 shadow-xl">
          <p className="text-xl text-slate-700 mb-6">
            Você não precisa de um milagre.
          </p>
          <p className="text-xl text-slate-700 mb-6">
            Você precisa começar a conversa certa com o cliente certo.
          </p>
          <p className="text-xl font-bold text-primary mb-8">
            E isso começa com palavras certeiras.
          </p>
          
          <p className="text-lg text-slate-600 mb-6">
            Com o Manual da Abordagem Matadora, você nunca mais vai abrir a boca sem saber o que dizer.
          </p>
          
          <p className="text-2xl font-bold text-red-600 mb-8">
            Agora ou vergonha pra sempre.
          </p>
          
          <Button 
            variant="explosive" 
            size="lg" 
            onClick={onScrollToOffer}
            className="w-full text-2xl py-8 mb-4 shadow-xl"
          >
            COMEÇAR MINHA TRANSFORMAÇÃO AGORA
            <ArrowRight className="ml-2 h-8 w-8" />
          </Button>
          
          <p className="text-green-600 font-semibold">
            ✅ Última chance de garantir por R$37
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
