import {forwardRef} from 'react'
import PropTypes from 'prop-types'

const Button = forwardRef(({color,handler=null,Icon=null,className,children},ref) => {
    return (
    <button 
    ref={ref}
    onClick={handler}
    style={{background:color}}
    className={`px-6 py-2 border-transparent rounded flex-1 ${className}`}
    >{Icon !== null ? <Icon size={25} /> : null}{children}</button>
  )
})

Button.propTypes = {
  color: PropTypes.string.isRequired,
  handler: PropTypes.func,
  Icon: PropTypes.elementType,
  className: PropTypes.string,
};

export default Button