import React from 'react'
import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import Detailcard from '@/components/custom/DetailcardPro'
import Whatsappbutton from '@/components/custom/Whatsappbtn'
import { pro } from '@/pro'
function Detail() {
    
    return (
        <div>
            <Navbar />
            <Detailcard item={pro} />
            <Whatsappbutton />
            <Footer />
        </div>
    )
}

export default Detail