import React, { useContext } from 'react';
import {CROSS_ICN} from "../constants/icons"
import { dataContext } from '../context/store';
import PropTypes from 'prop-types';

function Card({note}) {
  const {deleteNote} = useContext(dataContext)
  return (
    <div style={{background:note.color}} className={`min-h-56 max-h-fit text-wrap w-52  p-3 rounded text-slate-50 relative`}>
    <span className='absolute top-2 right-3' onClick={()=>deleteNote(note.id)}><CROSS_ICN size={15} /></span>
    <h1 className='text-lg font-semibold text-wrap'>{note.title}</h1>
    <p className='text-sm px-2 text-wrap whitespace-pre-line'>{note.desc}</p>
</div>
  )
}
Card.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
  }).isRequired,
};

export default Card