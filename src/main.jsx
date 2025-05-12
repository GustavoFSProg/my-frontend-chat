import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routeres from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routeres />
  </StrictMode>,
)
