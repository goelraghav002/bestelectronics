import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-text">© 2024 Raghav Goel. All rights reserved.</p>
        <div className="icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
