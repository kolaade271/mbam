import React, { useState } from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
const AboutUs = () => {
   
    return (
        <div className="main">
               <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle titlepadding">
                            <div className="">Information</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header mainc">
                            <div className="hdtitle">
                                <div className="row shophead">
                                    <div className="col-6">About US -Mbam</div>
                                </div>
                            </div>
                        </div>
                      

                        <div className="row ppay">
<p>Mbam is designed as a secure, real-time, cashless ecosystem to solve practical
     challenges faced by its users in resource allocation globally.
      This could be money allocation, service delivery and 
    fund raising by entrepreneurs or project funding by investors.</p>
    <p>Mbam empowers the unbanked in the community through the conservation and 
        appreciation of wealth within its cultural ecosystem.</p>
        <p>The core vision is to provide a solution that enables
             community members to carry out transactions in a secure efficient manner
              everywhere irrespective of where they are across the globe. 
              The participative engagement on the platform then leads to more opportunities
               for participants and enhance the capacity 
            for real economic growth through local and cross border commerce.</p>
            <p>Mbam aims to be the one-stop shop for its community of users.</p>
                        </div>


                    </div>

                </div>

            </div>

         
        </div>
    );
};

export default AboutUs;
