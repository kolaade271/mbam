import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css"
import sample1 from "../../images/sample1.png"


const SuccessComponent = () => {
    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle trxstate">
                            Transaction Status
                        </div>
                    </div>

                </div>
                <div className="col-md-12">

                </div>
            </div>

            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">
                    <div className="card">
                        <div className="row balinfo">
                            <div className="col-md-4">
                            </div>

                        </div>

                        <div className="rowdm">
                            <div className="biltrxsuccess text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <p className="">
                                    Paid <elemrnt className="elem">100.00 FCFA</elemrnt> to
                                </p>
                                <img src={sample1} alt="" className='circle' />
                                <p className="sucname">Eric Njolai</p>
                            </div>
                        </div>

                        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: "30px" }}> Payment details</p>
                        <div className="">
                            <div className="paydetails mx-auto">
                                <div className="row">
                                    <div className="col-6">Amount</div>
                                    <div className="col-6 green2" style={{ textAlign: 'right', }}>100.00 FCFA</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Date</div>
                                    <div className="col-8 green2 " style={{ textAlign: 'right' }}>20-06-2021 16:59</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">Payment type</div>
                                    <div className="col-6 green2 " style={{ textAlign: 'right' }}>Member Payment</div>
                                </div>


                            </div>

                        </div>




                    </div>

                </div>
            </div>
        </div>
    );
};

export default SuccessComponent;
