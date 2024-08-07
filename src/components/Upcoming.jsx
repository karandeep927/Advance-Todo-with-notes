import React, { useContext, useEffect, useState } from 'react'
import Today from './Today'
import { dataContext } from '../context/store'

function Upcoming() {
  const {tasksData} = useContext(dataContext)
  const [taskCount,setTaskCount] = useState(tasksData.length)
  useEffect(()=>{
    setTaskCount(tasksData.length)
  },[tasksData.length])
  return (
    <>
      <h1 className="text-3xl font-bold mb-3 inline-block ">Upcoming</h1><span className='mx-5 text-3xl shadow-md p-1'>{taskCount}</span>
      <div className='relative w-full'>
      <div className="flex gap-2 flex-wrap shadow-md border-[1px] rounded p-9 w-full mb-4">
        <Today title="today" />
      </div>
      <div className='flex gap-3 flex-wrap w-full'>
        <div className='flex-1 shadow-md p-9 border-[1px] rounded h-fit'>
          <Today title="tomorrow" />
        </div>
        <div className='flex-1 shadow-md p-9 border-[1px] rounded h-fit'>
          <Today title="this week" />
        </div>
      </div>
      </div>
    </>
  )
}

export default Upcoming