import React from 'react'
import { FaStar} from "react-icons/fa";

function cardFeedback({childern, profile,name,feedback,...props}:any) {
  return (
    <div className=' w-60 relative p-5 ' {...props}>
       <img src={profile} className='absolute w-14 h-14 rounded-full top-0 left-0 shadow-lg object-fill'/>
       <div className='bg-gray-100 w-52 h-32 rounded-tl-3xl shadow-xl rounded-br-3xl p-5 flex flex-col justify-between'>
            <h1 className='text-center font-semibold text-lg'>{name}</h1>
            <p className='text-sm text-justify text-gray-600'>{feedback}</p>
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