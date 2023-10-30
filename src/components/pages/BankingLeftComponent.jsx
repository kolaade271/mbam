import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../../images/1.png";
import "../../css/Mainpage.css"

const BankingLeftComponent = () => {
    const navigate = useNavigate();
    let page = sessionStorage.getItem('page') || 'main';

    const handleItemClick = (page, tab) => {
        navigate(`/dashboard`, { state: { page, tab } });
    };

    return (
        <div className=''>
            <div className="card leftcard">
                <div className="card-header header-card">
                    <div className="carddashboximg">
                        <img src={img1} className='card-circle' alt='dash' />
                        <div className="dashtitle">Banking</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 list-li" onClick={() => handleItemClick('marketplace', '3')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 37 37" fill="none">
                            <path d="M22.3543 32.375V24.125C22.3543 23.5727 21.9066 23.125 21.3543 23.125H15.646C15.0937 23.125 14.646 23.5727 14.646 24.125V32.375" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.7085 16.958V28.3747C7.7085 30.2603 7.7085 31.2031 8.29428 31.7889C8.88007 32.3747 9.82288 32.3747 11.7085 32.3747H25.2918C27.1774 32.3747 28.1203 32.3747 28.706 31.7889C29.2918 31.2031 29.2918 30.2603 29.2918 28.3747V16.958" stroke="#393939" stroke-width="2" />
                            <path d="M7.3296 6.13993C7.51149 5.41237 7.60244 5.04859 7.8737 4.83679C8.14496 4.625 8.51993 4.625 9.26989 4.625H27.7301C28.4801 4.625 28.855 4.625 29.1263 4.83679C29.3976 5.04859 29.4885 5.41237 29.6704 6.13993L31.7537 14.4733C32.0397 15.6172 32.1827 16.1892 31.8824 16.5737C31.5822 16.9583 30.9926 16.9583 29.8134 16.9583H29.5968C27.9785 16.9583 27.1693 16.9583 26.6098 16.4844C26.0503 16.0104 25.9173 15.2123 25.6513 13.6159L25.6348 13.517C25.5597 13.0667 25.5222 12.8416 25.4375 12.8416C25.3528 12.8416 25.3153 13.0667 25.2402 13.517L25.1102 14.2971C24.9539 15.2349 24.8757 15.7039 24.6437 16.0569C24.4324 16.3783 24.133 16.6319 23.7813 16.7875C23.3949 16.9583 22.9195 16.9583 21.9687 16.9583V16.9583C21.018 16.9583 20.5426 16.9583 20.1562 16.7875C19.8045 16.6319 19.5051 16.3783 19.2938 16.0569C19.0618 15.7039 18.9836 15.2349 18.8273 14.2971L18.6973 13.517C18.6222 13.0667 18.5847 12.8416 18.5 12.8416C18.4153 12.8416 18.3778 13.0667 18.3027 13.517L18.1727 14.2971C18.0164 15.2349 17.9382 15.7039 17.7062 16.0569C17.4949 16.3783 17.1955 16.6319 16.8438 16.7875C16.4574 16.9583 15.982 16.9583 15.0312 16.9583V16.9583C14.0805 16.9583 13.6051 16.9583 13.2187 16.7875C12.867 16.6319 12.5676 16.3783 12.3563 16.0569C12.1243 15.7039 12.0461 15.2349 11.8898 14.2971L11.7598 13.517C11.6847 13.0667 11.6472 12.8416 11.5625 12.8416C11.4778 12.8416 11.4403 13.0667 11.3652 13.517L11.3487 13.6159C11.0827 15.2123 10.9497 16.0104 10.3902 16.4844C9.83067 16.9583 9.0215 16.9583 7.40316 16.9583H7.18655C6.00742 16.9583 5.41785 16.9583 5.11757 16.5737C4.81729 16.1892 4.96029 15.6172 5.24627 14.4733L7.3296 6.13993Z" stroke="#393939" stroke-width="2" />
                        </svg>
                        <elem className="listp">Marketplace</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('sendmoney', '2')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35 33" fill="none">
                            <path d="M1 7.78125H33.9C33.9552 7.78125 34 7.82602 34 7.88125V31.9C34 31.9552 33.9552 32 33.9 32H1.1C1.04477 32 1 31.9552 1 31.9V7.78125ZM1 7.78125L29.995 1.02857C30.0577 1.01397 30.1176 1.06157 30.1176 1.12597V7.5875" stroke="#262626" stroke-width="2" />
                        </svg>
                        <elem className="listp">Send Money</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('cashout', '2')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35 33" fill="none">
                            <path d="M1 7.78125H33.9C33.9552 7.78125 34 7.82602 34 7.88125V31.9C34 31.9552 33.9552 32 33.9 32H1.1C1.04477 32 1 31.9552 1 31.9V7.78125ZM1 7.78125L29.995 1.02857C30.0577 1.01397 30.1176 1.06157 30.1176 1.12597V7.5875" stroke="#262626" stroke-width="2" />
                        </svg>
                        <elem className="listp">Cash Out</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('paymentAuth', '2')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35 33" fill="none">
                            <path d="M1 7.78125H33.9C33.9552 7.78125 34 7.82602 34 7.88125V31.9C34 31.9552 33.9552 32 33.9 32H1.1C1.04477 32 1 31.9552 1 31.9V7.78125ZM1 7.78125L29.995 1.02857C30.0577 1.01397 30.1176 1.06157 30.1176 1.12597V7.5875" stroke="#262626" stroke-width="2" />
                        </svg>
                        <elem className="listp">Payment Authorizaions</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('PayPalpayment', '2')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35 33" fill="none">
                            <path d="M1 7.78125H33.9C33.9552 7.78125 34 7.82602 34 7.88125V31.9C34 31.9552 33.9552 32 33.9 32H1.1C1.04477 32 1 31.9552 1 31.9V7.78125ZM1 7.78125L29.995 1.02857C30.0577 1.01397 30.1176 1.06157 30.1176 1.12597V7.5875" stroke="#262626" stroke-width="2" />
                        </svg>
                        <elem className="listp">PayPal payment</elem>
                    </div>

                    <div className="col-md-12 list-li" onClick={() => handleItemClick('paypalTopup', '2')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35 33" fill="none">
                            <path d="M1 7.78125H33.9C33.9552 7.78125 34 7.82602 34 7.88125V31.9C34 31.9552 33.9552 32 33.9 32H1.1C1.04477 32 1 31.9552 1 31.9V7.78125ZM1 7.78125L29.995 1.02857C30.0577 1.01397 30.1176 1.06157 30.1176 1.12597V7.5875" stroke="#262626" stroke-width="2" />
                        </svg>
                        <elem className="listp">Top-Up Mbam with PayPal</elem>
                    </div>

                  

                </div>

            </div>
        </div>
    );
};

export default BankingLeftComponent;
