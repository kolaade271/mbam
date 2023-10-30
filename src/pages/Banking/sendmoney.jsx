import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";

const Sendmoney = () => {

  return (
    <div className="main">
      <div className="row">
        <div className="col-md-12">
          <div className="card sendhead">
            <div className="sendtitle">
              Send Money
            </div>
          </div>

        </div>
        <div className="col-md-12">

        </div>
      </div>

      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col-md-12">
          <div className="card">

            <div className="row balinfo">
              <div className="row">
                <div className="col-3 d-none d-sm-block sendsubtitle">
                  Select Accout
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="mb-3">
                    <select className=" form-control form-select" aria-label="Default select example">
                      <option value="Mbam Local (NGN)">Mbam Local (NGN)</option>
                      <option value="Mbam Local (NGN)">Mbam Local (USD)</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div className="mb-3">
                    <select className=" form-control form-select" aria-label="Default select example">
                      <option value="Mbam Local (NGN)">Mbam (USD)</option>
                      <option value="Mbam Local (NGN)">Mbam (NGN)</option>
                    </select>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-3 d-none d-sm-block sendsubtitle">
                  Select
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="mb-3">
                    <div class="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="form-check-label" for="flexRadioDefault1">
                        Username
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="mb-3">
                    <div class="form-check custom-radio-input">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="form-check-label" for="flexRadioDefault1">
                        Account Number
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-3 d-none d-sm-block sendsubtitle">
                  Username
                </div>
                <div className="col-md-8 col-sm-12">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-3 d-none d-sm-block sendsubtitle">
                  Amount
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-7 d-flex justify-content-between align-items-center">
                <span></span>
                <button className="btn rgbutton">
                  Send
                </button>

              </div>
            </div>

          </div>


        </div>

      </div>
    </div>
  );
};

export default Sendmoney;
