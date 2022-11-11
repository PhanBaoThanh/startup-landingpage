import React,{useState} from 'react'
import './questionpricing.scss'

const QuestionPricing = () => {
    const [isOpen,setIsOpen] = useState(-1)
    const data = [
        {
            name: 'How to contact with riders emergency ?',
            text: 'Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.'
        },
        {
            name: 'App installation failed, how to update system information?',
            text: 'Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much – when the mud dries it acts as protection from the sunburns and insects.'
        },
        {
            name: 'Website response taking time, how to improve?',
            text: 'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.'
        },
        {
            name: 'New update fixed all bug and issues',
            text: 'If you’re looking to hunt a unicorn, but don’t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.'
        },
    ]
    return (
        <div className='question'>
            <div className='questionHeader'>
                <p>GET YOUR QUESTION ANSWER</p>
                <h2>Frequently asked question</h2>
            </div>
            <div className='questionItems'>
            {
                data.map((item,index) => (
                    <div className='questionItem' key={index} onClick={() => setIsOpen(index)}>
                        <div className='questionItemHeader'>
                            <div className={`btnOpen ${isOpen=== index ? '' : 'close'}`}></div>
                            <h3 className='questionItemHeaderText'>{item.name}</h3>
                        </div>
                        <div className={`questionItemContent ${isOpen === index ? 'isOpenText' : 'isCloseText'}`}>{item.text}</div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default QuestionPricing