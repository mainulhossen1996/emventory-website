import FAQ from '@/components/Home/FAQ'
import Hero from '@/components/Home/Hero'
import ProbSolution from '@/components/Home/ProbSolution'
import ScrollSplitLayout from '@/components/Home/ScrollSplitLayout'
import SideScroll from '@/components/Home/SideScroll'
import Sell from '@/components/Home/Sell'
import Footer from '@/components/Navbar/Footer'
import Nav from '@/components/Navbar/Nav'
import { Scroll } from 'lucide-react'
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