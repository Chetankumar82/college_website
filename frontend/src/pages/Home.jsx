import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';

const Home = () => {
  return (
    <>
        <Header />
       <Slider />

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
                    <a href="index.html"><img src="assets/img/logo/logo-1.png" alt="logo"/></a>
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


        <section className="hero-section overflow-hidden">
            <div className="shapes">
                <div className="shape shape-1"><img src="assets/img/shapes/hero-shape-2.png" alt="shape"/></div>
                <div className="shape shape-2"><img src="assets/img/shapes/hero-shape-3.png" alt="shape"/></div>
                <div className="shape shape-3"><img src="assets/img/shapes/hero-shape-4.png" alt="shape"/></div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="hero-content">
                            <div className="section-heading mb-40">
                                <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>Welcome to Online Education</h4>
                                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Start learning from <br/>the world’s <span>best institutions</span></h2>
                            </div>
                            <div className="hero-btn-wrap">
                                <a href="contact.html" className="ed-primary-btn">Get Started</a>
                                <div className="hero-video">
                                    <div className="video-btn">
                                        <a
                                            className="video-popup venobox"
                                            data-autoplay="true"
                                            data-vbtype="video"
                                            href="https://youtu.be/JwC-Qx1lJso">
                                            <div className="play-btn">
                                                <i className="fa-sharp fa-solid fa-play"></i>
                                            </div>
                                            Watch the video
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-author">
                                <ul>
                                    <li><img src="assets/img/images/hero-author-1.png" alt="img"/></li>
                                    <li><img src="assets/img/images/hero-author-2.png" alt="img"/></li>
                                    <li><img src="assets/img/images/hero-author-3.png" alt="img"/></li>
                                    <li><img src="assets/img/images/hero-author-4.png" alt="img"/></li>
                                </ul>
                                <h5><span>10k</span>Enrolment</h5>
                            </div>
                            <h4 className="bottom-text">Explore <span>1350+</span> Courses within Subject</h4>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="hero-img-wrap">
                            <div className="hero-img">
                                <img src="assets/img/images/hero-img-1.png" alt="hero"/>
                            </div>
                            <div className="hero-img-shape"><img src="assets/img/shapes/hero-shape-1.png" alt="shape"/></div>
                            <div className="hero-text-element">
                                <h3 className="title"><span className="odometer" data-count="256">0</span><span className="number">+</span></h3>
                                <p>Crashed Courses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="about-section pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div className="about-img-wrap wow fade-in-left" data-wow-delay="400ms">
                            <div className="about-img-1">
                                <img src="assets/img/images/about-img-1.jpg" alt="about"/>
                                <div className="video-btn">
                                    <a
                                        className="video-popup venobox"
                                        data-autoplay="true"
                                        data-vbtype="video"
                                        href="https://youtu.be/JwC-Qx1lJso">
                                        <div className="play-btn">
                                            <i className="fa-sharp fa-solid fa-play"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="about-img-2">
                                <img src="assets/img/images/about-img-2.jpg" alt="about"/>
                            </div>
                            <div className="about-contact">
                                <div className="icon"><i className="fa-sharp fa-regular fa-phone-volume"></i></div>
                                <div className="content">
                                    <span>Online Support</span>
                                    <a href="tel:+2581523659">+258 152 3659</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="about-content">
                            <div className="section-heading mb-40">
                                <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>Get More About Us</h4>
                                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Over 10 Years in Distant learning <br/>for Skill Development</h2>
                                <p className="mt-20 wow fade-in-bottom" data-wow-delay="500ms">Compellingly procrastinate equity invested markets with efficient process improvements.  actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.</p>
                            </div>
                            <div className="about-counter-items wow fade-in-bottom" data-wow-delay="600ms">
                                <div className="about-counter-item">
                                    <div className="icon"><img src="assets/img/icon/about-1.png" alt="about"/></div>
                                    <div className="content">
                                        <h3 className="title"><span className="odometer" data-count="9.5">0</span><span className="number">k+</span></h3>
                                        <p>Total active students taking <br/>gifted courses</p>
                                    </div>
                                </div>
                                <div className="about-counter-item">
                                    <div className="icon"><img src="assets/img/icon/about-2.png" alt="about"/></div>
                                    <div className="content">
                                        <h3 className="title"><span className="odometer" data-count="6.7">0</span><span className="number">k+</span></h3>
                                        <p>Total active students taking <br/>gifted courses</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-btn wow fade-in-bottom" data-wow-delay="700ms">
                                <a href="about.html" className="ed-primary-btn">Start Free Trial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="course-category pt-120 pb-120">
            <div className="container">
                <div className="section-heading text-center">
                    <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>Our Course Categories</h4>
                    <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Select The Industry Where You Want To Learn</h2>
                </div>
                <div className="category-items wow fade-in-bottom" data-wow-delay="500ms">
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-1.png" alt="icon"/></span>Business Management</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-2.png" alt="icon"/></span>Arts & Design</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-3.png" alt="icon"/></span>Personal Development</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-4.png" alt="icon"/></span>Health & Fitness</a></div>
                </div>
                <div className="category-items wow fade-in-bottom" data-wow-delay="600ms">
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-5.png" alt="icon"/></span>Marketing</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-6.png" alt="icon"/></span>Business & Finance</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-7.png" alt="icon"/></span>Computer Science</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-2.png" alt="icon"/></span>Video & Photography</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-4.png" alt="icon"/></span>Data Science</a></div>
                </div>
                <div className="category-items wow fade-in-bottom" data-wow-delay="700ms">
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-1.png" alt="icon"/></span>IT Startup Agency</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-2.png" alt="icon"/></span>Software Company</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-3.png" alt="icon"/></span>High-Tech Company</a></div>
                    <div className="category-item"><a href="course-details.html"><span><img src="assets/img/icon/category-4.png" alt="icon"/></span>3D Gaming Studio</a></div>
                </div>
            </div>
        </section>
        

        <section className="promo-section pt-120 pb-120 overflow-hidden">
            <div className="bg-item">
                <div className="bg-shape-1"></div>
                <div className="bg-shape-2"></div>
            </div>
            <div className="shapes">
                <div className="shape shape-1"><img src="assets/img/shapes/promo-shape-1.png" alt="shape"/></div>
                <div className="shape shape-2"><img src="assets/img/shapes/promo-shape-2.png" alt="shape"/></div>
            </div>
            <div className="container">
                <div className="section-heading promo-heading text-center white-content">
                    <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>Why Choose Us</h4>
                    <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Explore Yourself All Over The World</h2>
                </div>
                <div className="row gy-lg-0 gy-4 justify-content-center promo-wrap">
                    <div className="col-lg-4 col-md-6">
                        <div className="promo-item white-content wow fade-in-bottom" data-wow-delay="200ms">
                            <div className="promo-thumb">
                                <img className="main-img" src="assets/img/images/promo-img-1.png" alt="promo"/>
                                <div className="icon"> <img src="assets/img/icon/promo-4.png" alt="icon"/></div>
                            </div>
                            <h3 className="title">Book Free Consultation</h3>
                            <p>Standards in leadership skills synergize <br/> optimal expertise rather than innovative <br/> leadership skills.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="promo-item white-content wow fade-in-bottom" data-wow-delay="400ms">
                            <div className="promo-thumb">
                                <img className="main-img" src="assets/img/images/promo-img-2.png" alt="promo"/>
                                <div className="icon"> <img src="assets/img/icon/promo-5.png" alt="icon"/></div>
                            </div>
                            <h3 className="title">Make Easy Payment</h3>
                            <p>Standards in leadership skills synergize <br/> optimal expertise rather than innovative <br/> leadership skills.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="promo-item item-3 white-content wow fade-in-bottom" data-wow-delay="500ms">
                            <div className="promo-thumb">
                                <img src="assets/img/images/promo-img-3.png" alt="promo"/>
                                <div className="icon"> <img src="assets/img/icon/promo-6.png" alt="icon"/></div>
                            </div>
                            <h3 className="title">Schedule First Lesson</h3>
                            <p>Standards in leadership skills synergize <br/> optimal expertise rather than innovative <br/> leadership skills.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      

        <section className="feature-course pt-120 pb-120">
            <div className="container">
                <div className="section-heading text-center">
                    <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>Top className Courses</h4>
                    <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Explore Featured Courses</h2>
                </div>
                <ul className="course-nav nav nav-tabs mb-40" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Categories</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Business</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Development</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab-2" data-bs-toggle="tab" data-bs-target="#contact-2" type="button" role="tab" aria-controls="contact-2" aria-selected="false">Marketing</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab-3" data-bs-toggle="tab" data-bs-target="#contact-3" type="button" role="tab" aria-controls="contact-3" aria-selected="false">Finance</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab-4" data-bs-toggle="tab" data-bs-target="#contact-4" type="button" role="tab" aria-controls="contact-4" aria-selected="false">Gaming</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab-5" data-bs-toggle="tab" data-bs-target="#contact-5" type="button" role="tab" aria-controls="contact-5" aria-selected="false">Design</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab-6" data-bs-toggle="tab" data-bs-target="#contact-6" type="button" role="tab" aria-controls="contact-6" aria-selected="false">Data Science</button>
                    </li>
                </ul>
                <div className="course-tab-content tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-1.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">React Tutorial Beginners For Skills Building Carrera</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-1.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Kevin Perry</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-2.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Cultural Perspectives in Teaching and Learning Environments</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-2.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Deniel Ross</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-3.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Innovative Instructional Strategies <br/>for Enhancing Student</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-3.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Andrew klip</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-1.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">React Tutorial Beginners For Skills Building Carrera</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-1.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Kevin Perry</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-2.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Cultural Perspectives in Teaching and Learning Environments</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-2.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Deniel Ross</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-3.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Innovative Instructional Strategies <br/>for Enhancing Student</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-3.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Andrew klip</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-1.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">React Tutorial Beginners For Skills Building Carrera</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-1.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Kevin Perry</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-2.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Cultural Perspectives in Teaching and Learning Environments</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-2.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Deniel Ross</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-3.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Innovative Instructional Strategies <br/>for Enhancing Student</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-3.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Andrew klip</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact-2" role="tabpanel" aria-labelledby="contact-tab-2">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-1.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">React Tutorial Beginners For Skills Building Carrera</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-1.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Kevin Perry</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-2.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Cultural Perspectives in Teaching and Learning Environments</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-2.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Deniel Ross</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-3.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Innovative Instructional Strategies <br/>for Enhancing Student</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-3.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Andrew klip</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact-3" role="tabpanel" aria-labelledby="contact-tab-3">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-1.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">React Tutorial Beginners For Skills Building Carrera</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-1.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Kevin Perry</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-2.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Cultural Perspectives in Teaching and Learning Environments</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-2.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Deniel Ross</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-3.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Innovative Instructional Strategies <br/>for Enhancing Student</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-3.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Andrew klip</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact-4" role="tabpanel" aria-labelledby="contact-tab-4">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-1.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">React Tutorial Beginners For Skills Building Carrera</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-1.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Kevin Perry</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-2.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Cultural Perspectives in Teaching and Learning Environments</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-2.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Deniel Ross</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-3.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Innovative Instructional Strategies <br/>for Enhancing Student</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-3.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Andrew klip</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact-5" role="tabpanel" aria-labelledby="contact-tab-5">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-1.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">React Tutorial Beginners For Skills Building Carrera</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-1.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Kevin Perry</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-2.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Cultural Perspectives in Teaching and Learning Environments</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-2.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Deniel Ross</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-3.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Innovative Instructional Strategies <br/>for Enhancing Student</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-3.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Andrew klip</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact-6" role="tabpanel" aria-labelledby="contact-tab-6">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-1.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">React Tutorial Beginners For Skills Building Carrera</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-1.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Kevin Perry</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-2.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Cultural Perspectives in Teaching and Learning Environments</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-2.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Deniel Ross</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="course-item">
                                    <div className="course-thumb-wrap">
                                        <div className="course-thumb">
                                            <img src="assets/img/images/course-img-3.png" alt="course"/>
                                        </div>
                                    </div>
                                    <div className="course-content">
                                        <span className="offer">Free</span>
                                        <h3 className="title"><a href="course-details.html">Innovative Instructional Strategies <br/>for Enhancing Student</a></h3>
                                        <ul className="course-list">
                                            <li><i className="fa-light fa-file"></i>Lesson 8</li>
                                            <li><i className="fa-light fa-user"></i>Students 50</li>
                                            <li><i className="fa-light fa-eye"></i>View: 12K</li>
                                        </ul>
                                        <div className="course-author-box">
                                            <div className="course-author">
                                                <div className="author-img">
                                                    <img src="assets/img/images/course-author-3.png" alt="course"/>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="name">Andrew klip</h4>
                                                    <span>Instructor</span>
                                                </div>
                                            </div>
                                            <ul className="course-review">
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                <li className="point">(4.7)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <span className="price">$59.00</span>
                                        <a href="course-details.html" className="course-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="counter-section">
            <div className="container">
                <div className="row counter-wrap gy-lg-0 gy-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item item-1 white-content wow fade-in-bottom" data-wow-delay="200ms">
                            <h3 className="title"><span className="odometer" data-count="3,192">0</span>+</h3>
                            <p>Successflly Trained</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item white-content wow fade-in-bottom" data-wow-delay="400ms">
                            <h3 className="title"><span className="odometer" data-count="15,485">0</span>+</h3>
                            <p>classNamees Completed</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item white-content wow fade-in-bottom" data-wow-delay="500ms">
                            <h3 className="title"><span className="odometer" data-count="97.55">0</span>%</h3>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item item-4 white-content wow fade-in-bottom" data-wow-delay="600ms">
                            <h3 className="title"><span className="odometer" data-count="97.55">0</span>%</h3>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="faq-section pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="faq-img-wrap wow fade-in-left" data-wow-delay="400ms">
                            <div className="faq-img">
                                <img src="assets/img/images/faq-img.png" alt="faq"/>
                            </div>
                            <div className="faq-text-box">
                                <h4 className="student">Total Students</h4>
                                <ul className="faq-thumb-list">
                                    <li><img src="assets/img/images/faq-thumb-1.png" alt="faq"/></li>
                                    <li><img src="assets/img/images/faq-thumb-2.png" alt="faq"/></li>
                                    <li><img src="assets/img/images/faq-thumb-3.png" alt="faq"/></li>
                                    <li><img src="assets/img/images/faq-thumb-4.png" alt="faq"/></li>
                                    <li className="number">25+</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="faq-content content-1">
                            <div className="section-heading mb-30">
                                <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>Most Asked Question</h4>
                                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Powerful Dashboard And High Performance Framework</h2>
                            </div>
                            <div className="faq-accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item wow fade-in-bottom" data-wow-delay="400ms">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span>01.</span>What courses do you offer?</button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fade-in-bottom" data-wow-delay="200ms">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span>02.</span>How Can Teachers Effectively Manage a Diverse classNameroom?</button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fade-in-bottom" data-wow-delay="200ms">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span>03.</span>How Is Special Education Delivered in Inclusive classNamerooms?</button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

        <section className="team-section">
            <div className="team-wrap pt-120 pb-120" data-background="assets/img/bg-img/team-bg.png">
                <div className="container">
                    <div className="section-heading text-center">
                        <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>Our Instructors</h4>
                        <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Explore Our World's Best Courses</h2>
                    </div>
                    <div className="row gy-xl-0 gy-4 justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-item wow fade-in-bottom" data-wow-delay="200ms">
                                <div className="team-thumb">
                                    <img src="assets/img/team/team-1.png" alt="team"/>
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="teachers.html">Zaramane Mass Likan</a></h3>
                                    <span>Online Teachers</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-item wow fade-in-bottom" data-wow-delay="400ms">
                                <div className="team-thumb">
                                    <img src="assets/img/team/team-2.png" alt="team"/>
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="teachers.html">Amelia Grace Lily</a></h3>
                                    <span>Online Teachers</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-item wow fade-in-bottom" data-wow-delay="500ms">
                                <div className="team-thumb">
                                    <img src="assets/img/team/team-3.png" alt="team"/>
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="teachers.html">Mason Logan Dee</a></h3>
                                    <span>Online Teachers</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-item wow fade-in-bottom" data-wow-delay="600ms">
                                <div className="team-thumb">
                                    <img src="assets/img/team/team-4.png" alt="team"/>
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="teachers.html">Isabella Charlotte</a></h3>
                                    <span>Online Teachers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="content-section pt-120 pb-120 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-img-wrap wow fade-in-left" data-wow-delay="400ms">
                            <div className="content-img-1"><img src="assets/img/images/content-img-1.png" alt="img"/></div>
                            <div className="content-img-2"><img src="assets/img/images/content-img-2.png" alt="img"/></div>
                            <div className="content-img-3"><img src="assets/img/images/content-img-3.png" alt="img"/></div>
                            <div className="border-shape"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content-info">
                            <div className="section-heading mb-20">
                                <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>How We Start Journey</h4>
                                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">We Care About Your Life For <br/>Better Future</h2>
                            </div>
                            <p className="mb-30 wow fade-in-bottom" data-wow-delay="500ms">This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve.</p>
                            <div className="content-item mb-30 wow fade-in-bottom" data-wow-delay="600ms">
                                <div className="icon"><img src="assets/img/icon/content-1.png" alt="icon"/></div>
                                <div className="content">
                                    <h4 className="title">Master Certified Trainer</h4>
                                    <p>This includes offering personalized feedback, fostering a sense of community through discussion.</p>
                                </div>
                            </div>
                            <div className="content-item wow fade-in-bottom" data-wow-delay="700ms">
                                <div className="icon"><img src="assets/img/icon/content-2.png" alt="icon"/></div>
                                <div className="content">
                                    <h4 className="title">Coach Certification Program</h4>
                                    <p>This includes offering personalized feedback, fostering a sense of community through discussion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="request-section" data-background="assets/img/bg-img/request-bg.png">
            <div className="bg-img" data-background="assets/img/images/request-img-1.png"></div>
            <div className="shape"><img src="assets/img/shapes/req-shape-1.png" alt="shape"/></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="request-content white-content pt-120 pb-120">
                            <div className="section-heading white-content mb-20">
                                <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>Subscribe Newsletter</h4>
                                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Find Your Best Course With Us</h2>
                            </div>
                            <p className="desc mb-20 wow fade-in-bottom" data-wow-delay="400ms">Quality technologies via fully tested methods of empowerment. Proactively disseminate web enabled best practices after cross functional expertise.</p>
                            <div className="request-form-wrapper wow fade-in-bottom" data-wow-delay="500ms">
                                <form action="https://html.rrdevs.net/edcare/mail.php">
                                    <div className="form-items">
                                        <div className="form-item">
                                            <input type="text" id="name" name="name" className="form-control" placeholder="Course Name"/>
                                        </div>
                                        <div className="form-item">
                                            <input type="text" id="email" name="email" className="form-control" placeholder="Email Address"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="request-btn wow fade-in-bottom" data-wow-delay="600ms"><button className="ed-primary-btn">Subscribe Now</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="blog-section pt-120 pb-120">
            <div className="container">
                <div className="section-heading text-center">
                    <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>News & Blogs</h4>
                    <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Latest News Updates</h2>
                </div>
                <div className="row gy-md-0 gy-4">
                    <div className="col-md-6">
                        <div className="post-card post-card-1 wow fade-in-bottom" data-wow-delay="200ms">
                            <div className="post-thumb">
                                <img src="assets/img/blog/post-1.jpg" alt="post"/>
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <span className="category">Learning</span>
                                    <h3 className="title"><a href="blog-details.html">Repurpose mission critical action life items rather total linkage suds</a></h3>
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-regular fa-clock"></i>August 15, 2024</li>
                                        <li><i className="fa-sharp fa-regular fa-folder"></i>Marketing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="post-card post-card-1 wow fade-in-bottom" data-wow-delay="400ms">
                            <div className="post-thumb">
                                <img src="assets/img/blog/post-2.png" alt="post"/>
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <span className="category">Learning</span>
                                    <h3 className="title"><a href="blog-details.html">Strategies for Managing Stress and Preventing Burnout in Education</a></h3>
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-regular fa-clock"></i>August 15, 2024</li>
                                        <li><i className="fa-sharp fa-regular fa-folder"></i>Marketing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <Footer/>
       

        <div id="scrollup">
            <button id="scroll-top" className="scroll-to-top"><i className="fa-regular fa-arrow-up-long"></i></button>
        </div>
        

  
        
    </>
  )
}

export default Home;