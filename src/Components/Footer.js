import React from "react";
import Logo from "../Assets/Logo.png";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <FaInstagram />
          <SiLinkedin />
          <BsWhatsapp />
        </div>
      </div>
      <div className="footer-section-two">
        {/* <div className="footer-section-columns">
          <span><a href="https://www.linkedin.com/in/taruun-prasath-g-s-17022624b/">Taruun Prasath</a></span>
          <span><a href="https://www.linkedin.com/in/parvadaesh-s-eee-b16a29259/">Parvadaesh</a></span>
          <span><a href="https://www.linkedin.com/in/dhana-sekar-412b49257/">Dhanasekar</a></span>
          <span><a href="https://www.linkedin.com/in/naveen-r-a85617278/">Naveen</a></span>
        </div> */}
        {/* <div className="footer-section-columns">
          <span>+91 7904837587</span>
          <span>+91 8825730740</span>
          <span>+91 8098584040</span>
          <span>+91 6383270401</span>
        </div> */}
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
