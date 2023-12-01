import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import PersonalLeftComponent from '../../components/pages/PersonalLeftComponent';
import Profile from './Profile';
import Messages from './messages';
import Reference from './Reference';
import Settings from './Settings';
import FeedBack from './Feedback';
import Notification from './Notification';

const MainPersonal = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('mainprofile');

  useEffect(() => {
    let page = "mainprofile"; 
    if (location.state && location.state.page) {
      page = location.state.page;
      setSelectedItem(page);
      
    }
    
   
    console.log(selectedItem);
  }, [location.state]);
  

  return (
    <div className="main">
    <div className="row">
      <div className="col-md-4 leftnav">
        <PersonalLeftComponent/>
      </div>
      <div className="col-12 col-md-8 maindash">
      {selectedItem === 'mainprofile' && <Profile/>}
      {selectedItem === 'profile' && <Profile/>}
      {selectedItem === 'messages' && <Messages/>}
      {selectedItem === 'reference' && <Reference/>}
      {selectedItem === 'setting' && <Settings/>}
      {selectedItem === 'feedback' && <FeedBack/>}
      {selectedItem === 'notification' && <Notification/>}
      </div>
    </div>
  </div>
  
  );
};

export default MainPersonal;
