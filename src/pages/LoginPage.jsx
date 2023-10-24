
import "../css/LandingPage.css";
import HeaderLoginPage from "../components/HeaderLandingPage";
import 'react-best-tabs/dist/index.css';

const LoginPage = () => {
    return (
        <div className="">
            <HeaderLoginPage />
            <div className="wid">
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
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Login Name</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Login Password</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btf">Login</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default LoginPage;
