import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider ,useNavigate } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Project from './pages/project/Project.jsx'
import About from './pages/about/About.jsx'
import Error from './pages/error/Error.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/project",
        element:<Project/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"*",
        element:<Error/>
      }
    ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
