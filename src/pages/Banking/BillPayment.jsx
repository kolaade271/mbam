import React, { useState } from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import SuccessComponent from '../../components/pages/SuccessComponent';

const BillPayment = () => {
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
                                Bill Payment
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
                                <div className="hdtitle">
                                    {stage}
                                </div>
                            </div>
                            )}

                            <div className="row balinfo">
                                <div className="col-md-4">
                                    {getBillType === 1 && (
                                        <div className="billtype">
                                            <div className="bilsds" onClick={() => handleBillStageeClick('Electricity')}>
                                                <div className="row rowdbil">
                                                    <div className="col-md-2 col-3">
                                                         <div className='bfd'>
                                                            <svg className='centered' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M13 18.5H11V21.5H13V18.5Z" fill="white" />
                                                                <path d="M5 10.5H2V12.5H5V10.5Z" fill="white" />
                                                                <path d="M22 10.5H19V12.5H22V10.5Z" fill="white" />
                                                                <path d="M17.3012 15.8943L15.8941 17.3014L18.0154 19.4227L19.4225 18.0156L17.3012 15.8943Z" fill="white" />
                                                                <path d="M6.70547 15.8872L4.58417 18.0085L5.9913 19.4156L8.1126 17.2943L6.70547 15.8872Z" fill="white" />
                                                                <path d="M15 7.52V2.5H9V7.52C7.79 8.44 7 9.87 7 11.5C7 14.26 9.24 16.5 12 16.5C14.76 16.5 17 14.26 17 11.5C17 9.87 16.21 8.44 15 7.52ZM11 4.5H13V6.6C12.68 6.54 12.34 6.5 12 6.5C11.66 6.5 11.32 6.54 11 6.6V4.5Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-6">
                                                        Electricity
                                                    </div>
                                                    <div className="col-md-4 col-4">

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bilsds" onClick={() => handleBillStageeClick('Internet')}>
                                                <div className="row rowdbil">
                                                    <div className="col-md-2 col-3">
                                                        <div className='bfd'>
                                                            <svg className='centered' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M1 8.77711L3 10.7771C7.97 5.80711 16.03 5.80711 21 10.7771L23 8.77711C16.93 2.70711 7.08 2.70711 1 8.77711ZM9 16.7771L12 19.7771L15 16.7771C13.35 15.1171 10.66 15.1171 9 16.7771ZM5 12.7771L7 14.7771C9.76 12.0171 14.24 12.0171 17 14.7771L19 12.7771C15.14 8.91711 8.87 8.91711 5 12.7771Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-6">
                                                        Internet
                                                    </div>
                                                    <div className="col-md-4 col-4">

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bilsds" onClick={() => handleBillStageeClick('tv')}>
                                                <div className="row rowdbil">
                                                    <div className="col-md-2 col-3">
                                                        <div className='bfd'>
                                                            <svg className='centered' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M20 3H4C2.9 3 2 3.9 2 5V17C2 18.1 2.9 19 4 19H8V21H16V19H20C21.1 19 21.99 18.1 21.99 17L22 5C22 3.9 21.1 3 20 3ZM20 17H4V5H20V17ZM5 14V16H7C7 14.89 6.11 14 5 14ZM5 11V12.43C6.97 12.43 8.57 14.03 8.57 16H10C10 13.24 7.76 11 5 11ZM5 8V9.45C8.61 9.45 11.55 12.38 11.55 16H13C13 11.58 9.41 8 5 8Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-6">
                                                        TV
                                                    </div>
                                                    <div className="col-md-4 col-4">

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bilsds" onClick={() => handleBillStageeClick('Betting')}>
                                                <div className="row rowdbil">
                                                    <div className="col-md-2 col-3">
                                                        <div className='bfd'>
                                                            <svg className='centered' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7.5 18C6.67 18 6 17.33 6 16.5C6 15.67 6.67 15 7.5 15C8.33 15 9 15.67 9 16.5C9 17.33 8.33 18 7.5 18ZM7.5 9C6.67 9 6 8.33 6 7.5C6 6.67 6.67 6 7.5 6C8.33 6 9 6.67 9 7.5C9 8.33 8.33 9 7.5 9ZM12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5ZM16.5 18C15.67 18 15 17.33 15 16.5C15 15.67 15.67 15 16.5 15C17.33 15 18 15.67 18 16.5C18 17.33 17.33 18 16.5 18ZM16.5 9C15.67 9 15 8.33 15 7.5C15 6.67 15.67 6 16.5 6C17.33 6 18 6.67 18 7.5C18 8.33 17.33 9 16.5 9Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-6">
                                                        Betting
                                                    </div>
                                                    <div className="col-md-4 col-4">

                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    )}

                                    {stage === "Electricity" && (
                                        <div className="electricpay">

                                            <div className="" >
                                                <div className="row ">
                                                    <div className="">
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label">Select Provider</label>
                                                            <select className=" form-control form-select formbill formbilla" aria-label="Default select example">
                                                                <option selected>Select </option>
                                                                <option value="1">EKO</option>
                                                                <option value="2">IBDEC</option>
                                                                <option value="3">NIGER</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row ">
                                                    <div className="">
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label">Metre Number</label>
                                                            <input type="email" className="form-control formbill" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row ">
                                                    <div className="">
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label">Select Package</label>
                                                            <select className=" form-control form-select formbill formbilla" aria-label="Default select example">
                                                                <option selected>Select </option>
                                                                <option value="1">PREPAID</option>
                                                                <option value="2">POSTPAID</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row ">
                                                    <div className="">
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label">Amount</label>
                                                            <input type="text" className="form-control formbill" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn rgbutton" onClick={() => handlePayClick(99)}>
                                                    Pay
                                                </button>
                                            </div>
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

export default BillPayment;