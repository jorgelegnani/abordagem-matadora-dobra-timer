
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Clock } from 'lucide-react';

interface TargetAudienceSectionProps {
  onScrollToOffer: () => void;
}

const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="para-quem" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Pra quem é esse produto?
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <Users className="w-16 h-16 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-800 mb-3">Iniciantes em vendas</h4>
            <p className="text-slate-600">que travam na hora de abordar o cliente</p>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <Target className="w-16 h-16 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-800 mb-3">Autônomos</h4>
            <p className="text-slate-600">porta a porta, redes sociais ou loja física — não importa onde, importa COMO você começa</p>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-800 mb-3">Pessoas que perdem venda</h4>
            <p className="text-slate-600">por insegurança, por falar demais ou por não saber como iniciar a conversa</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onScrollToOffer}
            className="text-base sm:text-xl py-6 sm:py-8 px-8 sm:px-12 shadow-lg"
          >
            QUERO RESOLVER
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
