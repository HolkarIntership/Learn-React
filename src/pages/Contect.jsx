import React from 'react'
import { useParams } from 'react-router-dom';

const Contect = ({counter}) => {


const params = useParams();

console.log("params", params);


  function CallData(params) {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
    
  }

  
  return (
    <>
    <h1>Contect Page {counter} </h1>
    <h2>Contect Us : 75487934805023984578</h2>

    <div>
      <button onClick={CallData}>APi Call</button>
    </div>
    </>

    
  )
}
 
export default Contect