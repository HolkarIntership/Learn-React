import React from "react";

const Service = () => {

  const userdata = JSON.parse(localStorage.getItem("userdata"));

  function deleteAccount() {
    localStorage.clear();
    alert("Account Deleted");
    window.location.reload();
  }

  return (
    <div>
      <h1>User Details </h1>
      <h2>name {userdata?.name} </h2>
      <h2>Age {userdata?.age}</h2>
      <h2>Gender: {userdata?.email}</h2>
      <h2>Number {userdata?.number}</h2>
      <h2>Address {userdata?.address} </h2>

      <button className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded-md transition"
        onClick={deleteAccount}
      >
        Delete Account
      </button>

    </div>
  );
};

export default Service;
