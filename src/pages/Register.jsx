import React, { useState } from 'react';
import "../css/LandingPage.css";
import HeaderLoginPage from "../components/HeaderLandingPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateBackward } from '@fortawesome/free-solid-svg-icons'
import OtpInput from 'react18-input-otp';

const RegisterPage = () => {
    const [otp, setOtp] = useState('');
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const handleContinueClick = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            // Handle form submission here
            console.log('Form submitted:', formData);
            // Add your API call or form submission logic here
        }
    };


    return (
        <div className="">
            <HeaderLoginPage />
            <div className="wid">
                <div className="pdm">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="card ccard" style={{ width: '40rem' }}>
                            <div className="card-header cheader">
                                {step > 1 && <FontAwesomeIcon icon={faArrowRotateBackward} className="back-arrow" onClick={() => setStep(step - 1)} />}
                                {step === 1 && (
                                    <> Get registered</>
                                )}

                                {step === 2 && (
                                    <> User Verification</>
                                )}

                                {step === 3 && (
                                    <> Provide your Information</>
                                )}

                                {step === 4 && (
                                    <> Tell us a bit about your store</>
                                )}

                            </div>
                            <div className="card-body">
                                {/* Step 1 */}
                                {step === 1 && (
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                Name
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" id="" placeholder="john Doe" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                Email
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                Login password
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="password" className="form-control" id="" placeholder="**********" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* Step 2 */}
                                {step === 2 && (
                                    <div className="">
                                        <div className="ttm">Enter Code</div>
                                        <div className="ttm2">We’ve sent you the verification code to your mobile number</div>
                                        <div align="center">
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                                                {/* Other content */}
                                                <OtpInput value={otp} onChange={handleChange} numInputs={4} inputStyle={{ height: "60px", width: "60px" }} separator={<span>-</span>} />
                                                {/* Other content */}
                                            </div>
                                            <button className="btn rg" onClick={handleContinueClick}>
                                                Verify
                                            </button>
                                        </div>



                                    </div>
                                )}
                                {/* Step 3 */}
                                {step === 3 && (
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                Name
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" value={"KOLA  PELUMI"} className="form-control" id="" placeholder="john Doe" readOnly={true} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                Email
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                Mobile Phone
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="phone" className="form-control" placeholder="+2348099838822" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                Address
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="eg Texas" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                City
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="Houston" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                City
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <select className=" form-control form-select" aria-label="Default select example">
                                                        <option selected>Select Country</option>
                                                        <option value="1">United States</option>
                                                        <option value="2">Canada</option>
                                                        <option value="3">Nigeria</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-4 d-none d-sm-block ttex">
                                                Zip Code
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" id="" placeholder="eg 20003848" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="row">
                                    <div className="col-md-5"></div>
                                    <div className="col-md-7 d-flex justify-content-between align-items-center">

                                        {step === 2 ? "" :
                                            <>
                                                <span>Step {step} of 4</span>
                                                <button className="btn rg" onClick={handleContinueClick}>
                                                    {step < 4 ? 'Continue' : 'Submit'}
                                                </button>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
