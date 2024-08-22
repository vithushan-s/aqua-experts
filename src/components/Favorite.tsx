// import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import PeopleFavorite from "../controls/cartTopFive";

type Props = {}

function Favorite({}: Props) {
  return (
    <section className="bg-blue-950 w-full md:h-[80vh] flex justify-center items-center">
        <div className="flex flex-col gap-3 pt-5 py-10 items-center w-full">
            <h1 className="text-xl md:text-2xl font-semibold text-white">Top 5 Customer Favorite</h1>
            <div className="flex flex-col items-centers  md:flex-row gap-2 ">
                <PeopleFavorite image="1.png">
                    <h1 className='text-lg font-semibold'>Arowana</h1>
                    <p className='text-sm'>Lorem Ipsum</p>
                    <button className='bg-black/50 p-2 rounded'>
                        <FaRegHeart/>
                    </button>
                </PeopleFavorite>

                <PeopleFavorite image="2.png">
                    <h1 className='text-lg font-semibold'>Discus</h1>
                    <p className='text-sm'>Lorem Ipsum</p>
                    <button className='bg-black/50 p-2 rounded'>
                        <FaRegHeart/>
                    </button>
                </PeopleFavorite>

                <PeopleFavorite image="3.png">
                    <h1 className='text-lg font-semibold'>Angel</h1>
                    <p className='text-sm'>Lorem Ipsum</p>
                    <button className='bg-black/50 p-2 rounded'>
                        <FaRegHeart/>
                    </button>
                </PeopleFavorite>

                <PeopleFavorite image="4.png">
                    <h1 className='text-lg font-semibold'>Gourami</h1>
                    <p className='text-sm'>Lorem Ipsum</p>
                    <button className='bg-black/50 p-2 rounded'>
                        <FaRegHeart/>
                    </button>
                </PeopleFavorite>

                <PeopleFavorite image="5.png">
                    <h1 className='text-lg font-semibold'>Tetra</h1>
                    <p className='text-sm'>Lorem Ipsum</p>
                    <button className='bg-black/50 p-2 rounded'>
                        <FaRegHeart/>
                    </button>
                </PeopleFavorite>
                    
            </div>
        </div>
    </section>
  )
}

export default Favorite