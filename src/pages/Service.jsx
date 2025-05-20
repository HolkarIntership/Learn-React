import React, { useContext } from "react";
import { UserContext } from "../UserDetails";
import { ThemeContext } from "../App";

const Service = () => {

  const userdata = JSON.parse(localStorage.getItem("userdata"));

  function deleteAccount() {
    localStorage.clear();
    alert("Account Deleted");
    window.location.reload();
  }

  const data = useContext(UserContext);

const value = useContext(ThemeContext)
  console.log(value,"val....");

  return (
    <div>

      <h1>User Details: {value.name}, {value.age}, {value.phone}, {value.address}</h1>


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

      <br />
      <br />
      <br />
      <h1>User Name : {data?.name}</h1>

    </div>
  );
};

export default Service;
