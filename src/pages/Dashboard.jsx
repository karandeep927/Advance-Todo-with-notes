import SideBar from '../Side section/SideBar'
import RightSide from '../Side section/RightSide'
import { useState } from 'react'

function Dashboard() {
  const [isVisible,setVisibility] = useState(true)
  const [selectedTab,setSelectedTab] = useState(1)
  return (
    <div className='flex gap-6  w-full h-screen py-2'>
        <SideBar isVisible={isVisible} setVisibility={setVisibility} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <RightSide isVisible={isVisible} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  )
}

export default Dashboard