import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";

const PaypalTopup = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header maine">
                            <div className="hdtitle">
                                Recharge Mbam with PayPal
                            </div>
                        </div>
                        <div className='paypaltitle'>
                            <p className='pbody'>Put the amount that you want to Top-Up, then provide your PayPal credentials.
                                You will be connected automatically to your PayPal account to make the payment.</p>
                        </div>


                        <div className="row ppay">
                            <div className="col-3 d-none d-sm-block sendsubtitle">
                                Amount
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5"></div>
                                <br/>
                                <div className="col-md-7 d-flex justify-content-between align-items-center">
                                    <span></span>
                                    <button className="btn rgbutton">
                                        Submit
                                    </button>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>


        </div>
    );
};

export default PaypalTopup;
