import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";

const PaymentAuth = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                <div className="card sendhead">
            <div className="sendtitle">
             Payment
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
                            <div className="">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th className="custom-table-header">.</th>
                                            <th className="custom-table-header">Date</th>
                                            <th className="custom-table-header">From / to</th>
                                            <th className="custom-table-heade">Amount</th>
                                            <th className="custom-table-header4">Status</th>
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
                                        <td className="custom-table-cell  red credit">-50,000.00 FCFA</td>
                                        <td className="custom-table-header4 red debit">Pending</td>
                                    </tr>

                                    <tr className='tr'>
                                        <td className="custom-table-cell">.</td>
                                        <td className="custom-table-cell">21-01-2023</td>
                                        <td className="custom-table-cell">Ernest NDEERXW</td>
                                        <td className="custom-table-cell  red credit">-50,000.00 FCFA</td>
                                        <td className="custom-table-header4 red credit">Complete</td>
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

export default PaymentAuth;
