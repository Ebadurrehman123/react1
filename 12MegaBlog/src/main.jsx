import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
            <login/>
          </AuthLayout>
        ),
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        ),
      },
      {
        path:'/all-posts',
        element:(
          <AuthLayout authentication>
            {" "}
            <Allposts/>
          </AuthLayout>
        ),
      },
      {
        path:'/add-post',
        element:(
          <AuthLayout authentication>
            {" "}
            <Addpost/>
          </AuthLayout>
        ),
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayout authentication >
            {""}
            <EditPost/>
          </AuthLayout>
        ),
      },
      {
        path:'/post/:slug',
        element:<post/>,
      },

    ],
  }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <provider store={store}>
    <RouterProvider router={router}/>
    </provider>
    
  </React.StrictMode>,
)
