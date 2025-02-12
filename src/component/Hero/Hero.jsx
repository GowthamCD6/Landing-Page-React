import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className='hero'>
        <div className="hero-text">
            <h1>Travel to the any corner of the world, 
                without going ground in circles</h1>
                <p>Thinking of taking a break time every day's busy life. Planning 
                    to go
                out of the country with your loved ones to have some fun and quality
                time in a cost-effective way.</p>
                <button className='btn'>Explore more 🡲</button>
        </div>
      
    </div>
    </>
  )
}

export default Hero
