// import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { TbCurrencyKroneCzech } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";

type Props = {}

function People({}: Props) {
  return (
    <section className="w-full h-[50vh] flex justify-center items-center">
        <div className="w-full flex flex-col items-center gap-10">
            <h1 className="text-xl md:text-2xl font-semibold text-blue-950">Why People are choose us</h1>
            <div className="grid grid-rows-2 grid-cols-2 gap-y-8 md:grid-rows-1 md:grid-cols-4 w-full">
                
                {/* 1 */}
                <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                        <FaChalkboardTeacher className="w-10 h-10"/>
                    </div>
                    <span className="text-sm font-bold">Guidane</span>
                    <p className='text-xs text-gray-600'>Lorem ipsome</p>
                </div>

                {/* 2 */}
                <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                        <FaHandshake className="w-10 h-10"/>
                    </div>
                    <span className="text-sm font-bold">Quality Sevice</span>
                    <p className='text-xs text-gray-600'>Lorem ipsome</p>
                </div>

                {/* 3 */}
                <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                        <TbCurrencyKroneCzech className="w-10 h-10"/>
                    </div>
                    <span className="text-sm font-bold">Affordable Price</span>
                    <p className='text-xs text-gray-600'>Lorem ipsome</p>
                </div>

                {/* 4 */}
                <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                        <FaHeadset className="w-10 h-10"/>
                    </div>
                    <span className="text-sm font-bold">Get help any time</span>
                    <p className='text-xs text-gray-600'>Lorem ipsome</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default People