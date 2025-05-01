import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function add() {
    setCount (count + 1)
    console.log("add", count);
  }

  function remove() {
    setCount (count - 1)
    console.log("remove", count);
  }

  function demo() {
    console.log("demo", count);
  }


   
  return (
    <div>
      <h1>Counter {count}</h1>

      <button onClick={add}>add</button>
      <button onClick={remove}>remove</button>

      <button onClick={demo}>Click me</button>
    </div>
  );
};

export default Counter;
