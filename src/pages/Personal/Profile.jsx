import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/samplet.png"

const Profile = () => {

    return (
        <div className="main">


            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">


                    <div className="card">
                        <div className=" card-header profile-header">
                            <b>Isreal</b>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3 d-none d-sm-block ttex">
                                    <b>Name</b>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input type="text" value={"KOLA  PELUMI"} className="form-control" id="" placeholder="john Doe" readOnly={true} />
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-3 d-none d-sm-block ttex">
                                    <b>Login Name</b>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input type="text" value={"KOLA  PELUMI"} className="form-control" id="" placeholder="john Doe" readOnly={true} />
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-3 d-none d-sm-block ttex">
                                    <b>Email</b>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input type="text" value={"kola@helloword.com"} className="form-control" id="" placeholder="john Doe" readOnly={true} />
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-3 d-none d-sm-block ttex">
                                    <b>Mobile Phone</b>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input type="text" value={"23412733744774"} className="form-control" id="" placeholder="john Doe" readOnly={true} />
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <b>Store activities</b>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-md-3 acti"><b>Activation date</b></div>
                                <div className="col">2023-12-10</div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 acti"><b>References</b></div>
                                <div className="col">0</div>
                            </div>


                            <div className="row">
                                <div className="col-md-3 acti"><b>Payment feedback</b></div>
                                <div className="col">0</div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 acti"><b>Number of products</b></div>
                                <div className="col">0</div>
                            </div>
                            <br/>

                        </div>


                    </div>

                </div>


            </div>

        </div>
    );
};

export default Profile;
