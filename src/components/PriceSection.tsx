import React from 'react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import { ArrowRight } from 'lucide-react';

const PriceSection: React.FC = () => {
  const handleCtaClick = () => {
    // Aqui você pode adicionar a lógica de redirecionamento ou checkout
    console.log('CTA clicado - redirecionar para checkout');
  };

  return (
    <section id="oferta" className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Faça as contas…
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-destructive font-bold text-xl mb-2">💣 Um curso de oratória:</p>
            <p className="text-2xl font-bold text-foreground">R$1200</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-destructive font-bold text-xl mb-2">💣 Um coach de vendas iniciante:</p>
            <p className="text-2xl font-bold text-foreground">R$800</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-destructive font-bold text-xl mb-2">💣 Perder 10 clientes por semana:</p>
            <p className="text-2xl font-bold text-foreground">R$?? prejuízo</p>
            <p className="text-sm text-muted-foreground">que você nunca vai saber calcular</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xl text-foreground mb-8 italic">
            "E ainda assim, nenhuma dessas opções garantiria a transformação que você vai ter."
          </p>
        </div>

        <div className="bg-card border-2 border-warning rounded-xl p-8 mb-8 shadow-intense">
          <div className="mb-6">
            <p className="text-lg text-muted-foreground mb-2">De:</p>
            <p className="text-4xl font-bold text-muted-foreground line-through">R$97</p>
          </div>
          
          <div className="mb-6">
            <p className="text-warning font-bold text-xl mb-2">POR APENAS:</p>
            <p className="text-6xl md:text-7xl font-black text-success bg-gradient-to-r from-success to-warning bg-clip-text text-transparent">
              R$37
            </p>
          </div>

          <div className="mb-8">
            <CountdownTimer initialMinutes={20} />
          </div>

          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleCtaClick}
            className="w-full mb-4 text-base sm:text-xl py-6 sm:py-8"
          >
            DOMINAR ABORDAGEM
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <p className="text-success font-semibold text-lg">
            ✅ Acesso imediato após o pagamento
          </p>
          <p className="text-success font-semibold text-lg">
            ✅ Garantia de 7 dias
          </p>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Recapitulando Tudo Que Você Vai Receber:
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="space-y-2">
              <p className="text-success font-semibold">✅ Manual da Abordagem Matadora</p>
              <p className="text-success font-semibold">✅ Script de Primeira Impressão</p>
              <p className="text-success font-semibold">✅ Mapa de Conexão Rápida</p>
              <p className="text-success font-semibold">✅ Sequência de Impacto</p>
              <p className="text-success font-semibold">✅ Detector de Interesse</p>
            </div>
            <div className="space-y-2">
              <p className="text-success font-semibold">✅ Rotina de Prática com Objeções</p>
              <p className="text-warning font-semibold">🎁 17 Frases de Quebra Gelo</p>
              <p className="text-warning font-semibold">🎁 Modelos por Nicho</p>
              <p className="text-warning font-semibold">🎁 Simulador de Reações</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-3xl font-bold text-foreground mb-4">
              Tudo isso por apenas <span className="text-success">R$37</span>.
            </p>
            
            <Button 
              variant="explosive" 
              size="lg" 
              onClick={handleCtaClick}
              className="w-full text-base sm:text-xl py-6 sm:py-8"
            >
              COMEÇAR AGORA
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
