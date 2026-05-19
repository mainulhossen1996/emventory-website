import FAQ from '@/components/Home/FAQ'
import Footer from '@/components/Navbar/Footer'
import EcommerceLanding from '@/components/Solutions/EcommercePage'
import React from 'react'

const page = () => {
  return (
    <div>
        <EcommerceLanding/>
        <FAQ/>
        <Footer/>
    </div>
  )
}
export default page