import React from 'react';
import {PLUS_ICN } from '../constants/icons'
import Button from './Button';
import { BUTTON_BG } from '../constants/color';
import PropTypes from 'prop-types'


const AddTask = ({setVisibility}) => {
  const handleTask = () => {
    setVisibility(true);
  };

  return (
    <>
    <div className="flex items-center space-x-2 shadow-md w-full p-3 border cursor-pointer" onClick={handleTask}>
    <PLUS_ICN size={30}/>
    <div className='flex w-full flex-col'>
        <input type="text" placeholder='Add New Task' className='border border-[#89888879] rounded-md py-2 px-2 focus:outline-none cursor-pointer ' readOnly={true}/>
    </div>
    <span className='flex-shrink-0'>
        <Button title={'Add Task'} color={BUTTON_BG}/>
    </span>
    </div>
    </>
  );
};

AddTask.propTypes = {
  setVisibility: PropTypes.func.isRequired,
};

export default AddTask;
