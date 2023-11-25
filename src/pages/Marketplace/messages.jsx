import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/samplet.png"

const Messages = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle">
                            <div className="">Messages</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-6">
                                            All
                                        </div>

                                        <div className="col-6 custom-table-header4">.</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    ssks
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">

                            <div className="card">
                                <div className="card-header df">
                                    <div><b>Name</b></div>
                                    <div className='smdl'>Last seen: Just now | Local time Seo 10, 9:08 M</div>
                                </div>

                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>


                    <br />


                </div>


            </div>

        </div>
    );
};

export default Messages;
