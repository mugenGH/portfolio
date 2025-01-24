import { StrictMode } from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Skills from './screens/Skills.jsx'
import NotFoundPage from './screens/NotFoundPage.jsx'
import AboutMe from './screens/AboutMe.jsx'
import Projects from './screens/Projects.jsx'
const router=createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    errorElement:<NotFoundPage/>
  }, {
    path:'/about',
    element:<AboutMe/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/skills',
    element:<Skills/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/project',
    element:<Projects/>,
    errorElement:<NotFoundPage/>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
