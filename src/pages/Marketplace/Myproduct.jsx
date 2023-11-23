import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/samplet.png"

const Myproduct = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle">
                            <div className="row">
                                <div className="col-md-6">My product</div>
                                <div className="col-md-6 pull-right" style={{ textAlign: 'right' }}>
                                    <button className="btn btn-success adnewb">Add New</button>
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
                    <div className="card">
                        <div className=" ">
                            <table className="table">
                                <thead className='card-header  maind'>
                                    <tr className=''>
                                        <th className="custom-table-header pheader" ></th>
                                        <th className="custom-table-header pheader" >Name</th>
                                        <th className="custom-table-header pheader"  >Status</th>
                                        <th className="custom-table-header pheader" >Categories</th>
                                        <th className="custom-table-header pheader" >Amount</th>
                                        <th className="custom-table-header pheader" >Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">Gucci Bag</td>
                                        <td className="custom-table-cell pbodyd">Published</td>
                                        <td className="custom-table-cell pbodyd" >Fashion</td>
                                        <td className="custom-table-cell  pbodyd">42,500.00 USD</td>
                                        <td className="custom-table-cell pbodyd">21-01-2023</td>
                                    </tr>

                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">Gucci Bag</td>
                                        <td className="custom-table-cell pbodyd">Published</td>
                                        <td className="custom-table-cell pbodyd" >Fashion</td>
                                        <td className="custom-table-cell  pbodyd">42,500.00 USD</td>
                                        <td className="custom-table-cell pbodyd">21-01-2023</td>
                                    </tr>
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">Gucci Bag</td>
                                        <td className="custom-table-cell pbodyd">Published</td>
                                        <td className="custom-table-cell pbodyd" >Fashion</td>
                                        <td className="custom-table-cell  pbodyd">42,500.00 USD</td>
                                        <td className="custom-table-cell pbodyd">21-01-2023</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Myproduct;
