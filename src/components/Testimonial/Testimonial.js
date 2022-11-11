import React,{useState,useEffect} from 'react'
import './testimonial.scss'
import img1 from '../../img/user1.png'
import img2 from '../../img/user2.png'
import img3 from '../../img/user3.png'
import img4 from '../../img/user4.png'
const Testimonial = () => {
    const [indexItem,setIndexItem] = useState(0)
    const [unit,setUnit] = useState('large')

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            if(newWidth < 660)
                setUnit('small')
            else if(newWidth > 660 && newWidth < 1020)
                setUnit('medium')
            else
                setUnit('large')
        };
    
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions) 
    },[])

    const data = [
        {
            name: 'Denny Hilguston',
            email: '@denny.hil',
            img: img1,
            star: 5,
            title: 'Design Quality & performance',
            description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.'
        },
        {
            name: 'Denny Hilguston',
            email: '@denny.hil',
            img: img2,
            star: 5,
            title: 'Layout and organized layers',
            description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.'
        },
        {
            name: 'Denny Hilguston',
            email: '@denny.hil',
            img: img3,
            star: 4,
            title: 'Modern look & trending design',
            description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.'
        },
        {
            name: 'Denny Hilguston',
            email: '@denny.hil',
            img: img4,
            star: 4,
            title: 'Modern look & trending design',
            description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.'
        },
        {
            name: 'Denny Hilguston',
            email: '@denny.hil',
            img: img1,
            star: 5,
            title: 'Design Quality & performance',
            description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.'
        },
        {
            name: 'Denny Hilguston',
            email: '@denny.hil',
            img: img2,
            star: 5,
            title: 'Layout and organized layers',
            description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.'
        },
        {
            name: 'Denny Hilguston',
            email: '@denny.hil',
            img: img3,
            star: 4,
            title: 'Modern look & trending design',
            description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.'
        },
        {
            name: 'Denny Hilguston',
            email: '@denny.hil',
            img: img4,
            star: 4,
            title: 'Modern look & trending design',
            description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.'
        },
    ]

    const handleClickNextBtn = () => {
        let count = unit === 'large' ? data.length - 3 : unit === 'medium' ? data.length - 2 : data.length - 1
        if(indexItem === count)
            setIndexItem(0)
        else
            setIndexItem(prev => prev + 1)
    }

    const handleClickPrevBtn = () => {
        let count = unit === 'large' ? data.length - 3 : unit === 'medium' ? data.length - 2 : data.length - 1
        if(indexItem === 0)
            setIndexItem(count)
        else
            setIndexItem(prev => prev - 1)
    }

    return (
        <div className='test' id='test'>
            <div className='testHeader'>
                    <p>TESTIMONIAL</p>
                    <h2>Meet Client Satisfaction</h2>
            </div>
            <div className='testTransform'>
                <div className='testItems' style={{transform: `translateX(-${indexItem * (100/data.length)}%)`
                                                ,width: `${data.length * (unit === 'large' ? 33.33333 : unit === 'medium' ? 50 : 100)}%`}}>
                    {
                        data.map((item,index) => (
                            <div className='testBox' key={index} style={{width: `${unit === 'large' ? 33.33333 : unit === 'medium' ? 50 : 100}%`}}>
                                <div className='testItem'>
                                    <div className='testItemStars'>
                                        
                                    {
                                        Array(item.star).fill().map((item,index) => (
                                            <div className='testItemStar active' key={index}>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            </div>
                                        ))
                                    }

                                    {
                                        Array(5 - item.star).fill().map((item,index) => (
                                            <div className='testItemStar' key={index}>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            </div>
                                        ))
                                    }
                                    </div>
                                    <p className='testItemHeader'>{item.title}</p>
                                    <p className='testItemDescription'>{item.description}</p>
                                    <div className='testItemUser'>
                                        <div className='testItemUserImg'><img src={item.img} alt='ptc' /></div>
                                        <div className='testItemUserContent'>
                                            <p className='testItemUserContentName'>{item.name}</p>
                                            <p className='testItemUserContentEmail'>{item.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='testBtns'>
                <button className='testBtn' onClick={() => handleClickPrevBtn()} >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path></svg>
                </button>
                <button className='testBtn' onClick={() => handleClickNextBtn()}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Testimonial