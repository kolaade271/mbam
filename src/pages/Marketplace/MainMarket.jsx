import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import MarketLeftComponent from '../../components/pages/MarketLeftComponent';
import Shop from './shop';
import Myproduct from './Myproduct';
import Mysale from './Mysale';
import Categories from './Categories';
import Mypurchase from './Mypurchase';
import Delieverymethod from './Delieverymethod';
import Messages from '../Personal/messages';
import Settings from '../Personal/Settings';

const MainMarket = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('marketplace');

  useEffect(() => {
    let page = "maindata"; 
    setSelectedItem(page);
    if (location.state && location.state.page) {
      page = location.state.page;
      
    }
    setSelectedItem(page);
   
    console.log(selectedItem);
  }, [location.state]);
  

  return (
    <div className="main">
    <div className="row">
      <div className="col-md-4 leftnav">
        <MarketLeftComponent />
      </div>
      <div className="col-12 col-md-8 maindash">
      {selectedItem === 'shop' && <Shop/>}
        {selectedItem === 'maindata' && <Shop/>}
        {selectedItem === 'mysale' && <Mysale/>}
        {selectedItem === 'mypurchase' && <Mypurchase/>}
        {selectedItem === 'myproduct' && <Myproduct/>}
        {selectedItem === 'categories' && <Categories/>}
        {selectedItem === 'marketplace' && <Shop/>}
        {selectedItem === 'settings' && <Settings/>}
        {selectedItem === 'delieverymethod' && <Delieverymethod/>}
        {selectedItem === 'messages' && <Messages/>}
      </div>
    </div>
  </div>
  
  );
};

export default MainMarket;
