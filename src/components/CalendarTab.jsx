import React, { useState } from 'react'
import Calendar from 'react-calendar'


function CalendarTab() {
  
  const [date,setDate] = useState(new Date())
  console.log(date.getDate())
  return (
    <>
      <h1 className="text-3xl font-bold mb-3">Calendar</h1>
      <div className="flex gap-2 flex-wrap shadow-md border-[1px] rounded p-9 w-full">
       <p >
        coming soon ...........
        </p>
      </div>
    </>
  )
}

export default CalendarTab