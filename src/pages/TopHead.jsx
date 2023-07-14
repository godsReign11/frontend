import React from "react";

const TopHead = (props) => {
  return (
    <div className="main-top-div">
      <h1>{props.name}</h1>
      <div>
        <h3>Profile</h3>
      </div>
    </div>
  );
};

export default TopHead;
