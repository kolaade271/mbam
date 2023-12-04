import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../../images/info.png";
import help from "../../images/help.png"
import about from "../../images/about.png"
import remark from "../../images/remark.png"
import "../../css/Mainpage.css"

const InformationLeftComponent = () => {
    const navigate = useNavigate();

    const handleItemClick = (page, tab) => {
        if(page === "cart"){
            navigate(`/cart`, { state: { page, tab } });
        }
        else{
            navigate(`/dashboard`, { state: { page, tab } });
        }
       
    };

    return (
        <div className=''>
            <div className="card leftcard">
                <div className="card-header header-card">
                    <div className="carddashboximg">
                        <img src={img1} className='card-circle' alt='dash' />
                        <div className="dashtitle">Information</div>
                    </div>
                </div>
                <div className="row dashleft">
                

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('help', '4')}>
                    <img src={help}  className='navicon'/>
                        <elem className="listp">Help Logs</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('about', '4')}>
                    <img src={about}  className='navicon'/>
                        <elem className="listp">About Us</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('remark', '4')}>
                    <img src={remark}  className='navicon'/>
                        <elem className="listp">Remark</elem>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default InformationLeftComponent;
