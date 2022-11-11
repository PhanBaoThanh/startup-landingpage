import React from 'react'
import './feature.scss'
import feature1 from '../../img/feature1.svg'
import feature2 from '../../img/feature2.svg'
import feature3 from '../../img/feature3.svg'

const Feature = () => {
    const data = [
        {
            name: 'Vector Editing',
            description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            img: feature1
        },
        {
            name: 'Customize & Monitoring',
            description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            img: feature2
        },
        {
            name: 'Quality & Short-period',
            description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            img: feature3
        },
    ]
    return (
        <div className='feature' id='feature'>
            <div className='featureHeader'>
                <p>QUALITY FEATURES</p>
                <h2>Meet exciting feature of app</h2>
            </div>
            <div className='featureItems'>
            {
                data.map((item,index) => (
                    <div className='featureItem' key={index}>
                        <div className='featureItemImg'>
                            <img src={item.img} alt='ptc' />
                        </div>
                        <h3 className='featureItemHeader'>{item.name}</h3>
                        <p className='featureItemDescription'>{item.description}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Feature