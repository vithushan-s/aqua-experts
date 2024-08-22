// import React from 'react'
import { FaStar} from "react-icons/fa";

function cardFeedback({childern, profile,name,feedback,...props}:any) {
  return (
    <div className='w-full relative p-3' {...props}>
       <img src={profile} className='absolute w-10 h-10 md:w-14 md:h-14 rounded-full top-1 left-1 shadow-lg object-fill'/>
       <div className='bg-gray-300 w-36 h-28 md:w-64 md:h-40 rounded-tl-3xl shadow-xl rounded-br-3xl p-3 flex flex-col justify-between'>
            <h1 className='text-right font-bold text-sm md:text-lg'>{name}</h1>
            <p className='text-xs md:text-sm text-justify text-gray-800 text-wrap '>{feedback}</p>
            <div className='flex'>
                <FaStar className='text-yellow-400'/>
                <FaStar className='text-yellow-400'/>
                <FaStar className='text-yellow-400'/>
            </div>
       </div>
    </div>
  )
}

export default cardFeedback