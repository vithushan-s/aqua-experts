// import React from 'react'
import Favorite from "../controls/circleFavorite";
import { FaChevronRight } from "react-icons/fa";

type Props = {}

function Category2({}: Props) {
  return (
    <section className="bg-blue-950 bg-[url('section.png')] bg-cover md:w-full py-5 md:h-screen flex justify-center items-center md:p-5">
      <div className="flex flex-col gap-3 pt-5 items-center w-full">
          <h1 className="text-xl md:text-2xl font-semibold text-blue-950">Category</h1>
          <div className="grid grid-row-5 grid-cols-2 gap-y-6 gap-x-6 md:grid-rows-2 md:grid-cols-5 md:gap-y-6 md:gap-x-6">
                  <Favorite image="1.png">
                    <h1 className='text-lg font-semibold'>Arowana</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="2.png">
                    <h1 className='text-lg font-semibold'>Hello</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="3.png">
                    <h1 className='text-lg font-semibold'>Hello</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="4.png">
                    <h1 className='text-lg font-semibold'>Hello</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="5.png">
                    <h1 className='text-lg font-semibold'>Hello</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>

                  <Favorite image="6.png">
                    <h1 className='text-lg font-semibold'>Hello</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="7.png">
                    <h1 className='text-lg font-semibold'>Hello</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="8.png">
                    <h1 className='text-lg font-semibold'>Hello</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="9.png">
                    <h1 className='text-lg font-semibold'>Hello</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="10.png">
                    <h1 className='text-lg font-semibold'>Hello</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
          </div>
      </div>
    </section>
  )
}

export default Category2