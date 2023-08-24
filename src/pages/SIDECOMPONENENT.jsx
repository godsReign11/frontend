import React, { useState } from 'react'; // Don't forget to import useState

const GameComponent = () => {
  const [activeTab, setActiveTab] = useState('allGames'); // State to track the active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <CreateGame />
      <div className='flex gap-8 ml-2 mt-5 text-sm'>
        <h4 onClick={() => handleTabClick('allGames')} style={{ color: activeTab === 'allGames' ? 'blue' : 'black', cursor: 'pointer' }}>
          All Games
        </h4>
        <h4 onClick={() => handleTabClick('drafts')} style={{ color: activeTab === 'drafts' ? 'blue' : 'black', cursor: 'pointer' }}>
          Drafts
        </h4>
        <h4 onClick={() => handleTabClick('active')} style={{ color: activeTab === 'active' ? 'blue' : 'black', cursor: 'pointer' }}>
          Active
        </h4>
        <h4 onClick={() => handleTabClick('inactive')} style={{ color: activeTab === 'inactive' ? 'blue' : 'black', cursor: 'pointer' }}>
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
