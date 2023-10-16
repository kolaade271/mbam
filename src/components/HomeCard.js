import "../css/HomeCard.css";
import mbamlarge from "../images/mbamlarge.png"
import HeaderLandingPage from "./HeaderLandingPage";

const HomeCard = () => {
  return (<div>
    <HeaderLandingPage/>
    <div className="mbamlogo">
      <img src={mbamlarge} alt="logo"/>
    </div>
  </div>
    
  );
};

export default HomeCard;
