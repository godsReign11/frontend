import React from "react";
import { BiChevronDown } from 'react-icons/bi'

const TopHead = (props) => {
  return (
    <div className="main-top-div">
      <h1 className="text-3xl font-bold">{props.name}</h1>
      <div className="flex justify-end">
        <h3 className="flex items-center gap-2">
          <img className="w-[33.31px] h-[30.94px] rounded-full" src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=721&q=80" />
          <h5 className="mt-1">John Deo</h5>
          <BiChevronDown />
        </h3>
      </div>
    </div>
  );
};

export default TopHead;
