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
   <div className="flex justify-center flex-col gap-2 sm:flex-row sm:items-center sm:justify-end shadow-md w-full p-2 border cursor-pointer" onClick={handleTask}>
  <div className='flex items-center flex-1 sm:w-full'>
    <PLUS_ICN size={30} />
    <input type="text" placeholder='Add New Task' className='border w-full border-[#89888879] rounded-md py-2 px-2 focus:outline-none cursor-pointer' readOnly={true} />
  </div>
  <div className="sm:w-36 flex sm:flex-grow-0">
    <Button color={BUTTON_BG} className="w-full">Add Task</Button>
  </div>
</div>
    </>
  );
};

AddTask.propTypes = {
  setVisibility: PropTypes.func.isRequired,
};

export default AddTask;
