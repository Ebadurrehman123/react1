import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            Todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo:(Todo)=>{},
    updateTodo:(id,todo) => {},
    deletedTodo:(id)=>{},
    toggledComplete:(id)=>{}
})


export const usedTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.provider