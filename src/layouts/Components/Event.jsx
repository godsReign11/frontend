import React from 'react'
import { useState } from 'react'
import SelectPlayerGameCategory from '../../ExtraPages/ExPlayers/SelectPlayerGameCategory';
import AllContest from '../../pages/AllContest';
import EventDrafts from '../../ExtraPages/ExGames/Drafts';
import EventInactive from '../../ExtraPages/ExtraEvents/Inactive';
import EventActive from '../../ExtraPages/ExtraEvents/Active';
import TopHead from '../../pages/TopHead';
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Link } from 'react-router-dom';

const EventComponent = () => {
  const [activeTab, setActiveTab] = useState('allContests');
  const [loadingButton, setLoadingButton] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>

      <TopHead name='Events' />
      <div className='flex items-center justify-between'>
        <div className='flex gap-8 ml-2 mt-5 text-sm font-bold'>
          <h4 onClick={() => handleTabClick('allContests')} style={{ color: activeTab === 'allContests' ? 'black' : 'gray', cursor: 'pointer' }}>
            All Events
          </h4>
          <h4 onClick={() => handleTabClick('drafts')} style={{ color: activeTab === 'drafts' ? 'black' : 'gray', cursor: 'pointer' }}>
            Drafts
          </h4>
          <h4 onClick={() => handleTabClick('active')} style={{ color: activeTab === 'active' ? 'black' : 'gray', cursor: 'pointer' }}>
            Upcoming Events
          </h4>
          <h4 onClick={() => handleTabClick('inactive')} style={{ color: activeTab === 'inactive' ? 'black' : 'gray', cursor: 'pointer' }}>
            Past Events
          </h4>
        </div>

        <div className="mt-1">
          <Link
            to='/create-event'
            className={loadingButton ? "w-[195px] h-11 px-6 py-2.5 bg-neutral-900 rounded-lg  items-center text-white" : "w-[170px] h-11 px-6 py-2.5 bg-neutral-900 rounded-lg  items-center text-white"}
          >
              Add Event
              {
                loadingButton ? <Spin spinning='true' indicator={antIcon} /> : ''
              }
          </Link>
        </div>


      </div>

      {/* Render components based on activeTab state */}

      {activeTab === 'allContests' && <AllContest />}
      {activeTab === 'drafts' && <EventDrafts />}
      {activeTab === 'inactive' && <EventInactive />}
      {activeTab === 'active' && <EventActive />}
    </div>
  );
}

export default EventComponent;
