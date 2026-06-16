import FAQ from '@/components/Home/FAQ'
import Hero from '@/components/Home/Hero'
import Sell from '@/components/Home/Sell'
import Footer from '@/components/Navbar/Footer'
import React from 'react'
import Ecommerce from '@/components/Home/Ecommerce'
import AiCommerce from '@/components/Home/AiCommerce'
import EmventoryPay from '@/components/Integrations/EmventoryPay'
import BusinessTypes from '@/components/services/BusinessType'
import IntegrationMatrix from '@/components/Home/IntegrationMatrix'
import EmventoryMetricsSection from '@/components/Home/EmventoryMetricsSection'

const page = () => {
  return (
    <>
    <div >
       <Hero /> 
       <Sell/>
       <Ecommerce/>
       <IntegrationMatrix />
       <AiCommerce/>
       <EmventoryPay/>
       <BusinessTypes/>
       <EmventoryMetricsSection/>
       <FAQ />
       <Footer />

    </div>
   

    </>
  )
}

export default page