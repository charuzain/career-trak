import FormRow from '../../components/FormRow/FormRow';
import logo from '../../assets/images/logo2.ico';
import { Link } from 'react-router-dom';
import './Login.scss'

const Login = () => {
  return (
    <main>
      <div>
        <div>
          <img src={logo} alt="logo" />
          <p>Trackify</p>
        </div>

        <form>
          <h1>Login</h1>
          <FormRow name="email" labelText="Email" type="email" />
          <FormRow name="password" labelText="Password" type="password" />
          <button type="submit">Login</button>
          <button type="button">Explore the App</button>
        </form>
        <p>Not a member yet? <Link to ="/register">Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
