import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header className="header header-1 header-3 sticky-active">
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-inner">
                        <div className="top-bar-left">
                            <ul className="top-bar-list">
                                <li><i className="fa-regular fa-phone" style={{color: '#FFFF00'}}></i><Link to="tel:98298 04013">+91 98298 04013</Link></li>
                                <li><i className="fa-regular fa-envelope"></i><span><Link to="mailto:citaburoad@gmail.com">citaburoad@gmail.com</Link></span></li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            
                            <div className="top-social-wrap">
                                <span>Follow Us</span>
                                <ul className="social-list">
                                    <li><Link to="https://www.facebook.com/citabuinfo/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="https://x.com/citabuinfo"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="https://www.instagram.com/info_cit/"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link to="https://www.linkedin.com/school/chartered-institute-of-technology/posts/?feedView=all"><i className="fab fa-linkedin"></i></Link></li>
                                    <li><Link to="https://www.youtube.com/@citaburoad8124"><i className="fab fa-youtube"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mid-header">
                <div className="container">
                    <div className="mid-header-inner">
                        <div className="header-logo d-lg-block">
                            <Link to="index.html">
                                <img src="assets/img/logo/logo-cit.png" style={{width: "350px", height: "100px"}} alt="Logo"/>
                            </Link>
                        </div>
                        <div className="category-form-wrap">
                        
                            <div className="" >
                                
                                <marquee width="100%" direction="left" className="h-marquee">
      <p style={{fontSize: "16px", fontWeight: "600" ,color:"var(--ed-color-theme-primary)",zIndex: "1000"}}>Welcome To Chartered Institute of Technology, Aburoad | Only Best Engineering College In Sirohi District <img src='assets/img/admission-1.gif' style={{width: "120px"}}/> </p>

</marquee>
                                
                            </div>
                            
                        </div>
                        <div className="mid-header-right">
                            <a href="contact.html" className="ed-primary-btn header-btn"><i className='fa fa-pen'></i> Apply Online</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="primary-header">
                <div className="container">
                    <div className="primary-header-inner">
                        <div className="header-logo d-lg-none">
                            <Link to="/">
                                <img src="assets/img/logo/logo-cit.png" alt="Logo"/>
                            </Link>
                        </div>
                        <div className="header-left-inner">
                            <div className="category-area">
                                <div className="category-btn">
                                    <i className="fa-sharp fa-solid fa-grid-2"></i>
                                    <span>Our Courses</span>
                                    <ul className="category-sub-menu">
                                        <li>
                                            <ul>
                                                <li>
                                                    <a href="#" className="menu-item">Computer Science Engineering</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="menu-item">Civil Engineering</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="menu-item">Electical Engineering</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="menu-item">Electronices & Communication Engineering</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="menu-item">Mechanical Engineering </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-menu-wrap">
                                <div className="mobile-menu-items">
                                    <ul className="sub-menu">
                                        <li className="active">
                                            <Link to="/">Home</Link>
                                            
                                        </li>
                                        <li><Link to="/about">About</Link></li>
                                        
                                       
                                        <li className="menu-item-has-children">
                                            <Link to="/academics">Academics</Link>
                                            <ul>
                                                <li><a href="course.html">Course</a></li>
                                                <li><a href="course-details.html">Course Details</a>
                                                    <ul>
                                                        <li><a href="basic-course.html">Basic Course</a></li>
                                                        <li><a href="advanced-course.html">Advanced Course</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                        <li className="menu-item-has-children">
                                            <Link to="/studentcorner">Student Corner</Link>
                                            <ul>
                                                <li><a href="course.html">Course</a></li>
                                                <li><a href="course-details.html">Course Details</a>
                                                    <ul>
                                                        <li><a href="basic-course.html">Basic Course</a></li>
                                                        <li><a href="advanced-course.html">Advanced Course</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                        
                                        <li><a href="contact.html">Placement</a></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div className="header-right-wrap">
                            <div className="header-right">
                                <div className="header-right-btn">
                                    <a href="contact.html" className="ed-primary-btn">Apply Online</a>
                                </div>
                                <div className="header-logo d-none d-lg-none">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo-cit.png" alt="Logo"/>
                                    </a>
                                </div>
                                <div className="header-right-item d-lg-none d-md-block">
                                    <a href="javascript:void(0)" className="mobile-side-menu-toggle"><i className="fa-sharp fa-solid fa-bars"></i
                                    ></a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
        <div id="popup-search-box">
            <div className="box-inner-wrap d-flex align-items-center">
                <form id="form" action="#" method="get" role="search">
                    <input id="popup-search" type="text" name="s" placeholder="Type keywords here..."/>
                </form>
                <div className="search-close"><i className="fa-sharp fa-regular fa-xmark"></i></div>
            </div>
        </div>
        

        <div className="mobile-side-menu">
            <div className="side-menu-content">
                <div className="side-menu-head">
                    <a href="index.html"><img src="assets/img/logo/logo-cit.png" alt="logo"/></a>
                    <button className="mobile-side-menu-close"><i className="fa-regular fa-xmark"></i></button>
                </div>
                <div className="side-menu-wrap"></div>
                <ul className="side-menu-list">
                    <li><i className="fa-light fa-location-dot"></i>Address : <span>Amsterdam, 109-74</span></li>
                    <li><i className="fa-light fa-phone"></i>Phone : <a href="tel:+01569896654">+01 569 896 654</a></li>
                    <li><i className="fa-light fa-envelope"></i>Email : <a href="mailto:info@example.com">info@example.com</a></li>
                </ul>
            </div>
        </div>
       
        <div className="mobile-side-menu-overlay"></div>
    </>
  )
}

export default Header;