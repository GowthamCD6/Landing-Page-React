import React from 'react'
import './Slider.css'
import sliderimg1 from '../../assets/slider-img1.png'
import sliderimg2 from '../../assets/slider-img2.png'
import sliderimg3 from '../../assets/slider-img3.png'
import sliderimg4 from '../../assets/slider-img4.png'
import sliderimg5 from '../../assets/slider-img5.png'
import sliderimg6 from '../../assets/slider-img6.png'

const Slider = () => {
    return (
        <div className="title1">
            <h1>Explore The Hidden Gems</h1>
            <h2>Tap into the untapped tourist spots for amazing vacations.</h2>
            <div className="slider">
                <div className='wrapper'>
                    <img src={sliderimg1} alt="" />
                    <img src={sliderimg2} alt="" />
                    <img src={sliderimg3} alt="" />
                    <img src={sliderimg4} alt="" />
                    <img src={sliderimg5} alt="" />
                    <img src={sliderimg6} alt="" />
                    /
                </div>
            </div>
        </div>

    )
}

export default Slider
