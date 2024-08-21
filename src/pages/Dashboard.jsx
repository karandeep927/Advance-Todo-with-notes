import SideBar from '../Side section/SideBar'
import RightSide from '../Side section/RightSide'
import { useState } from 'react'
import NavBar from '../components/NavBar'

function Dashboard() {
  const [isVisible, setVisibility] = useState(true)
  const [selectedTab, setSelectedTab] = useState(1)
  return (
  <div>
    <NavBar />
    <div className='flex gap-6  w-full h-full py-2'>
      <SideBar isVisible={isVisible} setVisibility={setVisibility} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <RightSide isVisible={isVisible} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  </div>
  )
}

export default Dashboard