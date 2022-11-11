import React from 'react'
import './payment.scss'
import ContainerItem from '../ContainerItem/ContainerItem'
import PaymentContent from './PaymentContent'

const Payment = () => {
  return (
    <div className='containerPayment'>
        <div className='containerItemPayment'>
            
        </div>
        <ContainerItem Component={PaymentContent} />
    </div>
  )
}

export default Payment