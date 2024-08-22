import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import 'animate.css'
import { Link } from "react-router-dom";

type Props = {}

function NavbarCommon({}: Props) {

const [isOpen, setIsOpen] = useState(false);

return (
    <nav className="bg-white w-full  md:w-full md:mx-auto  h-16 flex justify-between items-center drop-shadow-xl">
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
            <ul className="flex flex-col items-center w-full gap-3 md:gap-5 p-3 md:flex-row">
                <li className="hover:bg-gray-100 md:hover:bg-transparent w-full text-center font-semibold rounded"><Link to="/">Home</Link></li>
                {/* <li className="hover:bg-gray-100 md:hover:bg-transparent w-full text-center font-semibold rounded"><Link to="/category">Category</Link></li> */}
                <li className="hover:bg-gray-100 md:hover:bg-transparent w-full text-center font-semibold rounded"><Link to="/about">About</Link></li>
                <li className="hover:bg-gray-100 md:hover:bg-transparent w-full text-center font-semibold rounded"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavbarCommon