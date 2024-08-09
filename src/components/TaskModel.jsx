import React, { useState, useContext, useRef, useEffect } from 'react';
import { dataContext } from '../context/store';
import Button from './Button';
import { SECOND_BUTTON_BG, BUTTON_BG } from '../constants/color';
import PropTypes from 'prop-types';

function TaskModel({ visibility, setVisibility, taskDate }) {
    const { addTask } = useContext(dataContext);
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState(taskDate);
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
            addTask({ id, title: task, deadline });
            setTitle('');
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

    return (
        <div className={`w-full h-screen bg-transparent flex justify-center items-center absolute -top-20 left-0 ${!visibility ? 'hidden' : null}`}>
            <div className='w-3/6 h-3/4 rounded p-5 bg-white shadow-md border flex flex-col gap-4'>
                <h1 className='font-bold text-3xl text-center'>Add Notes</h1>
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
                <label htmlFor="deadline" className='text-2xl font-bold'>Add Deadline of Task</label>
                <input
                    type="date"
                    name="deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="input-box"
                />
                <div className='flex-1 flex items-end gap-5 self-end'>
                    <Button title="Cancel" color={SECOND_BUTTON_BG} handler={toggleModel} />
                    <Button title="Add" ref={buttonRef} color={BUTTON_BG} handler={() => handleTask(title)} />
                </div>
            </div>
        </div>
    );
}

TaskModel.propTypes = {
    visibility: PropTypes.bool.isRequired,
    setVisibility: PropTypes.func.isRequired,
    taskDate: PropTypes.string,
};

export default TaskModel;
