import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import BankingLeftComponent from '../../components/pages/BankingLeftComponent';
import Sendmoney from './sendmoney';
import BankingIndex from './BankingIndex';
import PaypalTopup from './PaypalTop';
import Cashout from './Cashout';
import PaymentAuth from './Payment';
import BillPayment from './BillPayment';
const MainBanking = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

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
          <BankingLeftComponent /> 
        </div>
        <div className="col-md-8">
        {selectedItem === 'maindata' && <BankingIndex/>}
          {selectedItem === 'sendmoney' &&<Sendmoney/>}
          {selectedItem === 'paymentAuth' &&<PaymentAuth/>}
          {selectedItem === 'cashout' &&<Cashout/>}
          {selectedItem === 'paypalTopup' &&<PaypalTopup/>}
          {selectedItem === 'billpayment' &&<BillPayment/>}
          
        </div>
      </div>
    </div>
  );
};

export default MainBanking;
