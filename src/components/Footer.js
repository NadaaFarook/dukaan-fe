import React from "react";
import { Flag, Logo } from "../images";
const Footer = () => {
  return (
    <div className="section-footer">
      <div className="container">
        <div className="footer-wrapper">
          <a href="#">
            <img src={Logo} loading="lazy" alt="" />
          </a>
          <div className="footer-content">
            <div>
              <a href="#" className="footer-link">
                Contact
              </a>
              <a href="#" className="footer-link">
                FAQ&#x27;s
              </a>
            </div>
            <div>
              <a href="#" className="footer-link">
                Tutorials
              </a>
              <a href="#" className="footer-link">
                Blog
              </a>
            </div>
            <div>
              <a href="#" className="footer-link">
                Privacy
              </a>
              <a href="#" className="footer-link">
                Banned Items
              </a>
            </div>
            <div>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Jobs <span className="text-span">3</span>
              </a>
            </div>
            <div>
              <a href="#" className="footer-link">
                Facebook
              </a>
              <a href="#" className="footer-link">
                Twitter
              </a>
              <a href="#" className="footer-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="footer-hr"></div>
        <div className="flex-justify">
          <div>Dukaan 2020, All rights reserved.</div>
          <div className="flex-justify">
            <div>Made in  </div>
            <img src={Flag} loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
