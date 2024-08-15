import React, { useContext, useState } from 'react'
import { BUTTON_BG } from '../constants/color';
import Button from './Button';
import { dataContext } from '../context/store';
import {CALENDER_ICN} from '../constants/icons';
import PropTypes from 'prop-types';
import { BOX_ICN } from '../constants/icons';

function Task({task}) {
    
    const {deleteTask} = useContext(dataContext)
    const [taskStatus, setTaskStatus] = useState(false)

    const handleStatus = () => {
        setTaskStatus(!taskStatus)
    }

    return (
        <div className='p-3 shadow-md flex items-center justify-between gap-3 w-full'>
            <input type="checkbox" className='size-6 cursor-pointer' onChange={handleStatus} />
            <div className='flex-1 flex flex-col gap-2 ml-3'>
            <span className={`capitalize flex-1 ${taskStatus ? 'text-slate-500 line-through' : ''}`}>{task.title}</span>
            <div className='flex gap-6 items-center'>
            <span className='flex gap-3'><CALENDER_ICN size={20} />{task.deadline}</span>
            <span className='flex gap-3 items-center'>{task.tag && (task.tag !== 'work' ? <BOX_ICN size={20} color='blue'/> : <BOX_ICN size={20} color='red'/>)}{task.tag}</span>
            </div>
            </div>
            <span className='capitalize flex-1'>{!taskStatus ? 'pending...' : 'completed'}</span>
            <span className={`${taskStatus ? "" : 'invisible'}`}>
                <Button title='Delete' color={BUTTON_BG} handler={() => deleteTask(task.id)} />
            </span>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      tag:PropTypes.string
    }).isRequired,
  };

export default Task