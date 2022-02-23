import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div
    className="w-full flex flex-row h-16 justify-around 
    items-center bg-gray-300 fixed bottom-0 left-0 font-sans"
  >
    <div>
      <Link to="/" className="footer-container-title">
        Météo actuelle
      </Link>
    </div>
    <div>
      <Link to="/contact" className="footer-container-title">
        Contact
      </Link>
    </div>
  </div>
);

export default Footer;
