import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import radion from "../../images/radio.png"
const HelpInfo = () => {

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
                                    <div className="col-6">Customized MBAM Help policy </div>
                                </div>
                            </div>
                        </div>


                        <div className="row ppay">
                            <p>Welcome to the Mbam app. This is a mobile app to allow
                                you to make cash transfer over the transfer over the world.</p>

                            <p><img src={radion} className='radion' /> <span>Make payments</span></p>
                            <p><img src={radion} className='radion' /> <span>Receive payments</span></p>
                            <p><img src={radion} className='radion' /> <span>Accept Payment requests</span></p>
                            <p><img src={radion} className='radion' /> <span>Receive QR payment (Tickets)</span></p>
                            <p><img src={radion} className='radion' /> <span>Manage your Vouchers</span></p>
                            <p><img src={radion} className='radion' /> <span>Check your account information (balance, payment history, etc.)</span></p>
                            <p><img src={radion} className='radion' /> <span>Search for other users</span></p>
                             <p><img src={radion} className='radion' /> <span>View profiles of other users</span></p>
                             <p><img src={radion} className='radion' /> <span>View organisation pages</span></p>
                             <p><img src={radion} className='radion' /> <span>Manage your contacts</span></p>
                             <p><img src={radion} className='radion' /> <span>Password management (Fingerprint support)</span></p>
                             <p><img src={radion} className='radion' /> <span>Multiple users support</span></p>
                             <p>The mobile App has menu bar on the top. In this menu bar the following are displayed:</p>

                             <p><img src={radion} className='radion' /> <span>Back, tap on this icon will take you to the previous page.</span></p>
                             <p><img src={radion} className='radion' /> <span>Home, tap on the home icon it will take you to the home page with the shortcut icons to all operations.</span></p>
                             <p><img src={radion} className='radion' /> <span>Logout, this icon is only visible when you are logged in. Tap on this icon it will log you out of Cyclos, so you are sure nobody can access your account.</span></p>



                        </div>


                    </div>

                </div>

            </div>


        </div>
    );
};

export default HelpInfo;
