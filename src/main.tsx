import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import App from './App.tsx'
import './index.css'
import Index from './Index.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
