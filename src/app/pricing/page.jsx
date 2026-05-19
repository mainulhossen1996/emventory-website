import FAQ from '@/components/Home/FAQ';
import Footer from '@/components/Navbar/Footer'
import PricingPage from '@/components/Pricing/PricingPage'
import WhyChooseUs from '@/components/Pricing/Why';
import React from 'react'

const page = () => {
  return (
    <>
      <div>
        <PricingPage  />
        <WhyChooseUs/>
        <FAQ/>
        <Footer />
      </div>
    </>
  );
}

export default page