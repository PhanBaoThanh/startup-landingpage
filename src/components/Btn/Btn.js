import React from 'react'
import './btn.scss'

const Btn = ({text,isTransparent,type}) => {
  return (
    <div className={`btn ${isTransparent ? 'isTransparent' : ''} ${type}`}>{text}</div>
  )
}

export default Btn