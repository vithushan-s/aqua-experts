// import React, { useState } from 'react'
import './index.css'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { TbCurrencyKroneCzech } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import Favorite from "./controls/cardFavorite";
import Feedback from "./controls/cardFeedback";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

// Socialmedia Icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
// import Contact from './pages/Contact';


function Index() {
  const [IsOpen, setIsOpen] = useState(false);
  console.log(IsOpen)
  return (

    
    <>
        <main className="flex md:min-h-screen flex-col">
          <div className='bg-blue-950 w-full h-8 text-white flex justify-between items-center'>
            <div className='container mx-auto flex '>
              <div className='flex justify-center items-center md:justify-start gap-2 w-full'>
                <BiSolidOffer/>
                <p className='text-sm'>Special offer 20% off Sale</p>
              </div>

              <div className='hidden md:flex md:gap-2'>
                <FaFacebook/>
                <FaInstagramSquare/>
                <FaYoutube/>
              </div>
            </div>
          </div>

          <section className='relative bg-blue-950 md:bg-gradient-to-b md:from-zinc-900 md:to-zinc-500 h-[50vh] md:h-screen md:w-full flex justify-center'>
              <img src="cover.jpg" className="hidden md:block md:absolute md:w-full md:h-full md:bg-cover md:mix-blend-overlay " />
              
              <nav className='container absolute w-full md:w-3/4 h-16 bg-white/80 md:top-4 md:rounded-full flex justify-between items-center'>
                  <div className='flex items-center gap-3 justify-between md:justify-start w-full px-3'>
                      <div className='flex items-center'>
                        <img src="logo.png" className='h-14 w-14' alt="logo for aqua experts" />
                        <div className="flex flex-col">
                          <span className="text-sm">Norway</span>
                          <span className="font-bold">Aqua Experts</span>
                        </div>
                      </div>

                      <div className='md:hidden'>
                        <button onClick={()=>setIsOpen(!IsOpen)}>
                          <RxHamburgerMenu/>
                        </button>
                      </div>
                  </div>

                  <div className={`md:flex md:gap-3 ${!IsOpen ? "hidden":"absolute top-16 bg-white  w-full flex flex-col gap-5 text-center p-3"} px-3`}>
                      <ul className='flex flex-col md:flex-row gap-5 font-semibold mt-4 md:gap-5'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                      <Link to="/login" className='bg-red-500 rounded-md md:rounded-full py-1 md:px-5 md:py-3'>Login</Link>
                  </div>
              </nav>

              <div className='container mx-auto flex justify-center items-center w-full md:absolute md:top-52'>
                <div className='flex flex-col items-center gap-5'>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="md:text-3xl font-bold text-gray-50 drop-shadow-lg">WELCOME TO NORWAY AQUA EXPERTS</h1>
                    <h1 className="md:text-2xl font-thin text-gray-50 drop-shadow-lg">DEEP DIVE INTO OUR AQUARIUM</h1>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2 w-full p-3 md:w-full justify-center">
                    <input type="text" placeholder="enter your email" className="p-3 rounded-full md:w-1/2"/>
                    <button className="bg-yellow-400 p-3 rounded-full font-semibold text-xs hover:bg-yellow-500">Customer Inquiry</button>
                  </div>
                </div>
              </div>
          </section>
           
           {/* Why people choose us */}
           <section className="md:h-72 p-5 flex flex-col items-center gap-10 justify-center">
              <h1 className="text-xl font-bold text-blue-950 md:text-2xl">Why most of the people are choose us</h1>
      
              <div className="container flex flex-col gap-10 md:flex-row md:justify-center md:gap-40">
                {/* single circle */}
                <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                        <FaChalkboardTeacher className="w-10 h-10"/>
                    </div>
                    <span className="text-sm font-bold">Guidane</span>
                    <p className='text-xs text-gray-600'>Lorem ipsome</p>
                </div>
                {/* single circle */}
                <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                        <FaHandshake className="w-10 h-10"/>
                    </div>
                    <span className="text-sm font-bold">Quality Sevice</span>
                    <p className='text-xs text-gray-600'>Lorem ipsome</p>
                </div>
                {/* single circle */}
                <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                        <TbCurrencyKroneCzech className="w-10 h-10"/>
                    </div>
                    <span className="text-sm font-bold">Affordable Price</span>
                    <p className='text-xs text-gray-600'>Lorem ipsome</p>
                </div>
                {/* single circle */}
                <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                        <FaHeadset className="w-10 h-10"/>
                    </div>
                    <span className="text-sm font-bold">Get help any time</span>
                    <p className='text-xs text-gray-600'>Lorem ipsome</p>
                </div>
              </div>
           </section>
      
           {/* Top customer favorite */}
           <section className="bg-blue-950 p-5 flex flex-col gap-5 items-center justify-center md:h-screen">
      
              <h1 className="text-xl font-bold md:font-normal md:text-2xl text-gray-50">Top 5 Customer Favorite </h1>
      
              <div className="flex flex-col md:flex-row gap-3 ">
                <Favorite image="1.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
                  <button className='bg-black/50 p-2 rounded'>
                      <FaRegHeart/>
                  </button>
                </Favorite>
                <Favorite image="2.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
                  <button className='bg-black/50 p-2 rounded'>
                      <FaRegHeart/>
                  </button>
                </Favorite>
                <Favorite image="3.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
                  <button className='bg-black/50 p-2 rounded'>
                      <FaRegHeart/>
                  </button>
                </Favorite>
                <Favorite image="4.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
                  <button className='bg-black/50 p-2 rounded'>
                      <FaRegHeart/>
                  </button>
                </Favorite>
                <Favorite image="5.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
                  <button className='bg-black/50 p-2 rounded'>
                      <FaRegHeart/>
                  </button>
                </Favorite>
                
              </div>
              
           </section>
      
      
          {/* Feedback corner */}
          <section className="md:h-80 w-full p-10 flex flex-col items-center gap-3 justify-center">
            <h1 className="text-2xl text-blue-950">Feedback Corner</h1>
            <div className='container flex w-3/4 justify-center items-center'>
                
                <img src="feedback.svg" className='hidden md:block w-72' />
                
                <div className=' flex flex-col md:flex-row gap-2 border-2 border-dashed p-3'>
                   <Feedback profile="profile3.jpg" name="Elon Musk" feedback="sdafsgf\gsddsjfsdjgfjh"/>
                   <Feedback profile="profile2.jpg" name="David" feedback="sdafsgf\gsddsjfsdjgfjh"/>
                   <Feedback profile="profile1.jpg" name="John" feedback="sdafsgf\gsddsjfsdjgfjh"/>
                </div>
            </div>
          </section>
          
      
          {/* Category */}
           <section className="bg-blue-950 p-5 flex flex-col gap-5 items-center justify-center h-full md:h-screen">
      
              <h1 className="text-2xl text-gray-50">Categories</h1>

              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-3 ">
                <Favorite image="1.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
      
                <Favorite image="2.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
      
                <Favorite image="3.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
      
                <Favorite image="4.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
      
                <Favorite image="5.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
                
              </div>
      
              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-3 ">
                <Favorite image="6.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
      
                <Favorite image="7.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
      
                <Favorite image="8.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
      
                <Favorite image="9.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
      
                <Favorite image="10.png">
                  <h1 className='text-lg font-semibold'>Hello</h1>
                  <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                      <span>View More</span>
                      <FaChevronRight/>
                  </button>
                </Favorite>
                
              </div>
              
           </section>
      
      
           {/* Newsletter */}
           <section className="h-72 w-full p-5 flex flex-col items-center gap-3 justify-center">
            <h1 className="text-2xl text-blue-950">Subscribe to Newsletter</h1>
            <div className='flex flex-col md:flex-row w-full md:w-3/4 md:justify-center md:items-center border-2 border-dashed md:p-3'>
                
                <img src="newsletter.svg" className='hidden md:block w-72' alt="" />
                
                <div className='w-full md:w-3/4 flex flex-col md:ml-20 gap-2 p-2'>
                   <h1 className='text-xl font-medium text-left'></h1>
                   <div className='flex flex-col md:flex-row gap-2 md:gap-1'>
                      <input type="text" placeholder='enter your email address' className='p-3 bg-gray-100 outline-none rounded-full md:w-96'/>
                      <button className='bg-blue-950 p-3 rounded-full text-sm text-white'>Subscribe</button>
                   </div>
                   <p className='text-sm text-gray-300 text-center md:text-left'>It is a long established fact that a reader will be distracted by the readable content</p>
                </div>
            </div>
          </section>
      
      
          {/* Footer */}
          <section className='flex flex-col w-full bg-blue-900 md:h-96 p-10 md:flex-row md:justify-between'>
            {/* column1 */}
            <div className='flex flex-col justify-center items-center md:items-start'>
              <img src="logo.png"  className='w-24 h-24'/>
              <h1 className='text-md md:text-xl font-semibold text-white border-b border-gray-500'>Norway Aqua Expert</h1> 
              <p className='text-sm text-white mt-5 text-center md:text-left'>It is a long established fact that a reader <br /> 
              will be distracted by the readable content <br /> of 
              page when looking at its layout. The point of <br /> 
              Lorem Ipsum is that it has a more-or-less 
              distribution <br /> of letters, as opposed to using '
              Content here.
              </p>
            </div>
      
            {/* column2 */}
            <div className='flex flex-col md:flex-row gap-12 mt-10 md:mt-0 text-white'>
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className='text-lg font-bold'>Quick Links</h1>
                    <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-2 text-sm'>
                        <a href="#">Category</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
      
                <div className='flex flex-col items-center md:items-start'>
                  <h1 className='text-lg font-bold'>Products</h1>
                  <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-2 text-sm'>
                        <a href="#">Discus</a>
                        <a href="#">Arowana Us</a>
                        <a href="#">Angel</a>
                        <a href="#">Gourami</a>
                        <a href="#">Platty Us</a>
                        <a href="#">Tetra</a>
                    </div>
                </div>
      
                <div className='flex flex-col items-center md:items-start'>
                  <h1 className='text-lg font-bold'>Others</h1>
                  <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-2 text-sm'>
                        <a href="#">Terms & Policies</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Sitemap</a>
                        <a href="#">Blog</a>
                  </div>  
                </div>
            </div>
      
            {/* column3 */}
            <div className='flex flex-col gap-5 mt-5 md:mt-0'>
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
      
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className='text-lg font-bold text-white'>Opening Hours</h1>
                    <div className='border-2 border-dashed p-3'>
                        <div className='flex gap-1 text-white'>
                          <h1>Monday - Sunday :</h1>
                          <h1>09:00AM - 06:00PM</h1>
                        </div>
                        <div className='flex gap-1 text-white'>
                          <h1>Public Holidays :</h1>
                          <h1>09:00AM - 06:00PM</h1>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      
          {/* Footer End */}
          <section className='h-14 bg-blue-950 flex justify-center items-center text-white'>
            <p>@2024 All right reserved aqua-experts.com</p>
          </section>
            </main>
    </>
  )
}

export default Index