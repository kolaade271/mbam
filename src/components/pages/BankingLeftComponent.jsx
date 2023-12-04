import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../../images/1.png";
import arrowright from "../../images/arrowright.png"
import arrowleft from "../../images/arrowleft.png"
import arrowup from "../../images/arrowup.png"
import cardpay from "../../images/cardpay.png"
import banking from "../../images/banking.png"
import marketa from "../../images/marketa.png"
import "../../css/Mainpage.css"

const BankingLeftComponent = () => {
    const navigate = useNavigate();
    let page = sessionStorage.getItem('page') || 'main';

    const handleItemClick = (page, tab) => {
     
            navigate(`/dashboard`, { state: { page, tab } });
         
    };

    return (
        <div className=''>
            <div className="card leftcard">
                <div className="card-header header-card">
                    <div className="carddashboximg">
                        <img src={banking} className='card-circle' alt='dash' />
                        <div className="dashtitle">Banking</div>
                    </div>
                </div>
                <div className="row dashleft">
                    <div className="col-md-12 list-li" onClick={() => handleItemClick('marketplace', '3')}>
                    <img src={marketa}  className='navicon'/>
                        <elem className="listp">Marketplace</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('sendmoney', '2')}>
                        <img src={arrowright}  className='navicon'/>
                        <elem className="listp">Send Money</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('cashout', '2')}>
                    <img src={arrowleft}  className='navicon'/>
                        <elem className="listp">Cash Out</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('paymentAuth', '2')}>
                    <img src={arrowup}  className='navicon'/>
                        <elem className="listp">Payment Authorizaions</elem>
                    </div>

                 

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('paypalTopup', '2')}>
                    <img src={arrowright}  className='navicon'/>
                        <elem className="listp">Top-Up Mbam with PayPal</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('billpayment', '2')}>
                    <img src={cardpay}  className='navicon'/>
                        <elem className="listp">Bill Payment</elem>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default BankingLeftComponent;
