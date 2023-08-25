import React from 'react'

import { useState } from 'react'
import CreatePlayer from '../../pages/CreatePlayer';
import AllPlayerList from '../../pages/AllPlayerList';
import PlayerDrafts from '../../ExtraPages/ExPlayers/Drafts';
import PlayerInactive from '../../ExtraPages/ExPlayers/Inactive';
import PlayerActive from '../../ExtraPages/ExPlayers/Active'

const PalyerComponent = () => {
    const [activeTab, setActiveTab] = useState('allPlayers');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <CreatePlayer />

            {/* Toggle Classes */}

            <div className='flex gap-8 ml-2 mt-5 text-sm font-bold'>
                <h4 onClick={() => handleTabClick('allGames')} style={{ color: activeTab === 'allPlayers' ? 'black' : 'gray', cursor: 'pointer' }}>
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
            {activeTab === 'allGames' && <AllPlayerList />}
            {activeTab === 'drafts' && <PlayerDrafts />}
            {activeTab === 'inactive' && <PlayerInactive />}
            {activeTab === 'active' && <PlayerActive />}
        </div>
    );
}

export default PalyerComponent;
