import logo from '../../logo-no-bottom.png';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-page">
      <div className="logo">
        <img src={logo} />
      </div>
      <Link to={'/signup'} className="play">Click here to play!</Link>
    </div>
  );
}

export default Landing;