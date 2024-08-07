import React from 'react'
import { BUTTON_TEXT_COLOR } from '../constants/color'

function Button({title,color, handler= null ,Icon=null}) {
    return (
    <button 
    onClick={handler}
    style={{background:color}}
    className={`px-6 py-2 border-transparent rounded sm:flex-1`}
    >{Icon !== null ? <Icon/> : null}{title}</button>
  )
}

export default Button