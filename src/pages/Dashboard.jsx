import React, { useState } from 'react';
import "../css/LandingPage.css";
import HeaderTabsComponent from "../components/HeaderTabs";
import HeaderDashboardPage from '../components/HeaderDashboardPage';
import DashboardComponent from '../components/pages/DashboardComponent';
import "../css/Mainpage.css"


const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('1');

    const handleTabClick = (event, tab) => {
      setActiveTab(tab);
    };
    const tabContent = {
        dashboard: <div><DashboardComponent/></div>,
        categories: <div>Content for Categories Tab in Bill Page</div>,
        information: <div>Content for Information Tab in Bill Page</div>,
        personal: <div>Content for Information Tab in Bill Page</div>,
      };

    return (
        <div className="">
            <HeaderDashboardPage />
            <div className="wid">
            <HeaderTabsComponent activeTab={activeTab} onTabClick={handleTabClick} tabContent={tabContent} />
              
            </div>
        </div>
    );
};

export default DashboardPage;
