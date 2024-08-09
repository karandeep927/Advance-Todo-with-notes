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
      className={` min-w-64 min-h-full px-5 py-3 rounded-lg my-1 transition-all duration-300 ease-in-out ${isVisible ? 'ml-0' : '-ml-52'}`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Menu</h1>
        <MENU size={"1.2rem"} className="cursor-pointer" onClick={handleSidebarVisibility}/>
      </div>
      <section>
        <h2 className="">Tasks</h2>
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
                color={item.color}
                Icon={item.icon}
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


