import { Outlet } from 'react-router-dom';
import './DashBoardLayout.scss';
import NavBar from '../../components/NavBar/NavBar';
import SmallSideBar from '../../components/SmallSideBar/SmallSideBar';
import BigSideBar from '../../components/BigSideBar/BigSideBar';

const DashBoardLayout = () => {
  return (
    <div className="dashboard">
      <SmallSideBar />
      <BigSideBar />
      <div className="dashboard__page">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
