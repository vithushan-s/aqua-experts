// import React from 'react'
import Footer from '../controls/Footer'
import Navbar from '../controls/Navbar'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

type Props = {}

function Contact({}: Props) {
  return (
    <section className='w-full f-full bg-blue-950 flex flex-col'>
        <nav>
            <Navbar/>
        </nav>

        <div className='p-10 text-justify h-1/2 flex flex-col justify-center text-wrap text-white gap-5'>
            <h1 className='text-center text-4xl font-bold '>Contact</h1>
            <p className='text-lg'>
            We're here to make a splash in your aquarium journey! Whether you have questions, need guidance, or simply want to share your aquatic adventures, our dedicated team at Norway Aqua Expert is just a message away.
            <br />Reach out to us for expert advice on tank setups, equipment recommendations, or assistance with your recent purchase. We value your feedback and are committed to providing the highest level of customer satisfaction.
            </p>

            <p>Connect with Norway Aqua Expert through the following channels:</p>

            <div className='bg-blue-950 p-3 rounded-lg shadow-lg flex flex-col items-center md:items-start'>
                    <h1 className='text-lg font-bold text-white '>Contact Information</h1>
                    <div className='flex flex-col items-center md:items-start'>
                      <div className='flex md:items-center gap-2'>
                        <FaWhatsapp className='hidden md:block w-10 h-10 text-green-400'/>
                        <span className='text-2xl font-bold md:text-xl text-white'>+47 9696 0777</span>
                      </div>
                      <div className='flex md:items-center gap-2'>
                        <MdEmail className='hidden md:block w-10 h-10 text-red-400'/>
                        <span className='text-2xl font-bold md:text-xl text-white'>norwayaquaexperts@gmail.com</span>
                      </div>
                    </div>
                </div>
        </div>

        <footer>
            <Footer/>
        </footer>
    </section>
  )
}

export default Contact