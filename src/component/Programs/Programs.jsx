import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.png'

const program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
              <p>5000+</p>
              <p>Dedicated Workers</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
              <p>30,000+</p>
              <p>Happy Customers</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
              <p>500+</p>
              <p>Delightful Locations</p>
            </div>
        </div>
    </div>
  )
}

export default program
