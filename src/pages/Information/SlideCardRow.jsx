import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";



const SlideCardRow = ({ reviews }) => {



    return (
        <div className="container text-center my-1">
            <div className="row mx-auto my-auto">
                <div id="carouselExampleControls" className="carousel slide w-100" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item py-2 active">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card ctm">
                                        <div className="card-body">

                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse netus mauris,
                                                acilisis cursus Lorem ipsum dolor sit amet consectetur adsagarhshahesg . egafwA</p>
                                            <hr />
                                            <div className="row">
                                                <div className="col">
                                                    <b>Israel Barton</b><br />
                                                    <span className='sml'>UI/UX Designer</span>
                                                </div>

                                                <div className="col-md-6" >
                                                    <div className='text-right' style={{ textAlign: 'right' }}><ReactStars count={5} size={15} color="#EAA813" /> </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card ctm2">
                                        <div className="card-body">

                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse netus mauris,
                                                acilisis cursus Lorem ipsum dolor sit amet consectetur adsagarhshahesg . egafwA</p>
                                            <hr />
                                            <div className="row">
                                                <div className="col">
                                                    <b>Israel Barton</b><br />
                                                    <span className='sml'>UI/UX Designer</span>
                                                </div>

                                                <div className="col-md-6" >
                                                    <div className='text-right' style={{ textAlign: 'right' }}><ReactStars count={5} size={15} color="#EAA813" /> </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item py-2">
                        <div className="row">
                                <div className="col-sm-6">
                                    <div className="card ctm">
                                        <div className="card-body">

                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse netus mauris,
                                                acilisis cursus Lorem ipsum dolor sit amet consectetur adsagarhshahesg . egafwA</p>
                                            <hr />
                                            <div className="row">
                                                <div className="col">
                                                    <b>Israel Barton</b><br />
                                                    <span className='sml'>UI/UX Designer</span>
                                                </div>

                                                <div className="col-md-6" >
                                                    <div className='text-right' style={{ textAlign: 'right' }}><ReactStars count={5} size={15} color="#EAA813" /> </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card ctm2">
                                        <div className="card-body">

                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse netus mauris,
                                                acilisis cursus Lorem ipsum dolor sit amet consectetur adsagarhshahesg . egafwA</p>
                                            <hr />
                                            <div className="row">
                                                <div className="col">
                                                    <b>Israel Barton</b><br />
                                                    <span className='sml'>UI/UX Designer</span>
                                                </div>

                                                <div className="col-md-6" >
                                                    <div className='text-right' style={{ textAlign: 'right' }}><ReactStars count={5} size={15} color="#EAA813" /> </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>




    );
};

export default SlideCardRow;
