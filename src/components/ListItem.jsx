import { SELECTED_OPT_COLOR } from '../constants/color'
import PropTypes from 'prop-types'

function ListItem({title,Icon,isSelected,onclick,color}) {
  const selectedStyle = isSelected ? {backgroundColor:SELECTED_OPT_COLOR,fontWeight:'bold'} : null
  return (
    <div className={`flex justify-between items-center p-2 cursor-pointer`} style={selectedStyle} onClick={onclick}>
      <span className='flex gap-2 items-center'>
      <Icon color={color} size={'1rem'}/>
      <p>{title}</p>
      </span>
    </div>
  )
}
ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  isSelected: PropTypes.bool,
  onclick: PropTypes.func,
  color: PropTypes.string,
};
export default ListItem