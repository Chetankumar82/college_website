import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header';
import Breadcrumb from '../Components/Breadcrumb';

const codingclub = () => {
    const home = "Home";
    const codingclub = "Coding Club"; // Avoid using the same name as the component
  return (
    <>
    <Header />
    <Breadcrumb Home={home} Pages={codingclub} />
    <div class="rts-program rts-section-padding">
        <div class="container">
            
            <div class="rts-program-description">
                <div class="row">
                    
                    
                    <div class="col-lg-12">
                        <div class="program-description-area" id="curriculum">
                            
                            
                            <div class="program-about workshop-para">
                                <h4 class="title mb-0">Coding Club</h4>
                                <hr/>
                                <p>The coding club at CIT is followed by a group of students in CIT aims to interact with like-minded peers and 
                                explore the world of computer science. They are driven by their passion for coding and hunger to learn, which has 
                                helped the club scale new heights.</p>
                                <p>Coding Club helps members gain in-depth knowledge of coding. This helps them immensely during placements and can 
                                also bring laurels to the institution through various national and international programming contest. The club 
                                helps members develop an aptitude for logical thinking and visualizing a problem from various perspectives and 
                                creating multiple innovative solutions The country as a whole requires a lot more coders for it to achieve the 
                                goal of a ‘Digital India’. The club is doing its bit to help the country pursue this goal.</p>
                                
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

export default codingclub