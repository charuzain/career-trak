import FormRow from '../../components/FormRow/FormRow';
import logo from '../../assets/images/logo2.ico';
import { Link } from 'react-router-dom';
import './Login.scss'

const Login = () => {
  return (
    <main className="login">
      <div className="login__container">
        <div className="login__logo">
          <img src={logo} alt="logo" />
          <p className="login__logo-name">Trackify</p>
        </div>
        <h1 className="login__title">Login</h1>
        <div className="login__form-container">

        <form className="login__form">
          <FormRow name="email" labelText="Email" type="email" />
          <FormRow name="password" labelText="Password" type="password" />
          <button type="submit" className="login__btn">
            Login
          </button>
          <button type="button" className="login__btn">
            Explore the App
          </button>
          </form>
          </div>
        <p className="login__description">
          Not a member yet? <Link to="/register" className='login__register'>Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
