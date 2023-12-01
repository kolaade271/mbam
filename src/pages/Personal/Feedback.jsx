import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/sample1.png"

const FeedBack = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle titlepadding">
                            <div className="">Feedbacks </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-6">
                                       <b>Review Notifications</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="feedbacks">
                                        <span>
                                            <img src={samplet} alt="" className='messageicon' />
                                        </span>
                                        <div>
                                            <b className='smlnme'>Review alert</b><br />
                                            <span className='smlmsg'>
                                            Marry, left a 5 star review for Gucci Bag
                                            </span>
                                        </div>
                                    
                                    </div>

                                    <div className="feedbacks">
                                        <span>
                                            <img src={samplet} alt="" className='messageicon' />
                                        </span>
                                        <div>
                                            <b className='smlnme'>New order</b><br />
                                            <span className='smlmsg'>
                                            Someone just purchased your product. Gucci Bag #1022N2
                                            </span>
                                        </div>
                                    
                                    </div>

                                    <div className="feedbacks">
                                        <span>
                                            <img src={samplet} alt="" className='messageicon' />
                                        </span>
                                        <div>
                                            <b className='smlnme'>Review alert</b><br />
                                            <span className='smlmsg'>
                                            Marry, left a 5 star review for Gucci Bag
                                            </span>
                                        </div>
                                    
                                    </div>
                                    
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

export default FeedBack;
