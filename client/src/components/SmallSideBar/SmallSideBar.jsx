import { useDashBoardContext } from '../../pages/DashBoardLayout/DashBoardLayout';
import './SmallSideBar.scss';
const SmallSideBar = () => {
  const data = useDashBoardContext();

  console.log(data);
  return <div className="smallsidebar">SmallSideBar</div>;
};

export default SmallSideBar;
