import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };
    
  return (
    <>
        <header id="rt-header" className={`header-one ${isMenuActive ? "menu-active" : ""}`}>
      {/* Top Header Section */}
      <div className="header-top-one-wrapper rt-primary-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-top-one">
                <div className="left-information">
                  <Link to="mailto:citaburoad@gmail.com" className="email">
                    <i style={{ color: "yellow" }} className="fa-light fa-envelope"></i> citaburoad@gmail.com
                  </Link>
                  <Link to="tel:+91 98298 04013" className="email">
                    <i style={{ color: "yellow" }} className="fa-light fa-phone"></i> Call Now: +91 98298 04013
                  </Link>
                </div>
                <div className="right-information">
                  <Link to="https://www.instagram.com/info_cit/">
                    <img src="assets/images/social-icons/instagram.png" alt="Instagram" />
                  </Link>
                  <Link to="https://www.facebook.com/citabuinfo/">
                    <img src="assets/images/social-icons/facebook.png" alt="Facebook" />
                  </Link>
                  <Link to="https://in.linkedin.com/school/chartered-institute-of-technology/">
                    <img src="assets/images/social-icons/linkedin.png" alt="LinkedIn" />
                  </Link>
                  <Link to="https://twitter.com/citabuinfo">
                    <img src="assets/images/social-icons/twitter.png" alt="Twitter" />
                  </Link>
                  <Link to="https://www.youtube.com/@citaburoad8124">
                    <img src="assets/images/social-icons/youtube.png" alt="YouTube" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-one-wrapper">
              <div className="left-side-header">
                <Link to="/" className="logo-area">
                  <img src="assets/images/logo/cit-logo.png" alt="logo" style={{ width: "250px" }} />
                </Link>
              </div>

              {/* Navigation Menu */}
              <div className={`main-nav-one ${isMenuActive ? "active" : ""}`}>
                <nav>
                  <ul>
                    <li>
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="has-dropdown">
                      <Link className="nav-link" to="/about">
                        About Us
                      </Link>
                      <ul className="submenu">
                        <li className="sub-dropdown">
                          <Link to="#">Introduction</Link>
                          <ul className="submenu third-lvl base">
                            <li>
                              <Link className="mobile-menu-link" to="/infrastructure">
                                The Institute Infrastructure
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/affliationsandccreditations">
                                Affiliations and Accreditations
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/chairman">
                                Chairman’s Message
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/hostel">Hostel & Mess</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link className="nav-link" to="/academics">
                        Academics
                      </Link>
                      <ul className="submenu">
                        <li className="sub-dropdown">
                          <Link to="#">Academic Profile</Link>
                          <ul className="submenu third-lvl base">
                            <li>
                              <Link className="mobile-menu-link" to="/principle">
                                Principal Profile
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/faculty">
                                Faculty Profile
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-dropdown">
                          <Link to="#">Departments</Link>
                          <ul className="submenu third-lvl base">
                            <li>
                              <Link className="mobile-menu-link" to="/cse">
                                Computer Science
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/electrical">
                                Electrical
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/mechanical">
                                Mechanical
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/civil">
                                Civil
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/comm">
                                Electronics & Communication
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-dropdown">
                          <Link to="#">Self Learning Programs</Link>
                          <ul className="submenu third-lvl base">
                            <li>
                              <Link className="mobile-menu-link" to="https://nptel.ac.in/">
                                NPTEL
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="https://swayam.gov.in/">
                                Swayam
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-dropdown">
                          <Link to="#">Research</Link>
                          <ul className="submenu third-lvl base">
                            <li>
                              <Link className="mobile-menu-link" to="/research">
                                R&D Lab
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/workshop">
                                Workshops & Seminar
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-dropdown">
                          <Link to="#">Student Clubs</Link>
                          <ul className="submenu third-lvl base">
                            <li>
                              <Link className="mobile-menu-link" to="/coding">
                                Coding Club
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/robotics">
                                Robotics Club
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/social">
                                Social Media Club
                              </Link>
                            </li>
                            <li>
                              <Link className="mobile-menu-link" to="/technical">
                                Technical Innovation Club
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/gallery">Gallery</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link className="nav-link" to="/student-corner">
                        Student Corner
                      </Link>
                      <ul className="submenu">
                        <li className="sub-dropdown">
                          <Link to="#">Academic Data</Link>
                          <ul className="submenu third-lvl base">
                            <li>
                              <Link to="https://btu.ac.in/home/SYLLABUS-FOR-UNDERGRADUATE-PROGRAMME2021-22146">
                                Scheme
                              </Link>
                            </li>
                            <li>
                              <Link to="https://btu.ac.in/home/SYLLABUS-FOR-UNDERGRADUATE-PROGRAMME2021-22146">
                                Syllabus
                              </Link>
                            </li>
                            <li>
                              <Link to="https://btu.ac.in/home/Notices--Orders79">Examinations</Link>
                            </li>
                            <li>
                              <Link to="faculty-details.html">Academic Calendar</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">University Certificates</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="nav-link" to="/placement">
                        Placement
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Right Header Area */}
              <div className="header-right-area-one">
                <div className="header-right-content">
                  <div className="search-form">
                    <Link to="/">Admission Now</Link>
                  </div>
                  <div className="menu-bar" id="menu-btn" onClick={toggleMenu}>
                    <img src="assets/images/icon/bar.svg" alt="menu-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="marquee-info">
                            <marquee width="100%" direction="left" class="h-marquee">
                                <p style={{fontSize: "16px", fontWeight: 600, color: "#fff", zIndex: 1000,}}>Welcome to Chartered Institute of Technology, Aburoad | We Provide | Best Education | Only Engineering College in Sirohi District <img src="assets/images/admission.gif" alt="" style={{width: "100px", height: "40px"}} />   </p>

                            </marquee> 
                            </div> 
    



<div id="side-bar" className="side-bar">
    <button className="close-icon-menu"><i className="far fa-times"></i></button>
    
    <div className="inner-main-wrapper-desk">
        <div className="thumbnail">
            <img src="assets/images/logo/cit-logo.png" alt="studyhub-university"/>
        </div>
        <div className="inner-content">
            <p className="disc">
            To achieve excellence in technical and management education through quality teaching and innovation.
            </p>
            
            <div className="offcanvase__banner mt--50">
                <div className="offcanvase__banner--content">
                <img src="assets/images/sidebar-img.webp" alt="" />
                    <Link to="admission.html" className="rts-theme-btn">Apply Now</Link>
                </div>
            </div>
            <div className="offcanvase__info">
                <div className="offcanvase__info--content">
                    <Link to="tel:+91 98298 04013"><span><i className="fa-sharp fa-light fa-phone"></i></span>+91 98298 04013</Link>
                    <Link to="#"><span><i className="fa-sharp fa-light fa-location-dot"></i></span>Village Danvav, Mt. Road, Abu Road Dist. Sirohi, Rajasthan - 307510.</Link>
                    <div className="offcanvase__info--content--social">
                        
                        <div className="social__links">
                        <Link to="https://www.instagram.com/info_cit/"><img src="assets/images/social-icons/instagram.png" alt="" /></Link>
                                <Link to="https://www.facebook.com/citabuinfo/"><img src="assets/images/social-icons/facebook.png" alt="" /></Link>
                                <Link to="https://in.linkedin.com/school/chartered-institute-of-technology/"><img src="assets/images/social-icons/linkedin.png" alt="" /></Link>
                                <Link to="https://twitter.com/citabuinfo"><img src="assets/images/social-icons/twitter.png" alt="" /></Link>
                                <Link to="https://www.youtube.com/@citaburoad8124"><img src="assets/images/social-icons/youtube.png" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    
    <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          {/* Home */}
          <li className="has-droupdown">
            <Link to="/" className="main">Home</Link>
          </li>

          {/* Events */}
          <li className="has-droupdown">
            <Link to="#" className="main">Events</Link>
            <ul className="submenu mm-collapse">
              <li><Link className="mobile-menu-link" to="event.html">Event</Link></li>
              <li><Link className="mobile-menu-link" to="event-details.html">Event Details</Link></li>
            </ul>
          </li>

          {/* Academics */}
          <li className="has-droupdown">
            <Link to="#" className="main">Academics</Link>
            <ul className="submenu mm-collapse">
              <li><Link className="mobile-menu-link" to="academic.html">Academic</Link></li>
              <li><Link className="mobile-menu-link" to="admission.html">Admission</Link></li>
              <li><Link className="mobile-menu-link" to="academic-area.html">Academic Area</Link></li>
              <li><Link className="mobile-menu-link" to="campus-life.html">Campus Life</Link></li>
              <li><Link className="mobile-menu-link" to="scholarship.html">Scholarship</Link></li>
              <li><Link className="mobile-menu-link" to="tution-fee.html">Tution Fee</Link></li>
              <li><Link className="mobile-menu-link" to="program-single.html">Program Single</Link></li>
            </ul>
          </li>

          {/* Pages */}
          <li className="has-droupdown">
            <Link to="#" className="main">Pages</Link>
            <ul className="submenu mm-collapse">
              <li><Link className="mobile-menu-link" to="about.html">About Us</Link></li>
              <li><Link className="mobile-menu-link" to="athletics.html">Athletics</Link></li>
              <li className="has-dropdown third-lvl">
                <Link to="#">Faculty</Link>
                <ul className="submenu third-lvl base">
                  <li><Link className="mobile-menu-link" to="faculty.html">Faculty</Link></li>
                  <li><Link className="mobile-menu-link" to="faculty-details.html">Faculty Details</Link></li>
                </ul>
              </li>
              <li><Link className="mobile-menu-link" to="research.html">Research</Link></li>
            </ul>
          </li>

          {/* Blog */}
          <li className="has-droupdown">
            <Link to="#" className="main">Blog</Link>
            <ul className="submenu mm-collapse">
              <li><Link className="mobile-menu-link" to="blog.html">Blog</Link></li>
              <li><Link className="mobile-menu-link" to="blog-grid.html">Blog Grid</Link></li>
              <li><Link className="mobile-menu-link" to="blog-list.html">Blog List</Link></li>
              <li><Link className="mobile-menu-link" to="blog-details.html">Blog Details</Link></li>
            </ul>
          </li>

          {/* About Us */}
          <li className="has-droupdown">
            <Link to="#" className="main">About Us</Link>
            <ul className="submenu mm-collapse">
              <li className="has-dropdown">
                <Link to="#">Introduction</Link>
                <ul className="submenu third-lvl base">
                  <li><Link to="/infrastructure">The Institute Infrastructure</Link></li>
                  <li><Link to="/affliationsandccreditations">Affiliations and Accreditations</Link></li>
                  <li><Link to="/chairman">Chairman’s Message</Link></li>
                </ul>
              </li>
              <li><Link to="/hostel">Hostel & Mess</Link></li>
            </ul>
          </li>

          {/* Student Corner */}
          <li className="has-droupdown">
            <Link to="#" className="main">Student Corner</Link>
            <ul className="submenu mm-collapse">
              <li className="has-dropdown">
                <Link to="#">Academic Data</Link>
                <ul className="submenu third-lvl base">
                  <li><Link to="https://btu.ac.in/home/SYLLABUS-FOR-UNDERGRADUATE-PROGRAMME2021-22146">Scheme</Link></li>
                  <li><Link to="https://btu.ac.in/home/SYLLABUS-FOR-UNDERGRADUATE-PROGRAMME2021-22146">Syllabus</Link></li>
                  <li><Link to="https://btu.ac.in/home/Notices--Orders79">Examinations</Link></li>
                  <li><Link to="faculty-details.html">Academic Calendar</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">University Certificates</Link></li>
            </ul>
          </li>

          {/* Contact Us */}
          <li>
            <Link to="contact.html" className="main">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="rts-social-style-one pl--20 mt--100">
        <ul>
          <li>
            <Link to="#">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
 
</div>

    </>
  )
}

export default Header;