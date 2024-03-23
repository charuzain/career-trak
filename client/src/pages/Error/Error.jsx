import pageNotFound from '../../assets/images/notFound.svg';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main>
      <img src={pageNotFound} alt="404 Error" />
      <h1>Ohh!!Page Not Found</h1>
      <h4>Can;t find the page you are looking for</h4>
      <Link to="/">Back Home</Link>
    </main>
  );
};

export default Error;
