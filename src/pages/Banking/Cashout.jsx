import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";

const Cashout = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                <div className="card sendhead">
            <div className="sendtitle">
             Cash-Out
            </div>
          </div>

                </div>
                <div className="col-md-12">

                </div>
            </div>

            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header maind">
                            <div className="tablewrapper">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th className="custom-table-header">.</th>
                                            <th className="custom-table-header">Date</th>
                                            <th className="custom-table-header">From / to</th>
                                            <th className="custom-table-header">Description</th>
                                            <th className="custom-table-header4">Amount</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="row balinfo">
                            <table className='table'>
                                <tbody>
                                    <tr className='tr'>
                                        <td className="custom-table-cell">.</td>
                                        <td className="custom-table-cell">21-01-2023</td>
                                        <td className="custom-table-cell">Ernest NDEERXW</td>
                                        <td className="custom-table-cell">Payment for services</td>
                                        <td className="custom-table-header4 red debit">-50,000.00 FCFA</td>
                                    </tr>

                                    <tr className='tr'>
                                        <td className="custom-table-cell">.</td>
                                        <td className="custom-table-cell">21-01-2023</td>
                                        <td className="custom-table-cell">Ernest NDEERXW</td>
                                        <td className="custom-table-cell">Payment for services</td>
                                        <td className="custom-table-header4  green credit">-50,000.00 FCFA</td>
                                    </tr>

                                    <tr className='tr'>
                                        <td className="custom-table-cell">.</td>
                                        <td className="custom-table-cell">21-01-2023</td>
                                        <td className="custom-table-cell">Ernest NDEERXW</td>
                                        <td className="custom-table-cell">Payment for services</td>
                                        <td className="custom-table-header4 red debit">-50,000.00 FCFA</td>
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

export default Cashout;
