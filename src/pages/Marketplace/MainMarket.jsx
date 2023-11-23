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
import Settings from './Settings';

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
        <div className="col-md-4">
          <MarketLeftComponent />
        </div>
        <div className="col-md-8">
        {/* {selectedItem === 'maindata' && <Shop/>} */}
          {/* {selectedItem === 'sendmoney' &&<Sendmoney/>}
          {selectedItem === 'paymentAuth' &&<PaymentAuth/>}
          {selectedItem === 'cashout' &&<Cashout/>}
          {selectedItem === 'paypalTopup' &&<PaypalTopup/>}
          {selectedItem === 'billpayment' &&<BillPayment/>} */}
          
         {selectedItem === 'mysale' &&<Mysale/>}
         {selectedItem === 'mypurchase' &&<Mypurchase/>}
         {selectedItem === 'myproduct' &&<Myproduct/>}
         {selectedItem === 'categories' &&<Categories/>}
          {selectedItem === 'marketplace' && <Shop/>}
          {selectedItem === 'settings' && <Settings/>}

        </div>
      </div>
    </div>
  );
};

export default MainMarket;
