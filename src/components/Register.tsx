// import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default function Register({}: Props) {
  return (
    <section className="bg-blue-950 w-full h-screen flex justify-center items-center">
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
            <h1 className="text-2xl font-semibold text-blue-950 text-center mt-3">Create Account</h1>

           <form action="" className="flex flex-col p-5 gap-2">
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="bg-gray-100 p-2 rounded-lg outline-none focus:ring-1 focus:ring-blue-400"/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="bg-gray-100 p-2 rounded-lg outline-none focus:ring-1 focus:ring-blue-400"/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="bg-gray-100 p-2 rounded-lg focus:ring-1 focus:ring-blue-400"/>
              </div>

              
              <button type="submit" className="bg-blue-950 mt-5 rounded-xl p-2 text-white hover:bg-blue-900">Register</button>
           </form>

           <p className="text-center text-sm">Already have a account?  <Link to="/login" className="text-blue-500">Login</Link></p>
        </div>
    </div>
</section>
  )
}