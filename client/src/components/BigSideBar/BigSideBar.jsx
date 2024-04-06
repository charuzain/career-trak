import { useDashBoardContext } from '../../pages/DashBoardLayout/DashBoardLayout';
import './BigSideBar.scss';
const BigSideBar = () => {
  const data = useDashBoardContext()
  console.log(data.showSideBar)
  return <div className={data.showSideBar ? 
  "bigsidebar" : "sidebar"}>BigSideBar</div>;
};

export default BigSideBar;
