import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  function add() {
    setCount(count + 1);
    console.log("add", count);
navigate("/");
  }

  function remove() {
    setCount(count - 1);
    console.log("remove", count);
  }

  function demo() {
    console.log("demo", count);
  }

  useEffect(() => {
    async function name(params) {
      await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => console.log(json));
      }
      

    name();
  }, [count]);

  return (
    <div>
      <h1>Counter {count} </h1>

      <button onClick={add}>add</button>
      <button onClick={remove}>remove</button>

      <button onClick={demo}>Click me</button>
    </div>
  );
};

export default Counter;
