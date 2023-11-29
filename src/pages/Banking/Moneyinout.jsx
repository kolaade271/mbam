import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/samplet.png"

const MoneyInout = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle titlepadding">
                            Money IN/OUT
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

                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">21-01-2023	</td>
                                        <td className="custom-table-cell pbodyd">Ernest NDEERXW	</td>
                                        <td className="custom-table-cell  pbodyd">Payment for services	</td>
                                        <td className="custom-table-cell pbodyd debit">-50,000.00 FCFA</td>
                                    </tr>
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">21-01-2023	</td>
                                        <td className="custom-table-cell pbodyd">Ernest NDEERXW	</td>
                                        <td className="custom-table-cell  pbodyd">Payment for services	</td>
                                        <td className="custom-table-cell pbodyd debit">-50,000.00 FCFA</td>
                                    </tr>
                                    <tr className=''>
                                        <td className="custom-table-cell"><img src={samplet} alt="" className='' /></td>
                                        <td className="custom-table-cell pbodyd">21-01-2023	</td>
                                        <td className="custom-table-cell pbodyd">Ernest NDEERXW	</td>
                                        <td className="custom-table-cell  pbodyd">Payment for services	</td>
                                        <td className="custom-table-cell pbodyd debit">-50,000.00 FCFA</td>
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

export default MoneyInout;
