import pageNotFound from '../../assets/images/not-found.svg';
import { Link, useRouteError } from 'react-router-dom';
import './Error.scss';

const Error = () => {
  const errorResponse = useRouteError();
  console.log(errorResponse.status);
  if (errorResponse.status === 404) {
    return (
      <main className="error">
        <div className="error__container">
          <div className="error__img-container">
            <img className="error__image" src={pageNotFound} alt="404 Error" />
          </div>
          <h1 className="error__title">Ohh!!Page Not Found</h1>
          <h4 className="error__description">
            Cant find the page you are looking for
          </h4>
          <Link to="/" className="error__link">
            Back Home
          </Link>
        </div>
      </main>
    );
  }
  return (
    <h1>Error</h1>
    // <main className="error">
    //   <div className="error__container">
    //     <div className="error__img-container">
    //       <img className="error__image" src={pageNotFound} alt="404 Error" />
    //     </div>
    //     <h1 className="error__title">Ohh!!Page Not Found</h1>
    //     <h4 className="error__description">
    //       Cant find the page you are looking for
    //     </h4>
    //     <Link to="/" className="error__link">
    //       Back Home
    //     </Link>
    //   </div>
    // </main>
  );
};

export default Error;
