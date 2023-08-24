import React from 'react'
import CreateGame from '../../pages/CreateGame'
import AllGames from '../../pages/AllGames'
import Drafts from '../../ExtraPages/ExGames/Drafts'
import Inactive from '../../ExtraPages/ExGames/Inactive'
import Active from '../../ExtraPages/ExGames/Active'
import { useState } from 'react'

const GameComponent = () => {
  const [activeTab, setActiveTab] = useState('allGames'); // State to track the active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <CreateGame />
      <div className='flex gap-8 ml-2 mt-5 text-sm'>
        <h4 onClick={() => handleTabClick('allGames')} style={{ color: activeTab === 'allGames' ? 'black' : 'gray', cursor: 'pointer' }}>
          All Games
        </h4>
        <h4 onClick={() => handleTabClick('drafts')} style={{ color: activeTab === 'drafts' ? 'black' : 'gray', cursor: 'pointer' }}>
          Drafts
        </h4>
        <h4 onClick={() => handleTabClick('active')} style={{ color: activeTab === 'active' ? 'black' : 'gray', cursor: 'pointer' }}>
          Active
        </h4>
        <h4 onClick={() => handleTabClick('inactive')} style={{ color: activeTab === 'inactive' ? 'black' : 'gray', cursor: 'pointer' }}>
          Inactive
        </h4>
      </div>
      {/* Render components based on activeTab state */}
      {activeTab === 'allGames' && <AllGames />}
      {activeTab === 'drafts' && <Drafts />}
      {activeTab === 'inactive' && <Inactive />}
      {activeTab === 'active' && <Active />}
    </div>
  );
}

export default GameComponent;
