import React from "react";
import logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram_icon.png";
import pintester from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <h2>SHOPPER</h2>
      </div>
      <div>
        <ul className="footer-menu">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-logos">
        <img src={instagram} alt="instagram" />
        <img src={pintester} alt="pintester" />
        <img src={whatsapp} alt="whatsapp" />
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright@2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
