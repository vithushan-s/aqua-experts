// import React from 'react'

import { Link } from "react-router-dom"

type Props = {}

export default function Login({}: Props) {
  return (
    <section className="  bg-[url('https://img.freepik.com/free-photo/underwater-landscape_23-2150440386.jpg?t=st=1724264729~exp=1724268329~hmac=649d32e86cbf08fc78ed70cde9420c2ca27ce95122877db5b3344ce39cf05122&w=826')] bg-cover bg-blue-950 w-full h-screen flex justify-center items-center">
        <div className="bg-blue-900 w-1/2 h-2/3 rounded-2xl shadow-lg flex justify-around">
            <div className="w-1/2 h-full bg-[url('section.png')] bg-cover flex justify-center items-center rounded-tl-2xl rounded-bl-2xl">
                <div className='flex items-center drop-shadow-lg'>
                    <img src="logo.png" className='h-14 w-14' alt="logo for aqua experts" />
                    <div className="flex flex-col">
                        <span className="text-sm">Norway</span>
                        <span className="font-bold">Aqua Experts</span>
                    </div>
                </div>
            </div>

            <div className="w-1/2 h-full bg-white rounded-tr-2xl rounded-br-2xl flex flex-col justify-between py-2">
                <h1 className="text-2xl font-semibold text-blue-950 text-center mt-3">Login</h1>

               <form action="" className="flex flex-col p-5 gap-2">
                  <div className="flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input type="email" id="username" className="bg-gray-100 p-2 rounded-lg outline-none focus:ring-1 focus:ring-blue-400"/>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="bg-gray-100 p-2 rounded-lg focus:ring-1 focus:ring-blue-400"/>
                  </div>

                  <div className="flex justify-between">
                    <a href="#" className="text-sm">Remember me</a>
                    <a href="#" className="text-sm text-blue-500 ">Forgot password</a>
                  </div>


                  <Link to="/" className="bg-blue-950 rounded-xl p-2 text-white hover:bg-blue-900 text-center">Login</Link>
                  {/* <button type="submit" className="bg-blue-950 rounded-xl p-2 text-white hover:bg-blue-900">Login</button> */}
               </form>

               <p className="text-center text-sm">Don’t have a account? <Link to="/register" className="text-blue-500">Register</Link></p>
            </div>
        </div>
    </section>
  )
}