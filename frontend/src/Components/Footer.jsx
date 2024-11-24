import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <footer className="rts-footer v_1 pt--100 pb--80">
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-11">
                
                <div className="row gy-5 gy-lg-0">
                    <div className="col-md-6 col-sm-6 col-lg-4">
                        <div className="rts-footer-widget w-320">
                            <a href="index.html" className="d-block rts-footer-logo mb--40">
                                <img src="assets/images/logo/footer-logo.svg" alt="studyhub"/>
                            </a>
                            <p>
                                We are passionate education dedicated to providing high-quality
                                resources learners all backgrounds.
                            </p>
                            <div className="rts-contact-link">
                                <a href="mailto:contact@reacthemes.com"><i className="fa-sharp fa-light fa-location-dot"></i> Park, Melbourne, Australia </a>
                                <a href="callto:121"><i className="fa-thin fa-phone"></i> 485-826-710</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-2">
                        <div className="rts-footer-widget ">
                            <h6 className="rt-semi">Our Campus</h6>
                            <div className="rts-footer-menu">
                                <ul>
                                    <li><a href="academic.html">Academic</a></li>
                                    <li><a href="program-single.html">Planning & Admission</a></li>
                                    <li><a href="campus-life.html">Campus Safety</a></li>
                                    <li><a href="faculty.html">Faculty</a></li>
                                    <li><a href="faculty-details.html">Human Resources</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-4 col-lg-2">
                        <div className="rts-footer-widget ml--30">
                            <h6 className="rt-semi">Our Campus</h6>
                            <div className="rts-footer-menu">
                                <ul>
                                    <li><a href="about.html">About Us </a></li>
                                    <li><a href="admission.html">Admission</a></li>
                                    <li><a href="scholarship.html">Scholarship</a></li>
                                    <li><a href="tution-fee.html">Tution Fee</a></li>
                                    <li><a href="athletics.html">Athletics</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-8 col-lg-4">
                        <div className="rts-footer-widget ml--30">
                            <h6 className="rt-semi">Recent Post</h6>
                            <div className="rts-post-widget">
                                <ul className="list-unstyled">
                                    <li className="single-post">
                                        <a href="blog-details.html" className="blog-thumb">
                                            <img src="assets/images/blog/w-1.jpg" alt="latest post"/>
                                        </a>
                                        <div className="post-content">
                                            <span className="rt-date">October 29, 2023</span>
                                            <a href="blog-details.html">
                                                Avoid These 4 Common When Managing Remote Teams
                                            </a>
                                        </div>
                                    </li>
                                    <li className="single-post">
                                        <a href="blog-details.html" className="blog-thumb">
                                            <img src="assets/images/blog/small-thumb-1.jpg" alt="latest post"/>
                                        </a>
                                        <div className="post-content">
                                            <span className="rt-date">October 29, 2023</span>
                                            <a href="blog-details.html">
                                                Avoid These 4 Common When Managing Remote Teams
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<div className="rts-footer-copy-right v_1">
    <div className="container">
        <div className="row">
            <div className="rt-center">
                <p className="--p-xs">Copyright &copy; 2024 All Rights Reserved by <Link to="#">Studyhub</Link></p>
            </div>
        </div>
    </div>
</div>
<div class="sticky-bar">
         <ul>

            <li class="call" data-tooltip="Call Now">
               <Link target="_blank" to="tel:9829804013" class="ppwnd">
               <img src="assets/images/social-icons/telephone.png" alt="" />
               
               </Link>
            </li>
           
            <li class="d-one" data-tooltip="Chat With Us">
               <Link target="_blank" to="https://web.whatsapp.com/send?phone=9829804013&amp;text=I'm%20interested%20to%20know%20about%20admission%20process." class="si-whatsapp">
               <img src="assets/images/social-icons/social.png" alt="" />
               
               </Link>
            </li>
            
            <li class="d-one" data-tooltip="Download Brochure">
               <Link target="_blank" href="assets/pdf/SMPGC_Prospectus_compressed_1.pdf" class="si-whatsapp">
               <img src="assets/images/social-icons/brochure.png" alt="" />
               
               </Link>
            </li>
            <li class="call" data-tooltip="Dawnloads">
               <Link target="_blank" to="/dawnloads" class="ppwnd">
               <img src="assets/images/social-icons/download.png" alt="" />
               
               </Link>
            </li>
         </ul>
      </div>

<div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: "stroke-dashoffset 10ms linear 0s",
    strokeDasharray: "307.919",
    strokeDashoffset: "307.919"}}></path>
    </svg>
</div>


<div id="anywhere-home" className="">
</div>

</>
  )
}

export default Footer