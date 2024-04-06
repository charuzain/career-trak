import { Outlet } from 'react-router-dom';
import './DashBoardLayout.scss';
import NavBar from '../../components/NavBar/NavBar';
import SmallSideBar from '../../components/SmallSideBar/SmallSideBar';
import BigSideBar from '../../components/BigSideBar/BigSideBar';
import { createContext, useContext, useState } from 'react';
const DashBoardContext = createContext();

const DashBoardLayout = () => {
  const user = {
    name: 'Charu',
  };
  const [showSideBar, setShowSideBar] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const logOutUser = () => {
    console.log('User log out');
  };

  return (
    <DashBoardContext.Provider
      value={{ user, showSideBar, darkTheme, toggleSideBar, logOutUser }}
    >
      <div className="dashboard">
          <SmallSideBar />
          <BigSideBar />
        <div className="dashboard__page">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </DashBoardContext.Provider>
  );
};
export const useDashBoardContext = () => useContext(DashBoardContext);

export default DashBoardLayout;
