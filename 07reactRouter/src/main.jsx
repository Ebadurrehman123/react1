import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'



//ya ik method ya js kay andr array hai
//const router =createBrowserRouter([
  //{
    // '/'top level element is ka andr nesting hori hai ya kiya 
    // cheez render kray ga wo element is ko btana par ta hai
    //path:'/',
    //element:<Layout/>,//ab ap is ka andr or bhi children add krna chate hai wo kr skta hai
   // children:[
      //{
      //  path:"",
      //  element:<Home/>
      //},
      //{
        //path:"about",
        //element:<About/>
      //},
      //{
        //path:"contact",
        //element:<Contact/>
      //}
    //]
 
  //}
//])


const router = createBrowserRouter(
  createRoutesFromElements( //ya ik method hai
    //ab route ma bhi btana par ta hai path konsa hai 
    //or konsa element ya render hoga 
   <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path= 'about' element={<About/>}/>
      <Route path='contact'element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route loader ={githubInfoLoader}
      path='github'
      element={<Github/>}/>
      
   </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
