import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const About = () => {

  const value = useContext(ThemeContext)
  console.log(value,"val....");

  
  return (
    <div>

      <h1>About</h1>

      <h2>about page is created</h2>
      
      <h1>User Details: {value.name}, {value.age}, {value.phone}, {value.address  = "indore"}</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur et voluptate ratione assumenda quia amet quae non, error aspernatur cum minus doloremque pariatur commodi obcaecati laudantium illo consequuntur ab quibusdam!</p>
    </div>
  )
}

export default About