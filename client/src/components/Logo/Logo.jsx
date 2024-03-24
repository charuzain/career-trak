import './Logo.scss';
import logo from '../../assets/images/logo2.ico';


const Logo = () => {
  return (
    <nav className="logo">
      <div className="logo__container">
        <img src={logo} alt="logo" />
        <p className="logo__name">Trackify</p>
      </div>
    </nav>
  );
};

export default Logo;
