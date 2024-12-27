import React from "react";
import "./footer.css";
import shap1 from "../../assets/breadcrumb/dot-shape.png";
import shap2 from "../../assets/breadcrumb/Vector.png";
import logo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";
import instagram from "../../assets/Social/instagram.png";
import facebook from "../../assets/Social/facebook.png";
import twitter from "../../assets/Social/twitter.png";
import linkedin from "../../assets/Social/linkedin.png";
import youtube from "../../assets/Social/youtube.png";
function Footer() {
  return (
    <footer class="footer-section fix footer-bg">
  <div class="big-circle">
    <img src={shap1} alt="img"/>
  </div>
  <div class="circle-shape-2">
    <img src={shap2} alt="img"/>
  </div>
  <div class="Vector-shape-2">
    <img src={shap1} alt="img"/>
  </div>
  <div class="container-lg">
    <div class="footer-widget-wrapper">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
          <div class="single-footer-widget">
            <div class="widget-head footer-icon">
              <a href="index.html">
                <img src={logo} alt="img" style={{width: "280px", height: "90px"}}/>
              </a>
            </div>
            <div class="footer-content">
              <p>Chartered Institute of Technology is an initiative by Gyan Raman Charitable Trust and Amongst Top 10 Best BTU Affiliated Engineering Colleges in Rajasthan.</p>
              <div class="social-icon">
                <a href="/">
                  <img src={facebook} alt="facebook"/>
                </a>
                <a href="/">
                  <img src={instagram} alt="instagram"/>
                </a>
                <a href="/">
                  <img src={youtube} alt="youtube"/>
                </a>
                <a href="/">
                  <img src={linkedin} alt="linkedin"/>
                </a>
                <a href="/">
                  <img src={twitter} alt="twitter"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp">
          <div class="single-footer-widget">
            <div class="widget-head">
              <h3>About Us</h3>
            </div>
            <ul class="list-area">
              <li>
                <a href="courses.html">The Institute Infrastructure</a>
              </li>
              <li>
                <a href="/affiliation">Affliations and Accreditations</a>
              </li>
              <li>
                <a href="courses.html">Chairman's Message</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp">
          <div class="single-footer-widget">
            <div class="widget-head">
              <h3>Academics Profile</h3>
            </div>
            <ul class="list-area">
              <li>
                <a href="about.html">Principal Profile</a>
              </li>
              <li>
                <a href="about.html">Faculty Profile</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp">
          <div class="single-footer-widget">
            <div class="widget-head">
              <h3>Media</h3>
            </div>
            <ul class="list-area">
              <li>
                <a href="about.html">Photo Gallery</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp">
          <div class="single-footer-widget">
            <div class="widget-head">
              <h3>Dawnloads</h3>
            </div>
            <ul class="list-area">
              <li>
                <a href="about.html">Brochure</a>
              </li>
              <li>
                <a href="about.html">Training letter </a>
              </li>
              <li>
                <a href="about.html">Scheme</a>
              </li>
              <li>
                <a href="about.html">Syllabus</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp">
          <div class="single-footer-widget">
            <div class="widget-head">
              <h3>Quick Links</h3>
            </div>
            <ul class="list-area">
              <li>
                <a href="courses.html">Consolidated Marksheet</a>
              </li>
              <li>
                <a href="courses.html">Correction in Name</a>
              </li>
              <li>
                <a href="courses.html">Duplicate Certificate</a>
              </li>
              <li>
                <a href="courses.html">Migration Certificate</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp">
          <div class="single-footer-widget">
            <div class="widget-head">
              <h3>Departments</h3>
            </div>
            <ul class="list-area">
              <li>
                <a href="courses.html">Computer Science &amp; Engineering</a>
              </li>
              <li>
                <a href="courses.html">Mechanical Engineering</a>
              </li>
              <li>
                <a href="courses.html">Electrical Engineering</a>
              </li>
              <li>
                <a href="courses.html">Elect. &amp; Comm. Engineering</a>
              </li>
              <li>
                <a href="courses.html">Civil Engineering</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp">
          <div class="single-footer-widget">
            <div class="widget-head">
              <h3>Contact Us</h3>
            </div>
            <div class="footer-content">
              <ul class="contact-info">
                <li>Village Danvav, Mt. Road, Abu Road Dist. Sirohi, Rajasthan - 307510.</li>
                <li>
                  <a href="mailto:citaburoad@gmail.com" class="link">
                    <span style={{color: "#eded06"}}>Email:</span> citaburoad@gmail.com </a>
                </li>
                <li>
                  <a href="tel:+91 98298 04013">
                    <span style={{color: "#eded06"}}>Call Now:</span> +91 98298 04013 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom style-2">
      <p>Copyright © CIT, Aburoad, all rights reserved. </p>
    </div>
  </div>
</footer>
  );
}

export default Footer;
