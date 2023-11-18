import { Link } from "react-scroll";
import { useState } from "react";

import "./styles/navbar.css";
import logo from "../assets/logo.svg";
import downArrow from "../assets/Arrow-down.svg";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={`nav-navbar ${mobileMenu ? "active" : ""}`}>
      <div className="nav-logo">
        <img src={logo} alt="" className="nav-logo-img" />
        <p className="logo-text">Monitus</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="hero" smooth={true} offset={-70} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-70} duration={500}>
              About <img src={downArrow} alt="" className="downArrow" />
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} offset={-70} duration={500}>
              Company <img src={downArrow} alt="" className="downArrow" />
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              Pages <img src={downArrow} alt="" className="downArrow" />
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              Blog <img src={downArrow} alt="" className="downArrow" />
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              Shop <img src={downArrow} alt="" className="downArrow" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile" onClick={toggleMobileMenu}>
        {mobileMenu ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
