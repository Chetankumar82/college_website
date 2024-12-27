import React from 'react'
import Amazon from "../../assets/images/amazon.jpg";
import Infosys from "../../assets/images/infosys.jpg";
import Inox from "../../assets/images/inoxwind.jpg";
import Justdial from "../../assets/images/justdial.jpg";
import Justpay from "../../assets/images/juspay.jpg";
import Locanix from "../../assets/images/icanix.jpg";
import TCS from "../../assets/images/tata.jpg";
import "./Placement.css"

const images = [
    Amazon,
    Infosys,
    TCS,
    Inox,
    Locanix,
    Justdial,
    Justpay,
    
  ];
const Placement = () => {
  return (
    <>
    <div className="cta-newsletter-wrapper blue-bg">
        <div className="placement  ">
          <h2 className="placement-com text-5xl text-white">Top Recruiters <span className='text-yellow-400'>At CIT College</span></h2>
          <div className="placement-slogan">
          <p className="text-white">CIT Aburoad aims to be a leading engineering college for the quality and impact of its teaching and research 
          and to create a talented community of students and faculty who excel at teaching, learning and research, in a 
          creative and a stimulating environment. Our focus is to find creative solutions to problems through application 
          of knowledge.</p>
          </div>
        </div>

        <div className="main-company-slider">
          <div id="c-slider">
            {images.map((slide, index) => {
              return (
                <div className="slider-company-card">
                  <img className="slider-card-image-company" src={slide} />
                </div>
              );
            })}
          </div>
        </div>
        </div>
    </>
  )
}

export default Placement