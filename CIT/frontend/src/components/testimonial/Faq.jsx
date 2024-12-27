import React from 'react'
import faq from '../../assets/faq.png'
import faq2 from '../../assets/faq2.png'
import "./Faq.css"
import { FaPhoneVolume } from "react-icons/fa6";


const accordionData = [
    {
      id: "collapseOne",
      headerId: "headingOne",
      title: "What programs does the university offer?",
      body: "We offer a wide range of undergraduate, graduate, and professional programs across various fields, including sciences, business, and engineering.",
    },
    {
      id: "collapseTwo",
      headerId: "headingTwo",
      title: "How do I apply for admission?",
      body: "You can apply for admission through our online portal. Be sure to check the application deadlines and required documents.",
    },
    {
      id: "collapsethree",
      headerId: "headingthree",
      title: "What is the student-to-faculty ratio?",
      body: "Our student-to-faculty ratio ensures personalized attention, fostering a conducive learning environment.",
    },
    {
      id: "collapsefour",
      headerId: "headingfour",
      title: "What facilities are available on campus?",
      body: "Our campus features state-of-the-art facilities, including modern labs, libraries, sports complexes, and residential accommodations.",
    },
  ];
const Faq = () => {
  return (
    <>
   <section className="cta-newsletter-wrapper faq-section">
  <div className="container-lg">
    <div className="faq-wrapper style-2">
    <h2 className="text-5xl text-black text-center mb-2 faq">Student Support</h2>
      <div className="row g-4 align-items-center">
        <div className="col-lg-6">
          <div className="faq-content">
            
            <div className="faq-items mt-4 mt-md-0 mb-0">
              {/* Static paragraphs instead of accordion */}
              <div className="faq-item">
              <h2 className='text-left bg-gray-200 px-3 py-4 leading-6 font-normal' style={{borderLeft:"2px solid rgb(0, 92, 161)"}}>
              CIT was established with a student oriented approach in their mind and it is their prime motto 
              to satisfy the students getting enrolled with them.</h2>
                <p className='leading-7'>
                The students at CIT have to be morally satisfied, physically fit, mentally balanced and internally growing. 
                To make sure of it the management team of CIT leave no stone unturned and makes all possible efforts 
                to do the same. Students are morally supported here in CIT and this is why they are happy to be a part 
                of the College.</p>
                <p className='leading-7'>
                The faculty takes care of the students’ academic stabilities and helps them to grow better day by day. 
                Special attention is paid to the students who are average or below average in studies. It assures them 
                of getting good score in their examination and hence results in a better future. Internal placements 
                take place in the institutes and those who are extremely talented. But the management makes sure that those who don't 
                get the opportunity are given proper guidance so that they can do well in their career as well outside CIT.
                </p>
                <div className='faq-contact text-black mt-4'>
                    <span className='text-black' style={{float:"left"}}>
                    <FaPhoneVolume style={{fontSize:'80px', backgroundColor:'#eded06', color:'rgb(32, 49, 84)', padding:'20px', borderRadius:'50%',display:"inline", border:"5px dotted blue"}} />
                    <a href="tel:+91 98298 04013" className='text-bold ml-2' style={{backgroundColor: "lightgray", padding:"10px 10px", borderRadius:"10px",color:"rgb(32, 49, 84)"}}>Call Now: +91 98298 04013 </a></span>
                    
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-lg-1">
          <div className="faq-line"></div>
        </div>
        <div className="col-lg-5">
  <div className="faq-image-wrapper">
    <div className="image-container image-one">
      <img src={faq} alt="FAQ illustration" />
    </div>
    <div className="image-container2 image-two">
      <img src={faq2} alt="FAQ illustration" />
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Faq