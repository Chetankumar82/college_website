import React from 'react'
import Marque from './Marque'
import Topheader from './Topheader'
import { IoIosHome } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <Topheader />
    <header id="header-sticky" className="header-1">
            <div className="container-fluid">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="header-left">
                            <div className="logo">
                                <a href="index.html" className="header-logo">
                                    <img src="assets/img/logo/logo-cit.png" alt="logo-img"/>
                                </a>
                            </div>
                            <div className="category-oneadjust">
                               <div className="dot">
                               <TbGridDots />
                               </div>
                                <select name="cate" className="category">
                                   
                                    <option value="1">
                                        Our Departments
                                    </option>
                                    <option value="1">
                                       Computer Sci. & Eng.
                                    </option>
                                    <option value="1">
                                        Mechanical Engineering
                                    </option>
                                    <option value="1">
                                        Electrical Engineering
                                    </option>
                                    <option value="1">
                                        Elect. & Comm. Engineering
                                    </option>
                                    <option value="1">
                                        Civil Engineering
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                        <li>
                                                <a href="/">
                                                    <span className="head-icon"><IoIosHome /></span>
                                                    Home
                                                </a>
                                            </li>
                                           
                                            <li className="has-dropdown menu-thumb">
                                                <a href="index.html">
                                                    <span className="head-icon"></span>
                                                    About Us
                                                    <i className="fas fa-chevron-down"></i>
                                                </a>
                                                <ul className="submenu has-homemenu">
                                                    <li>
                                                        <div className="homemenu-items">
                                                            <div className="row">
                                                                <div className="col-lg-12 homemenu">
                                                                    <div className="homemenu-thumb">
                                                                       <h5 className="mt-2">Introduction</h5>
                                                                    </div>
                                                                    
                                                                    <div className="homemenu-content">
                                                                        <h4 className="homemenu-title">
                                                                           <a href="index.html">
                                                                           <p>The Institute Infrastructure</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Affliations and Accreditations</p>   
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Chairman's Message</p>   
                                                                           </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 homemenu">
                                                                    <div className="homemenu-thumb mb-15">
                                                                        <a href="index-2.html">
                                                                            <h5 className="mt-2">hostel & Mess</h5>
                                                                       </a>
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown menu-thumb">
                                                <a href="index.html">
                                                    <span className="head-icon"></span>
                                                    Academics
                                                    <i className="fas fa-chevron-down"></i>
                                                </a>
                                                <ul className="submenu has-homemenu">
                                                    <li>
                                                        <div className="homemenu-items">
                                                            <div className="row">
                                                                <div className="col-lg-6 homemenu">
                                                                    <div className="homemenu-thumb">
                                                                       <h5 className="mt-2">Academic Profile</h5>
                                                                    </div>
                                                                    
                                                                    <div className="homemenu-content">
                                                                        <h4 className="homemenu-title">
                                                                           <a href="index.html">
                                                                           <p>Principal Profile</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Faculty Profile</p>   
                                                                           </a>
                                                                           
                                                                        </h4>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className="col-lg-6 homemenu">
                                                                    <div className="homemenu-thumb">
                                                                       <h5 className="mt-2">Self Learning Program</h5>
                                                                    </div>
                                                                    
                                                                    <div className="homemenu-content">
                                                                        <h4 className="homemenu-title">
                                                                           <a href="index.html">
                                                                           <p>NPTEL</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Swayam</p>   
                                                                           </a>
                                                                           
                                                                        </h4>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className="col-lg-6 homemenu">
                                                                    <div className="homemenu-thumb">
                                                                       <h5 className="mt-2">Research</h5>
                                                                    </div>
                                                                    
                                                                    <div className="homemenu-content">
                                                                        <h4 className="homemenu-title">
                                                                           <a href="index.html">
                                                                           <p> R&D Lab</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Workshop & Seminar</p>   
                                                                           </a>
                                                                           
                                                                        </h4>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className="col-lg-6 homemenu">
                                                                    <div className="homemenu-thumb">
                                                                       <h5 className="mt-2">Student Club</h5>
                                                                    </div>
                                                                    
                                                                    <div className="homemenu-content">
                                                                        <h4 className="homemenu-title">
                                                                           <a href="index.html">
                                                                           <p> Coding Club</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Robotics Club</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Social Media Club</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Technical Innovation Club</p>
                                                                           </a>
                                                                        </h4>
                                                                    </div>
                                                                    
                                                                </div>
                                                               
                                                                
                                                                <div className="col-lg-12 homemenu">
                                                                    <div className="homemenu-thumb">
                                                                       <h5 className="mt-2">Gallery</h5>
                                                                    </div>
                                                                    
                                                                    
                                                                </div>
                                                                
                                                                
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown menu-thumb">
                                                <a href="index.html">
                                                    <span className="head-icon"></span>
                                                    Student Corner
                                                    <i className="fas fa-chevron-down"></i>
                                                </a>
                                                <ul className="submenu has-homemenu">
                                                    <li>
                                                        <div className="homemenu-items">
                                                            <div className="row">
                                                            <div className="col-lg-12 homemenu">
                                                                    <div className="homemenu-thumb">
                                                                       <h5 className="mt-2">Academic Data</h5>
                                                                    </div>
                                                                    
                                                                    <div className="homemenu-content">
                                                                        <h4 className="homemenu-title">
                                                                           <a href="index.html">
                                                                           <p>Scheme</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Syllabus</p>   
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Examinations</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>Academic Calender</p>
                                                                           </a>
                                                                           <a href="index.html">
                                                                           <p>University Certificates</p>
                                                                           </a>
                                                                        </h4>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown active d-xl-none">
                                                <a href="instructor.html" className="border-none">
                                                About Us
                                                </a>
                                                <ul className="submenu">
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Introduction
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="news.html">The Institute Infrastructure</a></li>
                                                            <li><a href="news-details.html">Affliations and Accreditations</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Hostel & Mess
                                                        </a>
                                                        
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown active d-xl-none">
                                                <a href="instructor.html" className="border-none">
                                                Academics
                                                </a>
                                                <ul className="submenu">
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Academic Profile
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="news.html">Principal Profile</a></li>
                                                            <li><a href="news-details.html">Faculty Profile</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Departments
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="news.html">Computer Science & Engineering</a></li>
                                                            <li><a href="news-details.html">Mechanical Engineering</a></li>
                                                            <li><a href="news-details.html">Electrical Engineering</a></li>
                                                            <li><a href="news-details.html">Elect. & Comm. Engineering</a></li>
                                                            <li><a href="news-details.html">Civil Engineering</a></li>
                                                            
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Self Learning Program
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="news.html">NPTEL</a></li>
                                                            <li><a href="news-details.html">Swayam</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Research
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="news.html">R&D Lab</a></li>
                                                            <li><a href="news-details.html">Workshop & Seminar</a></li>
                                                            
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Student Club
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="news.html">Coding Club</a></li>
                                                            <li><a href="news-details.html">Robotics Club</a></li>
                                                            <li><a href="news-details.html">Social Media Club</a></li>
                                                            <li><a href="news-details.html">Technical Innovation Club</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Gallery
                                                        </a>
                                                        
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown active d-xl-none">
                                                <a href="instructor.html" className="border-none">
                                                Student Corner
                                                </a>
                                                <ul className="submenu">
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Academic Data
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="news.html">Scheme</a></li>
                                                            <li><a href="news-details.html">Syllabus</a></li>
                                                            <li><a href="news.html">Examinations</a></li>
                                                            <li><a href="news-details.html">Academic Calender</a></li>
                                                            <li><a href="news-details.html">University Certificates</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">
                                                    <span className="head-icon"></span>
                                                    Placements
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.html">
                                                    <span className="head-icon"></span>
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            
                            <div className="header-button">
                                <a href="sign-in.html" className="theme-btn style-2"><i className="far fa-user"></i> Admin</a>
                                <a href="register.html" className="theme-btn yellow-btn">Apply Online</a>
                            </div>
                            <div className="header__hamburger d-xl-none my-auto">
                                <div className="sidebar__toggle">
                                    <div className="header-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    <Marque />
    <div class="fix-area">
            <div class="offcanvas__info">
                <div class="offcanvas__wrapper">
                    <div class="offcanvas__content">
                        <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div class="offcanvas__logo">
                                <a href="index.html">
                                <img src="assets/img/logo/logo-cit.png" alt="logo-img"/>
                                </a>
                            </div>
                            <div class="offcanvas__close">
                                <button>
                                <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <h3 class="offcanvas-title"></h3>
                        <p>Welcome to, Exellence in <br/> Engineering Education </p>
                        <div class="social-icon d-flex align-items-center">
                        <Link to='#'><img src='Images/facebook.png' alt='facebook' /></Link>
                        <Link to='#'><img src='Images/instagram.png' alt='instagram' /></Link>
                        <Link to='#'><img src='Images/youtube.png' alt='youtube' /></Link>
                        <Link to='#'><img src='Images/linkedin.png' alt='linkedin' /></Link>
                        <Link to='#'><img src='Images/twitter.png' alt='twitter' /></Link>
                        </div>
                        <div class="mobile-menu fix mb-3"></div>
                        <div class="offcanvas__contact">
                            <h3>Information</h3>
                            <ul class="contact-list">
                                <li>
                                    <span>
                                        Address:
                                    </span>
                                    
                                    Village Danvav, Mt. Road, Abu Road Dist. Sirohi, Rajasthan - 307510.
                                </li>
                                <li>
                                    <span>
                                        Call Us:
                                    </span>
                                    <a href="tel:+91 98298 04013">+91 98298 04013</a>
                                </li>
                                <li>
                                    <span>
                                        Email:
                                    </span>
                                    <a href="mailto:citaburoad@gmail.com">citaburoad@gmail.com</a>
                                </li>
                            </ul>
                            <div class="offcanvas-button">
                                
                                <a href="register.html" class="theme-btn yellow-btn">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas__overlay"></div>
    </>
  )
}

export default Header