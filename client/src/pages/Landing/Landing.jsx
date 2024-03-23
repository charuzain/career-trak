import { Link } from 'react-router-dom';
import landingImg from '../../assets/images/landing.svg';
import logo from '../../assets/images/logo2.ico';
import './Landing.scss';
const Landing = () => {
  return (
    <div className='container'>
      <nav className="logo">
        <div className="logo__container">
          <img src={logo} alt="logo" />
          <p className="logo__name">Trackify</p>
        </div>
      </nav>
      <main className="landing">
        <div className="landing__wrapper">
          <div className="landing__container">
            <h1 className="landing__title">
              Job <span className='landing__title--colored'>Tracking</span> App
            </h1>
            <p className="landing__description">
              Get ready to turn your job hunt into a breeze with our super cool
              platform. Whether you are diving headfirst into applications or
              casually browsing for your dream gig, our tools are here to make
              your journey smooth sailing. From tracking applications with ease
              to sprinkling in some awesome insights, we are here to make job
              {/* hunting a downright enjoyable experience. So kick back, relax, and
              let us find that perfect job together. Cheers to new beginnings
              and exciting opportunities ahead! 🚀🎉 */}
            </p>
            <div className="link">
              <Link to ="#" className='link__register'>Register</Link>
              <Link to ="#" className='link__login'>Login</Link>
            </div>
          </div>

          <div className="image-container">
            <img
              src={landingImg}
              className="image-container__image"
              alt="trackify"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
