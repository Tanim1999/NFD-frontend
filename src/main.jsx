import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div  className=' bg-[#E8EBF1] max-w-screen-xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>

)
