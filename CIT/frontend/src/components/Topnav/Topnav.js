import React, { useState } from "react";
import instagram from "../../assets/Social/instagram.png";
import facebook from "../../assets/Social/facebook.png";
import twitter from "../../assets/Social/twitter.png";
import linkedin from "../../assets/Social/linkedin.png";
import youtube from "../../assets/Social/youtube.png";
import "./Topnav.css"
const Topnav = () => {
  return (
    <nav className="fixed top-0 w-full  select-none  justify-betweenlg:items-stretch z-10 px-2 item-center " style={{ backgroundColor: "rgb(0, 92, 161)" }}>
      <div
        className="lg:flex justify-between align items-center	 h-12 pt-2"
        style={{  }}
      >
      <div className="flex items-center justify-center lg:justify-start">
        <a
          href="tel:+91 98298 04013"
          className="text-xs text-white px-4 md:text-sm font-bold contact" 
        >
          <i className="fa-solid fa-phone text-yellow-500"></i>
          &nbsp;<span className="text-yellow-500 call">Call Now:</span>&nbsp;+91 98298 04013
        </a>
        <a
          href="mailto:citaburoad@gmail.com"
          className="text-xs text-white px-4 md:text-sm font-bold contact"
        >
          <i className="fa-solid fa-envelope text-yellow-500"></i>
          &nbsp; citaburoad@gmail.com
        </a>
</div>

      <div className="lg:flex px-4 gap-2 social-icon">
      <a href="https://www.instagram.com/info_cit/"><img src={instagram} alt="" className="h-6 w-6" /></a>
      <a href="https://www.facebook.com/citabuinfo/"><img src={facebook} alt="" className="h-6 w-6"/></a>
      <a href="https://x.com/citabuinfo"><img src={twitter} alt="" className="h-6 w-6"/></a>
      <a href="https://www.linkedin.com/school/chartered-institute-of-technology/posts/?feedView=all"><img src={linkedin} alt="" className="h-6 w-6" /></a>
      <a href="https://www.youtube.com/@citaburoad8124"><img src={youtube} alt="" className="h-6 w-6"/></a>
      </div>
      
      </div>
    </nav>
  );
};

export default Topnav;
