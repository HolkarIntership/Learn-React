import React from "react";

const Service = ({ userdata }) => {
  console.log("userdata", userdata);

  return (
    <div>
      Service
      <h2>user name {userdata.name}</h2>
      <h2>user Age {userdata.age ? userdata.age : 20}</h2>
      <h2>user Address {userdata.address}</h2>
      <h2>user Gender: {userdata.man ? "Man" : "Female"}</h2>
    </div>
  );
};

export default Service;
