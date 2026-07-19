import AiHero from '@/components/AiSearch/AiHero'
import { BenefitsMetrics } from '@/components/AiSearch/Benefit';
import { FaqAccordion } from '@/components/AiSearch/FAQ';
import { FeaturesGrid } from '@/components/AiSearch/FeatureGrid';
import { PricingCards } from '@/components/AiSearch/Pricing';
import WhyAiSearch from '@/components/AiSearch/WhyAi';
import Footer from '@/components/Navbar/Footer';
import Navbar from '@/components/AiSearch/Navbar';
import React from 'react'


const page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[72px]">
        <section id="hero" className="scroll-mt-[72px]">
          <AiHero />
        </section>
        <section id="features" className="scroll-mt-[72px]">
          <FeaturesGrid />
        </section>
        <section id="why-ai-search" className="scroll-mt-[72px]">
          <WhyAiSearch />
        </section>
        <section id="pricing" className="scroll-mt-[72px]">
          <PricingCards />
        </section>
        <section id="benefits" className="scroll-mt-[72px]">
          <BenefitsMetrics />
        </section>
        <section id="faq" className="scroll-mt-[72px]">
          <FaqAccordion />
        </section>
      </div>
      <Footer />
    </>
  )
}
export default page;