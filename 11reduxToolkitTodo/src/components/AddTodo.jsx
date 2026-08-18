import React,{useState} from "react"
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/Todo/todoSlice'

function AddTodo(){
  //addtodo means store ka andr kuch add krna hai
  //add ksa hota hai dispatch sa to apko kuch na kuch event dispatch krna paray gaa
  //ab state ka name input or set input rak hwa hai

  //ab dispatch kiya hai react ka wireup hai kis trah sa redux hmara use hoga
  //ab dispatch ko use ksa krtay hai
  //hum na ik method bna raka hai addTodoHandler funcnality hmna nai likni
  //hmnsa simple ik method bnana hai
  //const addtodohandler or pir event sub sa phelay prevent default kiu kay form directly submit hijata hai
  //ab kiya use kro dispatch  
  //dispatch kiya krta hai ik ik reducer ko krtay hwa store kay andr changes krta hai
  //dispatch kiya hai ik method ab konsa method use krna chao gai
  //ab sab sa phelay method ko import kra gai or individual reducer ko lekar atay hai
  //import krtay addtodo,removetodo
  //ab dispatch ka andr hi reducer ko call krna partha hai
  //ab addtodo call krskta hai pr ikalay krstay hai apnay jo functinlity liki hai action.payload phelay manualy likna parta tha
  //abi likni ki nai zaroorat jo bhi value likna chate ho wo bhej do
  //aya tak to thek hai
  //lekin jo apnay input field bnaya is input field ko apnay clean nai kiya
  //jab ap ka to bn gya pir use ko acha nai lagay ga wo wa pr field hai
  //to is form ko clean krnay kay liya ap setinput use krlo or us ka state wapis sa clean krlo
  //jo bhi use nay dirty kiya hai
  //to kiya kiya hm na
  //hmna dispatch bnaya us ma reducer call kiya jo bhi value pass krni hai krskta hu
  //us value ko muja access krna hai action.payload object  kay andr wo sari values hai\
  //usedispatch ka kaam hoga ab use selector
  //useSelector ka kaaam ma ai ga jab apna todoadd kiya hai tab to functionality kam ma lali dispatch ki
  //kiu ka ik action dispatch krna tha laykin hm atay hai ik apni functionality pr
  //ja saray todos ko list krna hai
  //agr muja saree todos mil jaie muja ya pta hai todos initial state object hai
  //lekin todos hai wo array hai to loop lga day ga sari value mil jae gi
  //lekin ya value ka sa lu
  //ya value milti hai store sa is liye store bnaya jata hai sare cheezay store sa mil jae
  //lekin store sa laigay ksa 
  //use kay liya samjna paray ga useselector ka syntax //todo.jsx
  //useSelector irf ik method hai bs advantage ya hai us ka andr state ka access milta hai
  //ik callback ka andr tate ka andr ap ko value mil jae gi ab ap jo value chaie mil jae gi

    const [input,setInput] = useState('')
    const dispatch = useDispatch()
//dispatch ik reducer ko use krta hwa store ma value add krta hai
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="flex justify-center items-center gap-4">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo