import React, { useEffect, useRef } from 'react'

const Aboutsection = () => {
    const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <section class="about-section ">
            <div class="about-wrapper-5">
                <div class="container">
                    <div class="row g-4 ">
                        <div class="col-lg-6">
                            <div class="section-title mb-0">
                                <h6 class="wow fadeInUp" style={{visibility: "visible"}}>About CIT</h6>
                                <div>
                                <video src="assets/video/cit.mp4" ref={videoRef} controls autoplay muted width="500" height="300"></video>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content mt-5">
                                <p class="wow fadeInUp" data-wow-delay=".3s">
                                Chartered Institute of Technology is an initiative by Gyan Raman Charitable Trust and Amongst Top 10 
                                Best RTU Affiliated Engineering Colleges in Rajasthan. We believe in revolutionizing the conventional
                                 pattern of teaching through fresh ideas and innovations in the present education system. 
                                </p>
                                <p class="wow fadeInUp" data-wow-delay=".5s">
                                Chartered Institute of Technology Abu Road commits itself to prepare aspiring individuals for facing 
                                the challenges of the global world.The amalgamation of the finest training procedures and brilliant 
                                methods of inculcating professional ethics along with development of individuals pursuits make the 
                                nucleus of at Chartered Institute of Technology.
                                </p>
                                <p class="wow fadeInUp" data-wow-delay=".7s">
                                Chartered Institute of Technology is privileged to 
                                provide a platform of focused, methodical and blissful learning, igniting and fostering the young minds, 
                                empowering them to carry out a revolution in the fields of Science & Technology that our future India dreams.
                                </p>
                                <div class="counter-box-items">
                                    <a href="#" class="counter-content">
                                        Read More
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Aboutsection