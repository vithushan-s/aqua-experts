// import React from 'react'


function cardFavorite({ children ,image, ...props}:any){
    return(
      <div className="bg-white rounded-full p-1">
        <div {...props} className='relative overflow-hidden group rounded-full shadow-lg w-20 md:w-36'>
            <img className='transition-transform rounded-2xl group-hover:scale-125 duration-300' src={image}/>
        </div>
      </div>
    );
}

export default cardFavorite