import React from 'react'
import './Travel.css'
import galary1 from '../../assets/galary1.jpg'
import galary2 from '../../assets/galary2.jpg'
import galary3 from '../../assets/galary3.jpg'
import galary4 from '../../assets/galary4.jpg'

const Travel = () => {
  return (
    <div className='travel'>
        <div className="gallery">
            <img src={galary1} alt="" />
            <img src={galary2} alt="" />
            <img src={galary3} alt="" />
            <img src={galary4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here 🡲</button>
    </div>
  )
}

export default Travel
