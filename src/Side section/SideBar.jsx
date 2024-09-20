import { SIDE_BAR_COLOR, SIDE_BAR_TEXT_COLOR } from "../constants/color";
import { ListData as List, TasksData as Tasks } from "../constants/SideBarData";
import { MENU_ICN, CROSS_ICN } from "../constants/icons";
import ListItem from "../components/ListItem";
import PropTypes from 'prop-types'

function SideBar({isVisible,setVisibility,selectedTab,setSelectedTab}) {
  const handleSidebarVisibility = ()=>{
    setVisibility(!isVisible)
  }
  const MENU = isVisible ? CROSS_ICN :MENU_ICN;
  return (
    <div
    style={{ background: SIDE_BAR_COLOR }}
    className={`min-w-64 h-full absolute px-5 py-3 rounded-lg my-1 transition-all duration-300 ease-in-out sm:relative z-10 ${isVisible ? 'ml-0' : '-ml-52'}`}
    >
    <MENU size={25} className="cursor-pointer absolute right-3 top-6 " onClick={handleSidebarVisibility}/>
      <div className='w-full'>
        <h1 className='font-bold text-3xl leading-none'>Task-Mate</h1>
        <p className='capitalize text-sm text-slate-400'>complete before deadline</p>
    </div>
      <section className="mt-4">
        <h2 className="text-xl font-bold">Tasks</h2>
        <div className="">
          {Tasks.map((task) => {
            return (
              <ListItem
                key={task.id}
                Icon={task.icon}
                title={task.title}
                color={SIDE_BAR_TEXT_COLOR}
                isSelected={selectedTab === task.id ? true : false}
                onclick={() => setSelectedTab(task.id)}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h2>Lists</h2>
        <div className="">
          {List.map((item) => {
            return (
              <ListItem
                key={item.id}
                title={item.title}
                Icon={item.icon}
                color={item.color}
                isSelected={selectedTab === item.id ? true : false}
                onclick={() => setSelectedTab(item.id)}
              />
            );
          })}
        </div>
      </section>
      
    </div>
  );
}

SideBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
  selectedTab: PropTypes.PropTypes.number.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export default SideBar;


