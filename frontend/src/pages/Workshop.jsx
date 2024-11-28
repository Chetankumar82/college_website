import React from 'react'
import Header from '../Components/Header';
import Breadcrumb from '../Components/Breadcrumb';
import Footer from '../Components/Footer';

const Workshop = () => {
    const home = "Home"; // Use `const` to declare the variable
    const workshop = "Workshops & Seminar"; // Avoid using the same name as the component
  return (
    <>
        <Header />
        <Breadcrumb Home={home} Pages={workshop} />
        <div class="rts-program rts-section-padding">
        <div class="container">
            
            <div class="rts-program-description">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="program-description-area" id="curriculum">
                            <div class="program-big-thumb">
                                <img src="assets/images/workshop-ai.png" alt="program"/>
                            </div>

                            
                           
                        </div>
                    </div>
                    
                    <div class="col-lg-8 px-5">
                        <div class="program-description-area" id="curriculum">
                            
                            
                            <div class="program-about workshop-para">
                                <h4 class="title mb-0"><i className='fa fa-calendar'></i> 8 Feb, 2024 Workshop on Artificial Intelligence</h4>
                                <hr/>
                                <p>Recently we have witnessed a midfull session on "recent trends in Artificial Intelligence". 
                                This session was chaired and guided by honorable professor Dr. Pushpendra Singh. JKLU and Dr Deepak Sharma. 
                                Arya college. Event start with lightning of the lamp ceremony. First session was taken by Dr. Pushpendra Singh. 
                                He enlightened students and faculties about artificial intelligence and it's implications. 
                                2nd session was conducted by Dr Deepak Sharma. He also delivered a fun filled interactive lecture on 
                                future and role of Al in engineering fields.</p>
                                <p>At the end of event honorable Principal Dr Rajesh Kumar Yadav extend vote of thanks to all the dignatories 
                                and express his wishes to all the coordinators for successful conduction.</p>
                                
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

export default Workshop;