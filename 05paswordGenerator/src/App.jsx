import { useState,useCallback  } from 'react'

import './App.css'

function App() {
  const [{length ,setLength}]=useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setpassword]=useState("")

  const passwordGenerator=usecallback(fn,[length,numberAllowed,charAllowed,
  password])
  return (
    <>
    <h1 className='text-4xl text-center text-white '>Password Geneartor</h1>
    </>
  )
}

export default App
