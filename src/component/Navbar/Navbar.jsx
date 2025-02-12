import React from 'react'
import './Navbar.css'
import logo from'../../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} className='logo'/>
        <ul className='navigte'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Fesility</a>
          <a href="#">Guidance</a>
          <a href="#"><button className='btn'>contact</button></a>
        </ul>
      
    </nav>
  )
}

export default Navbar
