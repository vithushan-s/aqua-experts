import React from 'react'
import Footer from '../controls/Footer'
import Navbar from '../controls/Navbar'

type Props = {}

function About({}: Props) {
  return (
    <section className='w-full f-full bg-blue-950 flex flex-col'>
        <nav>
            <Navbar/>
        </nav>

        <div className='p-10 text-justify h-1/2 flex flex-col justify-center text-wrap text-white gap-5'>
            <h1 className='text-center text-4xl font-bold '>About Us</h1>
            <p className='text-lg'>Welcome to Norway Aqua Expert, where the allure of the underwater world meets exceptional service!, we take pride in being your premier destination for all things aquarium-related. As avid enthusiasts ourselves, we've curated an extensive selection of aquatic treasures, ensuring that every visit to our store is an immersive experience.
            At Norway Aqua Expert, we prioritize the health and happiness of your aquatic companions. Our team of knowledgeable and passionate staff is dedicated to providing personalized guidance, from selecting the perfect tank setup to choosing the ideal inhabitants for your underwater haven. With a commitment to quality, we offer a carefully curated range of top-tier products, from state-of-the-art equipment to captivating decorations, to enhance the beauty of your aquatic sanctuary.
            Discover the extraordinary at Norway Aqua Expert, your trusted partner in creating and maintaining enchanting aquariums. Welcome to a world where every ripple tells a story and every fin dances to its own rhythm.</p>
        </div>

        <footer>
            <Footer/>
        </footer>
    </section>
  )
}

export default About