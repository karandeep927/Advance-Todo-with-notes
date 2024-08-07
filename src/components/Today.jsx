import React, { useContext,useState} from 'react'
import AddTask from './AddTask'
import Task from './Task'
import { dataContext } from '../context/store'
import TaskModel from './TaskModel';
import { today,tomorrow } from '../utils/dates';


function Today({title}) {
  const {tasksData} = useContext(dataContext)
  const [visibility,setVisibility] = useState(false)
  let date,taskDate;
  switch(title){
    case('today'):{
      date = new Date().getDate()
      taskDate = today;
      break;
    }
    case('tomorrow'):{
      date = new Date().getDate() + 1
      taskDate = tomorrow;
      break;
    }
    case('this week'):{
      date = new Date().getDate() + 7
      break;
    }
  }
  const task = tasksData.filter((task)=> Number(task.deadline.slice(8,10)) === date )
  return (
    <>
    <TaskModel visibility={visibility} setVisibility={setVisibility} taskDate ={taskDate} />

      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <div className="flex gap-2 flex-wrap rounded w-full">
       <AddTask setVisibility={setVisibility}/>
        {task.map((task)=>{
          return (<Task key={task.id} task={task}/>)
        })
        }
      </div>
    </>
  )
}

export default Today