import React from "react";

const Service = ({ userdata }) => {
  console.log("userdata", userdata);

  return (
    <div>
      <h2>name {userdata?.name} Raju </h2>
      <h2>Age {userdata?.age ? userdata?.age : 20}</h2>
      <h2>Address {userdata?.address} Indore</h2>
      <h2>Gender: {userdata?.man ? "Man" : "Female"}</h2>
    </div>
  );
};

export default Service;
