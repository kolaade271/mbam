import React from 'react';
import Tabs, { Tab } from 'react-best-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faIdCard, faShop, faNoteSticky, faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderTabsComponent = ({ activeTab, onTabClick, tabContent }) => {
  return (
    <Tabs activeTab={activeTab} className="mt-3" ulClassName="headertab" activityClassName="bg-success" onClick={onTabClick}>
      <Tab title={
        <div>
          <FontAwesomeIcon icon={faDashboard} />
          <span> Dashboard</span>
        </div>}
      > 
        {tabContent.dashboard}
      </Tab>

      <Tab title={<> <div>
        <FontAwesomeIcon icon={faIdCard} />
        <span> Banking</span>
      </div></>} className="mr-2">
        {tabContent.banking}
      </Tab>

      <Tab title={<> <div>
        <FontAwesomeIcon icon={faShop} />
        <span> Marketplace</span>
      </div></>} className="mr-2">
        {tabContent.marketplace}
      </Tab>

      <Tab title={<> <div>
        <FontAwesomeIcon icon={faNoteSticky} />
        <span> Information</span>
      </div></>} className="mr-2">
        {tabContent.information}
      </Tab>

      <Tab title={<> <div>
        <FontAwesomeIcon icon={faUser} />
        <span> Personal</span>
      </div></>} className="mr-2">
        {tabContent.personal}
      </Tab>
    </Tabs>
  );
};

export default HeaderTabsComponent;
