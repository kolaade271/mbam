import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../css/LandingPage.css";
import HeaderDashboardPage from '../components/HeaderDashboardPage';
import bag3 from "../images/bag3.png"

import "../css/Mainpage.css";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);

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
                                    <div className="col-md-2"> <span className='smdl'>Back</span><br />Shopping Cart</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12">

                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 cartrod">My Cart <elem className="cartamt ">10</elem> </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-5">
                                <div>
                                    <img src={bag3} alt="" className='cartimg' />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className='carttitle'>Gucci bag</div>
                                <div className='carttitle cartamttext'>$400</div>
                                <div className="cartsub cartbody">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit dui ridiculus integer, potenti tempus vivamus quis eros id sem nam conubia.
                                </div>
                                <br />
                                <p>Categories:</p>
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

                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5">
                                <div>
                                    <img src={bag3} alt="" className='cartimg' />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className='carttitle'>Gucci bag</div>
                                <div className='carttitle cartamttext'>$400</div>
                                <div className="cartsub cartbody">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit dui ridiculus integer, potenti tempus vivamus quis eros id sem nam conubia.
                                </div>
                                <br />
                                <p>Categories:</p>
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

                                </div>

                            </div>
                        </div>



                    </div>

                    <div className="col-md-4">
                        <br />
                        <div className="card">
                            <div className="card-body">
                                <div className='tmsa'>Order summary</div>
                                <br />
                                <div className="row">
                                    <div className="col-md-6">2x Gucci Bag</div>
                                    <div className="col-md-6 custom-table-header4">$4,000</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">2x Gucci Bag</div>
                                    <div className="col-md-6 custom-table-header4">$4,000</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">2x Gucci Bag</div>
                                    <div className="col-md-6 custom-table-header4">$4,000</div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-md-6">Amount</div>
                                    <div className="col-md-6 custom-table-header4">$4,000</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">Tax</div>
                                    <div className="col-md-6 custom-table-header4">$4,000</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6"><b>Total Amount</b></div>
                                    <div className="col-md-6 custom-table-header4"><b>$4,000</b></div>
                                </div>
                                <div align="center">
                                    <button className='btn check'>Add coupon code here</button>
                                    <br />
                                    <br />
                                    <button className='btn  check2'>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
