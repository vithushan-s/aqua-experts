// import React from 'react'

type Props = {}

function Newsletter({}: Props) {
  return (
    <section className="w-full h-[60vh] bg-white flex flex-col items-center justify-center p-5">
        
            <h1 className="text-xl md:text-2xl font-bold text-blue-950">Subscribe for Newsletter</h1>

            <div className="md:flex md:justify-center md:items-center border-2 border-dashed w-full p-8">
                <div className="flex flex-col gap-4 items-center md:flex-row  md:justify-center md:items-center">
                    <img src="newsletter.svg" className='w-60 md:w-72 border' alt="" />
                    <div className='w-full flex flex-col items-center md:items-start md:ml-20 gap-2 px-3'>
                        <div className='w-full flex flex-col items-center md:flex-row gap-2 md:gap-1'>
                            <input type="text" placeholder='enter your email address' className='p-3 bg-gray-200 outline-none rounded-full w-full px-5 md:w-96'/>
                            <button className='bg-blue-950 p-3 rounded-full text-sm text-white w-full md:w-1/4'>Subscribe</button>
                        </div>
                        <p className='text-sm text-gray-600 text-center md:text-left'>It is a long established fact that a reader will be distracted by the readable content</p>
                    </div>
                </div>
            </div>
        
    </section>
  )
}

export default Newsletter