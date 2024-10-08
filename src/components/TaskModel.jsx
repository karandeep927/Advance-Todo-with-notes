import { useState, useContext, useRef, useEffect } from 'react';
import { dataContext } from '../context/store';
import Button from './Button';
import { SECOND_BUTTON_BG, BUTTON_BG } from '../constants/color';
import PropTypes from 'prop-types';

function TaskModel({ visibility, setVisibility, taskDate, taskTag }) {
    const { addTask } = useContext(dataContext);
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState(taskDate);
    const [tag, setTag] = useState(taskTag);
    const inputRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleModel = () => {
        setVisibility(!visibility);
        setDeadline(taskDate);
        setTitle('');
    };

    const handleTask = (task) => {
        if (!task.trim()) {
            alert("Task title cannot be empty");
            return;
        }

        if (task && deadline) {
            const id = Date.now();
            addTask({ id, title: task, deadline, tag });
            setTitle('');
            setTag('');
        }
        toggleModel();
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            buttonRef.current.click();
        }
    };

    useEffect(() => {
        if (visibility) {
            inputRef.current.focus();
        }
    }, [visibility]);

    useEffect(() => {
        setTag(taskTag);
    }, [taskTag]);

    return (
        <div className={`w-full h-screen bg-transparent flex justify-center items-center absolute -top-20 left-0 ${!visibility ? 'hidden' : null}`}>
            <div className='sm:w-96 w-80 p-5 bg-white shadow-md border flex flex-col gap-4'>
                <h1 className='font-bold text-2xl sm:text-3xl text-center'>Add Notes</h1>
                <label htmlFor="title" className='text-2xl font-bold'>Title</label>
                <input
                    type="text"
                    name="title"
                    ref={inputRef}
                    placeholder="Title"
                    onKeyDown={handleKeyPress}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input-box"
                />
                <label htmlFor="deadline" className='text-2xl sm:text-3xl font-bold'>Add Deadline of Task</label>
                <input
                    type="date"
                    name="deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="input-box"
                />
                <label className='text-2xl sm:text-3xl font-bold'>Select Tag</label>
                <select onChange={(e) => setTag(e.target.value)} value={tag} className='input-box'>
                    <option value="0">Select tag</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
                <div className='flex-1 flex items-end gap-5 self-end'>
                    <Button color={SECOND_BUTTON_BG} handler={toggleModel} >Cancel</Button>
                    <Button ref={buttonRef} color={BUTTON_BG} handler={() => handleTask(title)} >Add</Button>
                </div>
            </div>
        </div>
    );
}

TaskModel.propTypes = {
    visibility: PropTypes.bool.isRequired,
    setVisibility: PropTypes.func.isRequired,
    taskDate: PropTypes.string,
    taskTag: PropTypes.string,
};

export default TaskModel;
