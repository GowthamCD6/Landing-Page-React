import React from 'react'
import './About.css'
import about_img from '../../assets/about-left.jpg'
import play_icon from '../../assets/play-icon.png.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} className='about-img' />
                <img src={play_icon} className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT GN TRAVEL'S</h3>
                <h2>Travel is never a matter of money but of courage.</h2>
                <p>GN Travels is a premier travel agency dedicated to providing exceptional
                    travel experiences for customers worldwide. With a strong commitment to
                    customer satisfaction, we specialize in offering personalized tour
                    packages, flight bookings, hotel reservations, and transportation
                    services.</p>
                <p>Our expert team ensures a seamless travel experience, whether
                    you're planning a relaxing vacation, a business trip, or an
                    adventurous getaway. We take pride in our reliability, affordability,
                    and excellent customer service.</p>
                <p> With years of experience in the travel industry, GN Travels
                    guarantees a smooth and enjoyable journey from start to finish.
                    Let us take care of all your travel needs while you sit back,
                    relax, and create unforgettable memories.</p>
            </div>
        </div>
    )
}

export default About
