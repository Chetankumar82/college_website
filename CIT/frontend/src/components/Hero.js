import React from "react";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import pic from "./../assets/images/Heroimage.JPG";
import logo from "./../assets/images/citsliderlogo.png"; // I
import FadeIn from 'text-fade-in';
import "./Hero.css";
function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="hero-container main-slider1" style={{ position: "relative" }}>
      {/* Slider */}
      <Slider {...settings} className="slider">
        <div>
          <img
            src={pic}
            alt="Slide 1"
            style={{ width: "100%", filter: "brightness(0.5)" }}
          />
        </div>
        <div>
          <img
            src={pic}
            alt="Slide 2"
            style={{ width: "100%", filter: "brightness(0.5)" }}
          />
        </div>
      </Slider>
      <FadeIn linear lines>
  
</FadeIn>
{/* Logo */}
<img      className="slider-img"
          src={logo}
          alt="Logo"
          style={{
            width: "100px", // Adjust width for your logo size
           position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 2,
            marginBottom: "50px",
          }}
        />
      {/* Overlay Content */}
      <div
        className="overlay-content slider-overlay"
        style={{
          position: "absolute",
          top: "62%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 2,
          width: "100%",
        
        }}
      >
    

        

        {/* Animated Text */}
        <TypeAnimation
          sequence={[
            "",
            500,
            "Welcome To Chartered Institute of Technology",
            500,
            "Welcome To Excellence In Engineering Education",
            500,
          ]}
          style={{
            fontSize: "50px", // Adjust font size as needed
          }}
          className="over-text"
          repeat={Infinity}
          direction="alternate"
          delay={1000}
        />
      </div>
    </div>
  );
}

export default Hero;
