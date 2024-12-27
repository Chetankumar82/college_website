import React from 'react'
import "./FixFooter.css"
import { LuNotebookPen } from "react-icons/lu";
import { FaDownload } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import whatsapp  from "../../assets/Social/whatsappbtn.png"
import brochure from "../../assets/pdf/CIT-Brochure.pdf"
const FixFooter = () => {
  return (
    <>
        <div className="fix-footer-section">
            <div className="fix-footer-container">
                <div className='left-section'>
                <a aria-label="Chat on WhatsApp" href="https://wa.me/9829804013" target="_blank" rel="noopener noreferrer">
                <img alt="Chat on WhatsApp" src={whatsapp} style={{width:"180px", height:"40px"}}  />
                </a>
                    
                </div>
                <div className='right-section'>
                     <ul>
                        <li className='text-yellow-400'><a href={brochure}  data-toggle="tooltip"  title="Download Brochure" ><LuNotebookPen/></a></li>
                        <li className='text-yellow-400'><a href="/Studentcorner" data-toggle="tooltip"  title="Noties"><FaBell /></a></li>
                        <li className='text-yellow-400'><a href="/docdownload" data-toggle="tooltip"  title="Dawnload"><FaDownload /></a></li> 
                        <li className='text-yellow-400'><a href="tel:+91 98298 04013" data-toggle="tooltip"  title="Contact Now"><FaPhoneAlt /></a></li>
                     </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default FixFooter