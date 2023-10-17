
import "../css/LandingPage.css";
import mbamlarge from "../images/mbamlarge.png"
import HeaderLoginPage from "../components/HeaderLandingPage";
import Tabs, { Tab } from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt, faStore, faFileInvoice } from '@fortawesome/free-solid-svg-icons'

const LoginPage = () => {
    return (
        <div className="">
            <HeaderLoginPage />
            <div className="wid">
                <Tabs activeTab="1" className="mt-3 wid" ulClassName="" activityClassName="bg-success" onClick={(event, tab) => console.log(event, tab)} >
                    <Tab title={<>
                        <div>
                            <FontAwesomeIcon icon={faHomeAlt} />
                            <span> Home</span>
                        </div></>} className="mr-3">

                        <div className="pdm">
                            <div className="row ">
                                <div className="col-sm-12 col-md-5  d-none d-sm-block ">
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
                                        <div className="row ">
                                            <div className="col-md-7">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Login Name</label>
                                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Login Password</label>
                                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btf">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab title={<> <div>
                        <FontAwesomeIcon icon={faStore} />
                        <span> Categories</span>
                    </div></>} className="mr-3">
                        <div className="mt-3">
                            Tab 2 content
                        </div>
                    </Tab>

                    <Tab title={<> <div>
                        <FontAwesomeIcon icon={faFileInvoice} />
                        <span> Information</span>
                    </div></>} className="mr-3">
                        <div className="mt-3">
                            Tab 3 content
                        </div>
                    </Tab>
                </Tabs>


            </div>
        </div>
    );
};

export default LoginPage;
