import { useCallback, useId, useMemo, useRef, useState } from "react";
import Home from "./pages/Home";

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

      {/* 
      <input type="text" ref={first2} />
      <h1 ref={first}>Heloo</h1>

      <button onClick={Reffun}>CLick</button> */}

      <div>
        <h1>count {counter}</h1>
      </div>

      <button onClick={callback}>Click</button>
      <button>Use Memo Click</button>
    </>
  );
}

export default App;
