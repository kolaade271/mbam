
import loago1 from "../images/mbamlogo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSignIn, faUser } from '@fortawesome/free-solid-svg-icons'

const HeaderLandingPage = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid custom-container ">
        <a className="navbar-brand logotext " href="/">
          <img src={loago1} alt="" className="logo-img" />
          DEV MBAM MARKET
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/register"><FontAwesomeIcon icon={faUser} /> Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login"><FontAwesomeIcon icon={faSignIn} /> Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderLandingPage;
