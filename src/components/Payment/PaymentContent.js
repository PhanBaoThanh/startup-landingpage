import React from 'react'
import './paymentcontent.scss'
import banner from '../../img/imgPhone.png'
import Btn from '../Btn/Btn'
const PaymentContent = () => {
  return (
    <div className='payment'>
      <div className='paymentBanner'>
          <img src={banner} alt='ptc' />
      </div>
      <div className='paymentContent'>
          <p className='paymentContentTop'>PAYMENT SECURITY</p>
          <h2 className='paymentContentHeader'>Secure Payment Transaction System with #1 Ranking</h2>
          <p className='paymentContentDescription'>Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
          <div className='paymentContentBtn'>
              <Btn text="Get Started" type='bgBlue'/>
          </div>
      </div>  
    </div>
  )
}

export default PaymentContent