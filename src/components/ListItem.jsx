import React from 'react'
import { SELECTED_OPT_COLOR } from '../constants/color'


function ListItem({title,Icon,isSelected,onclick,color=null,number=null}) {
  const selectedStyle = isSelected ? {backgroundColor:SELECTED_OPT_COLOR,fontWeight:'bold'} : null
  return (
    <div className={`flex justify-between items-center p-2 cursor-pointer`} style={selectedStyle} onClick={onclick}>
      <span className='flex gap-2 items-center'>
      <Icon color={color} size={'1rem'}/>
      <p>{title}</p>
      </span>
      <span>{number}</span>
    </div>
  )
}

export default ListItem