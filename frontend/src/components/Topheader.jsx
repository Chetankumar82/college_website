import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Topheader = () => {
  return (
    <>
    <div className='header-fixed'>
    
    <div className='topheader'>
        <div className='left-side-header'>
            <ul>
                <li><Link to='mailto:citaburoad@gmail.com' style={{color:"#fff"}}><MdEmail  /> citaburoad@gmail.com</Link></li>
                <li><Link to='tel:+91 98298 04013' style={{color:"#fff"}}><FaPhoneAlt style={{ color: "var(--theme-yellow)" }} /> Call Now: +91 98298 04013</Link></li>
            </ul>
        </div>
        <div className='right-side-header'>
        <ul>
                <li><Link to='#'><img src='Images/facebook.png' alt='facebook' /></Link></li>
                <li><Link to='#'><img src='Images/instagram.png' alt='instagram' /></Link></li>
                <li><Link to='#'><img src='Images/youtube.png' alt='youtube' /></Link></li>
                <li><Link to='#'><img src='Images/linkedin.png' alt='linkedin' /></Link></li>
                <li><Link to='#'><img src='Images/twitter.png' alt='twitter' /></Link></li>
                
            </ul>
        </div>
        </div>
</div>

    
    </>
  )
}

export default Topheader