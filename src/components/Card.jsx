import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import {CROSS_ICN} from "../constants/icons"
import { dataContext } from '../context/store';

function Card({note}) {
  const {deleteNote} = useContext(dataContext)
  return (
    <div style={{background:"#071952"}} className={`min-h-56 max-h-fit min-w-52 p-3 rounded text-slate-50 relative`}>
    <span className='absolute top-2 right-3' onClick={()=>deleteNote(note.id)}><CROSS_ICN size={15} /></span>
    <h1 className='text-lg font-semibold'>{note.title}</h1>
    <p className='text-sm px-2 whitespace-pre-line'>{note.desc}</p>
</div>
  )
}

export default Card