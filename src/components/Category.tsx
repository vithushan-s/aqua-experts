// import React from 'react'
import Favorite from "../controls/cardFavorite";
import { FaChevronRight } from "react-icons/fa";

type Props = {}

function Category({}: Props) {
  return (
    <section className="bg-blue-950 md:w-full py-5 md:h-screen flex justify-center items-center md:p-5">
      <div className="flex flex-col gap-3 pt-5 items-center w-full">
          <h1 className="text-xl md:text-2xl font-semibold text-white">Category</h1>
          <div className="grid grid-row-5 grid-cols-2 gap-y-4 gap-x-4 md:grid-rows-2 md:grid-cols-5 md:gap-4">
                  <Favorite image="1.png">
                    <h1 className='text-lg font-semibold'>Arowana</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="2.png">
                    <h1 className='text-lg font-semibold'>Discus</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="3.png">
                    <h1 className='text-lg font-semibold'>Gourami</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="4.png">
                    <h1 className='text-lg font-semibold'>Angel</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="5.png">
                    <h1 className='text-lg font-semibold'>Tetra</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>

                  <Favorite image="6.png">
                    <h1 className='text-lg font-semibold'>Cichilds</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="7.png">
                    <h1 className='text-lg font-semibold'>Malawi</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="8.png">
                    <h1 className='text-lg font-semibold'>Algespisere</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="9.png">
                    <h1 className='text-lg font-semibold'>Liveplant</h1>
                    <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950 p-2 rounded flex text-sm items-center gap-2 w-full'>
                        <span>View More</span>
                        <FaChevronRight/>
                    </button>
                  </Favorite>
        
                  <Favorite image="10.png">
                    <h1 className='text-lg font-semibold'>Tetra</h1>
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

export default Category