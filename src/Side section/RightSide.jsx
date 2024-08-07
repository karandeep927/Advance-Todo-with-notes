import React from 'react'
import StickyWall from '../components/StickyWall'
import Upcoming from '../components/Upcoming'
import Today from '../components/Today';
import CalendarTab from '../components/CalendarTab';

function RightSide({isVisible,selectedTab}) {
  const TabId = selectedTab;
  const RightSideStyle ={
    transition: 'margin-left 0.3s ease-in-out',
    flex: isVisible ? '1' : '0 1 100%',
  };
  const handleTabs = ()=>{
    switch(TabId) {
      case 1:
        return <Upcoming />
      case 2:
        return <Today title='today'/>
      case 3:
        return <CalendarTab/>
      case 4:
        return <StickyWall/>
    }
  }
  return (
    <div className='p-3 transition-all duration-300 ease-in-out relative' style={RightSideStyle}>
      {
        handleTabs()
      }
    </div>
  )
}
export default RightSide    