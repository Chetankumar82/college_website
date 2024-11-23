import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
        <header id="rt-header" className="header-one header--sticky">
        <div className="header-top-one-wrapper rt-primary-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-top-one">
                            <div className="left-information">
                                <Link to="mailto:someone@example.com" className="email"><i className="fa-light fa-envelope"></i>info@studyhub.com</Link>
                                <Link to="tel:+4733378901" className="email"><i className="fa-light fa-phone"></i>+61 012 012 445</Link>
                            </div>
                           
                            <div className="right-information">
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-one-wrapper">
                        <div className="left-side-header">
                            <Link to="index.html" className="logo-area">
                                <img src="assets/images/logo/" alt="logo"/>
                            </Link>
                        </div>

                        <div className="main-nav-one">
                            <nav>
                                <ul>
                                    <li className="has-dropdown">
                                        <Link className="nav-link" to="#">Home</Link>
                                        <ul className="submenu">
                                            <li><Link to="index.html">Home One</Link></li>
                                            <li><Link to="index-two.html">Home Two</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <Link className="nav-link" to="#">Pages</Link>
                                        <ul className="submenu">
                                            <li><Link to="about.html">About Us</Link></li>
                                            <li><Link to="athletics.html">Athletics</Link></li>
                                            <li className="sub-dropdown">
                                                <Link to="javascript:void(0);">Faculty</Link>
                                                <ul className="submenu third-lvl base">
                                                    <li><Link className="mobile-menu-link" href="faculty.html">Faculty Staff</Link></li>
                                                    <li><Link className="mobile-menu-link" href="faculty-details.html">Faculty details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="research.html">Research</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <Link className="nav-link" href="#">Academics</Link>
                                        <ul className="submenu">
                                            <li><Link to="academic.html">Academics</Link></li>
                                            <li><Link to="admission.html">Admission</Link></li>
                                            <li><Link to="academic-area.html">Academics Area</Link></li>
                                            <li><Link to="campus-life.html">Campus Life</Link></li>
                                            <li><Link to="scholarship.html">Scholarship</Link></li>
                                            <li><Link to="tution-fee.html">Tution Fee</Link></li>
                                            <li><Link to="program-single.html">Program Single</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <Link className="nav-link" href="#">Event</Link>
                                        <ul className="submenu">
                                            <li><Link to="event.html">Event</Link></li>
                                            <li><Link to="event-details.html">Event Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <Link className="nav-link" href="#">Blog</Link>
                                        <ul className="submenu">
                                            <li><Link to="blog.html">Blog</Link></li>
                                            <li><Link to="blog-grid.html">Blog Grid</Link></li>
                                            <li><Link to="blog-list.html">Blog List</Link></li>
                                            <li><Link to="blog-details.html">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="nav-link" href="contact.html">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header-right-area-one">
                            <div className="header-right-content">
                                <div className="search-form">
                                    <form action="#">
                                        <input type="text" name="s" id="search-site" placeholder="Search..."/>
                                        <button type="submit"><i className="fa-light fa-magnifying-glass"></i></button>
                                    </form>
                                </div>
                                <div className="menu-bar" id="menu-btn">
                                    <img src="assets/images/icon/bar.svg" alt="menu-bar"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    



<div id="side-bar" className="side-bar">
    <button className="close-icon-menu"><i className="far fa-times"></i></button>
    
    <div className="inner-main-wrapper-desk">
        <div className="thumbnail">
            <img src="assets/images/logo/logo-default.svg" alt="studyhub-university"/>
        </div>
        <div className="inner-content">
            <p className="disc">
                A modern HTML template for education, offering intuitive design & essential features for seamless learning experiences.
            </p>
            
            <div className="offcanvase__banner mt--50">
                <div className="offcanvase__banner--content">
                    <img src="assets/images/offcanvase.jpg" alt="offcanvase"/>
                    <Link to="admission.html" className="rts-theme-btn">Apply Now</Link>
                </div>
            </div>
            <div className="offcanvase__info">
                <div className="offcanvase__info--content">
                    <Link to="callto:+61485826710"><span><i className="fa-sharp fa-light fa-phone"></i></span>+(61) 485-826-710</Link>
                    <Link to="#"><span><i className="fa-sharp fa-light fa-location-dot"></i></span>Yarra Park, Melbourne, Australia</Link>
                    <div className="offcanvase__info--content--social">
                        <p className="title">Follow Us:</p>
                        <div className="social__links">
                            <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                            <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
                            <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    
    <div className="mobile-menu-main">
        <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">

                <li className="has-droupdown">
                    <Link to="#" className="main">Homepages</Link>
                    <ul className="submenu mm-collapse">
                        <li><Link className="mobile-menu-link" href="index.html">Home Style One</Link></li>
                        <li><Link className="mobile-menu-link" href="index-two.html">Home Style Two</Link></li>
                    </ul>
                </li>
                <li className="has-droupdown">
                    <Link to="#" className="main">Events</Link>
                    <ul className="submenu mm-collapse">
                        <li><Link className="mobile-menu-link" href="event.html">Event</Link></li>
                        <li><Link className="mobile-menu-link" href="event-details.html">Event Details</Link></li>
                    </ul>
                </li>
                <li className="has-droupdown">
                    <Link to="#" className="main">Academics</Link>
                    <ul className="submenu mm-collapse">
                        <li><Link className="mobile-menu-link" href="academic.html">Academic</Link></li>
                        <li><Link className="mobile-menu-link" href="admission.html">Admission</Link></li>
                        <li><Link className="mobile-menu-link" href="academic-area.html">Academic Area</Link></li>
                        <li><Link className="mobile-menu-link" href="campus-life.html">Campus Life</Link></li>
                        <li><Link className="mobile-menu-link" href="scholarship.html">Scholarship</Link></li>
                        <li><Link className="mobile-menu-link" href="tution-fee.html">Tution Fee</Link></li>
                        <li><Link className="mobile-menu-link" href="program-single.html">Program Single</Link></li>
                    </ul>
                </li>
                <li className="has-droupdown">
                    <Link to="#" className="main">Pages</Link>
                    <ul className="submenu mm-collapse">
                        <li><Link className="mobile-menu-link" href="about.html">About Us</Link></li>
                        <li><Link className="mobile-menu-link" href="athletics.html">Athletics</Link></li>
                        <li className="has-dropdown third-lvl">
                            <Link to="javascript:void(0);">Faculty</Link>
                            <ul className="submenu third-lvl base">
                                <li><Link className="mobile-menu-link" href="faculty.html">Faculty</Link></li>
                                <li><Link className="mobile-menu-link" href="faculty-details.html">Faculty details</Link></li>
                            </ul>
                        </li>
                        <li><Link className="mobile-menu-link" href="research.html">Research</Link></li>
                    </ul>
                </li>
                <li className="has-droupdown">
                    <Link to="#" className="main">Blog</Link>
                    <ul className="submenu mm-collapse">
                        <li><Link className="mobile-menu-link" href="blog.html">Blog</Link></li>
                        <li><Link className="mobile-menu-link" href="blog-grid.html">Blog Grid</Link></li>
                        <li><Link className="mobile-menu-link" href="blog-list.html">Blog List</Link></li>
                        <li><Link className="mobile-menu-link" href="blog-details.html">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="contact.html" className="main">Contact Us</Link>
                </li>
            </ul>
        </nav>

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