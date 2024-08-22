// import React from 'react'


function cartTopFive({ children ,image, ...props}:any){
    return(
      <div {...props} className='relative overflow-hidden group rounded-2xl shadow-lg  w-64 h-36 md:w-60 md:h-60'>
          <img className='transition-transform rounded-2xl group-hover:scale-125 duration-300' src={image}/>
          <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
            <div className='text-white p-4'>{children}</div>
          </div>
      </div>
    );
}

export default cartTopFive