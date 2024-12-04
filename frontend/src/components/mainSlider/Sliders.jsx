import React from "react";
import Slider from "react-slick";
import { TypeAnimation } from 'react-type-animation';
import "./slider.css"
const Sliders = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };
  return (
    <>
    <Slider {...settings} className="slider" >
      <div>
        <img src="assets/img/slide1.jpeg" alt="" />
      </div>
      <div>
      <img src="assets/img/slide2.png" alt="" />
      </div>
      
     
    </Slider>
    
    <TypeAnimation className="slider-text"
  sequence={[
    '',
    500,
    'Welcome To Chartered Institute of Technology', //  Continuing previous Text
    500,
    'Welcome To Excellence In Engineering Education',
    500,
    
  ]}
  style={{ fontSize: '3em' }}
  repeat={Infinity}
  direction="alternate"
  delay={1000}
/>
</>
  )
}

export default Sliders