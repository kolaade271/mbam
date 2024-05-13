import React from "react";
import "../css/LandingPage.css";
import HeaderLoginPage from "../components/HeaderLandingPage";
import { ApiFetcher,SaveDataStorage } from "../auth/connect";
import useReusableDataFetcher from "../auth/refetch";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AlertMe } from '../components/alert';

const LoginPage = () => {
    return (
        <div className="">
            <HeaderLoginPage />
            <div className="wid">
                <ToastContainer/>
                <div className="pdm">
                    <div className="row ">
                        <div className="col-sm-12 col-md-5 d-none d-sm-block ">
                            <div className="card ccm">
                                <div className="ccmtitle">Welcome Back</div>
                                <div className="ccmsubtitle">Welcome to the White label mobile
                                    app. This is a mobile app to
                                    allow you to make the transfer over the world.
                                </div>
                                <div className="snp">Click here to register</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ppmx">
                                <div className="sintitle"> Sign In to your Mbam Account</div>
                                <Formik
                                    initialValues={{
                                        credential: '',
                                        password: '',
                                    }}
                                    validationSchema={Yup.object({
                                        credential: Yup.string().email('Invalid email address').required('Email is required'),
                                        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
                                    })}
                                    onSubmit={async (values, { setSubmitting, setFieldError }) => {
                                        try {
                                            const result = await ApiFetcher(`user/login`, "post", values, null, { deviceType: "web" }, null, null);
                                            if(result.status === 200){
                                                const loadprofile = await ApiFetcher(`user/info`, "get", null, null,null, null, result?.data?.token);
                                                if(loadprofile.status === 200){
                                                    SaveDataStorage("token", result?.data?.token);
                                                    AlertMe(true, result?.message);
                                                    SaveDataStorage("profile",JSON.stringify(loadprofile?.data));
                                                   
                                                  
                                                     window.location.href = "/dashboard";
                                                }
                                                else{
                                                    console.log(result?.data?.token);
                                                    AlertMe(false, "Unable to load profile please try again");
                                                }
                                            }
                                            else{
                                                console.log(result);
                                                AlertMe(false, result);
                                            }
                                           
                                        } catch (error) {
                                            console.error(error);
                                            AlertMe(false, "Please Try Again");
                                        }
                                    }}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <div className="row ">
                                                <div className="col-md-7">
                                                    <div className="mb-3">
                                                        <label htmlFor="email" className="form-label">Login Name</label>
                                                        <Field type="email" name="credential" className="form-control" placeholder="name@example.com" />
                                                        <ErrorMessage name="credential" component="div" className="error-message" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="mb-3">
                                                        <label htmlFor="password" className="form-label">Login Password</label>
                                                        <Field type="password" name="password" className="form-control" placeholder="Password" />
                                                        <ErrorMessage name="password" component="div" className="error-message" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btf" disabled={isSubmitting}>
                                                {isSubmitting ? "Loading....." : "Login"}
                                            </button>
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

export default LoginPage;
