import React from 'react'
import './footer.scss'

const Footer = () => {
    const data = [
        {
            name: 'About Us',
            items: ['Support Center','Customer Support','About Us','Copyright','Popular Campaign']
        },
        {
            name: 'Our Information',
            items: ['Return Policy','Privacy Policy','Terms & Conditions','Site Map','Store Hours']
        },
        {
            name: 'My Account',
            items: ['Press inquiries','Social media','directories','Images & B-roll','Permissions']
        },
        {
            name: 'Policy',
            items: ['Application security','Software principles','Unwanted software policy','Responsible supply chain']
        },

    ]
    return (
        <div className='footer'>
            <div className='footerItems'>
            {
                data.map((item,index) => (
                    <div className='footerItem' key={index}>
                        <h3>{item.name}</h3>
                        <ul className='footerItemList'>
                        {
                            item.items.map((i,ix) => (
                                <li className='footerItemListItem' key={ix}>
                                    <a href="/">{i}</a>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer