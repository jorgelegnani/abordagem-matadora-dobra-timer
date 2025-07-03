
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 8 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Quero comprar o Manual da Abordagem Matadora');
    window.open(`https://wa.me/5527997097144?text=${message}`, '_blank');
    setShowTooltip(false);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 mb-2 bg-white rounded-lg shadow-xl border border-slate-200 p-4 max-w-xs animate-fade-in">
          <button
            onClick={closeTooltip}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="pr-4">
            <p className="font-semibold text-slate-800 mb-1">
              💬 Dúvidas sobre o produto?
            </p>
            <p className="text-sm text-slate-600 mb-3">
              Fale comigo no WhatsApp! Respondo rapidinho 😉
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Chamar no WhatsApp
            </button>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group relative"
        title="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-gentle-pulse">
          1
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
