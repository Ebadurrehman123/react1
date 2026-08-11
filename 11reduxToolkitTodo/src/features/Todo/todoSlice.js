import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"Hello world"}]
}

//ab slice kis tarekay say bnai gai
//slice kiya hai almost reducer ka bara version hai
//ab reducer kiya hai bs functionality hai
//ab todoslice bnay ga ksay ik hi method hai
//create slice
//is method ma ai ga kiya zyada ter objects hi ai gai
//second cheez jo aap datay ho slice kay andr wo ya
//har slice ka ik initial stage hota hai
//ab kuch log kiya kr krtay name day kr 
//upper hi lik lay tay hai
//kuch alag sa likat hai

//reducer kiya hai property to hai
//reducers ma properties or function atay hai
//property ka andr function likna hota hai

/*function sayHello(){
    console.log("Hello world")
}
*/

//jab abi ap addtodo kray gay ya koi property kay function
//kay andr do cheezay milli gi
//ik milay ga State or ik milay ga Action
//in dono ka apkay paas hamesha hi access rahae ga

//State variable apko hamesha access abi jo initial state hai
//kay andr kiya kiya values hai un ka access day ga
//initial state agay ja kay change hojae gi 

//action kiya hotay jo koi values apkay paas aye
//jsay remove apny to remove nai hoga ik id to lagay gi
//ab kuch value bhi to chaie hogi jab ma remove ya ksi bhi method ko call kru ga
//to wo values action ma sa milay gi

//ab actions say hi addtodo milay ga
//payload ik object hai
//Payload = the actual data you send with the action.
//state ka andr kiya milta hai current state
//or Action kay andr jo bhi data pass hora hai

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.
            id !==action.payload)
        },
    }

})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer