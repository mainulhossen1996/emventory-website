import Footer from '@/components/Navbar/Footer'
import Banner from '@/components/services/Banner'
import BusinessTypes from '@/components/services/BusinessType'
import { MobileApp } from '@/components/services/MobileApp'
import ServiceStack from '@/components/services/ServiceStack'
import React from 'react'

const page = () => {
  return (
      <>
          <Banner />
          <BusinessTypes/>
          <ServiceStack />
          <MobileApp/>
          <Footer />
      </>
)
}

export default page