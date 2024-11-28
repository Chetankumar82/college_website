import React from 'react'
import Header from '../Components/Header';
import Breadcrumb from '../Components/Breadcrumb';

const Roboticsclub = () => {
    const Header = "Home";
    const title = "Robotics Club";
  return (
    <>
    <Header />
    <Breadcrumb Home={Header} Pages={title}/>
    <div class="rts-program rts-section-padding">
        <div class="container">
            
            <div class="rts-program-description">
                <div class="row">
                    
                    
                    <div class="col-lg-12">
                        <div class="program-description-area" id="curriculum">
                            
                            
                            <div class="program-about workshop-para">
                                <h4 class="title mb-0">Robotics Club</h4>
                                <hr/>
                                <p>Robotics club at CIT aims to deals with the design, construction, operation, structural disposition, 
                                manufacture and application of robots. The concept and creation of autonomously operating machines dates 
                                back a long time, but credible research into the functionality and potential uses of robots did not grow 
                                substantially until the 20th century. And today, robotics is a rapidly growing field, as we continue to research, 
                                design and build new robots that serve various practical purposes including domestic, commercial and military. 
                                </p>
                                <p>Thus the Robotics Club of CIT strives to stimulate interest in robotics among the students of the institute. 
                                Besides making a serious endeavour to spread knowledge on Robotics and its diverse applications. The club today 
                                is an active platform for students to display and develop their practical machine building skills and knowledge. 
                                Any company interested to adopt any of the Robotics devices, we would be more than happy to adopt or transfer the 
                                technology.</p>
                                
                            </div>
                            
                           
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Roboticsclub