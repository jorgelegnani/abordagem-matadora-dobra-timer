
import React from 'react';
import { MessageCircle, Mail, Shield, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Quero comprar o Manual da Abordagem Matadora');
    window.open(`https://wa.me/5527997097144?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-cta bg-clip-text text-transparent">
              Manual da Abordagem Matadora
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Transforme sua forma de abordar clientes e dobre suas vendas com técnicas comprovadas. 
              Aprenda o que dizer nos primeiros 30 segundos cruciais.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.location.href = 'mailto:contato@abordagemmatadora.com'}
                className="bg-slate-600 hover:bg-slate-700 p-3 rounded-full transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação Rápida</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('beneficios')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('problema')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  O Problema
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('bonus')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Bônus Exclusivos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Guarantees */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Garantias</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Shield className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Garantia de 7 dias</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Acesso imediato</span>
              </div>
              <div className="flex items-start space-x-2">
                <MessageCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Suporte via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 Manual da Abordagem Matadora. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <button
                onClick={openWhatsApp}
                className="hover:text-white transition-colors duration-200"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
          <p className="text-lg font-semibold mb-2">💡 Pronto para transformar suas vendas?</p>
          <button
            onClick={() => scrollToSection('oferta')}
            className="text-primary hover:text-primary/80 font-bold underline transition-colors duration-200"
          >
            Garantir minha cópia agora por apenas R$ 37
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
