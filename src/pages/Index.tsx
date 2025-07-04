
import React, { useState } from 'react';
import PriceSection from '@/components/PriceSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProblemSection from '@/components/sections/ProblemSection';
import TargetAudienceSection from '@/components/sections/TargetAudienceSection';
import ProductValueSection from '@/components/sections/ProductValueSection';
import BonusesSection from '@/components/sections/BonusesSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

const Index = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      <Navigation />
      <HeroSection onScrollToOffer={scrollToOffer} />
      <FeaturesSection onScrollToOffer={scrollToOffer} />
      <ProblemSection onScrollToOffer={scrollToOffer} />
      <TargetAudienceSection onScrollToOffer={scrollToOffer} />
      <ProductValueSection onScrollToOffer={scrollToOffer} />
      <BonusesSection onScrollToOffer={scrollToOffer} />
      <PriceSection />
      <FaqSection onScrollToOffer={scrollToOffer} />
      <FinalCtaSection onScrollToOffer={scrollToOffer} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
