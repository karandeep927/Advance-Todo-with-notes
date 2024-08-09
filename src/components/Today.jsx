import React, { useContext,useEffect,useState} from 'react'
import AddTask from './AddTask'
import Task from './Task'
import { dataContext } from '../context/store'
import TaskModel from './TaskModel';
import { today,tomorrow } from '../utils/dates';
import PropTypes from 'prop-types';


function Today({title}) {
  const {tasksData} = useContext(dataContext)
  const [visibility,setVisibility] = useState(false)
  const [count,setCount] = useState(0)
  let taskDate,currentDay = new Date().getDate();
  switch(title){
    case('today'):{
      taskDate = today;
      break;
    }
    case('tomorrow'):{
      currentDay += 1 
      taskDate = tomorrow;
      break;
    }
    case('this week'):{
      currentDay = 'week'
      break;
    }
  }
  const task = tasksData.filter((task)=> Number(task.deadline.slice(8,10)) === currentDay )
  useEffect(()=>{
    setCount(task.length)
    if(currentDay == 'week'){
      setCount(tasksData.length)
    }
  },[task,tasksData,currentDay])
  return (
    <>
    <TaskModel visibility={visibility} setVisibility={setVisibility} taskDate ={taskDate} />

      <h1 className="text-3xl font-bold mb-3 capitalize inline-block">{title}</h1><span className='mx-5 text-3xl shadow p-1 '>{count}</span>
      <div className="flex gap-2 flex-wrap rounded w-full mt-2">
       <AddTask setVisibility={setVisibility}/>
        {task.map((task)=>{
          return (<Task key={task.id} task={task}/>)
        })
        }
        {
         (currentDay === 'week') && tasksData.map((task)=>{
          return (<Task key={task.id} task={task}/>)
         })
        }
      </div>
    </>
  )
}
Today.propTypes = {
  title:PropTypes.string.isRequired,
};

export default Today