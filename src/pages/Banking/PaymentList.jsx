import React, { useState } from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import SuccessComponent from '../../components/pages/SuccessComponent';
import users from "../../images/users.png"
import qr from "../../images/qr.png"
import qrcode from "../../images/qrcode.png"


const PaymentList = () => {
    const [getBillType, setBilltype] = useState(1);
    const [stage, setStage] = useState(0);
    const [payState, setPay] = useState(0);

    const handleBillStageeClick = (data) => {
        setStage(data);
        if (getBillType === 1) {
        }
        if (getBillType < 5) {
            console.log('Form submitted:', data);
            setBilltype(getBillType + 1);
        } else {
            console.log('Form submitted:', getBillType);
        }
    };

    const handleBackClick = () => {
        setBilltype(1);
        setStage(0);
    };

    const handlePayClick = (paydata) => {
        setPay("completed")
        setStage(paydata);
    };


    return (
        <>
            {stage !== 99 && (<div className="main">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card sendhead">
                            {stage !== 0 && (<div className="col-md-1 d-flex justify-content-between align-items-center pot" onClick={handleBackClick}>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M11.9229 14.3255L10.7429 15.5781L4.07619 8.50097L10.7429 1.42383L11.9229 2.67648L6.43619 8.50097L11.9229 14.3255Z" fill="#7A7A7A" />
                                </svg></span>Back
                            </div>
                            )}

                            <div className="sendtitle titlepadding">
                                {stage !== 0 ? stage : "Payment"}


                            </div>
                        </div>

                    </div>
                    <div className="col-md-12">

                    </div>
                </div>

                <div className="row" style={{ marginTop: "30px" }}>
                    <div className="col-md-12">
                        <div className="card">
                            {stage !== 0 && (<div className="card-header maine">
                                <div className=" shophead ">
                                    {stage}
                                </div>
                            </div>
                            )}

                            <div className="row balinfo">
                                <div className="">
                                    {getBillType === 1 && (
                                        <div className="billtype">
                                            <div className="bilsds2" onClick={() => handleBillStageeClick('Scan QR / Barcode')}>
                                                <div className="row rowdbil">
                                                    <div className="col-md-2 col-3">
                                                        <div className='bfd2'>
                                                            <img src={qr} alt="" className='navicon centered' />
                                                        </div>
                                                    </div>

                                                    <div className="col-8 pml">
                                                        Scan QR / Barcode<br />
                                                        <span className='sml grey'>Open camera to scan</span>
                                                    </div>
                                                    <div className=" col-4">

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="bilsds2" onClick={() => handleBillStageeClick('Scan QR / Barcode')}>
                                                <div className="row rowdbil">
                                                    <div className="col-md-2 col-3">
                                                        <div className='bfd2'>
                                                            <img src={qr} alt="" className='navicon centered' />
                                                        </div>
                                                    </div>

                                                    <div className="col-8 pml">
                                                        Via User<br />
                                                        <span className='sml grey'>Search user to make page</span>
                                                    </div>
                                                    <div className=" col-4">

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="bilsds2" onClick={() => handleBillStageeClick('Scan QR / Barcode')}>
                                                <div className="row rowdbil">
                                                    <div className="col-md-2 col-3">
                                                        <div className='bfd2'>
                                                            <img src={qr} alt="" className='navicon centered' />
                                                        </div>
                                                    </div>

                                                    <div className="col-8 pml">
                                                        Via Login Name<br />
                                                        <span className='sml grey'>Type  username</span>
                                                    </div>
                                                    <div className=" col-4">

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="bilsds2" onClick={() => handleBillStageeClick('Scan QR / Barcode')}>
                                                <div className="row rowdbil">
                                                    <div className="col-md-2 col-3">
                                                        <div className='bfd2'>
                                                            <img src={qr} alt="" className='navicon centered' />
                                                        </div>
                                                    </div>

                                                    <div className="col-8 pml">
                                                        Via Mobile phone<br />
                                                        <span className='sml grey'>Enter user phone number</span>
                                                    </div>
                                                    <div className=" col-4">

                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    )}

                                    {stage === "Scan QR / Barcode" && (
                                        <div className="electricpay">
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <div className="biltrxsuccess2 text-center">
                                                    <p className="sml2">
                                                    Align QR code with the frame to scan
                                                    </p>
                                                    <div>
                                                        <img src={qrcode} alt=""  className='qrcode'/>
                                                    </div>

                                                   
                                                </div>
                                                </div>



                                            <button className="btn rgbutton" onClick={() => handlePayClick(99)}>
                                                Pay
                                            </button>
                                        </div>
                                    )}

                                    {stage === "Internet" && (
                                        <div className="electricpay">
                                            hello {stage}
                                        </div>
                                    )}


                                    {stage === "tv" && (
                                        <div className="electricpay">
                                            hello {stage}
                                        </div>
                                    )}



                                    {stage === "Betting" && (
                                        <div className="electricpay">
                                            hello {stage}
                                        </div>
                                    )}
                                </div>



                            </div>

                        </div>

                    </div>
                </div>
            </div>
            )}
            {payState === "completed" && <SuccessComponent />}
        </>
    );
};

export default PaymentList;