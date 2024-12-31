import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Contexts from './Contexts'
import routes from './routes/Routes'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contexts allroutes={<RouterProvider router={routes}></RouterProvider>}></Contexts>
  </StrictMode>
)
