import { useState } from "react";
import About from "./About";
import Contect from "./Contect";
import Service from "./Service";

function HomePage() {
  const [count, setcount] = useState(15);

  function updatecount() {
    setcount(count + 2);

    console.log("checked", count);
  }

  const [userdata, setuserdata] = useState({
    name: "Ram Singh",
    age: 25,
    address: "indore",
    man: true,
  });

  
  function userdataupdate() {
    setuserdata({
      name: "Priya Singh",
      address: "Bhopal",
      man: false,
    });
  }

  return (
    <div className="home">
      <h2>Header : {count}</h2>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <h1>Data: {count}</h1>
      <button onClick={updatecount}>Click me Update data {count}</button>

      <About />
      <h1>my Project finaly uplaod in github</h1>

      <Contect counter={count} />
      <Service userdata={userdata} />

      <button onClick={userdataupdate}>Update user data</button>
    </div>
  );
}

export default HomePage;
