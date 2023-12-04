import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../../images/personal.png";
import bell from "../../images/Bell.png";
import star from "../../images/star_outline.png";
import profileuser from "../../images/User_alt_light.png";
import review from "../../images/reviews.png";
import settings from "../../images/Setting_line.png";
import "../../css/Mainpage.css"

const PersonalLeftComponent = () => {
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
                        <div className="dashtitle">Personal</div>
                    </div>
                </div>
                <div className="row dashleft">
                    <div className="col-md-12 list-li" onClick={() => handleItemClick('profile', '5')}>
                       <img src={profileuser} alt=""  className='navicon'/>
                        <elem className="listp">Profie</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('messages', '5')}>
                    <img src={profileuser} alt=""  className='navicon'/>
                        <elem className="listp">Messages</elem>
                    </div>


                    <div className="col-md-12 list-li" onClick={() => handleItemClick('notification', '5')}>
                    <img src={bell} alt=""  className='navicon'/>
                        <elem className="listp">Notifications</elem>
                        
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('feedback', '5')}>
                    <img src={review} alt=""  className='navicon'/>
                        <elem className="listp">Feedbacks</elem>
                        
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('reference', '5')}>
                    <img src={star} alt=""  className='navicon'/>
                        <elem className="listp">References</elem>
                        
                    </div>


                    <div className="col-md-12 list-li" onClick={() => handleItemClick('setting', '5')}>
                    <img src={settings} alt=""  className='navicon'/>
                        <elem className="listp">Settings</elem>
                        
                    </div>
                   

                  

                </div>

            </div>
        </div>
    );
};

export default PersonalLeftComponent;
