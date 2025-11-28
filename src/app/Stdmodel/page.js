import Footer from '@/components/custom/Footer'
import Productcardstd from '@/components/custom/ModelcardStd'
import Navbar from '@/components/custom/Navbar'
import Stdmodelcard from '@/components/custom/Stdmodelcard'
import WhatsAppButton from '@/components/custom/Whatsappbtn'
import React from 'react'

function Stdmodel() {
  return (
    <div>
        <Navbar/>
        {/* <Stdmodelcard/> */}
        <Productcardstd/>
        <WhatsAppButton/>
        <Footer/>
    </div>
  )
}

export default Stdmodel