import React, { useState } from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import bag from "../../images/bag.png";
import bag3 from "../../images/newbag.png"
import chaticon from "../../images/chaticon.png"
import Tabs, { Tab } from 'react-best-tabs';
import ReactStars from "react-rating-stars-component";
const Shop = () => {
    const [getMain, SetMain] = useState(0);

    const [quantity, setQuantity] = useState(1);
    const handleClick = (data) => {
        SetMain(data)
    };


    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleInputChange = (event) => {
        const inputQuantity = parseInt(event.target.value, 10);

        if (!isNaN(inputQuantity) && inputQuantity >= 1) {
            setQuantity(inputQuantity);
        }
    };
    return (
        <div className="main">
            {getMain !== 1 && (<div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header maine">
                            <div className="hdtitle">
                                <div className="row shophead">
                                    <div className="col-6">Shop</div>
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
                                <div className="card card-market" onClick={() => handleClick(1)}>
                                    <div className="card-body marketcardb text-muted" >
                                        <img src={bag} alt="" className="marketimg" />
                                    </div>
                                    <div className="card-footer  marktfooter text-muted">
                                        <div className='dtext'>Gucci Bag</div>
                                        <div className='rate'><ReactStars count={5}  size={15} color="#EAA813" /> </div>
                                        <div className='row'>
                                            <div className="col-6 cardamt ">
                                                N4,000.00
                                            </div>
                                            <div className="col-6">
                                                <span class="badge badge-market">ADD TO CART</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card card-market" onClick={() => handleClick(1)}>
                                    <div className="card-body marketcardb text-muted" >
                                        <img src={bag} alt="" className="marketimg" />
                                    </div>
                                    <div className="card-footer  marktfooter text-muted">
                                        <div className='dtext'>Gucci Bag</div>
                                        <div className='rate'><ReactStars count={5}  size={15} color="#EAA813" /> </div>
                                        <div className='row'>
                                            <div className="col-6 cardamt ">
                                                N4,000.00
                                            </div>
                                            <div className="col-6">
                                                <span class="badge badge-market">ADD TO CART</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card card-market" onClick={() => handleClick(1)}>
                                    <div className="card-body marketcardb text-muted" >
                                        <img src={bag} alt="" className="marketimg" />
                                    </div>
                                    <div className="card-footer  marktfooter text-muted">
                                        <div className='dtext'>Gucci Bag</div>
                                        <div className='rate'><ReactStars count={5}  size={15} color="#EAA813" /> </div>
                                        <div className='row'>
                                            <div className="col-6 cardamt ">
                                                N4,000.00
                                            </div>
                                            <div className="col-6">
                                                <span class="badge badge-market">ADD TO CART</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card card-market" onClick={() => handleClick(1)}>
                                    <div className="card-body marketcardb text-muted" >
                                        <img src={bag} alt="" className="marketimg" />
                                    </div>
                                    <div className="card-footer  marktfooter text-muted">
                                        <div className='dtext'>Gucci Bag</div>
                                        <div className='rate'><ReactStars count={5}  size={15} color="#EAA813" /> </div>
                                        <div className='row'>
                                            <div className="col-6 cardamt ">
                                                N4,000.00
                                            </div>
                                            <div className="col-6">
                                                <span class="badge badge-market">ADD TO CART</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card card-market" onClick={() => handleClick(1)}>
                                    <div className="card-body marketcardb text-muted" >
                                        <img src={bag} alt="" className="marketimg" />
                                    </div>
                                    <div className="card-footer  marktfooter text-muted">
                                        <div className='dtext'>Gucci Bag</div>
                                        <div className='rate'><ReactStars count={5}  size={15} color="#EAA813" /> </div>
                                        <div className='row'>
                                            <div className="col-6 cardamt ">
                                                N4,000.00
                                            </div>
                                            <div className="col-6">
                                                <span class="badge badge-market">ADD TO CART</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card card-market" onClick={() => handleClick(1)}>
                                    <div className="card-body marketcardb text-muted" >
                                        <img src={bag} alt="" className="marketimg" />
                                    </div>
                                    <div className="card-footer  marktfooter text-muted">
                                        <div className='dtext'>Gucci Bag</div>
                                        <div className='rate'><ReactStars count={5}  size={15} color="#EAA813" /> </div>
                                        <div className='row'>
                                            <div className="col-6 cardamt ">
                                                N4,000.00
                                            </div>
                                            <div className="col-6">
                                                <span class="badge badge-market">ADD TO CART</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card card-market" onClick={() => handleClick(1)}>
                                    <div className="card-body marketcardb text-muted" >
                                        <img src={bag} alt="" className="marketimg" />
                                    </div>
                                    <div className="card-footer  marktfooter text-muted">
                                        <div className='dtext'>Gucci Bag</div>
                                        <div className='rate'><ReactStars count={5}  size={15} color="#EAA813" /> </div>
                                        <div className='row'>
                                            <div className="col-6 cardamt ">
                                                N4,000.00
                                            </div>
                                            <div className="col-6">
                                                <span class="badge badge-market">ADD TO CART</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card card-market" onClick={() => handleClick(1)}>
                                    <div className="card-body marketcardb text-muted" >
                                        <img src={bag} alt="" className="marketimg" />
                                    </div>
                                    <div className="card-footer  marktfooter text-muted">
                                        <div className='dtext'>Gucci Bag</div>
                                        <div className='rate'><ReactStars count={5}  size={15} color="#EAA813" /> </div>
                                        <div className='row'>
                                            <div className="col-6 cardamt ">
                                                N4,000.00
                                            </div>
                                            <div className="col-6">
                                                <span class="badge badge-market">ADD TO CART</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>)}

            {getMain === 1 && (
                <div className="">
                    <div className="card sendhead">
                        <div className="sendtitle ">
                            <div className="row">
                                <div className="col-md-2"> <span className='smdl'  onClick={() => handleClick(0)}>Back</span><br />Shopping Cart</div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <img src={bag3} alt="" className='cartimg' />
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
                            </div>
                        </div>

                        <div className="col-md-6">
                            <br />
                            <div className='carttitle'>Gucci bag</div>
                            <div className='carttitle cartamttext'>$400</div>
                            <div><ReactStars count={5}  size={18} color="#EAA813" /></div>
                            <div className="cartbody">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit dui ridiculus integer, potenti tempus vivamus quis eros id sem nam conubia.
                            </div>
                            <br />

                            <div>
                                <button className='btn cartbuttion' onClick={decreaseQuantity}>-</button>
                                <label>

                                    <input
                                        className="form-control cartinput"
                                        type="number"
                                        value={quantity}
                                        onChange={handleInputChange}
                                        min="1"
                                    />
                                </label>
                                <button className='btn cartbuttion' onClick={increaseQuantity}>+</button>
                                <span><button className='btn btn-success'>ADD TO CART</button> </span>
                            </div>
                            <hr />
                            <p>Categories:</p>
                            <hr />
                            <div>
                                <span><img src={chaticon} alt="" className='icons' /></span>
                                <b> Send a message to seller</b>
                            </div>

                        </div>
                        <Tabs activeTab="1" className="mt-5" ulClassName="" activityClassName="bg-success" onClick={(event, tab) => console.log(event, tab)} >
                            <Tab title="DESCRIPTION" className="mr-3">
                                <div>
                                Lorem ipsum dolor sit amet consectetur, adipiscing elit arcu commodo fusce facilisi,
                                 pretium bibendum vehicula eget. Duis tellus rutrum fusce sociis
                                  augue ultricies pellentesque et condimentum blandit netus,
                                 platea nascetur penatibus curae ad libero massa lobortis inceptos feugiat.
                                </div>
                            </Tab>

                            <Tab title="REVIEW (0)" className="mr-3">
                                <div className="mt-3">
                                    Tab 3 content
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Shop;
