import React,{forwardRef} from 'react'
import PropTypes from 'prop-types'

const Button = forwardRef(({title,color,handler=null,Icon=null },ref) => {
    return (
    <button 
    ref={ref}
    onClick={handler}
    style={{background:color}}
    className={`px-6 py-2 border-transparent rounded sm:flex-1`}
    >{Icon !== null ? <Icon/> : null}{title}</button>
  )
})

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handler: PropTypes.func,
  Icon: PropTypes.elementType,
};

export default Button