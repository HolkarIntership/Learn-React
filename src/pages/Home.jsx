import { useState } from "react";
import About from "./About";
import Contect from "./Contect";
import Service from "./Service";
import Products from "./ProductList";
import Counter from "./Counter";
import Navbar from "../Components/Layout/Navbar";
import { Link } from "react-router-dom";

function HomePage() {
  const [count, setcount] = useState(15);

  function updatecount() {
    setcount(count + 2);

    // console.log("checked", count);
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
    <main className="container">


      <h1>Welcome to the Home Page</h1>
      <h1>Data: {count}</h1>
      <button onClick={updatecount}>Click me Update data {count}</button>

      {/* <About />
      <h1>my Project finaly uplaod in github</h1>

      <Contect counter={count} />
      <Service userdata={userdata} />

      <button onClick={userdataupdate}>Update user data</button> */}

      {/* <Products /> */}

<br />
      <Link to="/contact">contact again</Link>
<br />
      <a href="/contact">CLick me Go to Contact Page</a>

      {/* <Counter /> */}
    </main>
  );
}

export default HomePage;
