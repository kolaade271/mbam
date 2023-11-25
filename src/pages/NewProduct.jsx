import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../css/LandingPage.css";
import HeaderDashboardPage from '../components/HeaderDashboardPage';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import bag3 from "../images/bag3.png"

import "../css/Mainpage.css";

const NewProduct = () => {
    const location = useLocation();
    const [reload, setReload] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    useEffect(() => {
        let stage = sessionStorage.getItem('stage') || '2';
        let page = sessionStorage.getItem('page') || 'main';
        if (location.state && location.state.tab !== "") {
            stage = location.state.tab;
            sessionStorage.setItem('stage', stage);
            sessionStorage.setItem('page', stage);

            setActiveTab(stage);
            handleTabClick(null, stage);
        }
    }, [location.state]);

    const handleTabClick = (event, tab) => {
        setRefreshKey(prevKey => prevKey + 1);
        setActiveTab(tab);
        setReload(true);
    };
    const stage = sessionStorage.getItem('stage');

    const [activeTab, setActiveTab] = useState(stage);

    return (
        <div className="">
            <HeaderDashboardPage />
            <div className="mainnew">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card sendhead">
                            <div className="sendtitle">
                                <div className="row">
                                    <div className="col-md-2"> <span className='smdl'>Back</span><br />Add Product</div>
                                    <div className="col-md-6 pull-right">
                                        <button className="btn btn-success adnewb" style={{ marginTop: "20px" }}>Add New</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12">

                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" className="form-control" id="" placeholder="Add product name" />
                        <br />
                        <div className="card">
                            <div className="card-header">
                                <b> Product short description</b>
                            </div>
                            <div className="card-body ">
                                <Editor editorStyle={{ height: '200px' }} />
                            </div>
                        </div>
                        <br />

                        <div className="card">
                            <div className="card-header">
                                <b>Product additional details</b>
                            </div>
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-3 d-none d-sm-block ttex">
                                        Price
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3 d-none d-sm-block ttex">
                                        Product Category
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-3 d-none d-sm-block ttex">
                                        Stock Type
                                    </div>
                                    <div className="col-md-2 col-sm-6">
                                        <div className="mb-3">
                                            <div class="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    In stock
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <div className="mb-3">
                                            <div class="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    Out of stock
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-3 d-none d-sm-block ttex">
                                        Delivery method
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="mb-3">
                                            <select className=" form-control form-select" aria-label="Default select example">
                                                <option selected>Ride</option>
                                                <option value="1">United States</option>
                                                <option value="2">Canada</option>
                                                <option value="3">Nigeria</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <b>Publish</b>
                            </div>
                            <div className="card-body">
                                <p>status <b>Published <elem className="yellow">Edit</elem> </b></p>
                                <p>Published on: <b>May 2, 2030 @ 11:55 </b></p>
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-success adnewb">Publish</button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-success adnewb">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-header">
                                <b>Product image</b>
                            </div>
                            <div className="card-body">
                                <img src={bag3} alt="" className='proudctuicon' />
                                <span className='smdl'><i>Click on image to edit or update</i></span><br />
                                <div className='yellow'><b>Add product gallery images</b></div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-8">
                        <br />

                    </div>
                </div>
                <br />


                <div className="row">
                    <div className="col-md-8">
                        <br />
                        <div className="card">
                            <div className="card-header">
                                <b> Product long description </b>
                            </div>
                            <div className="card-body ">
                                <Editor editorStyle={{ height: '200px' }} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <b>Product gallery</b>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                    <img src={bag3} alt="" className='proudctuicon' />
                                    </div>
                                    <div className="col-md-4">
                                    <img src={bag3} alt="" className='proudctuicon' />
                                    </div>
                                    <div className="col-md-4">
                                    <img src={bag3} alt="" className='proudctuicon' />
                                    </div>
                                    <div className="col-md-4">
                                    <img src={bag3} alt="" className='proudctuicon' />
                                    </div>
                                </div>
                                <div className='yellow'><b>Add product gallery images</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            <br/>
                <button className="btn btn-success adnewb" >Submit for authorization</button>
                 </div>
        </div>
    );
};

export default NewProduct;
