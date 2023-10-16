
import "../css/LandingPage.css";
import mbamlarge from "../images/mbamlarge.png"
import HeaderLandingPage from "../components/HeaderLandingPage";
import Tabs, { Tab } from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import {
  faPowerOff
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = () => {
  return (
    <div className="">
       <HeaderLandingPage/>
       
      <div className="container custom-container">
      <Tabs activeTab="1" className="mt-3" ulClassName="" activityClassName="bg-success" onClick={(event, tab) => console.log(event, tab)} >
    <Tab title="Home" className="mr-3">
    <div className="mbamlogo">
        <img src={mbamlarge} alt="logo" className="img-fluid " />
      </div>
      <div className="justify-content-center btmhome ">
  <button type="button" class=" flex btn btn-warning btn-lg btn-block btnd">Via Login to respective user platform</button>
<button type="button" class="btn btn-warning btn-lg btn-block btnd">Via Login to Marketplace </button>
<button type="button" class="btn btn-warning btn-lg btn-block btnd">Link to CiBP </button>
  
  
</div>
     </Tab>
 
     <Tab title="Categories" className="mr-3">
          <div className="mt-3">
              Tab 2 content
           </div>
      </Tab>
 
      <Tab title="Information" className="mr-3">
          <div className="mt-3">
              Tab 3 content
          </div>
      </Tab>
</Tabs>
    
   
    </div>
    </div>
  );
};

export default LandingPage;
