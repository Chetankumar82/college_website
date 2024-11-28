import React from 'react'
import Header from '../Components/Header';
import Breadcrumb from '../Components/Breadcrumb';
import Footer from '../Components/Footer';

const Socialclub = () => {
    const home = "Home";
    const socialClubPage = "Social Media Club";
  return (
   <>
    <Header />
    <Breadcrumb Home={home} Pages={socialClubPage} />
    <div class="rts-program rts-section-padding">
        <div class="container">
            
            <div class="rts-program-description">
                <div class="row">
                    
                    
                    <div class="col-lg-12">
                        <div class="program-description-area" id="curriculum">
                            
                            
                            <div class="program-about workshop-para">
                                <h4 class="title mb-0">Social Media Club</h4>
                                <hr/>
                                <p>Social Media Club hosts a crew of students at CIT who explore key issues facing our society by conducting 
                                educational events to share the awesome social media talents in our community. This club is to transform the 
                                lives by connecting, communicating, collaborating and relating to each other. The key focuses are on knowledge 
                                sharing through sharing lessons online, expanding digital me literacy, enhancing communication skills and competing
                                 industry standards. </p>
                                <p>The purpose of this club is to create, conduct and support on and off campus activities 
                                 related to the various social, academic, cultural, placement related activities, summer internships and club 
                                 related events. To enhance the skills of the students through hands-on</p>
                                
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

export default Socialclub