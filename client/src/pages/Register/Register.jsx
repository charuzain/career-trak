import { Link } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import './Register.scss';
import FormRow from '../../components/FormRow/FormRow';
import logo from '../../assets/images/logo2.ico';

const Register = () => {
  return (
    <main className="register">
      <div className="register__container">
        <div className="register__logo">
            <img src={logo} alt="logo" />
            <p className="register__logo-name">Trackify</p>

          {/* <Logo /> */}
        </div>
        <h1 className="register__title">Register</h1>

        <div className="register__form-container">
          <form className="register__form">
            <FormRow
              type="text"
              labelText="Name"
              name="name"
              defaultValue="John"
            />
            <FormRow
              type="text"
              labelText="Last Name"
              name="lastName"
              defaultValue="Smith"
            />
            <FormRow
              type="text"
              labelText="Location"
              name="location"
              defaultValue="location"
            />
            <FormRow
              type="email"
              labelText="Email"
              name="email"
              defaultValue="email"
            />
            <FormRow
              type="password"
              labelText="password"
              name="password"
              defaultValue="password"
            />
            
            <button className="register__btn" type="submit">
              Submit
            </button>
          </form>
          <p className="register__description">
            Already a member?{' '}
            <Link to="/login" className="register__login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
