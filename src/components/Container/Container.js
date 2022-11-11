import React from 'react'
import './container.scss'
import '../../img/banner.png'

const Container = ({component,isHome,noPadding,backgroundImg,backgroundImg1,backgroundImg2,isBorder}) => {
  return (
    <div className={`container ${isHome ? 'isHome' : ''} ${noPadding ? 'noPadding' : ''} ${isBorder? 'isBorder' : ''} ${backgroundImg ? 'backgroundImg' : ''} ${backgroundImg1 ? 'backgroundImg1' : ''} ${backgroundImg2 ? 'backgroundImg2' : ''}`}>
      {component}
    </div>
  )
}

export default Container