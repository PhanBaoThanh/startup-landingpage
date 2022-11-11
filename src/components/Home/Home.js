import {useState,useRef} from 'react'
import './home.scss'
import Btn from '../Btn/Btn'
import symbol1 from '../../img/symbol1.svg'
import symbol2 from '../../img/symbol2.svg'
import symbol3 from '../../img/symbol3.svg'
import bannerPhone from '../../img/bannerPhone.png'

const Home = () => {
  const data = [
    {
      name: 'paypal',
      link: '/',
      img: symbol1
    },
    {
      name: 'google',
      link: '/',
      img: symbol2
    },
    {
      name: 'dropbox',
      link: '/',
      img: symbol3
    },
  ]

  const handleCloseModalWatchVideo = () => {
    setIsOpenModalVideo(false)
  }

  const [isOpenModalVideo,setIsOpenModalVideo] = useState(false)
  const videoRef = useRef()
  return (
    <>
      <div className='home' id="home">
        <div className='homeContent'>
          <h2 className='homeContentHeader'>Experience your ultimate mobile application</h2>
          <p className='description'>Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
          <div className='btns'>
            <Btn text='Get Started' type='bgWhite' />
            <div className='btnWatch' onClick={() => setIsOpenModalVideo(true)}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
              <span>Watch Video</span>
            </div>
          </div>
          <div className='homeSymbol'>
            <span>Sponsored by:</span>
            <div>
              {data.map((item,index) => (
                <a href={item.link} key={index} className='symbolItem'>
                  <img src={item.img} alt={item.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='homeImage'>
          <img src={bannerPhone} alt='ptc' />
        </div>
      </div>
      <div className={`modalVideo ${isOpenModalVideo ? 'isOpenModalVideo' : ''}`} onClick={() => setIsOpenModalVideo(false)}>
        <div className='modalVideoBox'>
        {isOpenModalVideo ? (
          <iframe ref={videoRef} width="560" height="315" src="https://www.youtube.com/embed/8HQ8ksO684s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        ) : (
          <></>
        )}
          <button onClick={handleCloseModalWatchVideo} className='btnCloseVideo'>X</button>
        </div>
      </div>
    </>
  )
}

export default Home