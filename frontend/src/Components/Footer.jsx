import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section pt-120" data-background="assets/img/bg-img/footer-bg.png">
            <div className="footer-top-wrap">
                <div className="container">
                    <div className="footer-top text-center">
                        <h2 className="title">Subscribe Our Newsletter For <br/>Latest Updates</h2>
                        <div className="footer-form-wrap">
                            <form action="https://html.rrdevs.net/edcare/mail.php" className="footer-form">
                                <div className="form-item">
                                    <input type="text" id="email-2" name="email" className="form-control" placeholder="Enter Your E-mail"/>
                                    <div className="icon"><i className="fa-light fa-envelope"></i></div>
                                </div>
                                <button className="ed-primary-btn">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                    <div className="row footer-wrap">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="widget-header">Get in touch!</h3>
                                <p className="mb-30">Fusce varius, dolor tempor interdum tristiquei bibendum.</p>
                                <div className="footer-contact">
                                    <span className="number"><i className="fa-regular fa-phone"></i><a href="tel:702123-1478">(702) 123-1478</a></span>
                                    <a href="mailto:info@company.com" className="mail">info@company.com</a>
                                </div>
                                <ul className="footer-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget widget-2">
                                <h3 className="widget-header">Company Info</h3>
                                <ul className="footer-list">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="service.html">Resource Center</a></li>
                                    <li><a href="team.html">Careers</a></li>
                                    <li><a href="contact.html">Instructor</a></li>
                                    <li><a href="contact.html">Become A Teacher</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget widget-2">
                                <h3 className="widget-header">Useful Links</h3>
                                <ul className="footer-list">
                                    <li><a href="contact.html">All Courses</a></li>
                                    <li><a href="contact.html">Digital Marketing</a></li>
                                    <li><a href="contact.html">Design & Branding</a></li>
                                    <li><a href="contact.html">Storytelling & Voice Over</a></li>
                                    <li><a href="contact.html">News & Blogs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="widget-header">Recent Post</h3>
                                <div className="sidebar-post mb-20">
                                    <img src="assets/img/images/footer-post-1.png" alt="post"/>
                                    <div className="post-content">
                                        <h3 className="title"><a href="#">Where Dreams Find a Home</a></h3>
                                        <ul className="post-meta">
                                            <li><i className="fa-light fa-calendar"></i>20 April, 2024</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-post">
                                    <img src="assets/img/images/footer-post-2.png" alt="post"/>
                                    <div className="post-content">
                                        <h3 className="title"><a href="#">Where Dreams Find a Home</a></h3>
                                        <ul className="post-meta">
                                            <li><i className="fa-light fa-calendar"></i>20 April, 2024</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-content">
                        <p>Copyright © 2024 EdCare. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer