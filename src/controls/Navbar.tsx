// import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function Navbar({}: Props) {
    // const [IsOpen, setIsOpen] = useState(false);
  
  return (
    <nav className='w-full h-16 bg-white/80 flex justify-between items-center px-5'>
        <div>
            <div className='flex items-center'>
                <img src="logo.png" className='h-14 w-14' alt="logo for aqua experts" />
                <div className="flex flex-col">
                    <span className="text-sm">Norway</span>
                    <span className="font-bold">Aqua Experts</span>
                </div>
            </div>
        </div>

        <div>
            <ul className='flex gap-5 font-semibold '>
                <li className='hover:text-white'><Link to="/">Home</Link></li>
                <li className='hover:text-white'><Link to="/about">About</Link></li>
                <li className='hover:text-white'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar