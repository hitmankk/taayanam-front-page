import React, { Component } from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div id="footer">
          <div className="main-footer">
            <div className="logoinfo">
              <h2>Have a Great Day!</h2>
              <p>By Taayanam</p>

              <div className="contact-details">
                <h1>Contact Us</h1>
                <li>
                  <div className="fa fa-phone"></div>
                  <a href="tel:+918383858846">+91 8383858846 </a>
                </li>
                <li>
                  <div className="fa fa-envelope"></div>
                  <a href="mailto:info@taayanam.com">info@taayanam.com</a>
                </li>
              </div>
            </div>
            <div className="com">
              <ul>
                <li>
                  {" "}
                  <h1>About</h1>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/solutions">Solutions</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="info">
              <h1>Social Media</h1>
              <div className="sociallogos">
                <div className="logobox">
                  <a href="/">
                    <FaTwitter />
                  </a>
                  <a href="/">
                    <FaLinkedin />
                  </a>
                  <a href="/">
                    <FaFacebook />
                  </a>
                  <a href="/">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <footer>© Taayanam Copyright 2023 All Rights Reserved</footer>
        </div>
      </>
    );
  }
}

export default Footer;
