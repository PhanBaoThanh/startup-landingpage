import React from 'react'
import './containeritem.scss'

const ContainerItem = ({Component,isBorder}) => {
  return (
    <div className={`containerItem ${isBorder? 'isBorder' : ''}`}>
        <Component />
    </div>
  )
}

export default ContainerItem