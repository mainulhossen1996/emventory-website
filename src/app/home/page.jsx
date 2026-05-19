import FAQ from '@/components/Home/FAQ'
import Hero from '@/components/Home/Hero'
import ScrollSplitLayout from '@/components/Home/ScrollSplitLayout'
import Sell from '@/components/Home/Sell'
import Footer from '@/components/Navbar/Footer'
import React from 'react'
import Ecommerce from '@/components/Home/Ecommerce'
import AiCommerce from '@/components/Home/AiCommerce'
import EmventoryPay from '@/components/Integrations/EmventoryPay'

const page = () => {
  return (
    <>
    <div >
       <Hero /> 
       <Sell/>
       <AiCommerce/>
       <EmventoryPay/>
       <ScrollSplitLayout />
       <Ecommerce/>
       <FAQ />
       <Footer />

    </div>
   

    </>
  )
}

export default page