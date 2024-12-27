import Hero from "../components/Hero";
import Navbar from "../components/Nav_Bar/Navbar";

// import Footer from "../components/Footer";

import EnquiryForm from "../components/testimonial/EnquiryFrom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import "./Contact.css"

function Contact() {
  return (
    <>
    <Breadcrumb Home="Home" PageName="Contact Us" />
    <div className="contact-page cta-newsletter-section">
  <div className="row">
    {/* Left Column: Contact Information */}
    <div className="col-lg-6 col-md-12 col-sm-12">
      <div className="contact-info-1">
        <h2>Contact Us</h2>
        
        <div className="contact-info-wrapper">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fa fa-phone"></i>
            </div>
            <div className="contact-info-content">
              <h3>Phone</h3>
              <a href="tel:+91 98298 04013" >+91 98298 04013</a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="contact-info-content">
              <h3>Email</h3>
              <a href="mailto:citaburoad@gmail.com" >citaburoad@gmail.com</a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="contact-info-content">
              <h3>Address</h3>
              <p>Village Danvav, Mt. Road, Abu Road Dist. Sirohi, Rajasthan - 307510. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Right Column: Enquiry Form */}
    <div className="col-lg-6 col-md-12 col-sm-12">
      <EnquiryForm />
    </div>
  </div>

  {/* Row: Google Map */}
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div
        style={{
          textDecoration: "none",
          overflow: "hidden",
          maxWidth: "100%",
          width: "100%",
          height: "500px",
        }}
      >
        <div
          id="gmap-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            style={{ height: "100%", width: "100%", border: "0" }}
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=chartered+institute+of+technology+aburoad&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>
        <style>
          {`
            #gmap-canvas img {
              max-width: none !important;
              background: none !important;
              font-size: inherit;
              font-weight: inherit;
            }
          `}
        </style>
      </div>
    </div>
  </div>
</div>

   </>
  );
}

export default Contact;
