import { useEffect, useState } from 'react'
import {TodoProvider} from './context'
import './App.css'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id 
      === id? todo : prevTodo )))
     
  }
  
  const deletedTodo= (id)=>{
    setTodos((prev)=>prev.filter((todo) => todo.id !==id))
  }

  const toggledComplete= (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === 
    id ? {...prevTodo,completed: !prevTodo.completed} : 
    prevTodo))
  }

  useEffect(()=>{
    JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])



  return (
    <TodoProvider value={{todos,addTodo,updateTodo,
    deletedTodo,toggledComplete}}>
      
        
    </TodoProvider>
  )
}

export default App
