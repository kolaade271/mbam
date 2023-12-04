import React from 'react';
import {useNavigate} from 'react-router-dom';
import bankibuilding from "../../images/bankibuilding.png"
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import img7 from "../../images/7.png";
import img8 from "../../images/8.png";
import img9 from "../../images/9.png";
import img10 from "../../images/img10.png";
import img11 from "../../images/img11.png";
import img12 from "../../images/img12.png";
import img13 from "../../images/img13.png";



const DashboardComponent = (tab) => {
    const navigate = useNavigate();
    

    const handleTabClick = ( tab, page) => {
      navigate(`/dashboard`,{state: { page, tab }});
      
    }; 
    return (
        <div className='main'>
        <div className="row">

            
            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center"   onClick={() => handleTabClick("2","maindata")}> 
                <div className="dasbbox">
                    <img src={bankibuilding} className='dashboximg'  alt='dash' />
                </div>
                <div className="dashtitle">
                Account
                </div>
            </div>

            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center "> 
                <div className="dasbbox">
                    <img src={img1} className='dashboximg'  alt='dash' />
                </div>
                <div className="dashtitle">
                Payment
                </div>
            </div>



            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center "  onClick={() => handleTabClick("2","moneyinout")}> 
                <div className="dasbbox">
                    <img src={img2} className='dashboximg'  alt='dash' />
                </div>
                <div className="dashtitle">
                Money Cash IN/OUT
                </div>
            </div>

            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center "> 
                <div className="dasbbox">
                    <img src={img3} className='dashboximg' alt='dash'  />
                </div>
                <div className="dashtitle">
                Tickets
                </div>
            </div>


            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center"  onClick={() => handleTabClick("3","")}> 
                <div className="dasbbox">
                    <img src={img4} className='dashboximg'  alt='dash' />
                </div>
                <div className="dashtitle">
                Marketplace
                </div>
            </div>


            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center"  onClick={() => handleTabClick("3","mypurchase")}> 
                <div className="dasbbox">
                    <img src={img5} className='dashboximg' alt='dash' />
                </div>
                <div className="dashtitle">
                My purchases
                </div>
            </div>


            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center " onClick={() => handleTabClick("2","users")}> 
                <div className="dasbbox">
                    <img src={img6} className='dashboximg' alt='dash' />
                </div>
                <div className="dashtitle">
                Search users
                </div>
            </div>



            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center " onClick={() => handleTabClick("5","reference")}> 
                <div className="dasbbox">
                    <img src={img7} className='dashboximg' alt='dash' />
                </div>
                <div className="dashtitle">
                References
                </div>
            </div>


            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center " onClick={() => handleTabClick("5","feedback")}> 
                <div className="dasbbox">
                    <img src={img8} className='dashboximg' alt='dash' />
                </div>
                <div className="dashtitle">
                Feedbacks
                </div>
            </div>


            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center "> 
                <div className="dasbbox">
                    <img src={img9} className='dashboximg' alt='dash' />
                </div>
                <div className="dashtitle">
                Show QR code
                </div>
            </div>


            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center "> 
                <div className="dasbbox">
                    <img src={img10} className='dashboximg' alt='dash' />
                </div>
                <div className="dashtitle">
                Helpdesk logs
                </div>
            </div>


            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center "> 
                <div className="dasbbox">
                    <img src={img11} className='dashboximg' alt='dash' />
                </div>
                <div className="dashtitle">
                Remarks
                </div>
            </div>


            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center "  onClick={() => handleTabClick("5","messages")}> 
                <div className="dasbbox">
                    <img src={img12} className='dashboximg' alt='dash' />
                </div>
                <div className="dashtitle">
                Messages
                </div>
            </div>



            <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center text-center " onClick={() => handleTabClick("5","profile")}> 
                <div className="dasbbox">
                    <img src={img13} className='dashboximg' alt='dash' />
                </div>
                <div className="dashtitle">
                Settings
                </div>
            </div>


         
          

        </div>
        </div>
    );
};

export default DashboardComponent;
