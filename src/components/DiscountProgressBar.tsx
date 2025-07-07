import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Clock, TrendingDown } from 'lucide-react';

const DiscountProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(100);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutos em segundos

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          // Reset para 20 minutos quando acabar
          return 20 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Progresso baseado no tempo restante (20 minutos = 100%)
    const totalTime = 20 * 60;
    const currentProgress = (timeLeft / totalTime) * 100;
    setProgress(currentProgress);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getDiscountText = () => {
    if (progress > 66) return 'R$37';
    if (progress > 33) return 'R$47';
    return 'R$57';
  };

  const getProgressColor = () => {
    if (progress > 66) return 'bg-success';
    if (progress > 33) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <TrendingDown className="h-4 w-4 text-destructive" />
            <span>Desconto atual: <span className="text-success font-bold">{getDiscountText()}</span></span>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Oferta expira em:</span>
              <div className="flex items-center gap-1 text-xs font-mono text-destructive">
                <Clock className="h-3 w-3" />
                {formatTime(timeLeft)}
              </div>
            </div>
            <Progress 
              value={progress} 
              className="h-2" 
            />
          </div>
          
          <div className="text-xs text-muted-foreground hidden sm:block">
            {progress > 66 ? '🔥 Melhor preço!' : progress > 33 ? '⚡ Preço subindo...' : '❌ Última chance!'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProgressBar;