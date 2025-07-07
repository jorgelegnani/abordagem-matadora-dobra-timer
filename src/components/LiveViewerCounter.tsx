import React, { useState, useEffect } from 'react';
import { Eye, Users } from 'lucide-react';

const LiveViewerCounter: React.FC = () => {
  const [viewerCount, setViewerCount] = useState(47);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        // Varia entre 35 e 85 pessoas
        const min = 35;
        const max = 85;
        let newCount = prev;
        
        if (isIncreasing) {
          newCount = prev + Math.floor(Math.random() * 3) + 1;
          if (newCount >= max) {
            setIsIncreasing(false);
            newCount = max;
          }
        } else {
          newCount = prev - Math.floor(Math.random() * 2) - 1;
          if (newCount <= min) {
            setIsIncreasing(true);
            newCount = min;
          }
        }
        
        return newCount;
      });
    }, 3000 + Math.random() * 2000); // 3-5 segundos

    return () => clearInterval(interval);
  }, [isIncreasing]);

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Eye className="h-4 w-4 text-primary" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-success rounded-full animate-pulse"></div>
        </div>
        <div className="text-sm">
          <div className="font-medium text-foreground">{viewerCount} pessoas</div>
          <div className="text-xs text-muted-foreground">visualizando agora</div>
        </div>
      </div>
    </div>
  );
};

export default LiveViewerCounter;