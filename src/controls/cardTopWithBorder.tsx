// import React from 'react'


function cartTopFive({ children ,image, ...props}:any){
    return(
      <div {...props} className='relative flex flex-col items-center gap-2 overflow-hidden bg-white p-3 group rounded-2xl shadow-lg  w-64 h-36 md:w-60 md:h-72'>
          <img className='transition-transform rounded-2xl group-hover:scale-110 duration-300' src={image}/>
          <h1>{children}</h1>
      </div>
    );
}

export default cartTopFive