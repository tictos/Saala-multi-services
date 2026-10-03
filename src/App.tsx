/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PostConstructionSpotlight } from './components/PostConstructionSpotlight';
import { ProcessSteps } from './components/ProcessSteps';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesGrid } from './components/ServicesGrid';
import { CostCalculator } from './components/CostCalculator';
import { SubscriptionPlans } from './components/SubscriptionPlans';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { BookingModal } from './components/BookingModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('fin-de-chantier');
  const [quoteSummaryData, setQuoteSummaryData] = useState<any>(null);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (planNameOrService?: string) => {
    if (planNameOrService) {
      setPreselectedService(planNameOrService);
    }
    setIsBookingOpen(true);
  };

  const handleSelectServiceForQuote = (service: ServiceItem) => {
    setPreselectedService(service.id);
    handleScrollToSection('simulateur');
  };

  const handleOpenBookingWithQuote = (quoteData: any) => {
    setQuoteSummaryData(quoteData);
    setPreselectedService(quoteData.service);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans selection:bg-lime-400 selection:text-neutral-900">
      
      {/* Top Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Video Background, Dual Numbers & Conakry/Sous-Région Badge */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Spotlight on Post-Construction Deep Cleaning */}
        <PostConstructionSpotlight
          onOpenBooking={() => handleOpenBooking()}
          onScrollToSimulator={() => handleScrollToSection('simulateur')}
        />

        {/* 3. The 4-Step Methodology (Contact -> Agent sur le terrain -> Devis -> Validation & Travaux) */}
        <ProcessSteps
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Interactive Before/After Chantier Slider */}
        <BeforeAfterSlider
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. Complete Services Showcase (Fin de chantier, Abonnements, Plomberie, Maçonnerie & Dalettes, Déco) */}
        <ServicesGrid
          onSelectServiceForQuote={handleSelectServiceForQuote}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Interactive Cost / Price Calculator (GNF / CFA / EUR) */}
        <CostCalculator
          initialServiceId={preselectedService}
          onOpenBookingWithQuote={handleOpenBookingWithQuote}
        />

        {/* 7. Monthly Subscriptions & Recurring Maintenance */}
        <SubscriptionPlans
          onOpenBooking={handleOpenBooking}
        />

        {/* 8. Testimonials & Social Proof */}
        <Testimonials />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Contact, Dual Phones & Quick Callback */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp Action with 2 numbers */}
      <WhatsAppButton />

      {/* Booking / Quote Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
        quoteSummary={quoteSummaryData}
      />

    </div>
  );
}
