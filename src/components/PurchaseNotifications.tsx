import React, { useEffect } from 'react';
import { toast } from 'sonner';

const PurchaseNotifications = () => {
  const firstNames = [
    'Ana', 'Carlos', 'Maria', 'João', 'Fernanda', 'Ricardo', 'Patricia', 'Roberto',
    'Juliana', 'Marcos', 'Claudia', 'Eduardo', 'Rafaela', 'André', 'Luciana',
    'Pedro', 'Camila', 'Thiago', 'Beatriz', 'Felipe', 'Marcelo', 'Daniela',
    'Bruno', 'Amanda', 'Gustavo', 'Priscila', 'Diego', 'Vanessa', 'Lucas'
  ];

  const cities = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre', 'Salvador',
    'Fortaleza', 'Brasília', 'Curitiba', 'Recife', 'Goiânia', 'Belém', 'Manaus',
    'Campo Grande', 'Vitória', 'Natal', 'João Pessoa', 'Florianópolis', 'Aracaju',
    'Cuiabá', 'Maceió', 'Teresina', 'São Luís', 'Palmas', 'Boa Vista',
    'Rio Branco', 'Macapá', 'Porto Velho', 'Campinas', 'Santos', 'Sorocaba'
  ];

  const getRandomName = () => firstNames[Math.floor(Math.random() * firstNames.length)];
  const getRandomCity = () => cities[Math.floor(Math.random() * cities.length)];

  const showPurchaseNotification = () => {
    const name = getRandomName();
    const city = getRandomCity();
    
    toast(`${name} de ${city} acabou de comprar!`, {
      duration: 4000,
      position: 'bottom-left',
      style: {
        background: 'hsl(var(--success))',
        color: 'hsl(var(--success-foreground))',
        border: '1px solid hsl(var(--success))',
      },
    });
  };

  useEffect(() => {
    // Primeira notificação após 3 segundos
    const firstTimeout = setTimeout(() => {
      showPurchaseNotification();
    }, 3000);

    // Intervalo para notificações subsequentes (entre 15-45 segundos)
    const interval = setInterval(() => {
      showPurchaseNotification();
    }, Math.random() * 30000 + 15000); // 15-45 segundos

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return null; // Este componente não renderiza nada visualmente
};

export default PurchaseNotifications;