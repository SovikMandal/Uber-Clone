import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import Context from './context/Context.jsx'
import CaptainContext from './context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
      <Context>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context>
    </CaptainContext>
  </StrictMode>,
)
