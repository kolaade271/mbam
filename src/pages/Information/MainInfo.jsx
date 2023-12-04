import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import InformationLeftComponent from '../../components/pages/InformationLeftComponent';
import HelpInfo from './help';
import AboutUs from './Aboutus';
import Remaark from './Remark';
const MainInfo = (tabpage) => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    let page = "maindata";
    setSelectedItem(page);
    if (location.state && location.state.page) {
      page = location.state.page;
      
    }
    setSelectedItem(page);
   
    console.log(page);
  }, [location.state]);
  

  return (
    <div className="main">
      <div className="row">
        <div className="col-md-4 leftnav">
          <InformationLeftComponent /> 
        </div>
        <div className="col-md-8 maindash">
     
        {selectedItem === 'help' && <HelpInfo/>}
        {selectedItem === 'about' && <AboutUs/>}
        {selectedItem === 'remark' && <Remaark/>}
          
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
