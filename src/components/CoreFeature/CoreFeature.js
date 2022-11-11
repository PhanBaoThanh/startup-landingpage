import React from 'react'
import './corefeature.scss'
import img from '../../img/coreFeature.png'
import featureItem1 from '../../img/featureItem1.svg'
import featureItem2 from '../../img/featureItem2.svg'

const CoreFeature = () => {
    const data = [
        {
            name: 'Smart Features',
            description: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
            img: featureItem1
        },
        {
            name: 'Secure Contents',
            description: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
            img: featureItem2
        },
    ]
    return (
        <div className='coreFeature'>
            <div className='coreFeatureImg'>
                <img src={img} alt='ptc' />
            </div>
            <div className='coreFeatureContent'>
                <p className='coreFeatureContentName'>CORE FEATURES</p>
                <h2 className='coreFeatureContentHeader'>Smart Jackpots that you may love this anytime & anywhere</h2>
                <div className='coreFeatureContentItems'>
                {
                    data.map((item,index) => (
                        <div className='coreFeatureContentItem' key={index}>
                            <div className='coreFeatureContentItemImg'>
                                <img src={item.img} alt='ptc' />
                            </div>
                            <div className='coreFeatureItemContent'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default CoreFeature