import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Index from './Index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
