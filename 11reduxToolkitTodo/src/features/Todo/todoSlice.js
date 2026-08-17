//apko sirf ik method chaie jo slice bna day ga
//lekin hum do use krae gai
//first method hai create slice or second nanoid

//ab iska andr sub sa important cheez kiya hoti hai store ka andr
//initial state
//kay store starting ma ksa deekay ga
//empty hoga
//ab initial state kuch bhi hoskti hay array bhi or object bhi
//ab is may may ik object lay ra hu is ma multiple cheeezay askti ha

//ab may isma todos name sa ik state hai
//ya kiay hai ik array hai or array ka andr hmare pas object hogai
//ab bidefaoult us ma ik objext add krdata hu

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
//ab kiya slices ka name hotay hai ap kay upr depend krta hai kiya name rakna hai
//jo bhi name raka thora samj ka rakiyae ga
//kiu ka jo hum toolkit use kra gai crome ma redux ka wa pr ya hi name show hoga
//ab ya mana name property di name ya property redux toolkit ka andr hai
//ya hi property ka name hota hai
//ab is property ka name rak diya todo ya string hai
//name important hai property
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
//state ka andr kiya milta hai current initialstate ki value
//or Action kay andr jo bhi data pass hora hai

//ab addtodo ka andr id di
//or text ka sa nikalay gai action sa action ka andr payload name sa update kiya 


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

//ya todo ap na bnaya hai pr abi state ka andr nai gya
//kiu gai initial state to ap na bta di but ab state ko update krna parray ga
//ya pr apko kiya krna hai
//state ka access lo state ka andr apko pta hai apna todos liya hai
//todos ksa liya hai initial state ma apna todos liya hai
//initial state ma jo apka object hai wo state hai
 //to is todos ko ma acces kr ra hu
 //or is todos ma kiya kr ra seeda push k ra hai value ko
 //to hmara add todo wala kaam hogya
 //ab remove kiya hai
 //ab remove ka pas skiska access hai state or action
 //ab muja pta remive krna ka liya action ma ik id baja hoga
 //ab id to bja hoga to filter lga datay hai apnay todos ma
 //ab jo bhi action.id hai match hojata hai  hmare todo id sa to us ko nai lagay
 //baki sub ko lay lay gai
 //ab state.todos.filter lga do filter kay andr hr ik values ka access milay ga
 //har value ka access milay ga us ko todo bolday hai todos ka andr jo bhi hai
 //ab ap ka jo todo hai us ka pass ik id hogi kay wo nai milni chae us sa jo ap action kay sat payload bhej ra ho us sa


 //ap nay todo slice export kr diya 
 //ap ko  reducer kay do part export krna hotay hai reducer kay

 //first hum ya krae gai jitni functionality hai us ko export krae gai
 //que export krae gai kiu ka jo ya reducer hai ya functionality addtodo ,removetode
 //hum isi kay through hi state ko update krae gai
 //ya functionality individual kaam ma ai gi
 //to hum in functinalit ko export kr datay hai
 //or is ko dagay todoslice.action ab is action ma say value mil jae gi
 //kon kon si value abi do liki hai addtodo removetodo

 //ab ya jo hmare store hai us ko bhi awareness chaie in sare reducer bare ma
 //is ko awareness nai hai to store maintain nai kr pae ga
//ya ristricted store hai mera andr jo jo ap reducer register kro gai
//un sa hi value lakay update kru ga
//to us ko sare reducer ka list chaie hota hai


//to ya pr hm na bola todoslice.reducer is tara sa ap or bhi reducer bnatay ho
//ya todoSlice ki tarah authentication slice ya kuch bhi slice bnatay ho
//apko vo sare reducer export krnay hi paray gai
//individual reducer ko bhi export krna parray ga same systax kiu ka wo components ma kaam ai gai
