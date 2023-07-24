import React from "react";

const TopHead = (props) => {
  return (
    <div className="main-top-div bg-gradient-to-r from-blue-500 to-purple-500 py-6 px-8 text-white rounded-md">
      <h1 className="text-3xl font-bold">{props.name}</h1>
      <div className="flex justify-end">
        <h3 className="text-lg font-semibold">Profile</h3>
      </div>
    </div>
  );
};

export default TopHead;
