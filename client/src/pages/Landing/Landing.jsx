import landingImg from '../../assets/images/landing.svg';
import logo from '../../assets/images/logo2.ico';
const Landing = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <p>Trackify</p>
      </nav>
      <main>
        <div>
          <h1>Job Tracking App!</h1>
          <p>
            Get ready to turn your job hunt into a breeze with our super cool
            platform. Whether you are diving headfirst into applications or
            casually browsing for your dream gig, our tools are here to make
            your journey smooth sailing. From tracking applications with ease to
            sprinkling in some awesome insights, we are here to make job hunting
            a downright enjoyable experience. So kick back, relax, and let us
            find that perfect job together. Cheers to new beginnings and
            exciting opportunities ahead! 🚀🎉
          </p>
          <button>Register</button>
          <button>Login</button>
        </div>
        <div>
          <img src={landingImg} alt="trackify" />
        </div>
      </main>
    </>
  );
};

export default Landing;
