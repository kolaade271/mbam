import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/samplet.png"

const Mysale = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle">
                            <div className="row">
                                <div className="col-md-2">My Sale</div>
                                <div className="col-md-8"><div className="mb-3">
                                                    <input type="text"  className="form-control" id="" placeholder="" />
                                                </div></div>
                                <div className="col-md-2 pull-right" style={{ textAlign: 'right' }}>
                                  serch
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-12">

                </div>
            </div>

            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">
                    <div className="saledate">
                        Date: 20-13-2023
                    </div>

                    <div className="card">
                        <div className=" ">
                            <table className="table">
                                <thead className='card-header  maind'>
                                    <tr className=''>
                                        <th className="custom-table-header pheader" ></th>
                                        <th className="custom-table-header pheader" >Items & Descriptions</th>
                                        <th className="custom-table-header pheader"  >Invoiced</th>
                                        <th className="custom-table-header pheader" >Status</th>
                                        <th className="custom-table-header pheader" >Delivery</th>
                                        <th className="custom-table-header pheader" >Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">Gucci Bag
                                            <br /><elem className="smattx">Order number: #001234</elem></td>
                                        <td className="custom-table-cell pbodyd">Paid</td>
                                        <td className="custom-table-cell pbodyd" >Completed</td>
                                        <td className="custom-table-cell  pbodyd">Delivered</td>
                                        <td className="custom-table-cell pbodyd">$4,000.00</td>
                                    </tr>

                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">Gucci Bag
                                            <br /><elem className="smattx">Order number: #001234</elem></td>
                                        <td className="custom-table-cell pbodyd">Paid</td>
                                        <td className="custom-table-cell pbodyd" >Completed</td>
                                        <td className="custom-table-cell  pbodyd">Delivered</td>
                                        <td className="custom-table-cell pbodyd">$4,000.00</td>
                                    </tr>
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">Gucci Bag
                                            <br /><elem className="smattx">Order number: #001234</elem></td>
                                        <td className="custom-table-cell pbodyd">Paid</td>
                                        <td className="custom-table-cell pbodyd" >Completed</td>
                                        <td className="custom-table-cell  pbodyd">Delivered</td>
                                        <td className="custom-table-cell pbodyd">$4,000.00</td>
                                    </tr>
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">Gucci Bag
                                            <br /><elem className="smattx">Order number: #001234</elem></td>
                                        <td className="custom-table-cell pbodyd">Paid</td>
                                        <td className="custom-table-cell pbodyd" >Completed</td>
                                        <td className="custom-table-cell  pbodyd">Delivered</td>
                                        <td className="custom-table-cell pbodyd">$4,000.00</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <div className="col-md-12">
                    <div className="saledate">
                        Date: 20-13-2023
                    </div>

                    <div className="card">
                        <div className=" ">
                            <table className="table">
                                <thead className='card-header  maind'>
                                    <tr className=''>
                                        <th className="custom-table-header pheader" ></th>
                                        <th className="custom-table-header pheader" >Items & Descriptions</th>
                                        <th className="custom-table-header pheader"  >Invoiced</th>
                                        <th className="custom-table-header pheader" >Status</th>
                                        <th className="custom-table-header pheader" >Delivery</th>
                                        <th className="custom-table-header pheader" >Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">Gucci Bag
                                            <br /><elem className="smattx">Order number: #001234</elem></td>
                                        <td className="custom-table-cell pbodyd">Paid</td>
                                        <td className="custom-table-cell pbodyd" >Completed</td>
                                        <td className="custom-table-cell  pbodyd">Delivered</td>
                                        <td className="custom-table-cell pbodyd">$4,000.00</td>
                                    </tr>

                                
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">Gucci Bag
                                            <br /><elem className="smattx">Order number: #001234</elem></td>
                                        <td className="custom-table-cell pbodyd">Paid</td>
                                        <td className="custom-table-cell pbodyd" >Completed</td>
                                        <td className="custom-table-cell  pbodyd">Delivered</td>
                                        <td className="custom-table-cell pbodyd">$4,000.00</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success adnewb manuals">Search Manually</button>
            </div>

        </div>
    );
};

export default Mysale;
