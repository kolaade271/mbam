import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../css/LandingPage.css";
import HeaderTabsComponent from "../components/HeaderTabs";
import HeaderDashboardPage from '../components/HeaderDashboardPage';
import DashboardComponent from '../components/pages/DashboardComponent';
import MainBanking from './Banking/MainBanking';
import MainMarket from './Marketplace/MainMarket';
import "../css/Mainpage.css";

const DashboardPage = () => {
  const location = useLocation();
  const [reload, setReload] = useState(false);  
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    let stage = sessionStorage.getItem('stage') || '2';
    let page = sessionStorage.getItem('page') || 'main';
    if (location.state && location.state.tab !== "") {
      stage = location.state.tab;
      sessionStorage.setItem('stage', stage);
      sessionStorage.setItem('page', stage);
      
      setActiveTab(stage);
      handleTabClick(null, stage); 
    }
  }, [location.state]);
  
  const handleTabClick = (event, tab) => {
    setRefreshKey(prevKey => prevKey + 1);
    setActiveTab(tab);
    setReload(true);
  };
  const stage = sessionStorage.getItem('stage');

  const [activeTab, setActiveTab] = useState(stage);
  const tabContent = {
    dashboard: <div><DashboardComponent data={stage} /></div>,
    banking: <div><MainBanking page="main"/></div>,
    marketplace: <div><MainMarket page="market"/></div>,
    personal: <div>Content for Information Tab in Bill Pagxe</div>,
  };

  return (
    <div className="">
      <HeaderDashboardPage />
      <div className="wid">
        <HeaderTabsComponent activeTab={activeTab} key={refreshKey}  onTabClick={handleTabClick} tabContent={tabContent}  reload={reload}/>
      </div>
    </div>
  );
};

export default DashboardPage;
