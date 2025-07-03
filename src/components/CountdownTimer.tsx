import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes = 20 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  if (timeLeft <= 0) {
    return (
      <div className="text-center p-6 bg-destructive/20 border border-destructive rounded-lg">
        <p className="text-destructive font-bold text-xl">OFERTA EXPIRADA!</p>
        <p className="text-muted-foreground">O desconto especial não está mais disponível.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border-2 border-warning rounded-lg p-6 text-center shadow-glow">
      <p className="text-warning font-bold text-sm uppercase tracking-wide mb-2">
        ⚡ OFERTA RELÂMPAGO ⚡
      </p>
      <p className="text-foreground text-lg mb-4">Sua chance acaba em:</p>
      
      <div className="flex justify-center items-center space-x-4 mb-4">
        <div className="bg-primary text-primary-foreground rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold">{formatTime(minutes)}</div>
          <div className="text-sm uppercase">min</div>
        </div>
        <div className="text-3xl font-bold text-primary">:</div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold">{formatTime(seconds)}</div>
          <div className="text-sm uppercase">seg</div>
        </div>
      </div>
      
      <p className="text-warning font-semibold text-sm">
        Não perca! Esta oferta é única e limitada.
      </p>
    </div>
  );
};

export default CountdownTimer;