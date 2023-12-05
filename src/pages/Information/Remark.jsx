import React from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import radion from "../../images/radio.png"
import SlideCardRow from './SlideCardRow';

const Remaark = () => {
    const data = [
        { title: 'Card x', description: 'Description for Card 1', image: 'image1.jpg' },
        { title: 'Card 2', description: 'Description for Card 2', image: 'image2.jpg' },
        { title: 'Card 1', description: 'Description for Card 1', image: 'image1.jpg' },
    { title: 'Card 2', description: 'Description for Card 2', image: 'image2.jpg' },
    { title: 'Card 3', description: 'Description for Card 3', image: 'image3.jpg' },
  
        // Add more data as needed
      ];

    return (
        <div className="main">
             <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle titlepadding">
                            <div className="">Remark</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header mainc">
                            <div className="hdtitle">
                                <div className="row shophead">
                                    <div className="col-6">Our Satisfied clients review </div>
                                </div>
                            </div>
                        </div>


                        <div className="row ppay">
                         
                        <SlideCardRow data={data} />

                        </div>


                    </div>

                </div>

            </div>


        </div>
    );
};

export default Remaark;
