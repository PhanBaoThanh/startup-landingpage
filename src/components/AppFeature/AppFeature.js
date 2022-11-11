import React from 'react'
import './appfeature.scss'
import banner from '../../img/featureBanner.png'
import Btn from '../Btn/Btn'
const AppFeature = () => {
  return (
    <div className='appfeature'>
        <div className='appfeatureContent'>
            <p className='appfeatureContentTop'>CORE FEATURES</p>
            <h2 className='appfeatureContentHeader'>Smart Jackpots that you may love this anytime & anywhere</h2>
            <p className='appfeatureContentDescription'>Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
            <div className='appfeatureContentBtn'>
                <Btn text="Get Started" type='bgBlue'/>
            </div>
        </div>
        <div className='appfeatureBanner'>
            <img src={banner} alt='ptc' />
        </div>
    </div>
  )
}

export default AppFeature