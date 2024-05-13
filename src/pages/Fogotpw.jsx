import React, { useState } from 'react';
import "../css/LandingPage.css";
import HeaderLoginPage from "../components/HeaderLandingPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateBackward } from '@fortawesome/free-solid-svg-icons'
import OtpInput from 'react18-input-otp';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiFetcher, SaveDataStorage } from '../auth/connect';
import { AlertMe } from '../components/alert';
import { Step1ValidationSchema, Step2ValidationSchema, Step3ValidationSchema } from '../auth/resetValidate';

const ForgotPassword = () => {
    const [otp, setOtp] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };
    const [step, setStep] = useState(1);

    return (
        <div className="">
            <HeaderLoginPage />
            <div className="wid">
                <ToastContainer />
                <div className="pdm">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="card ccard" style={{ width: '40rem' }}>
                            <div className="card-header cheader">
                                {step > 1 && <FontAwesomeIcon icon={faArrowRotateBackward} className="back-arrow" onClick={() => setStep(step - 1)} />}
                                {step === 1 && (
                                    <> Reset Password</>
                                )}

                                {step === 2 && (
                                    <> User Verification</>
                                )}

                                {step === 3 && (
                                    <> New Password</>
                                )}

                            </div>
                            <div className="card-body">
                                <Formik
                                    initialValues={{
                                        email: '',
                                        otp: otp, // Initialize otp field here
                                        newPassword: '',
                                        confirmNewPassword: ''
                                    }}
                                    validationSchema={step === 1 ? Step1ValidationSchema : (step === 2 ? Step2ValidationSchema : Step3ValidationSchema)}
                                    onSubmit={async (values, { setSubmitting, setFieldError }) => {
                                        setLoading(true);
                                        try {
                                            if (step === 1) {
                                                const result = await ApiFetcher(`user/forgot-password/${values?.email}`, "get", null, null, { deviceType: "web" }, null, null);
                                                if (result?.status === 200) {
                                                    setToken(result);
                                                    setStep(step + 1);
                                                }
                                                else {
                                                    AlertMe(false, result);
                                                }
                                            }
                                            else if (step === 2) {
                                                const result = await ApiFetcher(`user/verify/${token?.data?.id}/${otp}`, "get", null, null, { deviceType: "web" }, null, null);
                                                if (result?.status === 200) {
                                                    setToken(result)
                                                    setStep(step + 1);
                                                }
                                                else {
                                                    AlertMe(false, result);
                                                }
                                            }
                                            else if (step === 3) {
                                                const data = {
                                                    newPassword:values?.confirmNewPassword
                                                }
                                               
                                                const result = await ApiFetcher(`user/new-password/${token?.data?.id}`, "put", data, null, { deviceType: "web" }, null, null);
                                                if (result?.status === 200) {
                                                    AlertMe(true, result?.message);
                                                    setTimeout(() => {
                                                        window.location.href = "/dashboard";
                                                    }, 500000);
                                                   
                                                }
                                                else {
                                                    AlertMe(false, result);
                                                }
                                            }
                                        } catch (error) {
                                            console.error(error);
                                            AlertMe(false, "Please Try Again");
                                            setSubmitting(false);
                                        }
                                        setLoading(false);
                                    }}
                                >
                                    {({ values }) => ( // Accessing Formik values to update otp input value
                                        <Form>
                                            {/* Step 1 */}
                                            {step === 1 && (
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-4 d-none d-sm-block ttex">
                                                            Email
                                                        </div>
                                                        <div className="col-md-8 col-sm-12">
                                                            <div className="mb-3">
                                                                <Field type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                                <ErrorMessage name="email" component="div" className="error-message" />
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
                                                            <OtpInput value={otp} onChange={handleChange} numInputs={4} inputStyle={{ height: "60px", width: "60px" }} separator={<span>-</span>} />
                                                        </div>
                                                        <ErrorMessage name="otp" component="div" className="error-message" /> {/* Display validation error */}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 3 */}
                                            {step === 3 && (
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-4 d-none d-sm-block ttex">
                                                            New  password
                                                        </div>
                                                        <div className="col-md-8 col-sm-12">
                                                            <div className="mb-3">
                                                                <Field type="password" name="newPassword" className="form-control" placeholder="**********" />
                                                                <ErrorMessage name="newPassword" component="div" className="error-message" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-4 d-none d-sm-block ttex">
                                                            New  password
                                                        </div>
                                                        <div className="col-md-8 col-sm-12">
                                                            <div className="mb-3">
                                                                <Field type="password" name="confirmNewPassword" className="form-control" placeholder="**********" />
                                                                <ErrorMessage name="confirmNewPassword" component="div" className="error-message" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="row">
                                                <div className="col-md-5"></div>
                                                <div className="col-md-7 d-flex justify-content-between align-items-center">
                                                    <span>Step {step} of 3</span>
                                                    <button type="submit" className="btn rg" disabled={loading}>
                                                        {step < 2 ? (loading ? "Loading" : "Continue") : (loading ? "Loading" : "Submit")}
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
