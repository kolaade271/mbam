import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/sample1.png"

const Messages = () => {

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle titlepadding">
                            <div className="">Messages</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-6">
                                            All
                                        </div>

                                        

                                        <div className="col-6 custom-table-header4">h.</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="messages">
                                        <span>
                                            <img src={samplet} alt="" className='messageicon' />
                                        </span>
                                        <div>
                                            <b className='smlnme'>Isreal Barton</b><span className='sml' > 2d</span><br />
                                            <span className='smlmsg'>
                                                Hi, i would love to know...
                                            </span>
                                        </div>
                                    </div>
                                    <div className="messages">
                                        <span>
                                            <img src={samplet} alt="" className='messageicon' />
                                        </span>
                                        <div>
                                            <b className='smlnme'>James Barton</b><span className='sml' > 2d</span><br />
                                            <span className='smlmsg'>
                                                Hi, i would love to know...
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">

                            <div className="card">
                                <div className="card-header df">
                                    <div><b>Name</b></div>
                                    <div className='smdl'>Last seen: Just now | Local time Seo 10, 9:08 M</div>
                                </div>

                                <div className="card-body">
                                    <div className="messages">
                                        <span>
                                            <img src={samplet} alt="" className='messageicon' />
                                        </span>
                                        <div>
                                            <b>Isreal Barton</b><span className='sml'> 2d</span><br />
                                            <span className='smlmsg'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit id,
                                                nec varius luctus. Litora tempus id fringilla
                                                velit integer vulputate dis posuere
                                                suspendisse sociosqu, vestibulum eget tempor
                                                metus per nulla pellentesque quis neque
                                            </span>
                                        </div>
                                    </div>

                                    <div className="messages">
                                        <span>
                                            <img src={samplet} alt="" className='messageicon' />
                                        </span>
                                        <div>
                                            <b>Me</b><span className='sml'> 2d</span><br />
                                            <span className='smlmsg'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit id, nec varius luctus.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="input-group mt-5">
                                        <input type="text" className="form-control" placeholder="Write a message..." aria-label="Write a message..." aria-describedby="button-addon2" />
                                        <button className="btn btn-outline-secondary chatbuttion text-white" type="button" id="button-addon2">Send</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                    <br />


                </div>


            </div>

        </div>
    );
};

export default Messages;
