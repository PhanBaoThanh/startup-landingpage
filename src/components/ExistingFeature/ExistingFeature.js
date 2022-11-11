import React from 'react'
import './existingfeature.scss'
import img1 from '../../img/existing1.svg'
import img2 from '../../img/existing2.svg'
import img3 from '../../img/existing3.svg'
import img4 from '../../img/existing4.svg'
import img5 from '../../img/existing5.svg'
import img6 from '../../img/existing6.svg'

const ExistingFeature = () => {
    const data = [
        {
            name: 'Smart Features',
            img: img1,
            description: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
        },
        {
            name: 'Fast Performance',
            img: img2,
            description: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
        },
        {
            name: 'Unlimited Content',
            img: img3,
            description: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
        },
        {
            name: 'Unlimited Customization',
            img: img4,
            description: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
        },
        {
            name: 'Boost Productivity',
            img: img5,
            description: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
        },
        {
            name: 'Customer Support',
            img: img6,
            description: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
        },
    ]
    return (
        <div className='existingFeature'>
            <div className='existingFeatureHeader'>
                <p>QUALITY FEATURES</p>
                <h2>Meet exciting feature of app</h2>
            </div>
            <div className='existingFeatureItems'>
                {
                    data.map((item,index) => (
                        <div className='existingFeatureItem' key={index}>
                            <div className='existingFeatureContentItemImg'>
                                <img src={item.img} alt='ptc' />
                            </div>
                            <div className='existingFeatureItemContent'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExistingFeature