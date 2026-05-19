import FAQ from '@/components/Home/FAQ'
import DeliveryPartners from '@/components/Integrations/DeliveryPartners'

import Integrationhero from '@/components/Integrations/IntegrationHero'
import MetaIntegration from '@/components/Integrations/MetaIntegration'
import PaymentGateway from '@/components/Integrations/PaymentGateway'
import Footer from '@/components/Navbar/Footer'
import React from 'react'

 const integrations = () => {
  return (
    <div>
<Integrationhero/>
<MetaIntegration/>
<PaymentGateway/>
<DeliveryPartners/>
<FAQ/>
<Footer/>
    </div>
  )
}
export default integrations