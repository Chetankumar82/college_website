import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="rts-about v__1 rt-relative rts-section-padding">
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-5 col-xl-5 col-md-10">
                    <div className="rts-about-image">
                        <img src="assets/images/about/about-01.Avif" alt=""/>
                    </div>
                </div>
                <div className="col-lg-7 col-xl-7 col-md-10">
                    <div className="rts-about-content">
                        <div className="rts-about-flex mb--10">
                            <h2 className="section-title w-320">
                            About  <span className="rts-line"></span>
                              Our College
                            </h2>
                            <div className="about-rounded-text">
                                

                                <div className="rt-rounded-shape">
                                
                                    <svg className="uni-circle-text-path uk-text-secondary uni-animation-spin" viewBox="0 0 100 100" width="120" height="120">
                                        <defs>
                                            <path id="circle" d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"></path>
                                        </defs>
                                        <text font-size="9.75">
                                            <textPath xlinkHref="#circle">CIT, Aburoad (Raj.) * Estd-2008 * Explore Future</textPath>
                                        </text>
                                    </svg>
                                    <div className="rt-round-dot-center"></div>
                                </div>

                            </div>
                        </div>
                        <p className="rts-paragraph mb--50">
                        Chartered Institute of Technology is an initiative by Gyan Raman Charitable Trust. 
                        CIT believes in revolutionizing the conventional pattern of teaching through fresh 
                        ideas and innovations in the present education system. We intend to deliver quality 
                        education by seamlessly integrating technology with academics....

                       
                        </p>
                        <Link to="/about" className="about-btn rts-nbg-btn btn-arrow">Read More <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
                        <div className="about-positioned-text ">
                            <h2 className="rt-clip-text">EST. 2008</h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default AboutUs