import React,{useState} from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import OtpInput from 'react18-input-otp';

const PinComponent = () => {
    const [otp, setOtp] = useState('');
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    return (
        <div className="main">
             <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle titlepadding">
                            <div className="">Confirm Transaction Pin</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header mainc">
                            <div className="hdtitle">
                                <div className="row shophead">
                                    <div className="col-6">Enter PIN </div>
                                </div>
                            </div>
                        </div>


                        <div className="row ppay">
                        <div className="">
                                        <div className="ttm"><b>Enter your 4 digit PIN</b></div>
                                        <br/>
                                        <div align="center">
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom:50,paddingTop:30 }}>
                                                {/* Other content */}
                                                <OtpInput value={otp} onChange={handleChange} numInputs={4} inputStyle={{ height: "60px", width: "60px" }} separator={<span>-</span>} />
                                                {/* Other content */}
                                            </div>
                                            <button className="btn qrbtn rgbutton" >
                                                Sends
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

export default PinComponent;
