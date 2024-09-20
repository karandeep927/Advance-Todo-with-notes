import { useContext, useState } from 'react'
import { BUTTON_BG } from '../constants/color';
import Button from './Button';
import { dataContext } from '../context/store';
import { CALENDER_ICN, BOX_ICN ,DELETE} from '../constants/icons';
import PropTypes from 'prop-types';

function Task({ task }) {

    const { deleteTask } = useContext(dataContext)
    const [taskStatus, setTaskStatus] = useState(false)

    const handleStatus = () => {
        setTaskStatus(!taskStatus)
    }

    return (
        <div className='p-3 shadow-md flex items-center justify-between sm:w-full w-80'>
            <input type="checkbox" className='size-6 cursor-pointer' onChange={handleStatus} />
            <div className='flex-1 flex flex-col gap-2  ml-3'>
                <span className={`capitalize flex-1 line-clamp-2 w-40 sm:w-60 ${taskStatus ? 'text-slate-500 line-through' : ''}`}>{task.title}</span>
                <div className='flex sm:gap-6 sm:flex-row flex-col items-start'>
                    <span className='flex gap-3 text-sm'><CALENDER_ICN size={20} className='hidden sm:block' />{task.deadline}</span>
                    <span className='flex gap-3 items-center'>{task.tag && (task.tag !== 'work' ? <BOX_ICN size={20} color='blue' /> : <BOX_ICN size={20} color='red' />)}{task.tag}</span>
                </div>
            </div>
            <span className='capitalize flex-1 hidden lg:block'>{!taskStatus ? 'pending...' : 'completed'}</span>
            <span className={`${taskStatus ? "" : 'invisible'}`}>
                <Button color={BUTTON_BG} className='hidden sm:block' handler={() => deleteTask(task.id)}>Delete</Button>
                <Button  Icon={DELETE} className={'sm:hidden'} handler={() => deleteTask(task.id)}></Button>
            </span>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        deadline: PropTypes.string.isRequired,
        tag: PropTypes.string
    }).isRequired,
};

export default Task