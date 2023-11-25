import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/samplet.png"

const Delieverymethod = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle">
                            <div className="">Delivery Method</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">


                    <div className="card">

                        <div className="card-body">
                            <div className=''> Choose the shipping method you wish to add  </div>
                            <br />
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <select className=" form-control form-select" aria-label="Default select example">
                                            <option selected>Flat</option>
                                            <option value="1">United States</option>
                                            <option value="2">Canada</option>
                                            <option value="3">Nigeria</option>
                                        </select>
                                        <span className='smdl'>Lets you charge a fixed rate for shipping</span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-success adnewb manuals">CONFIRM</button>
                        </div>


                    </div>
                    <br/>

                    <div className="row">
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <select className=" form-control form-select" aria-label="Default select example">
                                            <option selected>Free Shipping</option>
                                            <option value="1">United States</option>
                                            <option value="2">Canada</option>
                                            <option value="3">Nigeria</option>
                                        </select>
                                        <span className='smdl'>Free shipping is a special method which can be triggered with coupons and minimum spends</span>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <select className=" form-control form-select" aria-label="Default select example">
                                            <option selected>Local Pickup</option>
                                            <option value="1">United States</option>
                                            <option value="2">Canada</option>
                                            <option value="3">Nigeria</option>
                                        </select>
                                        <span className='smdl'>Allows customers to pick up orders themselves</span>
                                    </div>
                                </div>
                            </div>
                </div>


            </div>

        </div>
    );
};

export default Delieverymethod;
