import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

//use state sa ap ko do cheezay milti hai array ki form ma
//jo zero index pr value milti hai wo apko milti hai simply counter name kuch bhi hoskta hai
//dusri value jo milti hai wo value nai hoti wo ik function hota hai
//js ko usually setcounter boltay hai
//dusra jo function hai wo reaposible hai fist variable ko 
//update krna kay liya
//usestate ma variable ki value hoti hai
  let [counter,setcounter]=useState(15)


 // let counter=15
  const addValue=()=>{
    console.log("Clicked",counter);
    //counter=counter+1
    setcounter(counter+1)
  }
  const removevalue=()=>{
    setcounter(counter-1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>add value{counter}</button>
      <br />
      <button
      onClick={removevalue}>remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
