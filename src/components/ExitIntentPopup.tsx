import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { X, Gift, Clock, Star } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let inactivityTimer: NodeJS.Timeout;
    let pageTimer: NodeJS.Timeout;
    let lastScrollY = window.scrollY;
    let lastActivity = Date.now();

    // Desktop: detecção por mouse
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        timeoutId = setTimeout(() => {
          setShowExitIntent(true);
          setHasShown(true);
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    // Mobile: detecção por scroll up rápido
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY < lastScrollY ? 'up' : 'down';
      const scrollSpeed = Math.abs(currentScrollY - lastScrollY);
      
      // Se scroll up rápido no topo da página
      if (scrollDirection === 'up' && scrollSpeed > 50 && currentScrollY < 100 && !hasShown) {
        setShowExitIntent(true);
        setHasShown(true);
      }
      
      lastScrollY = currentScrollY;
      lastActivity = Date.now();
    };

    // Detectar inatividade (mobile/desktop)
    const resetInactivityTimer = () => {
      lastActivity = Date.now();
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      
      inactivityTimer = setTimeout(() => {
        if (!hasShown && Date.now() - lastActivity > 30000) { // 30 segundos sem atividade
          setShowExitIntent(true);
          setHasShown(true);
        }
      }, 30000);
    };

    // Timer de tempo na página (45 segundos)
    pageTimer = setTimeout(() => {
      if (!hasShown) {
        setShowExitIntent(true);
        setHasShown(true);
      }
    }, 45000);

    // Event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('touchstart', resetInactivityTimer);
    document.addEventListener('touchmove', resetInactivityTimer);
    document.addEventListener('scroll', resetInactivityTimer);

    // Iniciar timer de inatividade
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('touchstart', resetInactivityTimer);
      document.removeEventListener('touchmove', resetInactivityTimer);
      document.removeEventListener('scroll', resetInactivityTimer);
      
      if (timeoutId) clearTimeout(timeoutId);
      if (inactivityTimer) clearTimeout(inactivityTimer);
      if (pageTimer) clearTimeout(pageTimer);
    };
  }, [hasShown]);

  const handleClose = () => {
    setShowConfirmation(true);
  };

  const handleConfirmClose = () => {
    setShowExitIntent(false);
    setShowConfirmation(false);
  };

  const handleCancelClose = () => {
    setShowConfirmation(false);
  };

  const handlePurchase = () => {
    // TODO: Redirecionar para o checkout quando o link for fornecido
    // window.location.href = 'LINK_DO_CHECKOUT';
    setShowExitIntent(false);
  };

  return (
    <>
      <Dialog open={showExitIntent} onOpenChange={() => {}}>
        <DialogContent 
          className="max-w-md mx-auto bg-gradient-card border-2 border-primary/20 shadow-glow animate-fade-in"
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            <DialogTitle className="flex items-center gap-2 text-xl font-bold text-primary mb-2">
              <Gift className="h-6 w-6" />
              Espera! Oferta Exclusiva!
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                Desconto Especial de Última Chance!
              </div>
              <div className="text-muted-foreground">
                Antes de sair, que tal garantir seu acesso com um desconto exclusivo?
              </div>
            </div>

            <div className="bg-gradient-warning/10 border border-warning/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-5 w-5 text-warning" />
                <span className="text-warning font-semibold">OFERTA EXCLUSIVA</span>
                <Star className="h-5 w-5 text-warning" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                De <span className="line-through text-muted-foreground">R$97</span> por apenas
              </div>
              <div className="text-4xl font-bold text-success">R$27,00</div>
              <div className="text-sm text-muted-foreground mt-1">
                Pagamento único • Acesso vitalício
              </div>
            </div>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-2 text-destructive">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-semibold">
                  Esta oferta desaparece quando você fechar esta janela!
                </span>
              </div>
            </div>

            <Button
              onClick={handlePurchase}
              className="w-full bg-gradient-cta hover:shadow-glow text-white font-bold py-3 text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              🔥 COMPRAR AGORA POR R$27,00
            </Button>

            <div className="text-xs text-center text-muted-foreground">
              💡 Aproveite agora: esta é uma oferta única
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="bg-card border-destructive/20 max-w-sm sm:max-w-lg mx-4">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-destructive">
              ⚠️ Tem certeza que quer perder este desconto?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-foreground">
              Você está prestes a perder a oportunidade de garantir o curso por apenas <strong className="text-success">R$27,00</strong> ao invés de R$97,00.
              <br /><br />
              Esta oferta especial não estará disponível quando você voltar.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-center sm:space-x-2">
            <AlertDialogCancel 
              onClick={handleCancelClose}
              className="bg-gradient-cta text-white hover:bg-gradient-cta/90"
            >
              Comprar Agora
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirmClose}
              className="bg-destructive hover:bg-destructive/90"
            >
              Perder o Desconto
            </AlertDialogAction>
          </AlertDialogFooter>
          <div className="text-xs text-center text-muted-foreground px-4 pb-2">
            💔 Sem essa oportunidade, você continuará enfrentando os mesmos desafios e frustrações de sempre...
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ExitIntentPopup;