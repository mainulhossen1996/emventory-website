import FAQ from '@/components/Home/FAQ'
import Footer from '@/components/Navbar/Footer'
import EnterprisePage from '@/components/Solutions/EnterprisePage'
import React from 'react'

const page = () => {
  return (
    <div>
        <EnterprisePage/>
        <FAQ/>
        <Footer/>
    </div>
  )
}
export default page