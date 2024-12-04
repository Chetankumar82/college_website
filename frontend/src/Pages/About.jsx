import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const About = () => {
    const home = "Home";
    const pageName = "About Us";
  return (
    <>
    <Breadcrumb Home={home} PageName={pageName} />
   
    <section class="about-section fix">
    <div class="about-wrapper-5">
        <div class="container">
            <div class="row g-4 justify-content-between">
                <div class="col-lg-3">
                    <div class="section-title mb-0">
                        <h6 class="wow fadeInUp">About CIT</h6>
                        <h2 class="wow fadeInUp" data-wow-delay=".3s">
                        To Create a Progressive Academic Environment for the Students.
                        </h2>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="about-content">
                        <p class="wow fadeInUp" data-wow-delay=".3s">
                        Chartered Institute of Technology is an initiative by Gyan Raman Charitable Trust. 
                        CIT believes in revolutionizing the conventional pattern of teaching through fresh 
                        ideas and innovations in the present education system. We intend to deliver quality
                         education by seamlessly integrating technology with academics..
                        </p>
                        <p class="wow fadeInUp" data-wow-delay=".3s">
                        CIT commits itself to prepare aspiring individuals for facing the challenges of the 
                        global world. The amalgamation of the finest training procedures and brilliant methods
                         of inculcating professional ethics along with development of individuals pursuits make
                          the nucleus of at CIT. The experts of various fields are constantly working at CIT to
                           create learning environment that leads to an overall development of young aspirants
                            enabling them to achieve their goals and bloom in to influential personalities..
                        </p>
                        <p class="wow fadeInUp" data-wow-delay=".3s">
                        CIT is set at a location which is not only awe inspiring for tourist but delightfully 
                        conducive to students. Set in Mount Abu natural magnificence with a strong aim imparting
                         quality education, Chartered Institute of Technology is the place to nurture aspirations.
                          The location of CIT is ideal for serious pursuits of professionals studies. The Institute 
                          is situated in foothills of Mount Abu. Easily approachable distance from the city of Abu road.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



</>
  )
}

export default About