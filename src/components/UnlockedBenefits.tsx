import React, { useState, useEffect } from 'react';
import { CheckCircle, Gift, Star, Zap } from 'lucide-react';

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  threshold: number; // Porcentagem da página onde é desbloqueado
}

const UnlockedBenefits: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [unlockedBenefits, setUnlockedBenefits] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<Benefit | null>(null);

  const benefits: Benefit[] = [
    {
      id: 'manual',
      title: 'Manual da Abordagem Matadora',
      description: 'Desbloqueado! Script completo de abordagem',
      icon: <CheckCircle className="h-5 w-5 text-success" />,
      threshold: 20
    },
    {
      id: 'scripts',
      title: '17 Frases de Quebra Gelo',
      description: 'Bônus desbloqueado! Frases testadas e aprovadas',
      icon: <Gift className="h-5 w-5 text-warning" />,
      threshold: 40
    },
    {
      id: 'detector',
      title: 'Detector de Interesse',
      description: 'Desbloqueado! Saiba quando o cliente está interessado',
      icon: <Star className="h-5 w-5 text-primary" />,
      threshold: 60
    },
    {
      id: 'simulador',
      title: 'Simulador de Reações',
      description: 'Bônus especial! Pratique diferentes cenários',
      icon: <Zap className="h-5 w-5 text-accent" />,
      threshold: 80
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    benefits.forEach(benefit => {
      if (scrollPercentage >= benefit.threshold && !unlockedBenefits.includes(benefit.id)) {
        setUnlockedBenefits(prev => [...prev, benefit.id]);
        setShowNotification(benefit);
        
        // Remove notificação após 4 segundos
        setTimeout(() => setShowNotification(null), 4000);
      }
    });
  }, [scrollPercentage]);

  if (!showNotification) return null;

  return (
    <div className="fixed top-20 right-4 z-50 bg-gradient-to-r from-success to-success/90 text-success-foreground rounded-lg shadow-intense border border-success/20 p-4 max-w-sm animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {showNotification.icon}
        </div>
        <div>
          <h4 className="font-bold text-sm mb-1">{showNotification.title}</h4>
          <p className="text-xs opacity-90">{showNotification.description}</p>
        </div>
      </div>
      <div className="absolute top-2 right-2 w-2 h-2 bg-success-foreground rounded-full animate-pulse"></div>
    </div>
  );
};

export default UnlockedBenefits;