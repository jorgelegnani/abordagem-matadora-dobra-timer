
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  onScrollToOffer: () => void;
}

const FaqSection: React.FC<FaqSectionProps> = ({ onScrollToOffer }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            onClick={onScrollToOffer}
            className="text-base sm:text-xl py-6 sm:py-8 px-8 sm:px-12 shadow-lg"
          >
            QUERO COMPRAR
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
