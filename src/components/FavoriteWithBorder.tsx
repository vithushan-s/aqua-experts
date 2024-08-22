// import React from 'react'
import PeopleFavorite from "../controls/cardTopWithBorder";


type Props = {}

function FavoriteWithBorder({}: Props) {
  return (
    <section className="bg-blue-950 bg-[url('https://climatesociety.climate.columbia.edu/sites/default/files/styles/cu_crop/public/content/News%20Images/Under%20the%20water.jpg?itok=qc-xsrGK')] bg-cover w-full md:h-[80vh] flex justify-center items-center">
        <div className="flex flex-col gap-3 pt-5 py-10 items-center w-full">
            <h1 className="text-xl md:text-2xl font-semibold text-white">Top 5 Customer Favorite</h1>
            <div className="flex flex-col items-centers  md:flex-row gap-2 ">
                <PeopleFavorite image="1.png">
                    <h1 className='text-lg font-semibold'>Arowana</h1>
                    
                </PeopleFavorite>

                <PeopleFavorite image="2.png">
                    <h1 className='text-lg font-semibold'>Discus</h1>
                    
                </PeopleFavorite>

                <PeopleFavorite image="3.png">
                    <h1 className='text-lg font-semibold'>Gourami</h1>
                </PeopleFavorite>

                <PeopleFavorite image="4.png">
                    <h1 className='text-lg font-semibold'>Algespisere</h1>
                </PeopleFavorite>

                <PeopleFavorite image="5.png">
                    <h1 className='text-lg font-semibold'>Tetra</h1>
                </PeopleFavorite>
                    
            </div>
            
        </div>
    </section>
  )
}

export default FavoriteWithBorder