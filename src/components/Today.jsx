import React, { useContext, useEffect, useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import { dataContext } from '../context/store';
import TaskModel from './TaskModel';
import { today, tomorrow } from '../utils/dates';
import PropTypes from 'prop-types';

function Today({ title }) {
  const { tasksData } = useContext(dataContext);
  const [visibility, setVisibility] = useState(false);
  const [count, setCount] = useState(0);
  let taskDate = today;
  let filteredTasks = [];
  let taskTag = '0';

  const dataFilter = (data, label, value) => {
    return data.filter((task) => label === task[value].toLowerCase());
  };

  switch (title.toLowerCase()) {
    case 'today': {
      taskDate = today;
      filteredTasks = tasksData.filter((task) => Number(task.deadline.slice(8, 10)) === new Date().getDate());
      taskTag = '0';
      break;
    }
    case 'tomorrow': {
      taskDate = tomorrow;
      filteredTasks = tasksData.filter((task) => Number(task.deadline.slice(8, 10)) === new Date().getDate() + 1);
      break;
    }
    case 'this week': {
      taskTag = '0';
      filteredTasks = tasksData; 
      break;
    }
    case 'work': {
      filteredTasks = dataFilter(tasksData, 'work', 'tag');
      taskTag = 'work';
      break;
    }
    case 'personal': {
      filteredTasks = dataFilter(tasksData, 'personal', 'tag');
      taskTag = 'personal';
      break;
    }
    default: {
      filteredTasks = tasksData;
      break;
    }
  }

  useEffect(() => {
    setCount(filteredTasks.length);
  }, [tasksData, filteredTasks]);

  return (
    <>
      <TaskModel visibility={visibility} setVisibility={setVisibility} taskDate={taskDate} taskTag={taskTag} />
      <h1 className="text-3xl font-bold mb-3 capitalize inline-block">{title}</h1>
      <span className="mx-5 text-3xl shadow p-1">{count}</span>
      <div className="flex gap-2 flex-wrap rounded w-full mt-2">
        <AddTask setVisibility={setVisibility} />
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}

Today.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Today;
