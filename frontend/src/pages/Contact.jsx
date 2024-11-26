import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Breadcrumb from '../Components/Breadcrumb'

const Contact = () => {
  const home = "Home"; // Use `const` to declare the variable
  const contactPage = "Contact Us"; // Avoid using the same name as the component
  return (
    <>
    <Header />
    <Breadcrumb Home={home} Pages={contactPage} />
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1552.6369196855228!2d72.795097!3d24.523226000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x740168673d69c21a!2sChartered%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1660712006298!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Embed"
      ></iframe>
    </div>
    <Footer />
    </>
  )
}

export default Contact