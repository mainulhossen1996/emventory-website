import AiHero from '@/components/AiSearch/AiHero'
import { BenefitsMetrics } from '@/components/AiSearch/Benefit';
import { FaqAccordion } from '@/components/AiSearch/FAQ';
import { FeaturesGrid } from '@/components/AiSearch/FeatureGrid';
import { IntegrationSteps } from '@/components/AiSearch/Integration';
import { PricingCards } from '@/components/AiSearch/Pricing';
import { InteractiveShowcase } from '@/components/AiSearch/Showcase';
import WhyAiSearch from '@/components/AiSearch/WhyAi';
import Footer from '@/components/Navbar/Footer';
import React from 'react'


const page = () => {
  return (
    <>
    <AiHero/>
    <FeaturesGrid/>
    {/* <InteractiveShowcase/>
    <IntegrationSteps/> */}
    <WhyAiSearch/>
    <PricingCards/>
    <BenefitsMetrics/>
    <FaqAccordion/>
    <Footer/>
    </>
  )
}
export default page;
