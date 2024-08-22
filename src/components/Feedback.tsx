// import React from 'react'
import Feed from '../controls/cardFeedback'

type Props = {}

function Feedback({}: Props) {
  return (
    <section className="bg-white w-full md:h-[60vh]">
        <div className="flex flex-col gap-3 pt-5 py-10 items-center w-full">
            <h1 className="text-xl md:text-2xl font-semibold text-blue-950">Feedback Corner</h1>
            <div className="grid grid-rows-2 grid-cols-2 md:grid-row-1 md:grid-cols-4">
                <Feed profile="profile1.jpg" name="John" feedback="Fantastisk service og utrolig vakre fisker! Jeg kunne ikke vært mer fornøyd "/>
                <Feed profile="profile2.jpg" name="David" feedback="Fantastisk service og utrolig vakre fisker! Jeg kunne ikke vært mer fornøyd "/>
                <Feed profile="profile3.jpg" name="Kenney" feedback="Fantastisk service og utrolig vakre fisker! Jeg kunne ikke vært mer fornøyd "/>
                <Feed profile="profile1.jpg" name="Jack" feedback="Fantastisk service og utrolig vakre fisker! Jeg kunne ikke vært mer fornøyd "/>
            </div>
        </div>
        {/* <div className='flex flex-col items-center justify-center h-full gap-4 '>
            <h1 className="text-xl md:text-2xl font-semibold text-blue-950">Feedback Corner</h1>
            <div className='container flex w-full justify-center items-center'>
                <div className=' flex flex-col md:flex-row md:justify-between gap-1 border-2 border-dashed p-5 w-full'>
                   <Feed profile="profile3.jpg" name="Elon Musk" feedback="Fantastisk service og utrolig vakre fisker! Jeg kunne ikke vært "/>
                   <Feed profile="profile2.jpg" name="David" feedback="Fantastisk service og utrolig vakre fisker! Jeg kunne ikke vært mer fornøyd "/>
                   <Feed profile="profile1.jpg" name="John" feedback="Fantastisk service og utrolig vakre fisker! Jeg kunne ikke vært mer fornøyd "/>
                   <Feed profile="profile2.jpg" name="David" feedback="Fantastisk service og utrolig vakre fisker! Jeg kunne ikke vært mer fornøyd med"/>
                </div>
            </div>
        </div> */}
    </section>
  )
}

export default Feedback