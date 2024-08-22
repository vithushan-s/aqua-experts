import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './style/index.css'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Login from './components/Login.tsx'
import Register from './components/Register.tsx'
import App2 from './App2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/app' element={<App2/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
