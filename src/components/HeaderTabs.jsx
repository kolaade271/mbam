import React from 'react';
import Tabs, { Tab } from 'react-best-tabs';
import tabdash from "../images/tabdash.png"
import tabmarket from "../images/tabmarket.png"
import tabuser from "../images/tabuser.png"
import tabbank from "../images/tabbank.png"

const HeaderTabsComponent = ({ activeTab, onTabClick, tabContent }) => {
  return (
    <Tabs activeTab={activeTab} className="mt-3" ulClassName="headertab" activityClassName="bg-success" onClick={onTabClick}>
      <Tab title={
        <div>
         <img src={tabdash} alt="" className='tabicon' />
          <span> Dashboard</span>
        </div>}
      > 
        {tabContent.dashboard}
      </Tab>

      <Tab title={<> <div>
        <img src={tabbank} alt="" className='tabicon' />
        <span> Banking</span>
      </div></>} className="mr-2">
        {tabContent.banking}
      </Tab>

      <Tab title={<> <div>
        <img src={tabmarket} alt="" className='tabicon' />
        <span> Marketplace</span>
      </div></>} className="mr-2">
        {tabContent.marketplace}
      </Tab>

      <Tab title={<> <div>
        <img src={tabdash} alt="" className='tabicon' />
        <span> Information</span>
      </div></>} className="mr-2">
        {tabContent.information}
      </Tab>

      <Tab title={<> <div>
        <img src={tabuser} alt="" className='tabicon' />
        <span> Personal</span>
      </div></>} className="mr-2">
        {tabContent.personal}
      </Tab>
    </Tabs>
  );
};

export default HeaderTabsComponent;
