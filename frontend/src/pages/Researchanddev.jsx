import React from 'react'
import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Researchanddev = () => {
    const home = "Home"; // Use `const` to declare the variable
    const researchAndDev = "Research & Development"; // Avoid using the same name as the component
  return (
    <>
        <Header />
        <Breadcrumb Home={home} Pages={researchAndDev} />
        <div class="rts-program rts-section-padding">
        <div class="container">
            
            <div class="rts-program-description">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="program-description-area" id="curriculum">
                            <div class="program-big-thumb">
                                <img src="assets/images/R & D_1.png" alt="program"/>
                            </div>

                            
                           
                        </div>
                    </div>
                    
                    <div class="col-lg-8 px-5">
                        <div class="program-description-area" id="curriculum">
                            
                            
                            <div class="program-about workshop-para">
                                <h4 class="title mb-0">R&D Lab</h4>
                                <hr/>
                                <p>In 2012, the Chartered Institute of Technology launched a summer R&D lab, offering students the opportunity 
                                to engage in cutting-edge research and hands-on experimentation with advanced robotic systems, IOT and research
                                 project Over the years, the lab has continued to expand and evolve, attracting students from a variety of
                                  backgrounds and disciplines who are passionate about robotics,IOT and research project and eager to explore 
                                  new frontiers in the field. Through a combination of classroom instruction, laboratory work, and collaborative
                                   projects, participants in the summer R&D lab have gained valuable skills and knowledge that they can apply to
                                    future endeavors in academia, industry, and beyond.</p>
                                
                                
                            </div>
                            
                           
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
        <Footer />
    </>
  )
}

export default Researchanddev