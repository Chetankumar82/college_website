import React, { useEffect } from "react";
import "./CollegeRecognition.css";
import BTU from "../../assets/images/btu.jpg";
import RTU from "../../assets/images/rtu.jpg";
import AICTE from "../../assets/images/aicte.jpg";
import IAO from "../../assets/images/iao.jpg";
import ISTE from "../../assets/images/iste.jpg";


const CollegeRecognition = () => {
  const slides = [
    {
      image: ISTE,
      title: "ISTE",
      description: "Member of Indian Society for Technical Education",
    },
    {
      image: IAO,
      title: "IAO",
      description: "Approved By International Accredation Organization",
    },
    {
      image: BTU,
      title: "BTU",
      description: "Affilated to Bikaner Technical University",
    },
    {
      image: RTU,
      title: "RTU",
      description: "Affilated to Rajasthan Technical University",
    },
    {
      image: AICTE,
      title: "AICTE",
      description: "Approved by All India Council for Technical Education",
    },
    
  ];

  

  const SlideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 410;
  };

  const SlideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 410;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      SlideLeft();
    }, 5000);
    // const Ctimer = setInterval(() => {
    //   const Cslider = document.getElementById("c-slider");
    //   Cslider.scrollLeft = Cslider.scrollLeft + 240;
    // }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
    <div className="cta-newsletter-wrapper">
      <div className="college-recognition-head" id="CollegeRecognition">
        
        <h2 className="text-5xl mb-4 recognize">Our Recognitions</h2>
        <p className="">An institute with a remarkable legacy, most diverse offerings and a huge family!</p>
      </div>

      <div className="college-recognition">
        <div className="main-ins-slider">
          <div id="slider">
            {slides.map((slide, index) => {
              return (
                <div className="slider-card">
                  <div className="slider-card-image">
                    <img className="slider-card-image-main" src={slide.image} />
                  </div>
                  <p className="slider-card-title">{slide.title}</p>
                  <p className="slider-card-description">{slide.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
      </div>
    </>
  );
};

export default CollegeRecognition;
