import React, { useState } from "react";
import { BiChevronDown } from 'react-icons/bi';

const TopHead = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-top-div mb-4">
      <h1 className="text-sm font-bold">{props.name}</h1>
      <div id="popup" className="flex justify-end" onClick={toggleMenu}>
        <h3 className="flex items-center gap-2">
          <img className="w-[33.31px] h-[30.94px] rounded-full" src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=721&q=80" alt="User" />
          <h5 className="mt-1">John Deo</h5>
          <BiChevronDown />
        </h3>
      </div>

      {menuOpen && (
        <div className="absolute right-0 z-10 mt-36 mr-14 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem " tabIndex="-1" id="menu-item-0">Profile</button>
            <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHead;
