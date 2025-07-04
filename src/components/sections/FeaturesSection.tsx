import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturesSectionProps {
  onScrollToOffer: () => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="beneficios" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-slate-800 mb-12">
          O que você vai desbloquear dentro do Manual da Abordagem Matadora:
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/30">
            <div className="text-green-600 text-2xl mb-4">✅</div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">Script de Abordagem de Primeira Impressão</h4>
            <p className="text-slate-600">(As frases exatas que quebram o gelo sem parecer forçado — até com cliente desconfiado.)</p>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/30">
            <div className="text-green-600 text-2xl mb-4">✅</div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">Mapa de Conexão Rápida</h4>
            <p className="text-slate-600">(Aperte o botão certo na mente do cliente usando perguntas simples — sem parecer vendedor pegajoso.)</p>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/30">
            <div className="text-green-600 text-2xl mb-4">✅</div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">Sequência de Impacto em 30s</h4>
            <p className="text-slate-600">(O que dizer, em qual ordem, e por quê — pra não perder o cliente logo de cara.)</p>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/30">
            <div className="text-green-600 text-2xl mb-4">✅</div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">Detector de Interesse Rápido</h4>
            <p className="text-slate-600">(Saiba se o cliente está realmente aberto à conversa — sem parecer intrometido.)</p>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/30">
            <div className="text-green-600 text-2xl mb-4">✅</div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">Rotina de Prática com Objeções Reais</h4>
            <p className="text-slate-600">(Destrave seu cérebro antes de entrar na conversa — e pare de gaguejar na frente do cliente.)</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onScrollToOffer}
            className="text-base sm:text-xl py-6 sm:py-8 px-8 sm:px-12 shadow-lg"
          >
            VER OFERTA
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
