import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import ReactStars from "react-rating-stars-component";
import { Line } from 'rc-progress';

const Reference = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle titlepadding">
                            References
                        </div>
                    </div>

                </div>

            </div>
            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">

                    <div className="card">
                        <div className=" ">
                            <div className="card-header mainc">
                                <div className="hdtitle">
                                    <div className="row">
                                        <div className="col-md-" style={{ display: 'flex', alignItems: 'center' }}>
                                            <b>100 Reviews </b> <ReactStars count={5} size={15} color="#EAA813" />
                                            <span style={{ marginLeft: '5px' }}>4.5</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row"  style={{width:"400px" }} >
                                    <div className="" style={{ display: 'flex', alignItems: 'center', }}>
                                        <span style={{ marginLeft: '5px', minWidth: "70px" }}>5 stars  </span>
                                        < Line percent={100} trailColor="#D9D9D9" strokeColor="#EAA813"/>
                                        <span style={{ marginLeft: '5px' }}>5.0</span>
                                    </div>
                                    
                                    <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginLeft: '5px', minWidth: "70px" }}>4 stars  </span>
                                        < Line percent={50} trailColor="#D9D9D9" strokeColor="#EAA813"/>
                                        <span style={{ marginLeft: '5px' }}>4.0</span>
                                    </div>

                                     <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginLeft: '5px', minWidth: "70px" }}>3 stars  </span>
                                        < Line percent={40} trailColor="#D9D9D9" strokeColor="#EAA813"/>
                                        <span style={{ marginLeft: '5px' }}>3.0</span>
                                    </div>

                                    <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginLeft: '5px', minWidth: "70px" }}>5 stars  </span>
                                        < Line percent={20} trailColor="#D9D9D9" strokeColor="#EAA813"/>
                                        <span style={{ marginLeft: '5px' }}>2.0</span>
                                    </div>

                                    <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginLeft: '5px', minWidth: "70px" }}>5 stars  </span>
                                        < Line percent={10} trailColor="#D9D9D9" strokeColor="#EAA813"/>
                                        <span style={{ marginLeft: '5px' }}>1.0</span>
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

export default Reference;
