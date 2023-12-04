
import "../css/LandingPage.css";
import mbamlarge from "../images/mbamlarge.png"
import HeaderLandingPage from "../components/HeaderLandingPage";
import Tabs, { Tab } from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt, faStore, faFileInvoice } from '@fortawesome/free-solid-svg-icons'


const LandingPage = () => {
  return (
    <div className="">
      <HeaderLandingPage />

      <div className="wid">
      <div className="mbamlogo">
              <img src={mbamlarge} alt="logo" className="img-fluid " />
            </div>
            <div className="justify-content-center btmhome " align="center">
              <div className="row">
                <div className="col-md-4"><button type="button" class=" flex btn btn-warning btn-lg btn-block btnd">Via Login to respective user platform</button></div>
                <div className="col-md-4"><a href="dashboard"><button type="button" class=" flex btn btn-warning btn-lg btn-block btnd">Via Login to Marketplace </button></a></div>
                <div className="col-md-4"><button type="button" class=" flex btn btn-warning btn-lg btn-block btnd">Link to CiBP</button></div>
              </div>


            </div>


      </div>
    </div>
  );
};

export default LandingPage;
