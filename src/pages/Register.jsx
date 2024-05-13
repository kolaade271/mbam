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
const RegisterPage = () => {
    const [otp, setOtp] = useState('');
    const [token, setToken] = useState(false);
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
                                    <> Get registered</>
                                )}

                                {step === 2 && (
                                    <> User Verification</>
                                )}

                            </div>
                            <div className="card-body">
                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        userName: '',
                                        email: '',
                                        password: '',
                                        phoneNumber: ''
                                    }}
                                    validationSchema={Yup.object({
                                        firstName: Yup.string().required('First name is required'),
                                        lastName: Yup.string().required('Last name is required'),
                                        userName: Yup.string().required('Username is required'),
                                        email: Yup.string().email('Invalid email address').required('Email is required'),
                                        password: Yup.string()
                                            .required('Password is required')
                                            .matches(
                                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/,
                                                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                                            ),

                                        phoneNumber: Yup.string().required('Phone number is required'),

                                    })}
                                    onSubmit={async (values, { setSubmitting, setFieldError }) => {
                                        setLoading(true)
                                        try {
                                            if (step === 1) {

                                                const result = await ApiFetcher(`user/registration`, "post", values, null, { deviceType: "web" }, null, null);
                                                console.log(result);
                                                if (result?.status === 200) {
                                                    setToken(result);
                                                    setStep(step + 1);
                                                }
                                                else {
                                                    AlertMe(false, result);
                                                }
                                            }
                                            else {
                                                const result = await ApiFetcher(`user/verify/${token?.data?.id}/${otp}`, "get", null, null, { deviceType: "web" }, null, null);
                                                console.log(result);
                                                if (result?.status === 200) {
                                                    const loadprofile = await ApiFetcher(`user/info`, "get", null, null,null, null, result?.data?.token);
                                                    if(loadprofile.status === 200){
                                                        SaveDataStorage("token", result?.data?.token);
                                                        setToken(result);
                                                        AlertMe(true, 'success');
                                                        SaveDataStorage("profile",JSON.stringify(loadprofile?.data));
                                                        window.location.href = "/dashboard";
                                                    }
                                                    else{
                                                        AlertMe(false, "Unable to load profile please try again");
                                                    }
                                                    console.log(result);
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
                                        setLoading(false)
                                    }}
                                >
                                    <Form>
                                        {/* Step 1 */}
                                        {step === 1 && (
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-4 d-none d-sm-block ttex">
                                                        Firstname
                                                    </div>
                                                    <div className="col-md-8 col-sm-12">
                                                        <div className="mb-3">
                                                            <Field type="text" name="firstName" className="form-control" placeholder="john" />
                                                            <ErrorMessage name="firstName" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 d-none d-sm-block ttex">
                                                        Lastname
                                                    </div>
                                                    <div className="col-md-8 col-sm-12">
                                                        <div className="mb-3">
                                                            <Field type="text" name="lastName" className="form-control" id="" placeholder="Doe" />
                                                            <ErrorMessage name="lastName" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 d-none d-sm-block ttex">
                                                        Username
                                                    </div>
                                                    <div className="col-md-8 col-sm-12">
                                                        <div className="mb-3">
                                                            <Field type="text" name="userName" className="form-control" id="" placeholder="john121" />
                                                            <ErrorMessage name="userName" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                </div>
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

                                                <div className="row">
                                                    <div className="col-4 d-none d-sm-block ttex">
                                                        Phone Number
                                                    </div>
                                                    <div className="col-md-8 col-sm-12">
                                                        <div className="mb-3">
                                                            <Field type="text" validate={(value) => {
                                                                const phoneNumberRegex = /^\d+$/;
                                                                if (!phoneNumberRegex.test(value)) {
                                                                    return 'Phone number must contain only numbers';
                                                                }
                                                            }} name="phoneNumber" className="form-control" placeholder="2348128282828" />
                                                            <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 d-none d-sm-block ttex">
                                                        Login password
                                                    </div>
                                                    <div className="col-md-8 col-sm-12">
                                                        <div className="mb-3">
                                                            <Field type="password" name="password" className="form-control" id="" placeholder="**********" />
                                                            <ErrorMessage name="password" component="div" className="error-message" />
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
                                                </div>
                                            </div>
                                        )}

                                        <div className="row">
                                            <div className="col-md-5"></div>
                                            <div className="col-md-7 d-flex justify-content-between align-items-center">
                                                <span>Step {step} of 2</span>
                                                <button type="submit" className="btn rg">
                                                    {step < 2 ? (loading ? "Loading" : "Continue") : (loading ? "Loading" : "Submit")}
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
