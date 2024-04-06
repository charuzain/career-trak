import { FaAlignLeft } from 'react-icons/fa';
import logo from '../../assets/images/logo2.ico';
import './NavBar.scss';
import { useDashBoardContext } from '../../pages/DashBoardLayout/DashBoardLayout';
const NavBar = () => {
  const {toggleSideBar, darkTheme ,showSideBar} = useDashBoardContext()
  console.log(toggleSideBar);
  return (
    <div className="navbar">
      <button className='navbar__button' onClick={toggleSideBar}>
        <FaAlignLeft className="navbar__icon" />
      </button>
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <p className="navbar__brandname">Trackify</p>
      </div>
      <div>
        <button className="navbar__btn">Toggle/logout</button>
      </div>
    </div>
  );
};

export default NavBar;
