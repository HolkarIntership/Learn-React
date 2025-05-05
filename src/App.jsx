import { useCallback, useId, useMemo, useRef, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contect from "./pages/Contect";
import Counter from "./pages/Counter";
import ProductList from "./pages/ProductList";
import NotFound from "./pages/NotFound";
import Navbar from "./Components/Layout/Navbar";

function App() {
  // const apidata = fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // console.log("apidata", apidata);

  const first = useRef();
  const first2 = useRef();

  function Reffun() {
    // first.current.focus();
    // first.current.value = "raju"

    console.log(first, "firssssst");
    console.log(first2, "firssssst");
  }

  // const callback = useCallback(() => {
  //   fetch("https://dummyjson.com/todos")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

  // console.log("callback", callback());

  const [counter, setcounter] = useState(0);
  function callback() {
    setcounter((prev) => prev + 1);
    console.log("counter", counter);
  }

  const memo = useMemo(() => {
    console.log("Memo called, counter incremented to", counter + 1);

    return counter + 1;
  }, [counter]);

  console.log("memo", memo);

  return (
    <>
      {/* <Home /> */}

      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
        {/* <Home /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
