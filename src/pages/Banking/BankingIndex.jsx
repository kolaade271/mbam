import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/samplet.png"

import filter from "../../images/filter.png"
import download from "../../images/download.png"


const BankingIndex = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header mainc">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="hdtitle">
                                        Member Account - MBJMC 31653694
                                    </div>
                                </div>
                                <div className="col-md-6"  >
                                    <div className="">
                                        <div className="row ">
                                            <div className="col-md-6 bankinexbox" style={{ textAlign: 'right' }}>
                                                <img src={filter} alt="" className='bankinexicon ' />
                                                <span>Show filters</span>
                                            </div>
                                            <div className="col-md-5  bankinexbox " style={{ textAlign: 'right' }}>
                                                <img src={download} alt=""  className='bankinexicon ' />
                                                <span>Download</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row balinfo">
                            <div className="col-md-3">Balance</div>
                            <div className="col-md-3 green">3, 243, 500.00 FCFA</div>
                            <div className="col-md-3">Available balance</div>
                            <div className="col-md-3 green">3, 198, 300.00 FCFA</div>
                        </div>
                        <div className="row balinf2">
                            <div className="col-md-3">Reserved amount</div>
                            <div className="col-md-3 red">45, 200.00 FCFA</div>
                        </div>
                    </div>

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
                                        <th className="custom-table-header pheader"  >Date</th>
                                        <th className="custom-table-header pheader"  >From / to	</th>
                                        <th className="custom-table-header pheader" >Description</th>
                                        <th className="custom-table-header pheader" >Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">21-01-2023	</td>
                                        <td className="custom-table-cell pbodyd">Ernest NDEERXW	</td>
                                        <td className="custom-table-cell  pbodyd">Payment for services	</td>
                                        <td className="custom-table-cell pbodyd credit">-50,000.00 FCFA</td>
                                    </tr>


                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">21-01-2023	</td>
                                        <td className="custom-table-cell pbodyd">Ernest NDEERXW	</td>
                                        <td className="custom-table-cell  pbodyd">Payment for services	</td>
                                        <td className="custom-table-cell pbodyd debit">-50,000.00 FCFA</td>
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

export default BankingIndex;
