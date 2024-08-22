import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import 'animate.css'
import { Link, useNavigate } from "react-router-dom";

type Props = {}

function Navbar({}: Props) {

const [isOpen, setIsOpen] = useState(false);

const navigate = useNavigate();

return (
    <nav className="bg-white/90 w-full md:absolute md:top-4 md:w-3/4 md:mx-auto md:rounded-full h-16 flex justify-between items-center drop drop-shadow-xl">
        <div className="flex items-center justify-between w-full px-3 ">
            <div className="flex items-center gap-2">
                <img src="logo.png" className="w-14 h-14"/>
                <div>
                    <h1 className="text-sm md:text-base">Norway</h1>
                    <h1 className="text-sm font-bold md:text-base">Aqua Experts</h1>
                </div>
            </div>

            <div className="md:hidden">
                <button onClick={()=>setIsOpen(!isOpen)}><IoMenu/></button>
            </div>
        </div>

        <div className={`flex ${!isOpen?"hidden md:flex":"absolute flex flex-col top-16 h-[40vh] bg-white w-full animate__animated animate__slideInDown"}`}>
            <ul className="flex flex-col items-center w-full gap- md:gap-5 p-3 md:flex-row">
                <li className="hover:bg-gray-100 md:hover:bg-transparent w-full text-center font-semibold rounded"><Link to="/">Type1</Link></li>
                <li className="hover:bg-gray-100 md:hover:bg-transparent w-full text-center font-semibold rounded"><Link to="/app">Type2</Link></li>
                {/* <li className="hover:bg-gray-100 md:hover:bg-transparent w-full text-center font-semibold rounded"><Link to="/category">Category</Link></li> */}
                <li className="hover:bg-gray-100 md:hover:bg-transparent w-full text-center font-semibold rounded"><Link to="/about">About</Link></li>
                <li className="hover:bg-gray-100 md:hover:bg-transparent w-full text-center font-semibold rounded"><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="flex justify-evenly gap-2 p-2">
                <button onClick={()=>navigate('/login')} className="bg-blue-950 md:bg-red-500 md:rounded-full md:text-sm p-1 md:p-3  w-1/3 rounded text-white font-semibold md:w-full">Login</button>
                <button className="border-2 border-blue-950 p-1 md:p-2 w-2/3 rounded font-semibold md:hidden">Create Account</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar