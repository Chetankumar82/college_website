import React from 'react'
import { PiStudentFill } from "react-icons/pi";
import { FaMedal } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import "./Whychoose.css";

const Whychoose = () => {
    const iconMap = {
        PiStudentFill: <PiStudentFill />,
        FaMedal: <FaMedal />,
        TbClockSearch: <FaBuildingUser /> ,
        TbBulbFilled: <TbBulbFilled />,
      };
    
      const features = [
        {
          icon: "PiStudentFill",
          title: "1000+ Strong Alumni Network",
        },
        {
          icon: "FaMedal",
          title: "Top Gold Medalist of Rajasthan Technical University",
        },
        {
          icon: "TbClockSearch",
          title: "100% Placement Assistant",
        },
        {
          icon: "TbBulbFilled",
          title: "Industry Oriented Curriculum",
        },
      ];
  return (
    <section className="feature-section cta-newsletter-wrapper">
    <div className="section-title text-center">
      <h2 className="text-black head mb-3" style={{fontSize: "3rem"}}>Why Choose CIT?</h2>
      <p className="text-black mb-4 why-para">
      Choose CIT for a better future! With top rankings, we offer quality education, 
      expert faculty, and a proven track record of success to shape your career path<br/>
      "Engineering a
      better tomorrow"
      </p>
    </div>
  <div className="row">
    {features.map((feature, index) => (
      <div className="col-lg-3 col-sm-1" key={index}>
        <div className="feature-box-items">
          <div className="icon">{iconMap[feature.icon]}</div>
          <div className="content">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    
  )
}

export default Whychoose