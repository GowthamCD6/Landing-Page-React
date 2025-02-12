import React from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Programs from './component/Programs/Programs'
import Title from './component/Title/Title'
import About from './component/About/About'
import Travel from './component/Travel/Travel'
import Slider from './component/Slider/Slider'
import Testimonial from './component/testimonial/Testimonial'


const App = () => {
  return (
    <div id='totDiv'>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='Core Responsibilities'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallary' title='Travel Photos'/>
        <Travel/>
        <Title subTitle='Our Offers' title='Latest Tour Package'/>
        <Title/>
        <Slider/>
        <Title subTitle='Testimonials' title='What Client Says'/>
        <Testimonial/>
      </div>
    </div>
  )
}

export default App
