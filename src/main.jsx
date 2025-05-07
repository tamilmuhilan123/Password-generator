import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Passwordgenerator from './Passwordgenerator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Passwordgenerator/>
  </StrictMode>,
)
