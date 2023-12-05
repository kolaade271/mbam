import React from 'react';
import { useNavigate } from 'react-router-dom';
import marketa from "../../images/marketa.png"
import basket from "../../images/basket.png";
import cart from "../../images/cart.png";
import purchase from "../../images/purchase.png";
import message from "../../images/Chat_alt_3.png";
import setting from "../../images/Setting_line.png";
import deliver from "../../images/delev.png";
import track from "../../images/track.png";
import bags from "../../images/bags.png";
import sales from "../../images/sale.png";
import "../../css/Mainpage.css"

const MarketLeftComponent = () => {
    const navigate = useNavigate();

    const handleItemClick = (page, tab) => {
        if(page === "cart"){
            navigate(`/cart`, { state: { page, tab } });
        }
        else{
            navigate(`/dashboard`, { state: { page, tab } });
        }
       
    };

    return (
        <div className=''>
            <div className="card leftcard">
                <div className="card-header header-card">
                    <div className="carddashboximg">
                    <img src={marketa}  className='navicon'/>
                        <div className="dashtitle">MarketPlace</div>
                    </div>
                </div>
                <div className="row dashleft">
                    <div className="col-md-12 list-li" onClick={() => handleItemClick('shop', '3')}>
                    <img src={marketa} alt=""  className='navicon'/>
                        <elem className="listp">Shops</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('categories', '3')}>
                    <img src={basket} alt=""  className='navicon'/>
                        <elem className="listp">Categories</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('cart', '3')}>
                    <img src={cart} alt=""  className='navicon'/>
                        <elem className="listp">Shopping Cart</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('mypurchase', '3')}>
                    <img src={purchase} alt=""  className='navicon'/>
                        <elem className="listp">My Purchases</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('messages', '3')}>
                    <img src={message} alt=""  className='navicon'/>
                        <elem className="listp">Messages</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('paypalTopup', '3')}>
                    <img src={track} alt=""  className='navicon'/>
                        <elem className="listp">Track Products</elem>
                        
                    </div>
                    <div className="list-li">
                    <b>Merchants</b>
                    </div>
                    

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('myproduct', '3')}>
                    <img src={bags} alt=""  className='navicon'/>
                        <elem className="listp">My Products</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('mysale', '3')}>
                    <img src={sales} alt=""  className='navicon'/>
                        <elem className="listp">My Sales</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('delieverymethod', '3')}>
                    <img src={deliver} alt=""  className='navicon'/>
                        <elem className="listp">Delivery Method</elem>
                    </div>


                    <div className="col-md-12 list-li" onClick={() => handleItemClick('settings', '5')}>
                    <img src={setting} alt=""  className='navicon'/>
                        <elem className="listp">Settings</elem>
                    </div>

                  

                </div>

            </div>
        </div>
    );
};

export default MarketLeftComponent;
