import React from 'react';
import { Button } from '@/components/ui/button';
import PriceSection from '@/components/PriceSection';
import { ArrowRight, CheckCircle, Target, Clock, Users, Zap } from 'lucide-react';

const Index = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Manual da Abordagem Matadora
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Aprenda o que dizer nos primeiros 30 segundos — e dobre suas chances de venda
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Sem parecer desesperado, sem enrolar cliente, sem papo furado. Apenas com perguntas que criam conexão imediata — mesmo se o cliente já estiver desconfiado.
          </p>
          
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToOffer}
            className="mb-8 text-xl py-8 px-12"
          >
            QUERO APRENDER AGORA
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          
          <p className="text-warning font-semibold text-lg">
            ⚡ Oferta especial por tempo limitado!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">
            O que você vai desbloquear dentro do Manual da Abordagem Matadora:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-success text-2xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-foreground mb-3">Script de Abordagem de Primeira Impressão</h4>
              <p className="text-muted-foreground">(As frases exatas que quebram o gelo sem parecer forçado — até com cliente desconfiado.)</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-success text-2xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-foreground mb-3">Mapa de Conexão Rápida</h4>
              <p className="text-muted-foreground">(Aperte o botão certo na mente do cliente usando perguntas simples — sem parecer vendedor pegajoso.)</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-success text-2xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-foreground mb-3">Sequência de Impacto em 30s</h4>
              <p className="text-muted-foreground">(O que dizer, em qual ordem, e por quê — pra não perder o cliente logo de cara.)</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-success text-2xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-foreground mb-3">Detector de Interesse Rápido</h4>
              <p className="text-muted-foreground">(Saiba se o cliente está realmente aberto à conversa — sem parecer intrometido.)</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-success text-2xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-foreground mb-3">Rotina de Prática com Objeções Reais</h4>
              <p className="text-muted-foreground">(Destrave seu cérebro antes de entrar na conversa — e pare de gaguejar na frente do cliente.)</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToOffer}
              className="text-xl py-8 px-12"
            >
              VER OFERTA ESPECIAL
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Quer vender? Aprenda a abrir a boca sem ferrar tudo.
          </h3>
          
          <div className="bg-card border-2 border-primary rounded-xl p-8 mb-8 shadow-intense">
            <h4 className="text-3xl font-bold text-primary mb-6">
              Você só tem 30 segundos.
            </h4>
            <p className="text-xl text-foreground mb-6">
              Esse é o tempo que o cliente te dá antes de te rotular como mais um vendedor chato.
            </p>
            <p className="text-xl text-foreground mb-6">
              E se você abrir a boca errado, <span className="text-destructive font-bold">acabou</span>.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Ele sorri, te ignora e vai embora com um "qualquer coisa eu te procuro".
            </p>
            <p className="text-xl font-bold text-destructive">
              E você sabe que esse dia nunca chega.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card border border-destructive rounded-lg p-6">
              <h5 className="text-xl font-bold text-destructive mb-4">Se você tá começando, é ainda pior:</h5>
              <ul className="text-left space-y-2 text-foreground">
                <li>• Sua voz treme</li>
                <li>• Você tenta parecer seguro, mas a ansiedade transborda</li>
                <li>• O cliente vê <span className="text-destructive font-bold">desespero</span></li>
                <li>• E desespero não vende</li>
              </ul>
            </div>

            <div className="bg-card border border-success rounded-lg p-6">
              <h5 className="text-xl font-bold text-success mb-4">Esse produto existe pra uma coisa:</h5>
              <ul className="text-left space-y-2 text-foreground">
                <li className="flex items-center"><Target className="w-5 h-5 text-success mr-2" /> Fazer você parecer experiente mesmo sendo iniciante</li>
                <li className="flex items-center"><Zap className="w-5 h-5 text-success mr-2" /> Fazer você soar confiante mesmo tremendo por dentro</li>
              </ul>
            </div>
          </div>

          <div className="bg-warning/20 border border-warning rounded-lg p-6 mb-8">
            <p className="text-2xl font-bold text-foreground mb-4">
              Chega de começar bem e perder o cliente logo depois do "bom dia".
            </p>
            <p className="text-xl text-foreground">
              Aqui você vai aprender <span className="text-warning font-bold">o que dizer</span>, 
              <span className="text-warning font-bold"> como dizer</span> e 
              <span className="text-warning font-bold"> quando dizer</span>.
            </p>
          </div>

          <Button 
            variant="explosive" 
            size="lg" 
            onClick={scrollToOffer}
            className="text-xl py-8 px-12"
          >
            RESOLVER AGORA POR R$37
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Pra quem é esse produto?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">Iniciantes em vendas</h4>
              <p className="text-muted-foreground">que travam na hora de abordar o cliente</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Target className="w-16 h-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">Autônomos</h4>
              <p className="text-muted-foreground">porta a porta, redes sociais ou loja física — não importa onde, importa COMO você começa</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">Pessoas que perdem venda</h4>
              <p className="text-muted-foreground">por insegurança, por falar demais ou por não saber como iniciar a conversa</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToOffer}
              className="text-xl py-8 px-12"
            >
              ESSE SOU EU! QUERO RESOLVER
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You're Buying */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Você está comprando:
          </h3>
          <div className="bg-card border-2 border-warning rounded-xl p-8 mb-12 shadow-intense">
            <p className="text-2xl font-bold text-foreground mb-8">
              Um kit de sobrevivência verbal para os 30 segundos mais importantes da sua venda.
            </p>
            
            <h4 className="text-2xl font-bold text-foreground mb-6">O que você pode esperar:</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-success mb-2">1️⃣</div>
                <p className="text-foreground font-semibold">Abordar qualquer cliente com confiança — mesmo que você nunca tenha vendido antes</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-success mb-2">2️⃣</div>
                <p className="text-foreground font-semibold">Criar conexão real em menos de 1 minuto — e deixar o cliente mais aberto</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-success mb-2">3️⃣</div>
                <p className="text-foreground font-semibold">Evitar os erros que fazem o cliente fugir — e manter a conversa viva até o final</p>
              </div>
            </div>
          </div>

          <Button 
            variant="explosive" 
            size="lg" 
            onClick={scrollToOffer}
            className="text-xl py-8 px-12"
          >
            GARANTIR MINHA VAGA AGORA
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">
            🎁 Bônus Exclusivos que Turbinam a Transformação
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border-2 border-warning rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-warning text-3xl font-bold mb-4">🎁 Bônus #1:</div>
              <h4 className="text-xl font-bold text-foreground mb-3">17 Frases de Impacto para Quebrar Gelo</h4>
              <p className="text-muted-foreground">Sabe aquele "e aí, tudo bem?" que não gera nada? Aqui você ganha frases que obrigam o cliente a responder e se envolver — sem parecer ensaiado.</p>
            </div>

            <div className="bg-card border-2 border-warning rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-warning text-3xl font-bold mb-4">🎁 Bônus #2:</div>
              <h4 className="text-xl font-bold text-foreground mb-3">5 Modelos de Abordagem por Nicho</h4>
              <p className="text-muted-foreground">Vende cosmético? Imóvel? Produto na rua? Loja de roupa? Aqui tem abordagem pronta pra cada cenário — só aplicar e vender.</p>
            </div>

            <div className="bg-card border-2 border-warning rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-warning text-3xl font-bold mb-4">🎁 Bônus #3:</div>
              <h4 className="text-xl font-bold text-foreground mb-3">Simulador de Reação do Cliente</h4>
              <p className="text-muted-foreground">Você vai treinar sua abordagem contra 7 perfis de clientes reais. É como ensaiar com o próprio mercado antes de entrar no jogo de verdade.</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToOffer}
              className="text-xl py-8 px-12"
            >
              QUERO TODOS OS BÔNUS + PRODUTO
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <PriceSection />

      {/* FAQ */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            ❓ Perguntas Frequentes (FAQ)
          </h3>
          
          <div className="space-y-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Preciso ter experiência com vendas?</h4>
              <p className="text-muted-foreground">Nenhuma. O material foi feito pra quem tá começando do zero.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Funciona pra vendas online?</h4>
              <p className="text-muted-foreground">Sim. A abordagem serve pra Direct, WhatsApp ou pessoalmente.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Quanto tempo leva pra aplicar?</h4>
              <p className="text-muted-foreground">Você consegue estudar e aplicar em menos de 1 hora.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Isso vai me ajudar a vender mais?</h4>
              <p className="text-muted-foreground">Sim — se você aplicar. Vendedores bons sabem ABRIR conversas, não só fechar.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">E se eu não gostar?</h4>
              <p className="text-muted-foreground">Garantia de 7 dias. Achou que não valeu cada centavo? Seu dinheiro volta.</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToOffer}
              className="text-xl py-8 px-12"
            >
              TODAS AS DÚVIDAS ESCLARECIDAS - QUERO COMPRAR
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-foreground mb-8">
            Resumindo:
          </h3>
          
          <div className="bg-card border-2 border-primary rounded-xl p-8 mb-8 shadow-intense">
            <p className="text-xl text-foreground mb-6">
              Você não precisa de um milagre.
            </p>
            <p className="text-xl text-foreground mb-6">
              Você precisa começar a conversa certa com o cliente certo.
            </p>
            <p className="text-xl font-bold text-primary mb-8">
              E isso começa com palavras certeiras.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6">
              Com o Manual da Abordagem Matadora, você nunca mais vai abrir a boca sem saber o que dizer.
            </p>
            
            <p className="text-2xl font-bold text-destructive mb-8">
              Agora ou vergonha pra sempre.
            </p>
            
            <Button 
              variant="explosive" 
              size="lg" 
              onClick={scrollToOffer}
              className="w-full text-2xl py-8 mb-4"
            >
              COMEÇAR MINHA TRANSFORMAÇÃO AGORA
              <ArrowRight className="ml-2 h-8 w-8" />
            </Button>
            
            <p className="text-success font-semibold">
              ✅ Última chance de garantir por R$37
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;