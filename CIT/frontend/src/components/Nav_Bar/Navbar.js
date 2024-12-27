
import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import logo from "./../../assets/Logo1.png";
import Topnav from "../Topnav/Topnav";
import apply from "../../assets/Social/apply.gif";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <Topnav />
        <nav className="navbarItems">
          <a className="navbar-Logo" href="/">
            <img src={logo} alt="logo" />
          </a>
          <div className="menu-icone" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => (
              <li
                key={index}
                className={item.submenu ? "nav-item has-submenu" : "nav-item"}
              >
                <a className={item.cName} href={item.url}>
                  {item.title} <i className={item.icon}></i>
                </a>
                {item.submenu && (
                  <ul className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a className={subItem.cName} href={subItem.url}>
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <nav
          className="fixed w-full  select-none justify-between lg:items-stretch z-10 px-2 h-7 py-1" style={{ backgroundColor: "#031f42", top: "125px"}}
         
        >
          <h1
            className=" text-yellow-500"
            style={{ fontSize: "16px" }}
          >
            <marquee>
              <a
                className="px-2"
                href="#"
              >
                Welcome To Chartered Institute of Technology, Aburoad
              </a>
              ||
              <a
                className="px-2"
                href="state-level-open-night-kabaddi-tournament-25-26-february-2022.aspx"
              >
                Only Engineering College in Sirohi District
              </a>
              ||
              <a
                className="px-2"
                href="technical-activities-february-2022.aspx"
              >
               <img src={apply} className="h-5" style={{display:"inline-block"}}/>
              </a>
              
            </marquee>
          </h1>
        </nav>
      </>
    );
  }
}

export default Navbar;
