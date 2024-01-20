import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_49j5nvd",
        "template_wifux6d",
        form.current,
        "Z6eTCcOSDCZT9gFGS"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!"); // Display a success message
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email. Please try again."); // Display an error message
        }
      );
  };

  return (
    <div>
      <div className="ContactStart"></div>
      <div className="contactForm">
        <div className="contact-left">
          <h1 className="sub-title">Contact Us</h1>
        </div>

        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input
              type="number"
              name="user_number"
              placeholder="Your Number"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
