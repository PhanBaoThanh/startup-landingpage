import React from 'react'
import './pricing.scss'
import Btn from '../Btn/Btn'

const Pricing = () => {
    const data = [
        {
            name: 'Free Plan',
            title:'For Small teams or office',
            backgroundColor: '#2f5392',
            btnColor: 'bgWhite',
            color: '#fff',
            items: [
                {
                    value: 'Ultimate access to all course, exercises and assessments',
                    isActive: true
                },
                {
                    value: 'Free access for all kind of exercise corrections with downloads.',
                    isActive: true
                },
                {
                    value: 'Total assessment corrections with free download access system',
                    isActive: true
                },
                {
                    value: 'Unlimited download of courses on the mobile app contents',
                    isActive: false
                },
                {
                    value: 'Download and print courses and exercises in PDF',
                    isActive: false
                },
            ]
        },
        {
            name: 'Premium',
            title:'For startup enterprise',
            cost: 29.99,
            isRecommended: true,
            backgroundColor:'#fff',
            btnColor: 'bgBlue',
            color: '#343D48',
            items: [
                {
                    value: 'Ultimate access to all course, exercises and assessments',
                    isActive: true
                },
                {
                    value: 'Free access for all kind of exercise corrections with downloads.',
                    isActive: true
                },
                {
                    value: 'Total assessment corrections with free download access system',
                    isActive: true
                },
                {
                    value: 'Unlimited download of courses on the mobile app contents',
                    isActive: true
                },
                {
                    value: 'Download and print courses and exercises in PDF',
                    isActive: true
                },
            ]
        },
    ]
    return (
        <div className='pricing' id='pricing'>
            <div className='pricingHeader'>
                <p>WHATS THE FUNCTION</p>
                <h2>Let's see how it works</h2>
            </div>
            <div className='pricingItems'>
                {data.map((item,index) => (
                    <div style={{backgroundColor: item.backgroundColor,color: item.color}} className='pricingItem' key={index}>
                        <div className='pricingItemContent'>
                            {item.isRecommended ? (
                                <div className='pricingItemContentRecommend'>Recommended</div>
                            ) : (
                                <></>
                            )}
                            <div className='pricingItemHeader'>
                                <div className='pricingItemHeaderLeft'>
                                    <h3>{item.name}</h3>
                                    <p style={{opacity: `${item.backgroundColor==='#fff' ? '1' : ''}`}}>{item.title}</p>
                                </div>
                                {
                                    item.cost ? (
                                        <div className='pricingItemHeaderRight'>
                                            <p>Starting from</p>
                                            <p className='pricingItemHeaderRightCost'>${item.cost}/<span>mo</span></p>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }
                                
                            </div>

                            <div className='pricingItemList'>
                            {
                                item.items.map((it,i) => (
                                    <div className={`pricingItemListItem ${it.isActive ? '' : 'isActive'}`} key={i}>
                                        <div className='pricingItemListItemIcon'>
                                            {it.isActive ? (
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path></svg>
                                            ) : (
                                                <svg style={{color: `${it.isActive ? '' : '#fff'}`}} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path></svg>
                                            )}
                                        </div>
                                        <p>{it.value}</p>
                                    </div>
                                ))
                            }
                            </div>

                            <div className='pricingItemBtn'>
                                <Btn text='Signup Now' type={item.btnColor}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing