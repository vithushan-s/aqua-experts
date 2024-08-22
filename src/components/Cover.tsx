// import React from 'react'

import { useNavigate } from "react-router-dom"

type Props = {}

function Cover({}: Props) {

    const navigate = useNavigate();
  return (
    <section className="bg-blue-950 h-[50vh] md:h-screen w-full">
        <div className='bg-[url("https://img.freepik.com/free-photo/underwater-landscape_23-2150440386.jpg?t=st=1724264729~exp=1724268329~hmac=649d32e86cbf08fc78ed70cde9420c2ca27ce95122877db5b3344ce39cf05122&w=826")] bg-cover flex justify-center items-center h-full w-full'>
            <div className='flex flex-col items-center gap-5'>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="md:text-3xl font-bold text-gray-50 ">WELCOME TO NORWAY AQUA EXPERTS</h1>
                    <h1 className="md:text-2xl font-thin text-gray-50">DEEP DIVE INTO OUR AQUARIUM</h1>
                </div>

                <div className="flex flex-col md:flex-row gap-2 w-full p-3 md:w-full justify-center">
                    <input type="text" placeholder="enter your email" className="p-3 rounded-full md:w-1/2"/>
                    <button onClick={()=>navigate('/register')} className="bg-yellow-400 p-3 rounded-full font-semibold text-xs hover:bg-yellow-500">Customer Inquiry</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cover