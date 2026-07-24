import { useState } from "react"


function App() {
  const [color,setcolor]=useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2
        rounded-xl">
        <button 
        onClick={()=>setcolor("red")}
        className="outline-none px-4
        rounded-full text-white shadow-sm"
        style={{backgroundColor:"red"}}
        >red</button>
        <button
        onClick={()=>setcolor("green")} 
        className="outline-none px-4
        rounded-full text-white shadow-sm"
        style={{backgroundColor:"green"}}
        >Green</button>
        <button 
        onClick={()=>setcolor("blue")}
        className="outline-none px-4
        rounded-full text-white shadow-sm"
        style={{backgroundColor:"blue"}}
        >Blue</button>
        <button 
        onClick={()=>setcolor("black")}
        className="outline-none px-4
        rounded-full text-white shadow-sm"
        style={{backgroundColor:"black"}}
        >Black</button>

        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
