import { useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import AuthService from './appwrite/auth'
import {login,logout} from "./store/authSlice"

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    AuthService.getcurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading (false))
  },[])
  
  return !loading?(
    <div className='min-h-screen flex flex-wrap
    content-between bg-gray-400'></div>
  ):(null)
    
  
}

export default App
