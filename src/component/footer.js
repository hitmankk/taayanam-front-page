import React, { Component } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin,FaFacebook } from "react-icons/fa";

import './footer.css';

class Footer extends Component{
    render(){
  return (
    <>
 <div id="footer">
    <div className="main-footer">
      <div className="logoinfo" >
        <h2>Have a Great Day!</h2>
        <p>By Tayanam</p>
  
        <div className="contact-details">
          <h1>Contact Us</h1>
          <li>
            <div className="fa fa-phone"></div><a href="tel:+917004625488">+91 8383858846 </a></li>
          <li>
            <div className="fa fa-envelope"></div><a href="mailto:yourmail@gmail.com">apoorva@tayanam.com</a></li>
       
      </div>
    </div>
    <div class="com">
      <h1>About</h1>
      <ul >
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="info" >
      <h1>Social Media</h1>
      <div className="sociallogos">
        <div className="logobox">
          <a href="#"><FaTwitter/></a>
          <a href="#"><FaLinkedin/></a>
          <a href="#"><FaFacebook/></a>
          <a href="#"><FaInstagram/></a>
        </div>
      </div>
    </div>
    </div>
  <footer>© Investocal Copyright 2022 All Rights Reserved</footer>
  </div>
</>
  )
}
}

export default Footer;
