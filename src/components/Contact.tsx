// import React from 'react'
import Footer from '../components/Footer'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import NavbarCommon from './NavbarCommon';

type Props = {}

function Contact({}: Props) {
  return (
    <section className='w-full h-full bg-blue-950 flex flex-col'>
        <nav >
            <NavbarCommon/>
        </nav>

        <div className='p-10 bg-[url("https://images.pexels.com/photos/2397651/pexels-photo-2397651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover text-justify h-screen flex flex-col justify-center text-wrap text-white gap-5'>
            <h1 className='text-center text-blue-950 text-4xl font-bold '>Contact</h1>
            <div className='w-full text-justify flex flex-col items-center '>
            <p className='text-lg font-semibold text-blue-950'>
              We're here to make a splash in your aquarium journey! Whether you have questions, need guidance, or simply want to share your aquatic adventures, our dedicated team at Norway Aqua Expert is just a message away.
            <br />Reach out to us for expert advice on tank setups, equipment recommendations, or assistance with your recent purchase. We value your feedback and are committed to providing the highest level of customer satisfaction.
            </p>

            <p className='text-blue-950'>Connect with Norway Aqua Expert through the following channels:</p>
          
        </div>
            <div className='bg-white/60 p-3 rounded-lg shadow-lg flex w-2/5 flex-col items-center md:items-start'><hr />
                    <h1 className='text-lg font-bold text-blue-950 '>Contact Information</h1>
                    <div className='w-full flex flex-col items-center md:items-start '>
                      <div className='flex md:items-center gap-2'>
                        <FaWhatsapp className='hidden md:block w-10 h-10 text-green-700'/>
                        <span className='text-2xl font-bold md:text-xl text-blue-950'>+47 9696 0777</span>
                      </div>
                      <div className='flex md:items-center gap-2'>
                        <MdEmail className='hidden md:block w-10 h-10 text-red-500'/>
                        <span className='text-2xl font-bold md:text-xl text-blue-950'>norwayaquaexperts@gmail.com</span>
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