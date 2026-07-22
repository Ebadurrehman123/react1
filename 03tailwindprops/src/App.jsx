import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {

  const[count,setCount]=useState(0)
  let myObj={
    username:"ebadurrehman",
    age:21
  }
  
  
  return (
    <>
      <h1 className="bg-green-400 text-center p-4 rounded-xl">
        Tailwind Test
      </h1>
     <Card username="Ebad Ur Rehman" btntext="click Me"  />
     <Card username="Ebad" btntext="Visit me"/>
      
    </>
  );
}

export default App;
    
  

    
