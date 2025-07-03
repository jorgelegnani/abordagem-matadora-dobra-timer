
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PriceSection from '@/components/PriceSection';
import { ArrowRight, CheckCircle, Target, Clock, Users, Zap, Menu, X, ChevronDown } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Preciso ter experiência com vendas?",
      answer: "Nenhuma. O material foi feito pra quem tá começando do zero. Você vai aprender desde as primeiras palavras até como manter a conversa fluindo naturalmente."
    },
    {
      question: "Funciona pra vendas online?",
      answer: "Sim. A abordagem serve pra Direct, WhatsApp, Instagram ou pessoalmente. Os princípios são os mesmos - criar conexão e confiança nos primeiros segundos."
    },
    {
      question: "Quanto tempo leva pra aplicar?",
      answer: "Você consegue estudar e aplicar em menos de 1 hora. Mas o ideal é praticar os scripts algumas vezes antes de usar com clientes reais."
    },
    {
      question: "Isso vai me ajudar a vender mais?",
      answer: "Sim — se você aplicar. Vendedores bons sabem ABRIR conversas, não só fechar. Uma boa abordagem pode dobrar suas chances de venda."
    },
    {
      question: "E se eu não gostar?",
      answer: "Garantia de 7 dias. Achou que não valeu cada centavo? Seu dinheiro volta sem questionamentos."
    },
    {
      question: "O material é atualizado?",
      answer: "Sempre. Testamos as abordagens no mercado real e atualizamos conforme as mudanças no comportamento dos clientes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Manual da Abordagem Matadora
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
            Aprenda o que dizer nos primeiros 30 segundos — e dobre suas chances de venda
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Sem parecer desesperado, sem enrolar cliente, sem papo furado. Apenas com perguntas que criam conexão imediata — mesmo se o cliente já estiver desconfiado.
          </p>
          
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToOffer}
            className="mb-8 text-xl py-8 px-12 shadow-xl"
          >
            QUERO APRENDER AGORA
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          
          <p className="text-orange-600 font-semibold text-lg animate-gentle-pulse">
            ⚡ Oferta especial por tempo limitado!
          </p>
        </div>
      </section>

      {/* Features Section */}
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
              onClick={scrollToOffer}
              className="text-xl py-8 px-12 shadow-lg"
            >
              VER OFERTA ESPECIAL
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
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
            onClick={scrollToOffer}
            className="text-xl py-8 px-12 shadow-xl"
          >
            RESOLVER AGORA POR R$37
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Target Audience */}
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
              onClick={scrollToOffer}
              className="text-xl py-8 px-12 shadow-lg"
            >
              ESSE SOU EU! QUERO RESOLVER
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You're Buying */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-8">
            Você está comprando:
          </h3>
          <div className="bg-white border-2 border-yellow-200 rounded-xl p-8 mb-12 shadow-xl">
            <p className="text-2xl font-bold text-slate-800 mb-8">
              Um kit de sobrevivência verbal para os 30 segundos mais importantes da sua venda.
            </p>
            
            <h4 className="text-2xl font-bold text-slate-800 mb-6">O que você pode esperar:</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-6 border border-slate-200 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">1️⃣</div>
                <p className="text-slate-700 font-semibold">Abordar qualquer cliente com confiança — mesmo que você nunca tenha vendido antes</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-6 border border-slate-200 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">2️⃣</div>
                <p className="text-slate-700 font-semibold">Criar conexão real em menos de 1 minuto — e deixar o cliente mais aberto</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-6 border border-slate-200 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">3️⃣</div>
                <p className="text-slate-700 font-semibold">Evitar os erros que fazem o cliente fugir — e manter a conversa viva até o final</p>
              </div>
            </div>
          </div>

          <Button 
            variant="explosive" 
            size="lg" 
            onClick={scrollToOffer}
            className="text-xl py-8 px-12 shadow-xl"
          >
            GARANTIR MINHA VAGA AGORA
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Bonuses */}
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
              onClick={scrollToOffer}
              className="text-xl py-8 px-12 shadow-lg"
            >
              QUERO TODOS OS BÔNUS + PRODUTO
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <PriceSection />

      {/* Enhanced FAQ */}
      <section id="faq" className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-slate-800 mb-4">
            ❓ Perguntas Frequentes
          </h3>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Tire suas dúvidas antes de garantir sua transformação
          </p>
          
          <div className="space-y-4 mb-12">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200"
                >
                  <h4 className="text-xl font-bold text-slate-800 pr-4">{faq.question}</h4>
                  <ChevronDown 
                    className={`w-6 h-6 text-slate-600 transform transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-slate-100">
                    <p className="text-slate-600 text-lg leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center bg-white rounded-xl p-8 border-2 border-green-200 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-800 mb-4">Ainda tem dúvidas?</h4>
            <p className="text-slate-600 mb-6">Fale conosco pelo WhatsApp e tire todas as suas dúvidas!</p>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToOffer}
              className="text-xl py-8 px-12 shadow-lg"
            >
              TODAS AS DÚVIDAS ESCLARECIDAS - QUERO COMPRAR
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              onClick={scrollToOffer}
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

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
