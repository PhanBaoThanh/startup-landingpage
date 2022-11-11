import React from 'react'
import './workfeature.scss'

const WorkFeature = () => {
    const data = [
        {
            name: 'Set disbursement Instructions',
            number: '01',
            description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            arrow: 'arrow1'
        },
        {
            name: 'Assembly retrieves funds from your account',
            number: '02',
            description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            arrow: 'arrow2'
        },
        {
            name: 'Assembly initiates disbursement',
            number: '03',
            description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            arrow: 'arrow1'
        },
        {
            name: 'Customer receives funds payment',
            number: '04',
            description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        },
    ]
    return (
            <div className='workFeature'>
                <div className='workFeatureHeader'>
                    <p>WHATS THE FUNCTION</p>
                    <h2>Let's see how it works</h2>
                </div>
                <div className='workFeatureItems'>
                {
                    data.map((item,index) => (
                        <div className={`workFeatureItem ${item.arrow}`} key={index}>
                            <div className='workFeatureItemNumber'>{item.number}</div>
                            <h3 className='workFeatureItemHeader'>{item.name}</h3>
                            <p className='workFeatureItemDescription'>{item.description}</p>
                        </div>
                    ))
                }
                </div>
            </div>
    )
}

export default WorkFeature