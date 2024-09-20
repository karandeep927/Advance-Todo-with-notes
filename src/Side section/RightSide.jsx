import StickyWall from '../tabs/StickyWall'
import Upcoming from '../tabs/Upcoming'
import Today from '../tabs/Today';
import CalendarTab from '../tabs/CalendarTab';
import PropTypes from 'prop-types';

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
      case 5:
        return <Today title='personal'/>
      case 6:
          return <Today title='work'/>
    }
  }
  return (
    <div className='p-3 ml-10 sm:ml-0 transition-all duration-300 ease-in-out relative overflow-x-hidden' style={RightSideStyle}>
      {
        handleTabs()
      }
    </div>
  )
}
RightSide.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  selectedTab:PropTypes.number.isRequired,
}

export default RightSide    