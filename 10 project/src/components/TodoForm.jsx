import React from "react";

function TodoForm(){
    
    const {addTodo} =  useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return 

        addTodo({Todo,completed:false})
        setTodo("")
    }


    return(
    <form onSubmit={add} className="flex">
        
    </form>
    )
        
}
export default TodoForm