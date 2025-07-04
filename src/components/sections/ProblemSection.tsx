
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Zap } from 'lucide-react';

interface ProblemSectionProps {
  onScrollToOffer: () => void;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="problema" className="py-16 px-6 bg-gradient-to-br from-orange-50 to-red-50 relative">
      <div className="absolute inset-0 bg-gradient-warning opacity-5"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
          Quer vender? Aprenda a abrir a boca sem ferrar tudo.
        </h3>
        
        <div className="bg-white border-2 border-orange-200 rounded-xl p-8 mb-8 shadow-xl backdrop-blur-sm">
          <h4 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Você só tem 30 segundos.
          </h4>
          <p className="text-xl text-slate-700 mb-6">
            Esse é o tempo que o cliente te dá antes de te rotular como mais um vendedor chato.
          </p>
          <p className="text-xl text-slate-700 mb-6">
            E se você abrir a boca errado, <span className="text-red-600 font-bold">acabou</span>.
          </p>
          <p className="text-lg text-slate-600 mb-4">
            Ele sorri, te ignora e vai embora com um "qualquer coisa eu te procuro".
          </p>
          <p className="text-xl font-bold text-red-600">
            E você sabe que esse dia nunca chega.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border-2 border-red-200 rounded-lg p-6 shadow-lg">
            <h5 className="text-xl font-bold text-red-600 mb-4">Se você tá começando, é ainda pior:</h5>
            <ul className="text-left space-y-2 text-slate-700">
              <li>• Sua voz treme</li>
              <li>• Você tenta parecer seguro, mas a ansiedade transborda</li>
              <li>• O cliente vê <span className="text-red-600 font-bold">desespero</span></li>
              <li>• E desespero não vende</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-lg">
            <h5 className="text-xl font-bold text-green-600 mb-4">Esse produto existe pra uma coisa:</h5>
            <ul className="text-left space-y-2 text-slate-700">
              <li className="flex items-center"><Target className="w-5 h-5 text-green-600 mr-2" /> Fazer você parecer experiente mesmo sendo iniciante</li>
              <li className="flex items-center"><Zap className="w-5 h-5 text-green-600 mr-2" /> Fazer você soar confiante mesmo tremendo por dentro</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6 mb-8 border-2 border-orange-200 shadow-lg">
          <p className="text-2xl font-bold text-slate-800 mb-4">
            Chega de começar bem e perder o cliente logo depois do "bom dia".
          </p>
          <p className="text-xl text-slate-700">
            Aqui você vai aprender <span className="text-orange-600 font-bold">o que dizer</span>, 
            <span className="text-orange-600 font-bold"> como dizer</span> e 
            <span className="text-orange-600 font-bold"> quando dizer</span>.
          </p>
        </div>

        <Button 
          variant="explosive" 
          size="lg" 
          onClick={onScrollToOffer}
          className="text-base sm:text-xl py-6 sm:py-8 px-8 sm:px-12 shadow-xl"
        >
          RESOLVER POR R$37
          <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </section>
  );
};

export default ProblemSection;
