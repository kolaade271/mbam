import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";

const Categories = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header maine">
                            <div className="hdtitle">
                                <div className="row shophead">
                                    <div className="col-6">Categories</div>
                                    <div className="col-6  filtershop" style={{ textAlign: 'right' }}>Show more</div>
                                </div>
                            </div>
                        </div>
                        <div className='shopinput'>
                            <div className="row shophead">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-3 d-none d-sm-block ttexx">
                                            Keyword
                                        </div>
                                        <div className="col-md-8 col-sm-12">
                                            <div className="mb-3">
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6  filtershop" style={{ textAlign: 'right' }}>
                                    <div className="row">
                                        <div className="col-4 d-none d-sm-block ttexx">
                                            Groups
                                        </div>
                                        <div className="col-md-8 col-sm-12">
                                            <div className="mb-3">
                                                <select className=" form-control form-select" aria-label="Default select example">
                                                    <option selected>Category, Group Merchant</option>
                                                    <option value="1">United States</option>
                                                    <option value="2">Canada</option>
                                                    <option value="3">Nigeria</option>
                                                </select></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr />


                        <div className="row ppay">

                            <div className="col-md-3">
                                <div className="card card-categories">
                                    <div className="card-header">
                                        DRINKS
                                    </div>
                                    <div className="card-body">
                                        <div className="listcat">
                                            Non-Alcoholic
                                        </div>
                                        <div className="listcat">
                                            Alcoholic (Beer / Wine / Whiskies / Champagne)
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card card-categories">
                                    <div className="card-header">
                                        ELECTRONIC
                                    </div>
                                    <div className="card-body">
                                        <div className="listcat">
                                            Non-Alcoholic
                                        </div>
                                        <div className="listcat">
                                            Alcoholic (Beer / Wine / Whiskies / Champagne)
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card card-categories">
                                    <div className="card-header">
                                        DRINKS
                                    </div>
                                    <div className="card-body">
                                        <div className="listcat">
                                            Non-Alcoholic
                                        </div>
                                        <div className="listcat">
                                            Alcoholic (Beer / Wine / Whiskies / Champagne)
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card card-categories">
                                    <div className="card-header">
                                    Arts, Crafts & CULTURE
                                    </div>
                                    <div className="card-body">
                                        <div className="listcat">
                                            Non-Alcoholic
                                        </div>
                                        <div className="listcat">
                                            Alcoholic (Beer / Wine / Whiskies / Champagne)
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card card-categories">
                                    <div className="card-header">
                                    FASHION
                                    </div>
                                    <div className="card-body">
                                        <div className="listcat">
                                            Non-Alcoholic
                                        </div>
                                        <div className="listcat">
                                            Alcoholic (Beer / Wine / Whiskies / Champagne)
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card card-categories">
                                    <div className="card-header">
                                        FOOD
                                    </div>
                                    <div className="card-body">
                                        <div className="listcat">
                                            Non-Alcoholic
                                        </div>
                                        <div className="listcat">
                                            Alcoholic (Beer / Wine / Whiskies / Champagne)
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card card-categories">
                                    <div className="card-header">
                                    CONSTRUCTION
                                    </div>
                                    <div className="card-body">
                                        <div className="listcat">
                                            Non-Alcoholic
                                        </div>
                                        <div className="listcat">
                                            Alcoholic (Beer / Wine / Whiskies / Champagne)
                                        </div>
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

export default Categories;
